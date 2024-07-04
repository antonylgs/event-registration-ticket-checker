import qrcode
from flask import request, jsonify
from io import BytesIO
from app import app, db, mail
from models import Registration
from flask_mail import Message
from flask_cors import cross_origin
import validators


@app.route("/register", methods=["POST"])
@cross_origin()
def register():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    day1 = data.get("day1")
    day2 = data.get("day2")

    # Validate inputs
    if not name or not isinstance(name, str) or len(name) > 100:
        return jsonify({"error": "Invalid name"}), 400

    if not validators.email(email):
        return jsonify({"error": "Invalid email"}), 400

    if not phone or not isinstance(phone, str) or len(phone) > 20:
        return jsonify({"error": "Invalid phone number"}), 400

    if not isinstance(day1, bool) or not isinstance(day2, bool):
        return jsonify({"error": "Invalid day selection"}), 400

    # Check if email or phone already registered
    if Registration.query.filter(
        (Registration.email == email) | (Registration.phone == phone)
    ).first():
        return jsonify({"error": "Email or phone already registered"}), 400

    # Create new registration
    new_registration = Registration(
        name=name, email=email, phone=phone, day1=day1, day2=day2
    )

    db.session.add(new_registration)
    db.session.commit()

    ticket_id = new_registration.ticket_id

    # Generate QR code containing just the ticket ID
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(ticket_id)
    qr.make(fit=True)

    img = qr.make_image(fill="black", back_color="white")

    # Save QR code to a BytesIO object
    buf = BytesIO()
    img.save(buf)
    buf.seek(0)

    # HTML email template
    html = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Ticket</title>
        <style>
            body {{
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
            }}
            .container {{
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }}
            .header {{
                text-align: center;
                padding: 10px 0;
            }}
            .header img {{
                max-width: 100px;
            }}
            .content {{
                text-align: center;
            }}
            .footer {{
                text-align: center;
                font-size: 12px;
                color: #888;
                padding: 10px 0;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png" alt="Logo de New Balance">
                <h1>Votre billet pour le New Balance Festival Heritage</h1>
            </div>
            <div class="content">
                <p>Bonjour {name},</p>
                <p>Merci de vous être inscrit à notre événement. Votre ID de billet est <strong>{ticket_id}</strong>.</p>
                <p>Veuillez présenter ce QR Code à l'entrée de l'événement.</p>
                <img src="cid:qrcode" alt="Code QR">
            </div>
            <div class="footer">
                <p>&copy; 2024 Organisateur de l'événement. Tous droits réservés.</p>
            </div>
        </div>
    </body>
    </html>
    """

    msg = Message(
        "New Balance Festival Heritage",
        sender=app.config["MAIL_DEFAULT_SENDER"],
        recipients=[email],
    )
    msg.html = html
    msg.attach(
        "qrcode.png", "image/png", buf.read(), headers={"Content-ID": "<qrcode>"}
    )
    mail.send(msg)

    return jsonify({"ticket_id": ticket_id}), 201


@app.route("/check", methods=["GET"])
@cross_origin()
def check_ticket():
    ticket_id = request.args.get("id")
    registration = Registration.query.filter_by(ticket_id=ticket_id).first()

    if registration:
        return jsonify(
            {
                "ticket_id": ticket_id,
                "day1": registration.day1,
                "day2": registration.day2,
            }
        )
    else:
        return jsonify({"error": "Invalid ticket ID"}), 400

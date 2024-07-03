FROM python:3.9-slim

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
CMD ["flask", "run", "--host=0.0.0.0", "--port=5001"]
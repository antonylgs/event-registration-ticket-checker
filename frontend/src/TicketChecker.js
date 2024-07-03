// src/TicketChecker.js
import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import QrScanner from "qr-scanner";

function TicketChecker() {
  const videoRef = useRef(null);
  const [scannedData, setScannedData] = useState(null);
  const [status, setStatus] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const qrScanner = new QrScanner(
      videoRef.current,
      async (result) => {
        if (result) {
          setScannedData(result.data);
          try {
            const response = await axios.get(`http://localhost:5001/check`, {
              params: { id: result.data },
            });
            setStatus(response.data);
          } catch (error) {
            setStatus({ error: "Invalid ticket ID" });
          }
        }
      },
      {
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );

    qrScanner.start();

    return () => {
      qrScanner.stop();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="font-garamond text-2xl">
        Festival Heritage Ticket Scanner
      </h1>
      <video
        ref={videoRef}
        className="rounded-lg"
        style={{ width: "50%" }}
      ></video>
      <div className="min-h-[100px]">
        {!status && (
          <p className="font-garamond">Waiting for a ticket to be scanned...</p>
        )}
        {status && (
          <div className="flex flex-col justify-center items-center gap-4 font-garamond">
            <div className="flex gap-2 justify-center items-center">
              <div
                className={`w-4 h-4 rounded-full relative bottom-[1.5px] ${
                  status.error ? "bg-red-500" : "bg-green-500"
                }`}
              ></div>
              {status.error ? <p>Billet invalide</p> : <p>Billet valide</p>}
            </div>

            {!status.error && (
              <div>
                <div className="flex justify-center items-center gap-2">
                  <p>Samedi 10 Juillet: </p>
                  <div
                    className={`w-4 h-4 rounded-full relative bottom-[1.5px] ${
                      status.day1 ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <p>Dimanche 11 Juillet: </p>
                  <div
                    className={`w-4 h-4 rounded-full relative bottom-[1.5px] ${
                      status.day2 ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TicketChecker;

import React from "react";
import { Link, useLocation } from "react-router-dom";

function RegistrationResult() {
  const location = useLocation();
  const { success, formData } = location.state;

  return (
    <div className="flex flex-col gap-8">
      <div className="text-white bg-nb-pic3 min-w-[100vw] relative right-4 mb-4 flex flex-col py-24 px-12 justify-center items-center bg-no-repeat bg-center bg-cover">
        {success && <img src="/nb-valid.svg" />}
        <h1 className="text-xl font-bold">
          {success ? "Inscription réussie" : "Inscription échouée"}
        </h1>
        {success ? (
          <p className="text-center">
            Tu viens de recevoir ton billet par email !
          </p>
        ) : (
          <p className="text-center">
            Une erreur s'est produite, merci de vérifier vos informations.
          </p>
        )}
      </div>
      {success && (
        <div className="flex flex-col gap-4 sm:items-center">
          <p className="font-bold">Récapitulatif de la réservation</p>
          <p>
            <span className="font-bold">Date : </span>
            {formData.day1 && "Samedi 10 Juillet"}
            {formData.day1 && formData.day2 && " et "}
            {formData.day2 && "Dimanche 11 Juillet"}
          </p>
          <p>
            <span className="font-bold">Nom Prénom : </span> {formData.name}
          </p>
          <p>
            <span className="font-bold">E-mail : </span> {formData.email}
          </p>
          <p>
            <span className="font-bold">Numéro de téléphone : </span>
            {formData.phone}
          </p>
        </div>
      )}
      <Link to="/" className="flex justify-end sm:justify-center">
        <button className=" text-white font-bold px-4 py-2 bg-black">
          Retour à l'accueil
        </button>
      </Link>
    </div>
  );
}

export default RegistrationResult;

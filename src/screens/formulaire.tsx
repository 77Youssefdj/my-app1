import React from 'react';
import '../index.css';

const Formulaire: React.FC =  () => {
  return (
    <div className="bg-[#111F44] min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Formulaire de Mise à jour de votre CV</h1>
        <p className="mb-6">Remplissez ce formulaire avec vos informations les plus récentes.</p>
        <form id="cvForm" noValidate className="space-y-6">
          <fieldset className="border border-gray-300 p-4 rounded-md">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Changer votre Email:</label>
              <input id="email" name="email" type="email" className="w-full p-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="new-number" className="block mb-2">Changer votre numéro de téléphone:</label>
              <input id="new-number" name="new-number" type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="profile-picture" className="block mb-2">Importer une nouvelle photo de profil:</label>
              <input id="profile-picture" type="file" name="file" className="w-full p-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block mb-2">Changer votre âge (années):</label>
              <input id="age" type="number" name="age" className="w-full p-2 border rounded-md" />
            </div>
          </fieldset>
          
          <fieldset className="border border-gray-300 p-4 rounded-md">
            <div className="mb-4">
              <label htmlFor="New-certification" className="block mb-2">Ajouter une nouvelle Certification:</label>
              <select id="New-certification" name="New-certification" className="w-full p-2 border rounded-md">
                <option value="">(selectionner une option)</option>
                <option value="1">Coding</option>
                <option value="2">CyberSecurity</option>
                <option value="3">Networking</option>
                <option value="4">Project Management</option>
                <option value="5">Autre</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="desc" className="block mb-2">(Autre) donner une description:</label>
              <textarea id="desc" name="desc" placeholder="Cloud (AWS, Azure)..." className="w-full p-2 border rounded-md"></textarea>
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 p-4 rounded-md">
            <legend className="text-lg font-semibold mb-2">Avez-vous apprécié la plateforme ?</legend>
            <div className="flex items-center mb-2">
              <input id="Yes" type="radio" name="radioBut" className="mr-2" checked />
              <label htmlFor="Yes">Oui</label>
            </div>
            <div className="flex items-center mb-2">
              <input id="No" type="radio" name="radioBut" className="mr-2" />
              <label htmlFor="No">Non</label>
            </div>
            <div className="flex items-center">
              <input id="Maybe" type="radio" name="radioBut" className="mr-2" />
              <label htmlFor="Maybe">Elle peut être améliorée</label>
            </div>
          </fieldset>

          <div className="mb-4">
            <label htmlFor="confirmation" className="flex items-center">
              <input className="mr-2" id="confirmation" type="checkbox" required name="confirmation" />
              Je confirme tous mes changements
            </label>
          </div>

          <input type="submit" value="Submit" className="bg-[#61dafb] text-[#111F44] p-2 rounded-md cursor-pointer" />
        </form>
      </div>
    </div>
  );
}

export default Formulaire;

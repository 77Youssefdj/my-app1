import React, { useState } from 'react';
import '../index.css';

const Formulaire: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    address: '',
    cvTitle: '',
    objectiveDesc: '',
    sectionTitle: '',
    sectionContent: '',
  });

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formIsValid = true;

    const { name, age, email, address, cvTitle, objectiveDesc, sectionTitle, sectionContent } = formData;

    // 1. Name (nom et prénom)
    const nameRegex = /^[A-Z]+ [A-Z][a-z]*$/;
    if (!nameRegex.test(name.trim())) {
      formIsValid = false;
      alert("Nom et prénom doivent être formatés correctement (Nom en majuscule et Prénom commence par majuscule).");
    }

    // 2. Age
    if (isNaN(Number(age)) || Number(age) < 18) {
      formIsValid = false;
      alert("L'âge doit être un chiffre >= 18 ans.");
    }

    // 3. Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|fr)$/;
    if (!emailRegex.test(email.trim())) {
      formIsValid = false;
      alert("L'email doit être au format correct (ex: exemple@domaine.com ou exemple@domaine.fr).");
    }

    // 4. Address
    const addressRegex = /^[A-Za-z0-9\s,'-]*$/;
    if (address.length > 100 || !addressRegex.test(address.trim())) {
      formIsValid = false;
      alert("L'adresse ne doit pas dépasser 100 caractères et ne doit pas contenir de caractères spéciaux.");
    }

    // 5. CV Title
    const titleRegex = /^[A-Za-z\s]*$/;
    if (!titleRegex.test(cvTitle.trim())) {
      formIsValid = false;
      alert("Le titre du CV ne doit pas contenir de chiffres ni de caractères spéciaux (&, @, etc.).");
    }

    

    // 7. Section Title
    if (!titleRegex.test(sectionTitle.trim())) {
      formIsValid = false;
      alert("Le titre des sections ne doit pas contenir de chiffres ni de caractères spéciaux (&, @, etc.).");
    }

    // 8. Section Content
    const contentRegex = /^[A-Za-z\s,]*$/;
    if (!contentRegex.test(sectionContent.trim())) {
      formIsValid = false;
      alert("Le contenu des sections doit être au format de listes.");
    }

    if (formIsValid) {
      alert("Formulaire soumis avec succès !");
      event.currentTarget.submit();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="bg-[#111F44] min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Formulaire de Mise à jour de votre CV</h1>
        <p className="mb-6">Remplissez ce formulaire avec vos informations les plus récentes.</p>
        <form id="cvForm" noValidate className="space-y-6" onSubmit={validateForm}>
          <fieldset className="border border-gray-300 p-4 rounded-md">
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Changer votre Email:</label>
              <input id="email" name="email" type="email" className="w-full p-2 border rounded-md input-black-text" />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block mb-2">Changer votre âge (années):</label>
              <input id="age" type="number" name="age" className="w-full p-2 border rounded-md input-black-text" />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block mb-2">Adresse:</label>
              <input id="address" name="address" type="text" className="w-full p-2 border rounded-md input-black-text" />
            </div>
            <div className="mb-4">
              <label htmlFor="profile-picture" className="block mb-2">Importer une nouvelle photo de profil:</label>
              <input id="profile-picture" type="file" name="file" className="w-full p-2 border rounded-md input-black-text" />
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 p-4 rounded-md">
            
            <div className="mb-4">
              <label htmlFor="New-certification" className="block mb-2">Ajouter une nouvelle Certification:</label>
              <select id="New-certification" name="New-certification" className="w-full p-2 border rounded-md input-black-text">
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
              <textarea id="desc" name="desc" placeholder="Cloud (AWS, Azure)..." className="w-full p-2 border rounded-md input-black-text"></textarea>
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 p-4 rounded-md">
            <legend className="text-lg font-semibold mb-2">Avez-vous apprécié la plateforme ?</legend>
            <div className="flex items-center mb-2">
              <input id="Yes" type="radio" name="radioBut" className="mr-2 input-black-text" checked />
              <label htmlFor="Yes">Oui</label>
            </div>
            <div className="flex items-center mb-2">
              <input id="No" type="radio" name="radioBut" className="mr-2 input-black-text" />
              <label htmlFor="No">Non</label>
            </div>
            <div className="flex items-center">
              <input id="Maybe" type="radio" name="radioBut" className="mr-2 input-black-text" />
              <label htmlFor="Maybe">Elle peut être améliorée</label>
            </div>
          </fieldset>

          <div className="mb-4">
            <label htmlFor="confirmation" className="flex items-center">
              <input className="mr-2 input-black-text" id="confirmation" type="checkbox" required name="confirmation" />
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './media.css';

const MediaAd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    heading01: '',
    heading02: '',
    description01: '',
    businessName: '',
    buttonLabel: '',
    landscapeImage: '',
    portraitImage: '',
    squareImage: '',
    websiteUrl: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
  
    console.log('Form submitted with data:', formData);

   
    setShowModal(true);

    
    setTimeout(() => {
      setShowModal(false);
      navigate('/CreateAd');
    }, 600);
  };
  const handleBack = () => {
    
    navigate(-1);
  };

  return (
    <div>
     
      <form> 
        
        <h1>Create Text & Media</h1>

        <label>
          Heading 01 
          <input type="text" name="heading01" placeholder="Add a heading that would make users" value={formData.heading01} onChange={handleChange} />
        </label>

        <label>
          Heading 02 
          <input type="text" name="heading02" placeholder="Add a heading that would make users" value={formData.heading02} onChange={handleChange} />
        </label>

        <label>
          Description 01 
          <textarea name="description01" placeholder="Add Primary text to help users understand more about your products, services or offers"value={formData.description01} onChange={handleChange}></textarea>
        </label>

        

        <label>
          Landscape Marketing Image (1.9:1) 
          <input type="url" name="landscapeImage" placeholder="Add the URL of the image you want to use for the ad" value={formData.landscapeImage} onChange={handleChange} />
        </label>

        <label>
          Portrait Marketing Image (4:5) 
          <input type="url" name="portraitImage" placeholder="Add the URL of the image you want to use for the ad" value={formData.portraitImage} onChange={handleChange} />
        </label>

        <label>
          Square Marketing Image (1:1) 
          <input type="url" name="squareImage" placeholder="Add the URL of the image you want to use for the ad" value={formData.squareImage} onChange={handleChange} />
        </label>

        <label>
          Video URL
          <input type="url" name="video url" placeholder="Add the URl of the video you want to use for the ad"value={formData.businessName} onChange={handleChange} />
        </label>
        
        <label>
          Business Name
          <input type="text" name="businessName" placeholder="Add your business name" value={formData.businessName} onChange={handleChange} />
        </label>

        <label>
          Button Label 
          <input type="text" name="buttonLabel" placeholder="Select a label that best suits your ad" value={formData.buttonLabel} onChange={handleChange} />
        </label>

        <label>
          Website URL 
          <input type="url" name="websiteUrl" placeholder="Add the URL of the landing page you want to redirect users to" value={formData.websiteUrl} onChange={handleChange} />
        </label>
         <br/>
        {/* Back Button */}
        <button className="back-button" type="button" onClick={handleBack}>
          Back
        </button>

        {/* Submit Button */}
        <button className="submit-button" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
       {/* Modal */}
       {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Submitted</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaAd;
import React, { useState } from "react";
import axios from "axios";
import "./body.css";

const Form = () => {
  // State variables to hold form data
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [description, setDescription] = useState("");

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create the form data object
      const formData = {
        fullName,
        email,
        phoneNo,
        businessType,
        description,
      };

      // Make a POST request to the server using Axios
      const response = await axios.post("/https://wfkxuthnetbevmptyozu.supabase.co", formData);

      console.log("Data inserted successfully:", response.data);
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Phone No:", phoneNo);
      console.log("Business Type:", businessType);
      console.log("Description:", description);

      // Reset form state
      setFullName("");
      setEmail("");
      setPhoneNo("");
      setBusinessType("");
      setDescription("");
    } catch (error) {
      console.error("Error inserting data:", error.message);
    }
  };

  return (
    <div className="container bg-image">
      <div className="container bg-image">
      <div className="label-area">
        <div className="image">
          
          <img className="image-logo" src="LOGO.png" alt="" />
        </div>
        <div className="text-body">
          <h2 className="H2">Contact Us</h2>
          <p className="p">
            Connect with our experts to learn
            <br /> how Brandlytical can help your
            <br /> brand drive meaningful results
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label className="Top-label"> Talk to us</label>
        </div>
        <div>
          <input
            className="input"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Fullname"
            required
          />
        </div>
        <br />
        <div className="email">
          <input
            className="input"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="phone-no">
          <input
            className="input"
            type="tel"
            value={phoneNo}
            placeholder="Phone No"
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="type-of-bus">
          <input
            className="input"
            type="text"
            value={businessType}
            placeholder="Type of Business"
            onChange={(e) => setBusinessType(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <textarea
            className="input textArea"
            value={description}
            placeholder="Describe your Requirements:"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  </div>
  );
};

export default Form;

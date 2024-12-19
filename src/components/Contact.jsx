import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState(""); 
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    contact: "",
    rating: 5,
    image: "null",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      // Handle file input for images
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      // Handle text input
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formDataObj = new FormData(event.target);

    formDataObj.append("access_key", "ef5144dc-54c4-422c-9e51-b5f3840ab8c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted!");

  // Reset formData state to clear form
  // setFormData({
  //   name: "",
  //   title: "",
  //   email: "",
  //   contact: "",
  //   rating: 5,
  //   image: null,
  //   message: "",
  // });

  // event.target.reset(); // Reset  form 

      event.target.reset(); // reset form
    } else {
      console.log("Error", data);
      alert("Error: " + data.message);
      setResult("");
    }
  };

  

  return (
    <div id="Contact" className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden">
      <h1 className="ext-2xl sm:text-4xl font-bolder mb-2 text-center">Contact <span className="underline underline-offset-4 decoration-1-under font-bolder"></span>Us</h1>
      <p className="text-blue-800 max-w-80 text-center mb-12 mx-auto">Together We Can Make Dreams Come True.</p>

      <form className="max-w-2xl mx-auto text-blue-800 pt-8" onSubmit={onSubmit}>
        <div className="flex flex-wrap gap-3">
          <div className="w-full md:w-1/2 text-left">
            Name
            <input
              className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
              name="name"
              type="text"
              onChange={handleChange}
              value={formData.name}
              placeholder="Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            Title
            <input
              className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
              name="title"
              type="text"
              onChange={handleChange}
              value={formData.title}
              placeholder="Title"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md-pl-4">
            Email
            <input
              className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Email"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            Enter Your Contact Number
            <input
              className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
              name="contact"
              type="text"
              onChange={handleChange}
              value={formData.contact}
              placeholder="Contact"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            Please enter a rating 1 - 5
            <input
              className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
              name="rating"
              type="number"
              onChange={handleChange}
              value={formData.rating}
              placeholder="Rating"
              min="1"
              max="5"
            />
          </div>

          <div className="w-full md:w-1/2 text-left">
            Profile Picture
            <input
              className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
              name="image"
              // type="file"
              // onChange={handleChange}
            />
          </div>
        </div>
        <div className="my-6 text-left">
          We Would Love to Hear From You!
          <textarea
            className="border border-blue-300 w-full rounded py-3 px-4 mt-2 h-48 resize-none"
            name="message"
            placeholder="Comments:"
            required
          ></textarea>
        </div>

        <button className="bg-blue-800 text-white rounded py-2 px-12 mb-10">
          {result ? result : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ef5144dc-54c4-422c-9e51-b5f3840ab8c6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        // toast.success("Form Submitted!")
        alert("Form Submitted!")
        event.target.reset();
      } else {
        console.log("Error", data);
        // toast.error("data.message!")
        alert("Error: " + data.message)
        setResult("");
      }
    };

      const [image, setImage] = useState(null);
    
      const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };
    
      const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', image);
    
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
    
          if (!response.ok) {
            throw new Error('Upload failed');
          }
    
          const data = await response.json();
          console.log('Image uploaded:', data);
        } catch (error) {
          console.error('Upload error:', error);
        }
      };
   

  return (

    <div id='Contact' className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'>
        <h1 className='ext-2xl sm:text-4xl font-bolder mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1-under font-bolder'></span>Us</h1>
        <p className='text-blue-800 max-w-80 text-center mb-12 mx-auto'>Together We Can Make Dreams Come True.</p>


        <form className="max-w-2xl mx-auto text-blue-800 pt-8" onSubmit={onSubmit}>
        <div className="flex flex-wrap gap-3">
          <div className="w-full md:w-1/2 text-left">
            Name
            <input
              className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
              name="name"
              type="text"
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
              placeholder="Email"
              required
            />       
          </div>
          <div className="w-full md:w-1/2 text-left">
            Enter Your Contact Number
            <input
              className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
              name="number"
              type="text"
              placeholder="Contact"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            Please enter a rating 1 - 5
            <input
              className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
              name="rating"
              type="number"
              placeholder="Rating"
              min="1"
              max="5"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            Profile Image
           <div>
      <input 
      className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
      name="url"
      type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}></button>
    </div>

    <div className="my-4">
          {/* Keep the upload button to trigger the image upload */}
          <button
            type="button"
            onClick={handleUpload}
            className="bg-blue-800 text-white rounded py-2 px-2 mb-2"
          >
            {result ? result : "Upload Image"}
          </button>
        </div>
          </div>
        </div>
        <div className="my-6 text-left">
          We Would Love to Hear From You
          <textarea
            className="border border-blue-300 w-full rounded py-3 px-4 mt-2 h-48 resize-none"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        

        {/* Submit button */}
        <button className="bg-blue-800 text-white rounded py-2 px-12 mb-10">
          {result ? result : "Submit"}
        </button>
            {/* <button className='bg-blue-800 text-white rounded py-2 px-12 mb-10'>Submit</button> */}
        </form>
        
    </div>
   
  )
}

export default Contact

// name: { type: String, required: true },
  // title: { type: String, required: false },
  // image: { type: String, required: false },
  // email: { type: Sring, required: false }
  // contact: {type: number, required: false}
  // rating: { type: Number, required: false },
  // text: { type: String, required: true },
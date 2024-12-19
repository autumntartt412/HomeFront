import React, { useState } from 'react'


// **************having parsing issues******************


const Contact = () => {
    const [result, setResult] = useState("");
    // const [name, setName] = useState("");
    const [formData, setFormData] = useState({
      // name: "",
      // title: "",
      // email: "",
      // contact: 1234567890,
      // rating: 5,
      // image: "",
      // text: "",
    })

    const handleChange = (event) => {
      console.log(event.target.value);
      setFormData({
        ...formData, 
        [event.target.name]: event.target.value,
        [event.target.title]: event.target.value,
        [event.target.email]: event.target.value,
        [event.target.contact]: event.target.value,
        [event.target.rating]: event.target.value,
        [event.target.image]: event.target.value,
        [event.target.text]: event.target.value,
       
      })
    }

    // const handleChange = (event) => {
    //   const { name, title, email, contact, rating, image, text, value } = event.target;  
    
    //   setFormData({
    //     ...formData,
    //     [name, title, email, contact, rating, image, text]: value,  
    //   });
    // };


    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");
      console.log(formData);
    
      // Create a new FormData object to send to your backend
      const formDataForUpload = new FormData();
    
      // Append the form fields to FormData
      Object.keys(formData).forEach((key) => {
        // Handle case where 'image' is a file 
        if (key === "image" && formData[key]) {
          formDataForUpload.append('image', formData[key]);
        } else {
          formDataForUpload.append(key, formData[key]);
        }
      });
    
      try {
        // Send form data to your own backend (saveComment endpoint)
        const response = await fetch('/saveComment', {
          method: 'POST',
          body: formDataForUpload, // Send form data as FormData
        });
    
        // Check if response is successful before parsing JSON
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const result = await response.json(); // Parse the JSON response
        if (result.success) {
          setResult('Form Submitted!');
          event.target.reset(); // Reset form after success
        } else {
          alert('Error: ' + result.message);
          setResult('');
        }
      } catch (error) {
        console.error('Error sending form data:', error);
        alert('Error: ' + error.message);
        setResult('');
      }
    
      // ********************************8Toast/API web3Forms*******************************************
      try {
        // Prepare FormData for Web3Forms API
        const web3FormData = new FormData();
        Object.keys(formData).forEach((key) => {
          // Handle appending the image as well if present
          if (key === "image" && formData[key]) {
            web3FormData.append('image', formData[key]);
          } else {
            web3FormData.append(key, formData[key]);
          }
        });
    
        // Toast  access key
        web3FormData.append("access_key", "ef5144dc-54c4-422c-9e51-b5f3840ab8c6");
    
     
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: web3FormData,
        });
    
       
        if (!web3Response.ok) {
          throw new Error(`Web3Forms HTTP error! status: ${web3Response.status}`);
        }
    
        // ********************************8Toast/API web3Forms*******************************************

        const web3Data = await web3Response.json();
        if (web3Data.success) {
          setResult("Form Submitted!");
        } else {
          alert("Web3Form Error: " + web3Data.message);
        }
      } catch (error) {
        console.error("Error sending form data to Web3Forms:", error);
        setResult("");
        alert("Error: " + error.message);
      }
    };

// *************************************img upload button*************************************

      
  // const handleUpload = async () => {
  //   if (!formData.image) {
  //     alert('Please choose an image to upload');
  //     return;
  //   }

  //   const formDataForUpload = new FormData();
  //   formDataForUpload.append('image', formData.image);

  //   try {
  //     const response = await fetch('/api/upload', {
  //       method: 'POST',
  //       body: formDataForUpload,
  //     });

  //     if (!response.ok) {
  //       throw new Error('Upload failed');
  //     }

  //     const data = await response.json();
  //     console.log('Image uploaded:', data);
  //   } catch (error) {
  //     console.error('Upload error:', error);
  //   }
  // };
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
              name="number"
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
            Please enter a Profile Picture
            <input
              className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
              name="image"
              type="image"
              onChange={handleChange}
              value={formData.image}
              placeholder="Image"
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

// *******************************************img form button***************************************

//  <div className="w-full md:w-1/2 text-left">
//             Profile Image
//            <div>
//       <input 
//       className="w-full border border-blue-300 rounded py-3 px-4 mt-2"
//       name="url"
//       type="file" onChange={handleImageChange} />
//       <button onClick={handleUpload}></button>
//     </div>

//     <div className="my-4">
//           {/* Keep the upload button to trigger the image upload */}
//          <button
//          type="button"
//           onClick={handleUpload}
//           onChange={handleChange}
//           className="bg-blue-800 text-white rounded py-2 px-2 mb-2"
//         >
//          {result ? result : "Upload Image"}
//       </button>
//       </div>
//        </div> 


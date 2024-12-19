import React, { useState } from 'react';

const ImageUploadFile = () => {

  // ****************************img upload button for contact form***************************
  
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
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUploadFile;

// **********************************cloudinary home uploads******************************** 

  // const homeImgs = [
//   {name: "home2",
//     img: "https://res.cloudinary.com/dmvfnusbi/image/upload/v1734525106/HOMES/home2_ow8zzw.jpg"}, 
//   {name: "home3",
//     img: "https://res.cloudinary.com/dmvfnusbi/image/upload/v1734525111/HOMES/home3_pgjtur.jpg"},
//  {name: "home4",
//     img: "https://res.cloudinary.com/dmvfnusbi/image/upload/v1734525118/HOMES/home5_lghxjt.jpg"},
//  {name: "home5",
//     img: "https://res.cloudinary.com/dmvfnusbi/image/upload/v1734525115/HOMES/home4_uvbg1c.jpg"},
//  {name: "home6",
//     img: "https://res.cloudinary.com/dmvfnusbi/image/upload/v1734525121/HOMES/home6_mncciy.jpg"},
//  {name: "home7",
//     img: "https://res.cloudinary.com/dmvfnusbi/image/upload/v1734525148/HOMES/home7_ajfyw1.jpg"},
//  {name: "home8",
//     img: "https://res.cloudinary.com/dmvfnusbi/image/upload/v1734525131/HOMES/home8_dzgkyd.jpg"},
// ]


// ***************************************MULTER********************************************************

 // import React, { useState } from 'react';

// export const ImageUploadFile = () => {

//   const [selectedFile, setSelectedFile] = useState(null);

//   // File selection handler
//   const fileSelectHandler = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   // File upload handler
//   const fileUploadHandler = async () => {
//     if (!selectedFile) {
//       console.log("No file selected.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('home2', selectedFile, selectedFile.name);

//     try {
//       const response = await fetch('http://your-server-path/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('File uploaded successfully!');
//       } else {
//         console.error('File upload failed.');
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={fileSelectHandler} />
//       <button onClick={fileUploadHandler}>Upload</button>
//     </div>
//   );
// };
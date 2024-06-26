
// import React, { useState } from 'react';
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from '../assets/img/contact-img.svg';

// const Contact = () => {
//   const formInitialDetails = {
//     firstname: '',
//     lastname: '',
//     email: '',
//     phone: '', // Changed from 'Phone' to 'phone'
//     message: ''
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [status, setStatus] = useState({});
//   const [buttonText, setButtonText] = useState('Send');

//   const onFormUpdate = (category, value) => {
//     setFormDetails({ ...formDetails, [category]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     setButtonText("sending...");
//     let response = await fetch("https://localhost:5000/Contact",{
//       method:"Post",
//       header:{ 
//         "Content-Type":"Application/json;charset=utf-8",
//     },
//     body: JSON.stringify(formDetails),
//   });

//     // Your form submission logic goes here
//     // For example, you can send the form data to a backend server using fetch or Axios

//     // After successful submission, update status and button text
//     setButtonText("Sent");
//     let result =response.json();
//     setFormDetails(formInitialDetails)// Reset form after submission
//     if(result)
//     {
//       setStatus({ message: 'Form submitted successfully', success: true });

//     }
//     else{
//       setStatus({message:'something went wrong , please try again later', success : false})
//     }

    
    
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-item-center">
//           <Col md={6}>
//             <img src={contactImg} alt="Contact Us" />
//           </Col>
//           <Col md={6}>
//             <h2>Get In Touch</h2>
//           </Col>
//           <form onSubmit={handleSubmit}>
//             <Row>
//               <Col sm={6} className="px-1">
//                 <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate('firstname', e.target.value)} />
//               </Col>
//               <Col sm={6} className="px-1">
//                 <input type="text" value={formDetails.lastname} placeholder="Last Name" onChange={(e) => onFormUpdate('lastname', e.target.value)} />
//               </Col>
//               <Col sm={6} className="px-1">
//                 <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
//               </Col>
//               <Col sm={6} className="px-1">
//                 <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
//               </Col>
//               <Col>
//                 <textarea
//                   rows={6}
//                   value={formDetails.message}
//                   placeholder="Message"
//                   onChange={(e) => onFormUpdate('message', e.target.value)} />
//                 <button type='submit'>{buttonText}</button>
//               </Col>
//               {status.message && 
//                 <Col>
//                   <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                 </Col>
//               }
//             </Row>
//           </form>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
  const formInitialDetails = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setButtonText("Sending...");

    try {
      let response = await fetch("https://myportfolio-v3n8.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      if (response.ok) {
        setButtonText("Sent");
        //let result = await response.json();
        setFormDetails(formInitialDetails); // Reset form after successful submission
        setStatus({ message: 'Form submitted successfully', success: true });
      } else {
        setButtonText("Send");
        setStatus({ message: 'Something went wrong, please try again later', success: false });
      }
    } catch (error) {
      console.error('Error:', error);
      setButtonText("Send");
      setStatus({ message: 'Something went wrong, please try again later', success: false });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-item-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate('firstname', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.lastname} placeholder="Last Name" onChange={(e) => onFormUpdate('lastname', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate('message', e.target.value)} />
                  <button type='submit'>{buttonText}</button>
                </Col>
              </Row>
              {status.message &&
                <Row>
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                </Row>
              }
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
// Add required functionary and invalid email address 

const FORM_ENDPOINT = ""; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">I'll be in touch soon!</div>
      </>
    );
  }

  return (
    <form className="form"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
        <div>
            <h3>Let's Start a Project</h3>
        </div>
      <div>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div>
        <textarea className="textarea"
          placeholder="Tell me more"
          name="message"
          required
        />
      </div>
      <div>
        <button
          type="submit"
        >
          Send It
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

















// function contactMe () {

    
//     return (


//         <form className='form'>
//         <label for="fname">First Name</label> 
//         <input type="text" id="fname" name="firstname" placeholder="Your first name"></input>
//         <br></br>
//         <label for="lname">Last Name</label> 
//         <input type="text" id="lname" name="lastname" placeholder="Your last name"></input>
//         <br></br>
//         <label for="email">Email</label> 
//         <input type="text" id="email" name="email" placeholder="Your email"></input>
//         <br></br>
//         <label for="message">Message</label>
//         <textarea type="tesxt" id="subject" name="subject" placeholder="Write something.."></textarea>
       
//         </form>
//     )
// }

// export default contactMe;


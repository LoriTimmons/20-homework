import React from 'react';
// Add required functionary and invalid email address 
function contactMe () {
    return (
        <form className='form'>
        <label for="fname">First Name</label> 
        <input type="text" id="fname" name="firstname" placeholder="Your first name"></input>
        <br></br>
        <label for="lname">Last Name</label> 
        <input type="text" id="lname" name="lastname" placeholder="Your last name"></input>
        <br></br>
        <label for="email">Email</label> 
        <input type="text" id="email" name="email" placeholder="Your email"></input>
        <br></br>
        <label for="message">Message</label>
        <textarea type="tesxt" id="subject" name="subject" placeholder="Write something.."></textarea>
       
        </form>
    )
}

export default contactMe;


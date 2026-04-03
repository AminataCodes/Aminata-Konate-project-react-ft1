import { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);
    }
  return (
    <div className="contact"> 
    <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <label >Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="Email" placeholder='you@gmail.com' />
        <br />
        <label >Subject</label> 
        <input onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Enter subject ' /> 
        <br />
        <label >Message</label>
        <textarea onChange={(e) => setMessage(e.target.value)} rows="5" placeholder='Enter message'  />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default Contact;
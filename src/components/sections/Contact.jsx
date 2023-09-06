/* eslint-disable no-unused-vars */
import {useRef}  from 'react'
import '../sections/css/contact.css'
import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_osohm5u', 'template_6ahyqnk', form.current, 'ttECpJEPtYukH05lg')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()

  };
  
  
  




  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

  <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
      
        <h4>Email</h4>
        <h5>sripriyancsri@gmail.com</h5>
        <a href="mailto:sripriyancsri@gmail.com" target="-blank">Send a Message</a>
      </article>
      <article className="contact__option">
      
        <h4>Messanger</h4>
        <h5>sripriyan</h5>
        <a href="http://m.me/csripriyan.sripriyan" target="blank">Send a Message</a>
      </article>
      <article className="contact__option">
    
        <h4>Whatsapp</h4>
        <h5>+91 9042853317</h5>
        <a href="http://api.whatsapp.com/send?phone+9042853317" target="blank">Send a Message</a>
      </article>
    </div>
    {/* END OF CONTACT OPTIONS */}
     <form ref={form} onSubmit={sendEmail}>

    <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Yours Message' required ></textarea>
          <button type='submit' className='btn btn color-primary'>Send Message</button>

    </form>
  </div>
</section>
  )
}

export default Contact

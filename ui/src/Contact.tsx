import {useState} from 'react';
import './App.css'

const Contact = () => {
  const [formSent, setFormSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormSent(true);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='contact-form-area'>
      {!formSent ? 
        <div>
          <h2>Interested in working with me?</h2>
          <p>Send me your ideas!</p>
          <form onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value="8c460fad-8096-477d-b9cc-a8ad8ab13300" />
            <div className='form-row'>
              <div className='form-text-area'>
                <label htmlFor="name">Name</label><br></br>
                <input type="text" name="name" required />
              </div>
              <div className='form-text-area'>
                <label htmlFor="email">Email</label><br></br>
                <input type="email" name="email" required />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-text-area'>
                <label htmlFor="message">Message</label><br></br>
                <textarea name="message" required></textarea>
                <input type="checkbox" name="botcheck" className="hidden" />
              </div>
            </div>
              <div className='form-row'><button type="submit">Send Message</button>
            </div>
          </form>
      </div>
      :
      <h2>Thank you for sending me a message!</h2>}
    </div>
  )
}

export default Contact;

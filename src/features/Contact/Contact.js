import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import SubmitMessage from './SubmitMessage/SubmitMessage';
import './Contact.css';
import { sendMessage } from '../../features/Contact/Form/Contact/contactAPI';

const Contact = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [formData, setFormData] = useState({
      name: String,
      email: String,
      message: String,
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsModalOpen(true);
      sendMessage(formData);
      clear();
   };

   const clear = () => {
      setFormData({
         name: '',
         email: '',
         message: '',
      });
   };
   return (
      <section className='contact'>
         <div id='contact__background'>
            <div className='background__overlay'></div>
         </div>
         <div className='container'>
            <div className='title'>
               <h1>Get in touch</h1>
            </div>
            <form
               onSubmit={handleSubmit}
               method='POST'
               autoComplete='off'
               className='form'
            >
               <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  required
                  onChange={(e) =>
                     setFormData({ ...formData, name: e.target.value })
                  }
               />
               <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                  onChange={(e) =>
                     setFormData({ ...formData, email: e.target.value })
                  }
               />
               <textarea
                  name='message'
                  cols='30'
                  rows='5'
                  placeholder='Message'
                  required
                  onChange={(e) =>
                     setFormData({ ...formData, message: e.target.value })
                  }
               ></textarea>
               <button
                  className='btn btn-primary btn-lg btn-fullWidth'
                  type='submit'
               >
                  Submit
               </button>
               <button
                  className='btn btn-secondary btn-fullWidth'
                  type='reset'
                  onClick={clear}
               >
                  Reset
               </button>
            </form>
         </div>
         <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <SubmitMessage />
         </Modal>
      </section>
   );
};

export default Contact;

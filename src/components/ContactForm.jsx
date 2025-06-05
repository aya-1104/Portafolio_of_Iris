import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nss499u', 'template_oatw9co', form.current, {
        publicKey: 'Xgw_mjNqM7U1u4k0a',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Mensaje enviado correctamente');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error al enviar el mensaje');
        },
      );
  };

return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 text-white w-full lg:w-1/3 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          required
          className="bg-[#1f1c2f] border-0 rounded-md p-4 placeholder:text-gray-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="bg-[#1f1c2f] border-0 rounded-md p-4 placeholder:text-gray-400"
        />
      </div>
      <textarea
        name="message"
        placeholder="How can I help you?"
        required
        className="bg-[#1f1c2f] border-0 rounded-md p-4 placeholder:text-gray-400 min-h-[140px] w-full resize-none"
      />
      <motion.button
        whileTap={{ scale: 0.85 }}
        type="submit"
        className="w-full bg-[#7c2b91] text-white p-4 font-semibold rounded-md"
      >
        Send Message
      </motion.button>
    </form>
  )
};
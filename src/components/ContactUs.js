import React, { useRef, useState } from "react";
import "../Styles/ContactUs.css";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    // Send data to EmailJS with exact variable names matching template
    const emailParams = {
      user_name: formData.get("user_name"),     // maps to {{user_name}} in template
      user_phone: formData.get("user_phone"),   // maps to {{user_phone}}
      user_email: formData.get("user_email"),   // maps to {{user_email}}
      message: formData.get("message"),         // maps to {{message}}
      time: new Date().toLocaleString(),        // maps to {{time}}
    };

    emailjs
      .send(
        "service_t1j2t9l",      // Your EmailJS Service ID
        "template_2ro3y4l",     // Your EmailJS Template ID
        emailParams,
        "uxCZ6WGvKJaBi87p0"     // Your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div className="contact-bg">
      <div className="circles-bg"></div>

      <div className="contact-header">
        <h1 className="contact-main-title">
          WE'LL MAKE A GREAT TEAM.<br />Have a project for us? Get in touch!
        </h1>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-card">
          <div className="card-header">Contact Us</div>
          <div className="card-subtitle">
            Got a project idea or an enquiry for us?
          </div>

          <form ref={form} onSubmit={sendEmail} className="form-fields">
            <input
              className="field"
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
            />
            <input
              className="field"
              type="text"
              name="user_phone"
              placeholder="Your phone number"
              required
            />
            <input
              className="field"
              type="email"
              name="user_email"
              placeholder="Your e-mail"
              required
            />
            <textarea
              className="field"
              name="message"
              placeholder="Tell about your projects"
              required
            ></textarea>
            <button className="send-btn" type="submit">
              SEND A MESSAGE <span className="arrow-right">&#8594;</span>
            </button>
          </form>

          {status && <p className="status-message">{status}</p>}
        </div>

        {/* Address Card */}
        <div className="address-card">
          <div className="card-header">Our Address</div>
          <div className="address-content">
            {/* <p><strong>Tamil Nadu Development Center</strong></p> */}
            <p>1st Floor, Opposite to</p>
            <p>Industry, Rajakkamangalam</p>
            <p>PIN: 629004, Tamil Nadu, India</p>
            <p>Phone: +91 73972 24594</p>
            <p>Email: nimtechnologiez@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="Nim Technologies Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.544024234057!2d77.4082749!3d8.1631162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f10046dc4a8d%3A0xd372272bbc55b!2sNim%20Technologies!5e0!3m2!1sen!2sin!4v1696412345678!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* WhatsApp Floating Icon */}
      {/* <a
        href="https://wa.me/917339494989"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a> */}
    </div>
  );
};

export default ContactUs;

import React from "react";

export default function Contact() {
  return (
    <div className="contact_main">
      <div className="contact_container">
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me anything you have in mind.</p>
        <form action="" method="GET">
          <div className="form-container">
            <div className="form-field">
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="form-field colspan">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourname@email.com"
                required
              />
            </div>
            <div className="form-field colspan">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="8"
                required
              ></textarea>
            </div>
            <div className="checkbox colspan">
              <input type="checkbox" name="consent" id="consent" required />
              <label htmlFor="consent">
                You agree to providing your data to "Omolade" who may contact
                you.
              </label>
            </div>
          </div>
          <button id="btn__submit">Send message</button>
        </form>
      </div>
    </div>
  );
}

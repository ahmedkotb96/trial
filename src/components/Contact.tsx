import './Contact.css'
const Contact = () => {
  return (
    <section id="contact" className="contact-section-new">
      <div className="contact-glass-card">
        <h2 className="contact-title-new">Contact Me</h2>
        <p className="contact-desc-new">
          Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!
        </p>
        <form className="contact-form-new">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input-new"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input-new"
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea-new"
            rows={5}
            required
          ></textarea>
          <button type="submit" className="contact-btn-new">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

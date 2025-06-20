const Hero = () => {
  return (
    <section className="hero" style={{ 
      background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/path-to-your-bg-image.jpg")',
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff'
    }}>
      <div className="container">
        <div className="hero-content fade-up">
          <h1>Hi, I'm <span className="text-primary">Your Name</span></h1>
          <h2>I'm a Frontend Developer</h2>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

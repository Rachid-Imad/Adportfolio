

export default function Section() {

  return (
    <section>

    <div className="iam">
      <div className="hero">
        <div className="hero-info">
          <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
            Hi, I'm Imad Rachid
          </h1>
          <h2 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900">
            Turning Ideas Into Digital Solutions
          </h2>
          <p data-aos="flip-down" data-aos-duration="1000" data-aos-delay="1000">
          Crafting exceptional digital experiences through clean code and innovative solutions.Specializing in modern web technologies and scalable applications
          </p>

            <a 
              href="https://github.com/Rachid-Imad" target="_blank"  rel="noopener noreferrer" className="btn"  data-aos="zoom-in-right" 
              data-aos-duration="1000" data-aos-delay="1100">
              View Projects
              <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#000000;"}}></i>
            </a>
            <a 
              href="https://github.com/Rachid-Imad" target="_blank"  rel="noopener noreferrer" className="btn-outline"  data-aos="zoom-in-right" 
              data-aos-duration="1000" data-aos-delay="1100">
              <i className="fab fa-github"></i>
              View My Work
            </a>

          <div className="Buttons">  
            <ul className="ul-icons"> 
              <li>
                <a href="https://github.com/Rachid-Imad" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
                  <i className="bx bxl-github"></i>
                </a>
              </li>
              <li>
                <a href="#" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1300">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                  <i className="bx bxl-facebook-circle"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
              <div className="hero-img" data-aos="zoom-in-left" data-aos-duration="2500">
                <img src="images/man1.png" alt="person-img" />
              </div>
      </div>

    </div>

    <div className="experience">
        
      <div className="info-sec">
        <div className="info-card" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1600">
          <h1>4+</h1>
          <p>Years of <br /> Experience</p>
        </div>
        <div className="info-card" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1700">
          <h1>7+</h1>
          <p>Technical <br /> Skills</p>
        </div>
        <div className="info-card" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1800">
          <h1>50+</h1>
          <p>Projects <br /> Completed</p>
        </div>
        <div className="info-card" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1900">
          <h1>80+</h1>
          <p>Satisfied <br /> Clients</p>
        </div>
      </div>

    </div>
    </section>
  );
}

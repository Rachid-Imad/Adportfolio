export default function Header() {
  return (
    <nav>
      <h1 data-aos="zoom-in" data-aos-duration="1000">
        <span style={{ color: "#4acfee" }}>Pro</span>Coder09
      </h1>
      <ul>
        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <a className="active" href="#">Home</a>
        </li>
        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <a href="#">About</a>
        </li>
        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <a href="#">Projects</a>
        </li>
        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <a href="#">Skills</a>
        </li>
        <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

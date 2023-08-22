// import headerImage from "./header-bg.jpg"

export default function Navbar() {
  return (
    <div className="bg--img">
      <nav className="navbar">
        <h2>Start Bootstrap</h2>
        <ul className="navbar--li">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SAMPLE POST</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div className="header--title">
        <h1>Clean Blog</h1>
        <span>A Blog Theme by Start Bootstrap</span>
      </div>
    </div>
  )
}
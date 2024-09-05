import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-log'>ankur sharma</div>
      <ul className="nav-menu">
        <li>home</li>
        <li>about</li>
        <li>skill </li>
        <li>services</li>
        <li className='nav-contact'>contact</li>
      </ul>

    </div>
  )
}

export default Navbar

import Wrapper from '../assets//wrappers/Navbar.js'
import {FaAlignLeft, FaUserCircle, FaCaretDown} from 'react-icons/fa'
import {useAppContext} from '../context/appContext.js'
import Logo from './Logo'
import {useState} from 'react'
function Navbar() {
  const [showLogout, setShowLogout] = useState(false)
  const {toggleSidebar, logoutUser, user} = useAppContext()
  return (
    <Wrapper>
        <div className="nav-center">
          <button 
            className="toggle-btn"
            type="button" 
            onClick={toggleSidebar}>
            <FaAlignLeft/>
          </button>
          <div>
            <Logo />
            <h3 className="logo-text">dashboard</h3>
          </div>
          <div className="btn-container">
            <button 
              type="button" 
              className="btn" 
              onClick={()=> setShowLogout(!showLogout)}>
                <FaUserCircle/>
                {user?.name} {/* if the user exist, give me the name */}
                <FaCaretDown/>
              </button>
              <div className={showLogout ? "dropdown show-dropdown": "dropdown"}>
                <button 
                  type ="button"
                  className="dropdown-btn"
                  onClick={logoutUser}>
                  logout
                </button>
              </div>
          </div>
        </div>
    </Wrapper>
  )
}

export default Navbar

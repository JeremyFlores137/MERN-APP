import links from '../utils/links'
import {NavLink} from 'react-router-dom'
function NavLinks({toggleSidebar}) {
  return (
    <div className="nav-links">
              {links.map((link)=>{
                const {text, path, id, icon} = link
                return <NavLink 
                          className={({isActive})=>
                                       isActive ? 'nav-link active' : 'nav-link'}    
                          to={path} 
                          key={id} 
                          onClick={toggleSidebar}
                          end>
                          <span className="icon">{icon}</span>
                          {text}

                        </NavLink>
              })}
            </div>
  )
}

export default NavLinks

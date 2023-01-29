import main from '../assets/images/main.svg'  
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import {Link, Navigate} from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import React from 'react'

const Landing = () => {
    const {user} = useAppContext() 
    return (
    <React.Fragment>
        {user && <Navigate to="/"/>}
        <Wrapper>
            <nav>
            <Logo />
            </nav>
            <div className='container page'>
                <div className="info">
                    <h1>
                        Job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby before they sold out street art green juice, post-ironic lumbersexual jean shorts synth sus. Forage blue bottle retro cliche artisan williamsburg you probably haven't heard of them prism deep v selvage. Kinfolk brunch drinking vinegar literally. Meggings farm-to-table chillwave, sus put a bird on it ennui tacos. Yes plz XOXO humblebrag microdosing forage readymade thundercats tacos sustainable meggings biodiesel blue bottle pabst subway tile. Polaroid pour-over crucifix organic YOLO affogato migas.  
                    </p>
                    <Link to="/register" className="btn btn-hero">
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img"/>
            </div>
        </Wrapper>
    </React.Fragment>
    )
    }

export default Landing

import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'
import Logo1 from './logo.png'

const Logo = () => {
    return (
        <div className='ma4 mt0 '>
            <Tilt className="Tilt br3 shadow-3 b--black " options={{ max: 775, transition: true }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"> <img src={Logo1} alt='Logo' style={{ color: 'green', width: '90%', paddingTop: "5%", paddingLeft: "5%", height: '90%' }} /></div>
            </Tilt>
        </div>
    )
}
export default Logo;
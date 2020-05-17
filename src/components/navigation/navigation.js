import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p
                    onClick={() => onRouteChange('signout')}
                    className='f3 link grow br2 shadow-5 ma3 pointer pa3'>Sign Out
             </p>
            </nav>
        )
    } else {
        return (

            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p
                    onClick={() => onRouteChange('regester')}
                    className='f3 link dim underline pointer pa3'>Register
                    </p>
                <p
                    onClick={() => onRouteChange('signin')}
                    className='f3 link dim underline pointer pa3'>Sign In
                     </p>
            </nav>

        )
    }


}
export default Navigation;
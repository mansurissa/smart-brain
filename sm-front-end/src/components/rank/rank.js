import React from 'react'

const rank = ({ username, entries }) => {
    return (
        <div className=' white '>
            <div className="f2 center">
                Paste a link of a photo that you want to detect face in. and let's the magic happen!
            </div>
            <div className='f3 center'>
                {`Dear, ${username} your current detected faces are:`}
            </div>
            <div className='f1 center pt3' >
                {`# ${entries}`}
            </div>
        </div>
    )
}
export default rank
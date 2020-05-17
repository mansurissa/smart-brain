import React from 'react'

const rank = ({ userName, entries }) => {
    return (
        <div className=' white '>
            <div className='f3 center'>
                {`Dear, ${userName} you have checked ...`}
            </div>
            <div className='f1 center pt3' >
                {`# ${entries}`}
            </div>
        </div>
    )
}
export default rank
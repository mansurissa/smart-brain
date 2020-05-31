import React from 'react'
import './faceBorder.css'

const FaceRecognition = ({ imageUrl, box }) => {

    return (
        <div className='center ma '>
            <div className='absolute mt2 br3 mb4 '>
                <img alt='' id='inputImage' src={imageUrl} width='500px' height='Auto' />
                <div className='bounding' style={{
                    top: box.topRow,
                    right: box.rightCol,
                    left: box.leftCol,
                    bottom: box.bottomRow
                }}>
                </div>
            </div>
            {console.log(box.topRow, box.rightCol, box.leftCol, box.bottomRow)}
        </div>

    )

}
export default FaceRecognition;
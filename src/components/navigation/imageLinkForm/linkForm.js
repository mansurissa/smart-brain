import React from 'react'
import './linkForm.css'
const imageLink = ({ inputChange, onSubmit }) => {
    return (
        <div className='pa2 '>
            <p className='f3 center'>
                {'This App will Detect Face in your Picture. Try It!!'}
            </p>
            <div className='center  '>
                <div className='center bg pa4 shadow-5 br4'>
                    <input
                        type='text'
                        className='f4 w-70 pa2 bn br2 center'
                        onChange={inputChange} />
                    <button className='w-30 grow f4 link ph3 bn br2 pv2 dib white bg-light-purple'
                        onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}
export default imageLink
import React from 'react'
import './Mycard.css'
const Mycard = (props) => {
    return (
        <div className='mycard'>
            <div className="card-container">
                <div className="card-img-container">
                    <img src={props.img} alt="" width={300} />
                </div>
                <div className="card-title-container">
                    <p>{props.title}</p>
                </div>
                <div className="description-container">
                    <p>{props.desc}</p>
                </div>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default Mycard
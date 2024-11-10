import React from 'react'
import pc1Image from './pc1.webp';

const Props = (props) => {
  return (
    <>
          <div className='container' style={{ display: 'flex', padding: '20px', marginTop: '20px' }}>
          <div className="card" style={{ width: '18rem', marginRight: '10px', marginBottom: '20px' }}>
          <img src={props.pc1Image} className="card-img-top" alt="Image" style={{ width: '286px', height: '190px' }} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">{props.btn}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Props

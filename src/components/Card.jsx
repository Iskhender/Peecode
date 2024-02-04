import React from 'react'

const Card = (props) => {
  return (
    <div class="card border-0 position-relative ">
      <div className="d-flex position-absolute class-badge">
        <span className='bg-light rounded p-1'>{props.PropsBadge1}</span>
        <span className='bg-success ms-2 me-2 rounded p-1 '>{props.PropsBadge2}</span>
        {props.PropsBadge3 && (
          <span className='bg-warning rounded p-1'>{props.PropsBadge3 }</span>
        )}
        
      </div>
      <img src={props.PropsImg} class="card-img-top" alt="..." />
      <div className="card-bodies">
        <h5 className={`card-title ${props.ClassPropsTitle}`}>{props.PropsTitle}</h5>
        <p className={`cardtext ${props.ClassPropsText}`}>{props.PropsText}</p>
        <div className="card-time d-flex align-items-center mt-4">
          <img src={props.PropsLogo} alt="" className='me-2' />
          <p className={props.ClassPropsTime}>Pecode Team <span className="ms-3"> 19.03.2023</span></p>
        </div>
      </div>
    </div>
  )
}

export default Card
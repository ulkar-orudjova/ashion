import React from 'react'
import './Pictures.scss'

function Pictures(props) {
  return (
  
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className='instagram_item set-bg'>
                     <img src={props.image} alt="instagram" /> 
                  
                </div>
            </div>
      
  )
}

export default Pictures
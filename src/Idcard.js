import React from 'react'
import'./idcard.css'
function Idcard(props) {
    return (
        <div>
            <div class="wrapper">
  <div class="card-id">
    <img src={props.img}alt="Student_id"/>
    <div class="info">
      <p>{props.name}</p>
    </div>
  </div>
</div>
        </div>
    )
}

export default Idcard

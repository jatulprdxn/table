import React, { useState } from 'react'
import { connect } from 'react-redux'; 
import { setText } from '../../store/action'
import './style.scss'
function SearchBox(props) {
const [text,setText] = useState('');

function change(e) {                  // update text in input field
  props.inputChange(e.target.value);
  setText(e.target.value);
}

  return (
   <header>
     <h1>UserDetails</h1>
     <form>
        <div className="form">
          <input type="text" value={ text } placeholder="Search" onChange={(e) => change(e) } />
          <button>search</button>
        </div>
     </form>
   </header>
  )
}

const mapDisptachToProps  = (dispatch) => {
  return {
    inputChange:(input) => dispatch(setText(input))
  }
}

export default connect(null,mapDisptachToProps)(SearchBox)

import {useState} from 'react';
import Calendar from 'react-calendar';
import './App.css';
import Times from './Times.js'

import React from 'react'

function Time(props) {
 
 return (
 <div>
  {props.appointment ? <Times date={props.date}/> : null}
 </div>
  )
}

export default Time;
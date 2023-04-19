import React from 'react'
import { Tilt } from 'react-tilt'
import './logo.css'
import ai from './ai.png'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            55,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          2,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Logo = () => {
  return (
    <div className ='ma4 mt0'>
        <Tilt className='Tilt br3 shadow-2' options={defaultOptions} style={{ height: 80, width: 80 }}>
            <div className='pa2'>
                <img alt='logo'src={ai}/>
            </div>
        </Tilt>
    </div>
  )
}

export default Logo
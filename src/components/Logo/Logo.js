import React from 'react'
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.5,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Logo = () => {
  return (
    <div className ='ma4 mt0'>
        <Tilt className='br2 shadow-2' options={defaultOptions} style={{ height: 25, width: 25 }}>
            <div>👽</div>
        </Tilt>
    </div>
  )
}

export default Logo
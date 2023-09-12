import React from 'react'

import ins from '../social/inst.png';
import link from '../social/lin.png';
import fac from '../social/pngwing.com (4).png';
import ut from '../social/utb.png';
import tw from '../social/twi.png';
import Twentytwo from './Twentytwo';






const Twentyone = () => {
  return (
    <div>
        <div className='footersocial'>
            <div className='boxofsocio'>

          

             <a href="https://www.instagram.com/fairyland_band_official/?hl=en"><img className='socio' src={ins} alt="" /></a>
            <a href="https://www.youtube.com/channel/UCOOoeFFt641fiLUghzE9CHg"><img className='socio' src={ut} alt="" /></a>
            <a href="https://www.facebook.com/fairyland/"><img className='item' src={fac} alt="" /></a>
            <a href="https://www.linkedin.com/company/children's-fairyland/"><img className='socio' src={link} alt="" /></a>
            <a href="https://twitter.com/fairyland_en?lang=en"><img className='socio' src={tw} alt="" /> </a>
           
            </div>

        </div>
        <Twentytwo/>
    </div>
  )
}

export default Twentyone
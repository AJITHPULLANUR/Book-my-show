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

          

             <a href="https://www.instagram.com/bookmyshowin/?hl=en"><img className='socio' src={ins} alt="" /></a>
            <a href="https://www.youtube.com/user/bookmyshow"><img className='socio' src={ut} alt="" /></a>
            <a href="https://www.facebook.com/BookMyShowIN/"><img className='item' src={fac} alt="" /></a>
            <a href="https://www.linkedin.com/company/bookmyshow/?originalSubdomain=in"><img className='socio' src={link} alt="" /></a>
            <a href="https://twitter.com/bookmyshow?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img className='socio' src={tw} alt="" /> </a>
           
            </div>

        </div>
        <Twentytwo/>
    </div>
  )
}

export default Twentyone
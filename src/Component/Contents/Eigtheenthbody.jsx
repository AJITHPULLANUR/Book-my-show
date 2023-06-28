import React from 'react'
import customer from '../Logo/customer-care.svg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Nineteethbody from './Nineteethbody';


const Eigtheenthbody = () => {
  return (
    <div>
        <div className='customer'>
            <div className='lastdiv'>

           <img width="120px " height="50px" src={customer} alt="" />
           <p className='ptag'>24/7 Customer Care </p>
            </div>

            <div className='lastdiv'>
            <ConfirmationNumberIcon id='email'/>

<p className='ptag'>Resend Booking Confirmation</p>
            </div>


            <div className='lastdiv'>
            <AttachEmailIcon id='email' />
                <p className='ptag'>Subscribe to the News Letter</p>
            </div>
        </div>
        <Nineteethbody/>
    </div>
  )
}

export default Eigtheenthbody
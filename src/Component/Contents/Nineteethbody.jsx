import React from 'react'
import Twelthbody from './Twelthbody'
import Twentythbody from './Twentythbody'

const Nineteethbody = () => {
const foot = [
    {

        heading : "Movies Now in Manjeri",
        movie : "Por Thozhil | Spider Man"
},

{

    heading : "Movies Now in Banglore",
    movie : "2018 | Spider Man | Por Thozhil  |  Romancham"
},

{

    heading : "Upcoming Movies",
    movie : "Bilal | Empuran  | ARM  | Minnal Murali 2  |  Iron Man 4"
},

{

    heading : "Latest Movies",
    movie : "Dhoomam | Dhoom  | I  | KGF |  KGF 2"
},

{

    heading : "Old Movies",
    movie : "BIG B | Naran  | Fly  | Avengers  |  Thor"
},

{

    heading : "Thriller Movies",
    movie : "Ratchasan | Por Thozhil  | Crime  | Yuvathurki  |  Home Alone"
},

{

    heading : "Comedy Movies",
    movie : "CID MOOSA | Pandippada  | Kuberan  | Vettam  |  Parakkum Thalika"
},
]

  return (
    <div>

        <div className='footerfull'>
            {/* <div className='footersub'>
                <span className='foothead'>Movies Now In Manjeri</span>
                <span className='footmovie'>Por Thozhil  |  Spider Man</span>
            </div> */}

            {foot.map((footitem)=>
            
            <div className='footersub'>
                <span className='foothead'>{footitem.heading}</span>
                <span className='footmovie'>{footitem.movie}</span>

            </div>
            )}


        </div>
        <Twentythbody/>
    </div>
  )
}

export default Nineteethbody
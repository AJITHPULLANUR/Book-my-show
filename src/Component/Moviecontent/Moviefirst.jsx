import React from 'react'
import { movielist } from './Moviedata'
import Twelthbody from '../Contents/Twelthbody'


const Moviefirst = () => {
  return (
    <div className='movielists'>
       <h4 className='manjeri'>Movies In Manjeri</h4>

       <div className='moviesonmj'>

        {movielist.map((movieitem)=>

        <div className='fullmovie'>
            <img className='movieimage' src={movieitem.image} alt="" />
            <div>
                <h5 className='movieboxtag'>{movieitem.imagename}</h5>
                <span className='moviegenre'>{movieitem.Genre}</span><br />
                <img className='movielike' src={movieitem.like} alt="" />
                <span className='moviecount'>{movieitem.count}</span>

            </div>
            
        </div>
        )}




        





       </div>


<Twelthbody/>
    </div>
  )
}

export default Moviefirst
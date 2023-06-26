import React from 'react'
import Secondbody from './Secondbody'

const Firstbody = () => {
  return (
    <div className='firstbody'>
               <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div className='carousel-inner'  class="carousel-inner">
    <div class="carousel-item active">
      <img className='imgtag' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1680083241797_rewardsweb.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className='imgtag' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1687102676944_sunburnweb.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className='imgtag' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Secondbody/>
    </div>
    
  )
}

export default Firstbody
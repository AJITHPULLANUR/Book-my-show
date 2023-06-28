import React from 'react'
import Fourteenthbody from './Fourteenthbody'

const Thirteenthbody = () => {

    const laugh = [
        {
            l_image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361456-whpfdltubd-portrait.jpg",
            l_head :"Moto GP 2023",
            Watch :"Live"
    },

    {
        l_image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyNyBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311494-qmfyvyaefq-portrait.jpg",
        l_head :"Online Game Lost Treasure",
        Watch :"Live"
},
{
    l_image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyNyBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-wyrhslrdpz-portrait.jpg",
    l_head :"Online Game Fligh 9032",
    Watch :"Watch on Zoom"
},
{
    l_image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336076-mlyrblabfu-portrait.jpg",
    l_head :"Family Housie",
    Watch :"Live"
},
{
    l_image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339877-uygyrtckvl-portrait.jpg",
    l_head :"Samurai Sudoku",
    Watch :"Watch on Zoom"
},
]




const laugh2 =[
    
    {
        l_image1 :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348054-kguvwzufka-portrait.jpg",
        l_head1:"All India Quick Quiz",
        watch1 :"Watch on Zoom"

},

{
    l_image1 :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354872-lduwaxangr-portrait.jpg",
    l_head1:"Family Housie Night",
    watch1 :"Watch on Zoom"

},

{
    l_image1 :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354868-ejdhwlppta-portrait.jpg",
    l_head1:"All India Blitz Chess",
    watch1 :"Watch on Zoom"

},

{
    l_image1 :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00340999-hzewlffagd-portrait.jpg",
    l_head1:"Ludo Tournament",
    watch1 :"Watch on Zoom"

},

{
    l_image1 :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA5IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337798-nkbcltfhgz-portrait.jpg",
    l_head1:"Monthly Sudoku Challenge",
    watch1 :"Live"

},
]






  return (
    <div>

<div className='carousal' id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div id='carousalmain' class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <div  class="d-block" id='secondboot' >
        <div className='laughfull'>
        {laugh.map((laughitems)=>(
            <div className='laughdiv'>
                <img className='laughimage' src={laughitems.l_image} alt="" />


                <div className='laugh2div'>
                    <h6>{laughitems.l_head}</h6>

                    <div className='laugh3div'>
                        <p>{laughitems.Watch}</p>


                    </div>

                </div>

            </div>
        ))}
        
        </div>
        











        
        
    </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <div  class="d-block" >
      <div className='laughfull'>
        {laugh2.map((laughitems1)=>(
            <div className='laughdiv'>
                <img className='laughimage' src={laughitems1.l_image1} alt="" />


                <div className='laugh2div'>
                    <h6>{laughitems1.l_head1}</h6>

                    <div className='laugh3div'>
                        <p>{laughitems1.watch1}</p>


                    </div>

                </div>

            </div>
        ))}
        
        </div>

        
        
         </div>
    </div>
    
  </div>
  <button  class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button  class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span  class="carousel-control-next-icon" aria-hidden="true"></span>
    <span  class="visually-hidden">Next</span>
  </button>
</div>

        
       <Fourteenthbody/>   
    </div>
  )
}

export default Thirteenthbody
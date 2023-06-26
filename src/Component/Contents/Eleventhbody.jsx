import React from "react";

const Eleventhbody = () => {
  const stream = [
    {
      picture:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00131211-edwmrltndu-portrait.jpg",
    
      head: "Art & Craft Online Workshop",
      zoom: "Watch on Zoom.",
    },

    {
      picture:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307978-zghvczcrde-portrait.jpg",
    
      head: "Smart Phone Photography",
      zoom: "Watch on Zoom.",
    },

    {
      picture:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAzIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362718-mhlhrkgleh-portrait.jpg",
      
      head: "Guru Purnima",
      zoom: "Watch on Zoom.",
    },

    {
      picture:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357347-hrhmmpsafb-portrait.jpg",
      
      head: "Kids Sudoku Championship",
      zoom: "Watch on Zoom.",
    },

    {
      picture:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNiBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00318753-vkdeqfnpsm-portrait.jpg",
     
      head: "Online Prasad  Hanuman Garhi",
      zoom: "Online.",
    },
  ];
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="50000">
            <div class="d-block" id="dblock">

            <div className="streamfull">
                {stream.map((streams)=>(


                       
                            <div className="streamfullbox">

                           
                            <img className="imgstream" src={streams.picture} alt="" />
                            <h6>{streams.date}</h6>

                            <div className="streambox">
                                <h6>{streams.head}</h6>
                                




                                <div className="streamtext">
                                    <p>{streams.zoom}</p>

                                </div>


                            </div>
                            </div>



                       

                ))}
 </div>





            </div>
          </div>
          <div class="carousel-item" data-bs-interval="50000">
            <div class="d-block"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Eleventhbody;

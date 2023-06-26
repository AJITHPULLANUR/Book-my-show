import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Tenthbody from './Tenthbody';

const Ninethbody = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 6,
      };

      const premier = [
        { premiers : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00352714-zrzrpauvzv-portrait.jpg",
            love : "Love Again",
            language : "English"

      },
      { premiers : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358589-aesendsvak-portrait.jpg",
      love : "Asterix & Obelix - The Middle Kingdom",
      language : "English"

    },
    { premiers : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00359055-qhruzspcbs-portrait.jpg",
    love : "Endeavour Series 8",
    language : "English"

  },
  { premiers : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg",
  love : "I See You",
  language : "English"

},
{ premiers : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00361962-qwxxzqxqvx-portrait.jpg",
love : "Decision To Leave",
language : "Korean"

},
{ premiers : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00361950-pusdfwkfsz-portrait.jpg",
love : "Piggy",
language : "Spanish"

},
{ premiers : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00355713-jgqnjqegbv-portrait.jpg",
love : "The Lost King",
language : "English"

},

{ premiers : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00361529-wagpqefjhy-portrait.jpg",
love : "Over Water Season 2",
language : "Dutch"

},
{ premiers : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356925-jplrtqhszb-portrait.jpg",
love : "The Inspection",
language : "English"

},

    ]
  return (
    <div className='ninebody'>

    
        <Slider className='slide2' {...settings}>
        
            {premier.map((movie)=>(
                <div className='ninethbody'>

                <div className='nine1'>
                    <img className='imgnine' src={movie.premiers} alt="" />

                    <div className='nine2'>

                    <h5>{movie.love}</h5>
                    <h6>{movie.language}</h6>
                    </div>

                </div>

                </div>
            ))}







        
    
    </Slider>
                <Tenthbody/>
    </div>
  )
}

export default Ninethbody
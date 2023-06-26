import React from "react";
import Fourthbody from "./Fourthbody";

// import { FaThumbsUp } from "react-icons/fa";
// import { FaStar } from 'react-icons/fa';



const Thirdbody = () => {
  const adress = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BY2U5ZjQ2MGMtNDI5ZS00NzJjLTg5YTAtMTVhYWQ4MGE4NmQxXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_.jpg",
      img1:"https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-like-icon-png-image_889454.jpg",
      rating: "15K Likes",
    },
    {
      img: "https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-01.jpeg?fit=1638%2C2048&quality=80&strip=info&ssl=1",
      img1:"https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-like-icon-png-image_889454.jpg",
      rating: "1M Likes",
    },
    {
      img: "https://files.prokerala.com/news/photos/imgs/800/dhoomam-first-look-poster-1600879.jpg",
      img1:"https://www.svgrepo.com/show/303297/facebook-love-logo.svg",
      rating: "150K Likes",
    },
    {
      img: "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
      img1:"https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-like-icon-png-image_889454.jpg",
      rating: "102K Likes",
    },
  ];
  return (
    <div>
      <div className="thirdbody_1">
        <div className="reviewthirdbody_sub2">
          {adress.map((item) => (
            <div className="ajithi">
              
                <img className="imagepart" src={item.img} alt="" />
              

              <div className="niyas">
                <img className="like" src={item.img1} alt="" />
                
                
                
              
              
                <h6 className="thumb">{item.rating}</h6>
                </div>
              
            </div>
          ))}
        </div>
      </div>
      <Fourthbody/>
    </div>
  );
};

export default Thirdbody;

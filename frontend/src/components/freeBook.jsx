import React from 'react'
import Data from '../../public/data.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { Link } from 'react-router-dom';

const FreeBook = () => {
    const filterData = Data.filter((data) => data.category === 'Free');
    //console.log(filterData);
    var settings = { 
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div>
          <h1 className='font-bold text-xl pb-2'><span className="text-yellow-400"> New In Town ! </span> </h1>
          <p>
              CheckOut Our Latest Free Collection 
          </p>
      </div>
    <div>
        <Slider {...settings}>

          {filterData.map((item) => (
            <Cards item={item} key={item.id}/>
          ))}
      </Slider>
    </div>
    
    </div>
    </>
  )
}

export default FreeBook

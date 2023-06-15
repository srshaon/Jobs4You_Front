import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
// import LogoWallex from '../../assets/Images/logo-wallex.png';

const TopCompanies = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch('https://jobs4you.onrender.com/top')
      .then(res => res.json())
      .then(data => setCompanies(data));
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 2000,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }

    ]
  };
  return (
    <div>
      <div style={{ marginBottom: '100px' }}>
        <div style={{}} className="shadow-lg py-3 rounded">
          {
            companies[0]?._id &&
            <Slider {...settings}>
              {
                companies.map(company => {
                  return <div key={company._id}>
                    <div className="d-flex justify-content-center">
                      <img style={{ maxWidth: '100px' }} src={company.logo} alt="" />
                    </div>
                  </div>
                })
              }
            </Slider>
          }
        </div>
      </div>
    </div>
  )
}

export default TopCompanies;
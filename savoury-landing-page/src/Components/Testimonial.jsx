import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import customer1 from "../Images/chef1.jpg";
import customer2 from "../Images/chef2.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      photo: customer1,
      name: "John Doe",
      review:
        "This is the best wrist watch I have ever purchased. The quality is exceptional and it looks great!",
      rating: 5,
    },
    {
      photo: customer2,
      name: "Jane Smith",
      review:
        "I love the design and the comfort of this watch. Highly recommend it to anyone looking for a stylish timepiece.",
      rating: 4,
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 2000,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="testimonial-container">
      <h1>Testimonial</h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="testimonials-wrapper">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="customer-photo">
                    <img src={testimonial.photo} alt={testimonial.name} />
                  </div>
                  <div className="customer-name">{testimonial.name}</div>
                  <div className="customer-review">"{testimonial.review}"</div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar className="star" key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="testimonials-wrapper">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="customer-photo">
                    <img src={testimonial.photo} alt={testimonial.name} />
                  </div>
                  <div className="customer-name">{testimonial.name}</div>
                  <div className="customer-review">"{testimonial.review}"</div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar className="star" key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="testimonials-wrapper">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="customer-photo">
                    <img src={testimonial.photo} alt={testimonial.name} />
                  </div>
                  <div className="customer-name">{testimonial.name}</div>
                  <div className="customer-review">"{testimonial.review}"</div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar className="star" key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

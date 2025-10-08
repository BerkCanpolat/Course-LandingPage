import { Swiper, SwiperSlide } from "swiper/react";
import "./courseSlider.css";
import bundlesData from "../../utils/slider";
import { sliderSettings } from "../../utils/common";
import "swiper/css";

const CourseSlider = () => {
  return (
    <section className="slider">
      <h1 className="slider-header">Exclusive Bundles</h1>
      <p className="slider-sub">
        Onlearing is one powerful online software suite that combines all the
        tools <br />
        needed to run a successful school or office.
      </p>

      <Swiper {...sliderSettings}>
        {bundlesData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="slider-card container">
              <div className="slider-card__left">
                <div className="slider-card__img">
                <img
                  src={card.image}
                  alt={card.title}
                />
                <div className="slider-card__price">
                  <span className="new-price">$ {card.newPrice}</span>
                  <span className="old-price">$ {card.oldPrice}</span>
                </div>
                </div>
              </div>

              <div className="slider-card__right">
                <small className="slider-card__date">{card.date}</small>
                <h3 className="slider-card__title">{card.title}</h3>
                <p className="slider-card__desc">{card.description}</p>
                <div className="slider-card__students">
                    {
                        card.studentAvatars.map((avatar,i) => (
                            <img key={i} src={avatar} alt="img" />

                        ))
                    }
                  <span>+ {card.students} students</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CourseSlider;

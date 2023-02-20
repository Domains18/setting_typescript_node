import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id: 1,
        title: "Title 1",
        description: "Description 1",
    },
    {
        id: 2,
        title: "Title 2",
        description: "Description 2",
    },
    {
        id: 3,
        title: "Title 3",
        description: "Description 3",
    },
];


const Myswiper = () => {
  return (
      <section className="swiper">
          <Swiper
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{
                  clickable: true,
              }}
          >
              {
                  data.map(({ id, title, description }) => {
                        return (
                            <SwiperSlide key={id}>
                                <div className="swiper__item">
                                    <h2 className="swiper__title">{title}</h2>
                                    <p className="swiper__description">{description}</p>
                                </div>
                            </SwiperSlide>
                        )
                  })
            }
        </Swiper>
    </section>
  )
}

export default Myswiper

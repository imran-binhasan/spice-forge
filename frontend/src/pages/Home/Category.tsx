import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css"
import "swiper/css/pagination"
import slide1 from '../../assets/category/slide1.jpg'
import slide2 from '../../assets/category/slide2.jpg'
import slide3 from '../../assets/category/slide3.jpg'
import slide4 from '../../assets/category/slide4.jpg'
import slide5 from '../../assets/category/slide5.jpg'
import SectionTitle from '../../components/SectionTitle';
const Category: React.FC = () => {
  return (
    <div className='my-10'>
        <SectionTitle title='ORDER ONLINE' subTitle ='FROM 11:00AM TO 10:00PM'/>
      <Swiper
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={{
        768: {slidesPerView: 3, spaceBetween:14},
        1024: {slidesPerView: 4, spaceBetween:20}
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]} // Add Pagination module to modules prop
      className=" mx-auto border mb-2"
    >
      <SwiperSlide>
        <img src={slide1} className='w-full object-cover'/>
        <h3 className='-mt-12 text-center text-white'>SALAD</h3>
      </SwiperSlide>
      <SwiperSlide>
           <img src={slide2}  className='w-full object-cover'/>
           <h3 className='-mt-12 text-center text-white'>PIZZAS</h3>
      </SwiperSlide>
      <SwiperSlide>
           <img src={slide3}  className='w-full object-cover'/>
           <h3 className='-mt-12 text-center text-white'>SOUPS</h3>
      </SwiperSlide>
      <SwiperSlide>
           <img src={slide4}  className='w-full object-cover'/>
           <h3 className='-mt-12 text-center text-white'>DESSERTS</h3>
      </SwiperSlide>
      <SwiperSlide>
           <img src={slide5}  className='w-full object-cover'/>
           <h3 className='-mt-12 text-center text-white'>SALAD</h3>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Category;

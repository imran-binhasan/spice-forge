import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../components/SectionTitle';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect, useState } from 'react';


const Reviews = () => {
    const [reviews,setReviews] =useState([]);
    
    useEffect(()=>{
        axios.get('/reviews.json')
            .then(res => setReviews(res.data))
    },[])
    console.log(reviews)
    return (
        <div>
            <SectionTitle subTitle='WHAT OUR CLIENT SAYS' title='TESTIMONIALS' />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews?.map(review =>
                <SwiperSlide key={review._id}>
                    
                    <div className='text-center lg:m-28 md:m-24 m-10'>
                    <Rating className='mx-auto w-32' value={review.rating}/>
                        <FaQuoteLeft className='mx-auto mt-8 mb-6 text-6xl'/>
                        
                        <p className='w-4/5 mx-auto my-1'>{review.details}</p>
                        <h4 className='text-2xl text-yellow-500 uppercase mt-2'>{review.name}</h4>
                    </div>
                </SwiperSlide>
                )}

            </Swiper>
        </div>
    );
};

export default Reviews;
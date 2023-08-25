import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Categori = () => {
   return (
      <section>
         <SectionTitle
            heading={'ORDER ONLINE'}
            subHeading={'From 11:00am to 10:00pm'}></SectionTitle>
         <Swiper
            slidesPerView={4}
            spaceBetween={40}
            centeredSlides={false}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper mb-32 '>
            <SwiperSlide>
               <img className='rounded' src={slide1} alt='' />
               <h3 className='text-3xl uppercase text-center -mt-12 text-gray text-bold'>
                  salads
               </h3>
            </SwiperSlide>
            <SwiperSlide>
               <img className='rounded' src={slide2} alt='' />
               <h3 className='text-3xl uppercase text-center -mt-12 text-gray text-bold'>
                  pizza
               </h3>
            </SwiperSlide>
            <SwiperSlide>
               <img className='rounded' src={slide3} alt='' />
               <h3 className='text-3xl uppercase text-center -mt-12 text-gray text-bold'>
                  soupe
               </h3>
            </SwiperSlide>
            <SwiperSlide>
               <img className='rounded' src={slide4} alt='' />
               <h3 className='text-3xl uppercase text-center -mt-12 text-gray text-bold'>
                  pizza
               </h3>
            </SwiperSlide>
            <SwiperSlide>
               <img className='rounded' src={slide5} alt='' />
               <h3 className='text-3xl uppercase text-center -mt-12 text-gray text-bold'>
                  salads
               </h3>
            </SwiperSlide>
            <SwiperSlide>
               <img className='rounded' src={slide3} alt='' />
               <h3 className='text-3xl uppercase text-center -mt-12 text-gray text-bold'>
                  pizza
               </h3>
            </SwiperSlide>
            <SwiperSlide>
               <img className='rounded' src={slide3} alt='' />
               <h3 className='text-3xl uppercase text-center -mt-12 text-gray text-bold'>
                  pizza
               </h3>
            </SwiperSlide>
            <SwiperSlide>
               <img className='rounded' src={slide5} alt='' />
               <h3 className='text-3xl uppercase text-center -mt-12 text-gray text-bold'>
                  pizza
               </h3>
            </SwiperSlide>
            <SwiperSlide>
               <img className='rounded' src={slide3} alt='' />
               <h3 className='text-3xl uppercase text-center -mt-12 text-gray text-bold'>
                  pizza
               </h3>
            </SwiperSlide>
         </Swiper>
      </section>
   );
};

export default Categori;

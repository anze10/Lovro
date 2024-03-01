"use client"
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "~/../public/test_slika_0.jpg"
import img2 from "~/../public/test_slika_1.jpg"
import img3 from "~/../public/test_slika_2.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/material';

export default () => {
    return (
        <Box>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Image className="w-full h-auto" src={img2} alt="antena" /></SwiperSlide>
                <SwiperSlide><Image className="w-full h-auto" src={img2} alt="antena2" /></SwiperSlide>
                <SwiperSlide><Image className="w-full h-auto" src={img3} alt="antena2" /></SwiperSlide>
            </Swiper>
        </Box>
    );
};

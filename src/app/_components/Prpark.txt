"use client"
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'src/app/_components/Swiper.css'
import { Box } from '@mui/material';
import { get } from 'http';
import { getProducts } from 'src/server/data_layer/actions';
import { useQueries, useQuery } from '@tanstack/react-query';

export default function App() {


  const [slides, setSlides] = useState(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
  );

  const products = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts()
  })
  if (products.isLoading) return <div>Loading...</div>
  if (products.isError) return <div>Error...</div>


  return (
    <>
      <Box sx={{ border: "solid", width: "auto", height: "auto", borderRadius: "20px" }}>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          //onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          virtual
        >
          {products.data && products.data.map((slideContent, index) => (
            <SwiperSlide key={slideContent.ProductID} virtualIndex={index}>
              {slideContent.Name}
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>


    </>
  );
}






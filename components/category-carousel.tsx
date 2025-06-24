"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CategoryHeroCard from './category-hero-card';

interface CategoryCarouselProps {
  categories: any[];
  onCardClick: (path: string) => void;
}

export default function CategoryCarousel({ categories, onCardClick }: CategoryCarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-screen"
      style={{ maxHeight: '100vh' }}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.title}>
          <CategoryHeroCard
            title={category.title}
            image={category.image}
            onClick={() => category.path && onCardClick(category.path)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 
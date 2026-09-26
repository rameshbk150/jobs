"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/DataSite";

export default function HeroSection() {
  const { heroSlides } = siteData;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!heroSlides?.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides]);

  if (!heroSlides?.length) return null;

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl text-white">
                <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
                  {slide.title}
                </h1>

                <p className="mb-8 text-lg text-gray-200 md:text-xl">
                  {slide.subtitle}
                </p>

                <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
                  Explore Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
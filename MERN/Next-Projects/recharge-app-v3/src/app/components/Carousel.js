"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = () => {
  const slides = [
    { id: 1, src: "https://imagedelivery.net/pyX3WeyB0txAwUsxwjq_eg/west-bengal/w1280", alt: "Slide 1" },
    { id: 2, src: "https://images.ixigo.com/node_image/f_auto,w_500/imageURL?url=https%3A%2F%2Fta.ixigo.es%2Fgoogle-photo%2FAUc7tXVszC5VEzQkLqx8lIQfWknR1ku1zgMOmpH6pVf8uC1IJO5WldOmV9drAf0HYFtMAWRHEAO78jwLCGcsts0klqfxlhNNLWRVsr3yGzf7nfqZLxxiDWIkcypK0JgbAVM3Kr3JjVchDN_D-KFkbtam94QMnUs2Ekao5zGGLCH_i6rmDiqq", alt: "Slide 2" },
    { id: 3, src: "https://images.ixigo.com/node_image/f_auto,w_500/imageURL?url=https%3A%2F%2Fta.ixigo.es%2Fgoogle-photo%2FATplDJZ4rxVOL9a2LqMGQX-_RL7ZSDTcgS0tMo9NoDauP1olw60LJkcHsl0UNHYb3KProDscJFli163bFbMIM55zX5iEMgq1FEFoA1nYsP3a0C0kbm5MOtiZrr73w_SRgl5B6GSlWglnvBysMWR5Kca9N__RXYeg6GsxuHp-g83jLZvWc-D_", alt: "Slide 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden rounded-md w-full h-full max-w-lg mx-auto">
      {/* Carousel Items */}
      <div
        className="flex transition-transform  duration-500 ease-in-out h-56"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full flex-1">
            <Image src={slide.src} alt={slide.alt} width={100} height={100} className="w-screen h-full" />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

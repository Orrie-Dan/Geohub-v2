import React from "react";
import Image from "next/image";
import CategoryCard from "./category-card";

interface FlippableCategoryCardProps {
  frontProps: any; // Props for CategoryCard
  onClick?: () => void;
}

const FlippableCategoryCard: React.FC<FlippableCategoryCardProps> = ({
  frontProps,
  onClick,
}) => (
  <div
    className="flip-card min-w-[280px] max-w-xs flex-shrink-0 cursor-pointer h-64"
    onClick={onClick}
  >
    <div className="flip-card-inner w-full h-full">
      <div className="flip-card-front w-full h-full">
        <CategoryCard {...frontProps} />
      </div>
      <div className="flip-card-back w-full h-full relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {frontProps.image && (
          <Image
            src={frontProps.image}
            alt={frontProps.title}
            fill
            className="object-cover z-0"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
          <h3 className="relative z-20 text-xl font-bold text-white text-center px-4 py-2 drop-shadow-lg">
            {frontProps.title}
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export default FlippableCategoryCard;

// Add the following CSS to your global stylesheet (e.g., globals.css):
/*
.flip-card {
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s cubic-bezier(.4,2,.6,1);
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.5rem;
  overflow: hidden;
}
.flip-card-back {
  background: #151515;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
}
*/ 
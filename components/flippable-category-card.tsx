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
    className="flip-card min-w-[280px] max-w-xs flex-shrink-0 cursor-pointer h-[254px]"
    onClick={onClick}
  >
    <div className="flip-card-inner w-full h-full">
      <div className="flip-card-front w-full h-full">
        <CategoryCard {...frontProps} />
      </div>
      <div className="flip-card-back w-full h-full relative flex items-center justify-center">
        {/* Background Image */}
        {frontProps.image && (
          <Image
            src={frontProps.image}
            alt={frontProps.title}
            fill
            className="object-cover z-0"
          />
        )}
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center gap-2 p-4 text-center w-full">
          <h3 className="text-lg font-bold text-white drop-shadow-lg">{frontProps.title}</h3>
          <p className="text-sm text-white/80 drop-shadow-lg">{frontProps.description}</p>
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
import Image from "next/image";

export default function CategoryHeroCard({ title, image, onClick }: {
  title: string;
  image: string;
  onClick?: () => void;
}) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={`/geohub${image}`}
        alt={title}
        fill
        className="object-cover z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 drop-shadow-lg">{title}</h1>
        <button
          onClick={onClick}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition"
        >
          Learn More →
        </button>
      </div>
    </div>
  );
} 
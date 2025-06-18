'use client'
import React from 'react';
import { Rocket } from 'lucide-react';

interface ScrollDownButtonProps {
  onClick?: () => void;
  className?: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ onClick, className = "" }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: scroll to next section
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`scroll-down-container ${className}`} onClick={handleClick}>
      <div className="scrolldown">
        <Rocket className="rocket-icon" size={24} />
        <div className="scroll-indicator" />
      </div>
      
      <style jsx>{`
        .scroll-down-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .scrolldown {
          --color: rgba(56, 189, 248, 0.8); /* sky-400 with opacity */
          --sizeX: 40px;
          --sizeY: 40px;
          position: relative;
          width: var(--sizeX);
          height: var(--sizeY);
          border: calc(var(--sizeX) / 10) solid var(--color);
          border-radius: 50%;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .scrolldown:hover {
          --color: rgb(56, 189, 248); /* sky-400 */
          transform: translateY(-2px);
        }

        .rocket-icon {
          color: var(--color);
          transform: rotate(90deg);
          animation: float 2s ease-in-out infinite;
        }

        .scroll-indicator {
          position: absolute;
          bottom: -15px;
          width: 2px;
          height: 10px;
          background-color: var(--color);
          animation: scrollDown 1.5s ease-in-out infinite;
        }
        
        @keyframes float {
          0% {
            transform: rotate(90deg) translateY(0px);
          }
          50% {
            transform: rotate(90deg) translateY(-3px);
          }
          100% {
            transform: rotate(90deg) translateY(0px);
          }
        }

        @keyframes scrollDown {
          0% {
            height: 10px;
            opacity: 0.3;
          }
          50% {
            height: 15px;
            opacity: 1;
          }
          100% {
            height: 10px;
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollDownButton;
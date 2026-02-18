import React from 'react';

interface GridBackgroundProps {
  variant?: 'top' | 'bottom';
}

const GridBackground: React.FC<GridBackgroundProps> = ({ variant = 'top' }) => {
  const maskClass = variant === 'top' ? 'mask-fade-out' : 'mask-fade-in';
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 subtle-grid ${maskClass} opacity-60`}></div>
    </div>
  );
};

export default GridBackground;
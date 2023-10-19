import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Img: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={className} />
  )
}

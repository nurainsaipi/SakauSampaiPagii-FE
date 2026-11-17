import React from 'react';
import { Star } from 'lucide-react';

export default function StarRow({ count = 3, max = 5, size = 28, className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`} aria-label={`${count} dari ${max} bintang`}>
      {Array.from({ length: max }).map((_, index) => {
        const isFilled = index < count;
        return (
          <Star
            key={index}
            size={size}
            className={isFilled ? 'text-[#FDCB57] fill-[#FDCB57]' : 'text-gray-300 fill-gray-100'}
            strokeWidth={2}
          />
        );
      })}
    </div>
  );
}

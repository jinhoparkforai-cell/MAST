import React from "react";
import { X } from "lucide-react";

interface PhotoLightboxProps {
  photo: { src: string; title: string; desc: string } | null;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-16/10 max-h-[70vh] bg-stone-950 flex items-center justify-center">
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-5 bg-stone-900 text-white border-t border-stone-800">
          <h4 className="font-serif-kr text-lg font-bold text-[#F5EEDC]">
            {photo.title}
          </h4>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            {photo.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { FACILITY_OVERVIEW } from "../data/buchuData";

interface FloatingConsultBarProps {
  onOpenKakao: () => void;
  onOpenBooking: () => void;
}

export const FloatingConsultBar: React.FC<FloatingConsultBarProps> = ({
  onOpenKakao,
  onOpenBooking,
}) => {
  return (
    <aside
      aria-label="빠른 상담 안내"
      className="fixed bottom-0 left-0 right-0 z-30 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#E8DFC9] py-3 px-4 shadow-xl"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center sm:justify-between gap-2.5 sm:gap-4">
        {/* 1. Direct Phone Call */}
        <a
          href={`tel:${FACILITY_OVERVIEW.phone}`}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#2C3E35] hover:bg-[#1e2c25] text-white text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors shadow-2xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>전화 상담</span>
        </a>

        {/* 2. Kakao Consultation */}
        <button
          onClick={onOpenKakao}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FEE500] hover:bg-[#FDD800] text-[#3C1E1E] text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer shadow-2xs"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>카카오톡 상담</span>
        </button>

        {/* 3. Visit Reservation Booking */}
        <button
          onClick={onOpenBooking}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#b59049] text-white text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer shadow-2xs"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>방문 상담 예약하기</span>
        </button>
      </div>
    </aside>
  );
};

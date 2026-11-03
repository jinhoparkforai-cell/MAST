import React from "react";
import { MessageCircle, Phone, ChevronRight, ShieldCheck, Heart, MapPin, Stethoscope } from "lucide-react";
import { FACILITY_OVERVIEW } from "../data/buchuData";

interface HeroSectionProps {
  onOpenKakao: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenKakao,
  onOpenBooking,
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Visual Area with Warm Mother's Care Atmosphere */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Background Image with warm forest scrim */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/src/assets/images/buchu_hero_interior_1793679736816.jpg"
            alt="송내 엄마 요양원 따뜻한 프리미엄 라운지 및 전경"
            className="w-full h-full object-cover object-center filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#1E2C25]/50 via-[#2C3E35]/40 to-[#1E2C25]/60 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center text-white flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-medium tracking-wide mb-6">
            <span className="text-[#FDFBF7]">송내 엄마 요양원</span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span>부천 소사구 송내동 88인 정원 안심 케어</span>
          </div>

          <h1 className="font-serif-kr text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight drop-shadow-sm text-balance">
            “요양원이 집보다 나을 수 있을까요?”
          </h1>

          <p className="text-base sm:text-xl font-light text-[#FDFBF7]/95 mb-10 max-w-2xl mx-auto leading-relaxed font-serif-kr">
            지친 마음은 잠시 내려두시고, 엄마의 품처럼 포근하고 안전한 곳에서 새로운 내일을 시작하세요. <br className="hidden sm:inline" />
            <strong className="font-medium text-white">내 가족을 돌보는 진심 어린 손길로 함께하겠습니다.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              href={`tel:${FACILITY_OVERVIEW.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#C5A059] hover:bg-[#b59049] text-white font-bold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>전화 상담 {FACILITY_OVERVIEW.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 font-medium px-6 py-3.5 rounded-full transition-all text-sm sm:text-base cursor-pointer"
            >
              <span>방문 상담 & 공간 투어</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4-Item Proof & Differentiator Badges */}
      <div className="bg-[#F5F0EB] border-b border-[#E8DFC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#2C3E35]/10 border border-[#2C3E35]/20 flex items-center justify-center text-[#2C3E35] shrink-0">
                <Heart className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <div className="font-serif-kr text-xl font-bold text-[#2C3E35] tabular-nums">
                  단 88분 정원
                </div>
                <div className="text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                  단 88분만을 위한 밀착·안심 돌봄 공간
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#2C3E35]/10 border border-[#2C3E35]/20 flex items-center justify-center text-[#2C3E35] shrink-0">
                <Stethoscope className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <div className="font-serif-kr text-xl font-bold text-[#2C3E35]">
                  24시간 체계적 케어
                </div>
                <div className="text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                  전문 의료·간호·재활 팀의 24시 상주 관리
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#2C3E35]/10 border border-[#2C3E35]/20 flex items-center justify-center text-[#2C3E35] shrink-0">
                <MapPin className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <div className="font-serif-kr text-xl font-bold text-[#2C3E35]">
                  부천 송내동 도심형
                </div>
                <div className="text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                  1호선 송내역 인근, 언제든 편히 찾는 도심형
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#2C3E35]/10 border border-[#2C3E35]/20 flex items-center justify-center text-[#2C3E35] shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <div className="font-serif-kr text-xl font-bold text-[#2C3E35]">
                  엄마 같은 마음
                </div>
                <div className="text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                  내 엄마를 모시는 마음 그대로 전하는 온기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

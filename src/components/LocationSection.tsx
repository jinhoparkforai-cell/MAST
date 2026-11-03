import React, { useState } from "react";
import {
  MapPin,
  Train,
  Bus,
  Car,
  Phone,
  ExternalLink,
  Navigation,
  Copy,
  Check,
} from "lucide-react";
import { FACILITY_OVERVIEW } from "../data/buchuData";

interface LocationSectionProps {
  onOpenKakao: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenKakao }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(FACILITY_OVERVIEW.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FDFBF7] text-[#1E2C25]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
            오시는 길 & 연락처
          </span>
          <h2 className="font-serif-kr text-2xl sm:text-4xl font-semibold text-[#2C3E35] mt-2 mb-4">
            편안한 방문을 위한 길안내
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
            1호선 송내역 인근, 언제든 편히 찾아올 수 있는 부천 도심형 요양원입니다.
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto opacity-70 mt-4" />
        </div>

        {/* Map & Address Block */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#E8DFC9] shadow-xs mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Interactive Map Mockup */}
            <div className="lg:col-span-7 bg-[#F5F0EB] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
              {/* Map Graphic Vector Simulation */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-songnae" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2C3E35" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-songnae)" />
                </svg>
              </div>

              {/* Road Lines Simulation */}
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-medium text-[#2C3E35] shadow-xs border border-stone-200">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>{FACILITY_OVERVIEW.address}</span>
                </div>
              </div>

              {/* Central Map Pin */}
              <div className="relative z-10 my-auto flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#2C3E35] text-white flex items-center justify-center shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div className="w-4 h-2 bg-stone-900/20 rounded-full blur-[2px] mx-auto mt-1" />
                </div>
                <div className="mt-3 px-4 py-2 bg-[#2C3E35] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md font-serif-kr">
                  송내 엄마 요양원
                </div>
                <div className="text-[11px] text-stone-700 bg-white/90 px-2.5 py-0.5 rounded-md mt-1 backdrop-blur-xs font-medium">
                  부천시 소사구 송내동 327-3 (88인 정원)
                </div>
              </div>

              {/* Map Action Buttons */}
              <div className="relative z-10 flex flex-wrap gap-2 pt-4">
                <a
                  href={`https://map.naver.com/v5/search/${encodeURIComponent(FACILITY_OVERVIEW.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#03C75A] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs hover:bg-[#02b150] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>네이버지도에서 길찾기</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
                <a
                  href={`https://map.kakao.com/link/search/${encodeURIComponent(FACILITY_OVERVIEW.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#FEE500] text-[#3C1E1E] rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs hover:bg-[#fdd800] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>카카오맵에서 길찾기</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
                <button
                  onClick={handleCopyAddress}
                  className="px-3 py-2 bg-white text-stone-700 rounded-lg text-xs font-medium border border-stone-300 flex items-center gap-1 hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#C5A059]" />}
                  <span>{copied ? "주소 복사완료" : "주소 복사"}</span>
                </button>
              </div>
            </div>

            {/* Contact Details (Right) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-kr text-xl font-bold text-[#2C3E35] mb-6 border-b border-stone-100 pb-4">
                  연락처 및 상담 안내
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F0EB] border border-[#E8DFC9] flex items-center justify-center text-[#2C3E35] shrink-0">
                      <Phone className="w-4 h-4 text-[#C5A059]" />
                    </div>
                    <div>
                      <div className="text-stone-500 text-xs">대표 및 상담 전화</div>
                      <a
                        href={`tel:${FACILITY_OVERVIEW.phone}`}
                        className="text-[#2C3E35] font-bold font-serif-kr text-base hover:text-[#C5A059] transition-colors font-mono"
                      >
                        {FACILITY_OVERVIEW.phone}
                      </a>
                      <div className="text-[11px] text-stone-500">연중무휴 09:00 ~ 18:00 친절 상담</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F0EB] border border-[#E8DFC9] flex items-center justify-center text-[#2C3E35] shrink-0">
                      <MapPin className="w-4 h-4 text-[#C5A059]" />
                    </div>
                    <div>
                      <div className="text-stone-500 text-xs">소재지 주소</div>
                      <div className="text-[#2C3E35] font-medium text-xs sm:text-sm leading-snug">
                        {FACILITY_OVERVIEW.address}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="pt-6 border-t border-stone-100 mt-6 flex flex-col gap-2">
                <a
                  href={`tel:${FACILITY_OVERVIEW.phone}`}
                  className="w-full py-3 rounded-xl bg-[#2C3E35] hover:bg-[#1e2c25] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>전화 바로 연결 ({FACILITY_OVERVIEW.phone})</span>
                </a>
                <button
                  onClick={onOpenKakao}
                  className="w-full py-2.5 rounded-xl bg-[#FEE500] hover:bg-[#FDD800] text-[#3C1E1E] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                >
                  <span>카카오톡 1:1 상담하기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Public Transport & Driving Directions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Public Transit */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9] shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
              <Bus className="w-5 h-5 text-[#C5A059]" />
              <h4 className="font-serif-kr text-lg font-bold text-[#2C3E35]">
                대중교통 이용 시
              </h4>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700">
              <div>
                <div className="font-semibold text-[#2C3E35] flex items-center gap-1.5 mb-1">
                  <Train className="w-4 h-4 text-[#C5A059]" />
                  <span>지하철 (수도권 전철 1호선)</span>
                </div>
                <ul className="space-y-1 text-xs text-stone-600 pl-5 list-disc">
                  <li>
                    <strong className="text-[#2C3E35]">1호선 송내역</strong> (남부/북부 출구) 인접
                  </li>
                  <li>
                    송내역 하차 후 도보 또는 인근 마을버스 환승 시 5분 내 도착 가능
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-[#2C3E35] flex items-center gap-1.5 mb-1">
                  <Bus className="w-4 h-4 text-[#C5A059]" />
                  <span>시내버스 & 마을버스 노선</span>
                </div>
                <ul className="space-y-1 text-xs text-stone-600 pl-5 list-disc">
                  <li>송내동 주민센터 및 송내남부역 방면 시내버스 탑승 후 송내동 인근 정류장 하차</li>
                  <li>부천 및 인천 방면 광역버스 연계 우수</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Car Driving */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9] shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
              <Car className="w-5 h-5 text-[#C5A059]" />
              <h4 className="font-serif-kr text-lg font-bold text-[#2C3E35]">
                자가용 이용 시 (내비게이션)
              </h4>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700">
              <div className="p-3 rounded-lg bg-[#F5F0EB] border border-stone-200">
                <div className="font-semibold text-[#2C3E35] mb-1">내비게이션 주소 입력</div>
                <p className="text-xs text-stone-600 leading-relaxed font-mono">
                  경기도 부천시 소사구 송내동 327-3 (송내 엄마 요양원)
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#F5F0EB] border border-stone-200">
                <div className="font-semibold text-[#2C3E35] mb-1">수도권 제1순환고속도로 이용 경로</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  송내IC 진출 후 송내역 방면 진입 ➔ 송내동 방면 우회전 ➔ 송내 엄마 요양원 도착
                </p>
              </div>

              <p className="text-[11px] text-stone-500 pt-1">
                * 방문 가족을 위한 전용 주차 공간이 마련되어 있습니다.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

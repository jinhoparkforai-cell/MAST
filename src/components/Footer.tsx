import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { FACILITY_OVERVIEW } from "../data/buchuData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800/80">
          <div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-stone-100 font-serif-kr text-lg font-bold">
              <div className="flex items-center gap-2 shrink-0">
                <Heart className="w-4 h-4 fill-current text-[#C5A059]" />
                <span>송내 엄마 요양원</span>
              </div>
              <span className="hidden sm:inline text-stone-600 font-normal text-xs">|</span>
              <span className="text-xs font-sans text-stone-500 font-normal break-keep">
                부천 소사구 송내동 88인 정원 안심 케어
              </span>
            </div>
            <p className="text-stone-400 mt-1.5 break-keep">
              내가 낳고 기른 내 자식처럼, 엄마의 마음으로 어르신을 따뜻하게 모십니다.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>맨 위로 가기</span>
          </button>
        </div>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px] text-stone-500 leading-relaxed">
          <div className="space-y-1">
            <p>상호명: 송내 엄마 요양원 | 대표 시설장: 원장 상주</p>
            <p>소재지: {FACILITY_OVERVIEW.address}</p>
            <p>
              대표/상담 전화: <a href={`tel:${FACILITY_OVERVIEW.phone}`} className="text-stone-300 hover:underline font-mono">{FACILITY_OVERVIEW.phone}</a> | 
              이메일: <a href={`mailto:${FACILITY_OVERVIEW.email}`} className="text-stone-300 hover:underline">{FACILITY_OVERVIEW.email}</a>
            </p>
          </div>

          <div className="md:text-right space-y-1">
            <p>국민건강보험공단 노인장기요양보험 지정기관 | 부천시청 인가 시설</p>
            <p>© {new Date().getFullYear()} 송내 엄마 요양원. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

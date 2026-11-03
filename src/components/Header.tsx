import React, { useState } from "react";
import { MessageCircle, Menu, X, Phone, Heart } from "lucide-react";
import { FACILITY_OVERVIEW } from "../data/buchuData";

interface HeaderProps {
  onOpenKakao: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenKakao, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "요양원 소개", href: "#story" },
    { label: "시설 안내", href: "#facility" },
    { label: "서비스 안내", href: "#service" },
    { label: "입소 안내", href: "#admission" },
    { label: "오시는 길", href: "#location" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EFE8DF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#2C3E35] group whitespace-nowrap shrink-0"
        >
          <div className="w-10 h-10 rounded-full bg-[#2C3E35]/10 border border-[#2C3E35]/25 flex items-center justify-center text-[#2C3E35] group-hover:bg-[#2C3E35] group-hover:text-white transition-colors">
            <Heart className="w-5 h-5 fill-current text-[#C5A059]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-kr text-xl sm:text-2xl font-bold tracking-tight text-[#2C3E35] leading-tight">
              송내 엄마 요양원
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-stone-500 font-medium">
              Mother&apos;s Warm Care Home
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#C5A059]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action - 1:1 Phone & Consultation */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${FACILITY_OVERVIEW.phone}`}
            className="flex items-center gap-1.5 text-[#2C3E35] bg-[#F5F0EB] hover:bg-[#eae2d6] text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full border border-[#E8DFC9] transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>{FACILITY_OVERVIEW.phone}</span>
          </a>

          <button
            onClick={onOpenKakao}
            className="flex items-center gap-2 bg-[#2C3E35] hover:bg-[#1e2c25] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-xs hover:shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A059]" />
            <span>1:1 상담 연결</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={`tel:${FACILITY_OVERVIEW.phone}`}
            className="bg-[#2C3E35] text-white p-2 rounded-full text-xs font-semibold"
            aria-label="전화 상담"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#EFE8DF] px-6 py-5 shadow-lg space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-800 py-1 hover:text-[#C5A059] border-b border-stone-200/60 pb-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${FACILITY_OVERVIEW.phone}`}
              className="w-full py-2.5 rounded-lg bg-[#2C3E35] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>전화 상담: {FACILITY_OVERVIEW.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenKakao();
              }}
              className="w-full py-2.5 rounded-lg bg-[#FEE500] text-[#3C1E1E] text-sm font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>카카오톡 1:1 상담</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg border border-[#2C3E35]/40 text-[#2C3E35] text-sm font-medium flex items-center justify-center"
            >
              방문 상담 & 공간 투어 예약
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

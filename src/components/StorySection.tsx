import React, { useState } from "react";
import {
  Heart,
  Quote,
  Award,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
} from "lucide-react";
import {
  STAFF_PHILOSOPHIES,
  TESTIMONIALS,
} from "../data/buchuData";

export const StorySection: React.FC = () => {
  const [showFullCareCulture, setShowFullCareCulture] = useState(false);
  const [showFullStaff, setShowFullStaff] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const careCultureList = [
    {
      icon: Sparkles,
      title: "매일 아침 9시 전 직원 모닝 컨퍼런스",
      desc: "시설장, 간호사, 요양보호사, 물리치료사, 영양사, 사회복지사가 한자리에 모여 88분 어르신 각자의 전날 밤 수면 상태, 식사량, 혈압/혈당, 감정 변화를 꼼꼼히 인수인계합니다.",
    },
    {
      icon: Heart,
      title: "엄마 같은 손길과 진심 어린 눈맞춤",
      desc: "단순한 신체 수발을 넘어 어르신의 손을 잡아드리고 따뜻한 말벗이 되어드립니다. 내 어머니를 모시는 온기가 모든 직원들의 손끝에서 전해집니다.",
    },
  ];

  return (
    <section id="story" className="py-20 lg:py-28 bg-[#FDFBF7] text-[#1E2C25]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
            요양원 소개
          </span>
          <h2 className="font-serif-kr text-2xl sm:text-4xl font-semibold text-[#2C3E35] mt-2 mb-4">
            어르신을 찾아온 당신께
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto opacity-70" />
        </div>

        {/* Director's Letter (원장의 편지) */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xs border border-[#EFE8DF] space-y-6 leading-relaxed text-stone-700 text-base sm:text-lg font-serif-kr">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#2C3E35] text-white flex items-center justify-center font-bold text-sm">
              <Heart className="w-5 h-5 fill-current text-[#C5A059]" />
            </div>
            <div>
              <div className="text-xs text-[#C5A059] font-medium tracking-wider">DIRECTOR&apos;S LETTER</div>
              <h3 className="font-serif-kr text-xl font-bold text-[#2C3E35]">
                “내가 낳고 기른 내 자식처럼, 엄마의 마음으로 모십니다”
              </h3>
            </div>
          </div>

          <p className="text-[#2C3E35] font-medium text-lg sm:text-xl">
            편찮으신 부모님을 바라보며 요양원을 알아보시기까지, 얼마나 수많은 밤을 눈물과 고민으로 지새우셨을지 그 마음을 온전히 헤아려 봅니다.
          </p>

          <p>
            가족을 직접 돌보지 못한다는 죄책감, 24시간 간병에 몸과 마음이 지쳐 사랑하는 부모님에게 행여 지친 기색을 보일까 두려웠던 그 무거운 짐을 이제는 내려놓으셔도 됩니다.
          </p>

          <p>
            우리가 어릴 적 아프면 밤새 곁에서 이마를 짚어주시던 어머니의 따뜻한 손길처럼,
            <strong> 송내 엄마 요양원</strong>은 어르신을 내 부모님처럼 지극정성으로 모시며 최고의 예우를 다하고자 세워진 곳입니다.
          </p>

          <div className="p-6 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9] my-4">
            <p className="font-medium text-[#2C3E35] leading-relaxed">
              &ldquo;어르신의 존엄과 미소를 지켜드리는 것, 그리고 가족의 지친 마음에 따스한 평안을 선물하는 것.&rdquo; <br />
              이것이 송내 엄마 요양원의 모든 의료진, 간호사, 요양보호사, 물리치료사가 매일 아침 가슴에 새기는 약속입니다.
            </p>
          </div>

          <p>
            당신이 부모님을 사랑하는 그 마음 그대로, 우리가 부모님의 곁에서 가장 든든하고 따뜻한 울타리가 되어드리겠습니다.
          </p>

          <div className="pt-4 text-right">
            <span className="text-sm font-semibold text-[#2C3E35]">송내 엄마 요양원 원장 및 임직원 일동 올림</span>
          </div>
        </div>

        {/* 88 Beds & Dedicated Care Callout */}
        <div className="my-14 p-8 sm:p-10 rounded-2xl bg-[#F5F0EB] border border-[#E0D8C8] text-center space-y-4">
          <p className="font-serif-kr text-xl sm:text-2xl text-[#2C3E35] font-semibold leading-snug">
            대규모 시설의 번잡함 대신 <br className="sm:hidden" />
            <span className="text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">단 88분만을 위한 아늑한 정원</span>을 고집합니다
          </p>
          <div className="flex items-center justify-center gap-3 my-3">
            <span className="w-12 h-px bg-[#C5A059]/50" />
            <div className="w-8 h-8 rounded-full bg-[#2C3E35] text-[#C5A059] flex items-center justify-center shadow-xs">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <span className="w-12 h-px bg-[#C5A059]/50" />
          </div>
          <p className="text-stone-700 text-sm sm:text-base font-normal max-w-xl mx-auto">
            한 분 한 분의 성함과 식습관, 표정의 변화까지 기억하는 가족 같은 규모이기에 <br />
            어르신께서는 집처럼 편안하게 지내시고 필요한 때에 즉시 밀착 도움을 받으실 수 있습니다.
          </p>
          <p className="text-xs text-stone-500 font-medium pt-2">
            송내 엄마 요양원 · 경기도 부천시 소사구 송내동 327-3
          </p>
        </div>

        {/* 3 Core Values: 3대 "연결" */}
        <div className="my-20">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#C5A059] uppercase">
              CORE VALUE
            </span>
            <h3 className="font-serif-kr text-2xl sm:text-3xl font-semibold text-[#2C3E35] mt-1">
              송내 엄마 요양원의 핵심 가치: <span className="text-[#C5A059]">3대 “연결”</span>
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              환경이 바뀌어도 어르신의 존엄과 일상은 따뜻하게 이어져야 합니다.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#EFE8DF] flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#F5F0EB] text-[#2C3E35] font-serif-kr font-bold text-lg flex items-center justify-center shrink-0 border border-[#E8DFC9]">
                01
              </div>
              <div>
                <h4 className="font-serif-kr text-lg font-semibold text-[#2C3E35] mb-2">
                  1. 일상의 연결 (집에서의 편안한 일상을 끊김 없이 이어가는 케어)
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  집에서 해오시던 익숙한 생활 리듬과 기상을 존중하며, 채광이 좋은 안락한 침실과 거실에서 평소 즐기시던 취미와 활동을 편안히 이어가실 수 있도록 지원합니다.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#EFE8DF] flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#F5F0EB] text-[#2C3E35] font-serif-kr font-bold text-lg flex items-center justify-center shrink-0 border border-[#E8DFC9]">
                02
              </div>
              <div>
                <h4 className="font-serif-kr text-lg font-semibold text-[#2C3E35] mb-2">
                  2. 가족의 연결 (가족의 따뜻한 온기가 늘 머물도록 프라이빗하게 교류하는 공간)
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  1호선 송내역 인근 도심에 위치하여 언제든 퇴근길이나 주말에 편히 찾아오실 수 있습니다. 아늑한 1층 면회 공간과 1:1 상담실에서 가족들과 정겨운 시간을 나누실 수 있습니다.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#EFE8DF] flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#F5F0EB] text-[#2C3E35] font-serif-kr font-bold text-lg flex items-center justify-center shrink-0 border border-[#E8DFC9]">
                03
              </div>
              <div>
                <h4 className="font-serif-kr text-lg font-semibold text-[#2C3E35] mb-2">
                  3. 사회의 연결 (또래 어르신 및 전문가들과 함께 웃음을 나누는 활력 있는 교류)
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  외로움 대신 활기찬 웃음을 선물합니다. 또래 어르신들, 전문 간호사, 물리치료사, 사회복지사와 교류하며 실버 건강체조, 미술치료, 노래교실, 생신잔치로 삶의 에너지를 충전합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* People of Songnae Mom (송내 엄마 사람들) */}
        <div className="my-20 bg-white rounded-2xl p-8 sm:p-10 border border-[#EFE8DF] shadow-xs">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-wider text-[#C5A059] uppercase">
              PEOPLE OF SONGNAE MOM
            </span>
            <h3 className="font-serif-kr text-2xl sm:text-3xl font-semibold text-[#2C3E35] mt-1">
              송내 엄마 사람들
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              어르신의 작은 미소와 눈빛 하나까지 놓치지 않는 전 직원 모닝 컨퍼런스로 하루를 시작합니다.
            </p>
          </div>

          {/* 1. 밀착 케어 시스템 (기본 1개 박스 표시 + 전체 보기) */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C5A059]" />
                <h4 className="font-serif-kr text-base sm:text-lg font-semibold text-[#2C3E35]">
                  밀착 케어 시스템
                </h4>
              </div>
              <button
                onClick={() => setShowFullCareCulture(!showFullCareCulture)}
                className="text-xs text-[#C5A059] hover:text-[#2C3E35] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>{showFullCareCulture ? "간략히 보기" : "전체 보기"}</span>
                {showFullCareCulture ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(showFullCareCulture ? careCultureList : careCultureList.slice(0, 1)).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9] space-y-3 transition-all"
                  >
                    <div className="flex items-center gap-2 text-[#2C3E35] font-serif-kr text-base font-bold">
                      <Icon className="w-4 h-4 text-[#C5A059]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. 전문 직종별 케어 철학 (기본 1개 박스 표시 + 전체 보기) */}
          <div className="pt-6 border-t border-stone-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-serif-kr text-base sm:text-lg font-semibold text-[#2C3E35]">
                  전문 직종별 케어 철학
                </h4>
                <p className="text-xs text-stone-500">
                  시설장, 사무국장, 간호팀장/간호사, 사회복지사, 영양사, 물리치료사의 다짐
                </p>
              </div>
              <button
                onClick={() => setShowFullStaff(!showFullStaff)}
                className="text-xs text-[#C5A059] hover:text-[#2C3E35] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>{showFullStaff ? "간략히 보기" : "전체 보기"}</span>
                {showFullStaff ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {(showFullStaff ? STAFF_PHILOSOPHIES : STAFF_PHILOSOPHIES.slice(0, 1)).map((staff, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#FDFBF7] border border-stone-200/80 flex flex-col justify-between shadow-2xs hover:border-[#C5A059] transition-all"
                >
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif-kr">
                    &ldquo;{staff.text}&rdquo;
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-stone-200/50 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400">송내 엄마 요양원</span>
                    <span className="text-xs font-bold text-[#2C3E35] bg-[#F5F0EB] px-2.5 py-0.5 rounded-full border border-[#E8DFC9]">
                      {staff.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real Guardian Testimonials (보호자 실제 후기: 하나로 묶어보기 + 전체 보기) */}
        <div className="my-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#C5A059] uppercase">
                보호자의 이야기
              </span>
              <h3 className="font-serif-kr text-2xl sm:text-3xl font-semibold text-[#2C3E35] mt-1">
                함께하고 계신 가족들의 실제 후기
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                전문 재활 및 세심한 엄마표 케어로 마음을 놓게 된 보호자님들의 진솔한 경험담입니다.
              </p>
            </div>
            <button
              onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              className="text-xs text-[#C5A059] hover:text-[#2C3E35] font-semibold flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5F0EB] border border-[#E8DFC9] cursor-pointer transition-colors self-start sm:self-auto shrink-0"
            >
              <span>{showAllTestimonials ? "하나로 묶어보기" : "전체 후기 보기 (4건)"}</span>
              {showAllTestimonials ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {!showAllTestimonials ? (
            /* 하나로 묶은 단일 대화형 후기 박스 */
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-[#EFE8DF] shadow-xs relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-[#C5A059]/40" />
                  <span className="text-xs font-semibold text-[#C5A059] bg-[#F5F0EB] px-3 py-1 rounded-full border border-[#E8DFC9]">
                    실제 보호자 후기 {testimonialIndex + 1} / {TESTIMONIALS.length}
                  </span>
                </div>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-serif-kr min-h-[80px]">
                  &ldquo;{TESTIMONIALS[testimonialIndex].content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-9 h-9 rounded-full bg-[#2C3E35] text-[#C5A059] flex items-center justify-center font-bold text-xs font-serif-kr shrink-0">
                    {TESTIMONIALS[testimonialIndex].author.slice(0, 1)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#2C3E35]">
                      {TESTIMONIALS[testimonialIndex].target} {TESTIMONIALS[testimonialIndex].relation}
                    </div>
                    <div className="text-xs text-stone-400">
                      {TESTIMONIALS[testimonialIndex].author}
                    </div>
                  </div>
                </div>

                {/* 슬라이드 내비게이션 컨트롤 */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() =>
                      setTestimonialIndex((prev) =>
                        prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
                      )
                    }
                    className="w-8 h-8 rounded-full bg-[#FDFBF7] hover:bg-[#F5F0EB] border border-stone-200 flex items-center justify-center text-[#2C3E35] transition-colors cursor-pointer"
                    aria-label="이전 후기"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1.5 px-2">
                    {TESTIMONIALS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setTestimonialIndex(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          testimonialIndex === idx
                            ? "w-5 bg-[#2C3E35]"
                            : "w-2 bg-stone-300 hover:bg-stone-400"
                        }`}
                        aria-label={`후기 ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setTestimonialIndex((prev) =>
                        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="w-8 h-8 rounded-full bg-[#FDFBF7] hover:bg-[#F5F0EB] border border-stone-200 flex items-center justify-center text-[#2C3E35] transition-colors cursor-pointer"
                    aria-label="다음 후기"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* 전체 보기 2열 그리드 */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-7 border border-[#EFE8DF] shadow-xs relative flex flex-col justify-between"
                >
                  <div>
                    <Quote className="w-8 h-8 text-[#C5A059]/30 mb-3" />
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-serif-kr">
                      {t.content}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="font-medium text-[#2C3E35]">{t.target} {t.relation}</span>
                    <span className="text-stone-400">{t.author}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

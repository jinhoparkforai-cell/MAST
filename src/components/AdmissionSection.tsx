import React, { useState } from "react";
import {
  FileText,
  CheckCircle,
  HelpCircle,
  Ban,
  Phone,
  MessageCircle,
  Shield,
  Calendar,
  Sparkles,
  ArrowRight,
  ClipboardList,
} from "lucide-react";
import { REQUIRED_DOCUMENTS, FACILITY_OVERVIEW } from "../data/buchuData";

interface AdmissionSectionProps {
  onOpenKakao: () => void;
  onOpenBooking: () => void;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({
  onOpenKakao,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<"process" | "documents" | "eligibility">("process");

  return (
    <section id="admission" className="py-20 lg:py-28 bg-[#F5F0EB] text-[#1E2C25] border-t border-[#E8DFC9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
            입소 안내
          </span>
          <h2 className="font-serif-kr text-2xl sm:text-4xl font-semibold text-[#2C3E35] mt-2 mb-4">
            송내 엄마 요양원에서 시작하기
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            어르신의 상태에 맞춘 맞춤형 입소 상담부터 복잡한 서류 절차까지,
            가족의 마음으로 처음부터 끝까지 꼼꼼하고 따뜻하게 안내해 드립니다.
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto opacity-70 mt-4" />
        </div>

        {/* Special Grade Support Banner (등급 판정 안내 - 특별 강조) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#C5A059] shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F5F0EB] border border-[#C5A059] flex items-center justify-center text-[#2C3E35] shrink-0">
              <Sparkles className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 text-[#2C3E35] text-xs font-bold mb-1">
                장기요양 등급 신청 무료 지원
              </div>
              <h3 className="font-serif-kr text-lg sm:text-xl font-bold text-[#2C3E35]">
                “아직 장기요양 등급이 없으신가요? 걱정하지 마세요.”
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed max-w-2xl">
                국민건강보험공단 장기요양 인정 신청부터 의사소견서 발급, 방문 조사 대비까지 
                복잡한 급여 판정 절차를 송내 엄마 요양원 원장과 전문 사회복지사가 친절하게 무료로 동행해 드립니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${FACILITY_OVERVIEW.phone}`}
              className="px-5 py-3 rounded-xl bg-[#2C3E35] hover:bg-[#1e2c25] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>등급 상담 {FACILITY_OVERVIEW.phone}</span>
            </a>
            <button
              onClick={onOpenKakao}
              className="px-5 py-3 rounded-xl bg-[#FEE500] hover:bg-[#fdd800] text-[#3C1E1E] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>카카오 1:1 문의</span>
            </button>
          </div>
        </div>

        {/* 5-Step Process Visual */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9] shadow-xs mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
              5-STEP ADMISSION PROCESS
            </span>
            <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#2C3E35] mt-1">
              체계적인 5단계 입소 절차
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 lg:gap-4 relative pt-2">
            {[
              { step: "01", title: "전화·방문 상담", desc: "010-8277-9360 전화 및 카카오 1:1 상담, 어르신 상태 확인" },
              { step: "02", title: "시설 투어 & 맞춤 안내", desc: "요양원 직접 방문, 침실·재활실 견학 및 시설장 1:1 면담" },
              { step: "03", title: "관련서류 제출", desc: "장기요양인정서, 건강검진서 등 필수 구비서류 제출 확인" },
              { step: "04", title: "계약 체결", desc: "입소 이용계약서 작성, 침실 배정 및 맞춤 케어 플랜 수립" },
              { step: "05", title: "입주 & 적응", desc: "편안한 입주 및 1개월간 전담 특별 밀착 적응 케어 진행" },
            ].map((s) => (
              <div
                key={s.step}
                className="p-4 rounded-xl bg-[#FDFBF7] border border-stone-200/80 flex flex-col items-center text-center relative hover:border-[#C5A059] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#2C3E35] text-[#C5A059] flex items-center justify-center text-xs font-bold font-serif-kr mb-2">
                  {s.step}
                </div>
                <div className="font-serif-kr text-sm sm:text-base font-bold text-[#2C3E35]">
                  {s.title}
                </div>
                <div className="text-[11px] text-stone-600 mt-1.5 leading-snug">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C5A059]" />
              <span>사전 방문 예약 시 시설장과의 단독 프라이빗 심층 상담이 가능합니다.</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="text-[#2C3E35] font-semibold flex items-center gap-1 hover:text-[#C5A059] cursor-pointer"
            >
              <span>방문 상담 & 공간 투어 예약하기</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>
        </div>

        {/* Section Interactive Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "process", label: "입소 상담 및 방문 예약 안내", icon: Calendar },
            { id: "documents", label: "필수 구비서류 체크리스트 (12종)", icon: FileText },
            { id: "eligibility", label: "입소 자격 및 대상 기준", icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[#2C3E35] text-white shadow-sm font-semibold"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-[#FDFBF7]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#C5A059]" : "text-stone-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Direct Consultation & Booking Guidance */}
        {activeTab === "process" && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8DFC9] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-semibold text-[#C5A059] uppercase">
                  DIRECT CONSULTATION GUIDANCE
                </span>
                <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#2C3E35]">
                  전화 010-8277-9360 및 방문 상담 안내
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  송내 엄마 요양원은 온라인 대기 등록 대신, 보호자님과의 <strong>1:1 직접 유선 및 대면 심층 상담</strong>을 원칙으로 합니다.
                  어르신의 신체 상태, 복용 약물, 치매 정도, 거동 상태를 시설장이 직접 경청하고 가장 적합한 케어 플랜을 제안해 드립니다.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-700">
                  {/* Phone Consultation Card */}
                  <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#E8DFC9] hover:border-[#C5A059] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#2C3E35] text-[#C5A059] flex items-center justify-center shrink-0 shadow-2xs">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#2C3E35] text-sm sm:text-base">대표 직통 상담 전화</div>
                        <div className="text-stone-500 text-xs mt-0.5">연중무휴 09:00 ~ 18:00 친절 상담</div>
                      </div>
                    </div>
                    <a
                      href={`tel:${FACILITY_OVERVIEW.phone}`}
                      className="self-stretch sm:self-auto shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2C3E35] hover:bg-[#1e2c25] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>전화 바로걸기</span>
                    </a>
                  </div>

                  {/* Kakao Consultation Card */}
                  <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#E8DFC9] hover:border-[#C5A059] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#FEE500] text-[#3C1E1E] flex items-center justify-center shrink-0 shadow-2xs">
                        <MessageCircle className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <div className="font-bold text-[#2C3E35] text-sm sm:text-base">카카오톡 실시간 상담</div>
                        <div className="text-stone-500 text-xs mt-0.5">사진·서류 전송 및 실시간 1:1 채팅 문의</div>
                      </div>
                    </div>
                    <button
                      onClick={onOpenKakao}
                      className="self-stretch sm:self-auto shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FEE500] hover:bg-[#fdd800] text-[#3C1E1E] text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>카카오 문의하기</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#F5F0EB] rounded-xl p-6 border border-[#E8DFC9] text-center space-y-4">
                <Calendar className="w-10 h-10 text-[#C5A059] mx-auto" />
                <h4 className="font-serif-kr text-lg font-bold text-[#2C3E35]">
                  시설 방문 상담 & 공간 투어
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  직접 오셔서 어르신 생활실, 힐링 목욕실, 지하 재활센터 및 100% 직영 조리실의 청결도를 눈으로 확인해 보세요.
                </p>
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-lg bg-[#2C3E35] hover:bg-[#1e2c25] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  방문 상담 예약하기
                </button>
                <p className="text-xs text-stone-500 break-keep leading-normal text-center">
                  경기도 부천시 소사구 송내동 327-3 (주차 가능)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Required Documents Table (12종) */}
        {activeTab === "documents" && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8DFC9] shadow-xs space-y-8">
            <div>
              <span className="text-xs font-semibold text-[#C5A059] uppercase">
                REQUIRED DOCUMENTS CHECKLIST
              </span>
              <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#2C3E35] mt-1">
                필수 구비서류 체크리스트 (12종)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                법정 필수 서류를 사전에 준비해 주시면 입소 당일 계약 절차가 신속하고 원활하게 진행됩니다.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-stone-200">
                <thead className="bg-[#2C3E35] text-white font-medium">
                  <tr>
                    <th className="p-3 w-28">대상</th>
                    <th className="p-3 w-52">서류명</th>
                    <th className="p-3 w-40">발급 기관</th>
                    <th className="p-3">비고 및 안내</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  {REQUIRED_DOCUMENTS.map((doc, idx) => (
                    <tr key={idx} className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="p-3 font-semibold bg-[#F5F0EB]/60 text-[#2C3E35]">{doc.target}</td>
                      <td className="p-3 font-medium text-stone-900">{doc.doc}</td>
                      <td className="p-3 text-stone-600">{doc.issuer}</td>
                      <td className="p-3 text-stone-500">{doc.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Preparation Supplies */}
            <div className="pt-6 border-t border-stone-200">
              <h4 className="font-serif-kr text-base font-bold text-[#2C3E35] mb-3">
                어르신 입소 준비물 목록
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-stone-700">
                <div className="p-3.5 rounded-lg bg-[#F5F0EB] border border-stone-200">
                  <div className="font-semibold text-[#2C3E35] mb-1">01. 의류 & 신발</div>
                  <p className="text-stone-600">미끄럼방지 실내화, 편안한 평상복(상하의 3~4벌), 속옷, 양말</p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F5F0EB] border border-stone-200">
                  <div className="font-semibold text-[#2C3E35] mb-1">02. 세면 도구</div>
                  <p className="text-stone-600">칫솔, 양치컵, 빨대 달린 보온병 또는 물컵, 면도기</p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F5F0EB] border border-stone-200">
                  <div className="font-semibold text-[#2C3E35] mb-1">03. 복용 중인 약</div>
                  <p className="text-stone-600">처방전 사본 및 복용 중인 약 1~2개월분 (용법/용량 명시)</p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F5F0EB] border border-stone-200">
                  <div className="font-semibold text-[#2C3E35] mb-1">04. 개인 비품</div>
                  <p className="text-stone-600">평소 쓰시던 휠체어, 보행기(워커), 에어방석 등</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Eligibility & Restrictions */}
        {activeTab === "eligibility" && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8DFC9] shadow-xs space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Eligibility */}
              <div className="p-6 rounded-xl bg-emerald-50/50 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-800 font-serif-kr text-base font-bold mb-4">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>입소 대상자</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                    <span>국민건강보험공단으로부터 <strong>장기요양 시설급여 판정(1~5등급)</strong>을 받으신 분</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                    <span>치매, 파킨슨, 뇌졸중(중풍), 만성질환 등으로 일상생활 수발이 필요하신 분</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                    <span>노환 및 신체 기능상 문제로 식사, 배변, 이동에 부축이 필요하신 분</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">4</span>
                    <span>가족의 직장, 건강, 간병 피로 등으로 가정 내 지속적인 돌봄이 어려우신 분</span>
                  </li>
                </ul>
              </div>

              {/* Restrictions */}
              <div className="p-6 rounded-xl bg-amber-50/50 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-900 font-serif-kr text-base font-bold mb-4">
                  <Ban className="w-5 h-5 text-amber-600" />
                  <span>입소 제한 대상</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                    <span>결핵, 옴 등 법정 활동성 전염성 질환을 보유하신 분 (치료 완치 후 입소 가능)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                    <span>급성기 질환으로 상시 병원 입원 및 중환자 치료가 필요한 상태</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                    <span>심각한 공격성, 자해, 폭력성으로 타 어르신과의 공동생활이 극히 불가능한 경우</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

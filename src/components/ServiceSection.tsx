import React, { useState } from "react";
import {
  Stethoscope,
  Activity,
  HeartHandshake,
  Utensils,
  Brain,
  Calendar,
  Check,
} from "lucide-react";
import { SAMPLE_MEAL_PLAN } from "../data/buchuData";

export const ServiceSection: React.FC = () => {
  const [selectedServiceTab, setSelectedServiceTab] = useState<
    "health" | "rehab" | "meals" | "dementia" | "activities"
  >("health");
  const [activeMealDay, setActiveMealDay] = useState(0);

  return (
    <section id="service" className="py-20 lg:py-28 bg-[#FDFBF7] text-[#1E2C25]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
            서비스 안내
          </span>
          <h2 className="font-serif-kr text-2xl sm:text-4xl font-semibold text-[#2C3E35] mt-2 mb-4">
            엄마의 손길로 정성을 다하는 전문 케어
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            24시간 상주 간호팀, 전문 물리치료사의 맞춤 재활, 100% 직영 엄마표 영양 식단,
            치매 특화 인지 케어까지 체계적이고 세심하게 돌보아 드립니다.
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto opacity-70 mt-4" />
        </div>

        {/* 5 Category Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "health", label: "의료 & 간호 서비스", icon: Stethoscope },
            { id: "rehab", label: "재활 & 물리치료", icon: Activity },
            { id: "meals", label: "100% 직영 영양 관리", icon: Utensils },
            { id: "dementia", label: "치매 & 전문요양 서비스", icon: Brain },
            { id: "activities", label: "정서 & 여가 프로그램", icon: HeartHandshake },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedServiceTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedServiceTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[#2C3E35] text-white shadow-sm font-semibold"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-[#F5F0EB]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#C5A059]" : "text-stone-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#EFE8DF] shadow-xs">
          {/* TAB 1: 의료 & 간호 서비스 */}
          {selectedServiceTab === "health" && (
            <div className="space-y-8">
              <div className="border-b border-stone-100 pb-6">
                <span className="text-xs font-semibold text-[#C5A059] uppercase">
                  MEDICAL & 24H NURSING CARE
                </span>
                <h3 className="font-serif-kr text-2xl font-bold text-[#2C3E35] mt-1">
                  24시간 안심 전문 의료 & 간호 서비스
                </h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  간호팀장과 전문 간호인력이 24시간 상주하여 어르신의 혈압, 혈당, 맥박 등 바이탈 사인을 주기적으로 체크하고 처방에 따른 안전한 투약과 전문 처치를 제공합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9]">
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35] mb-3 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-[#C5A059]" />
                    <span>정기 진료 및 협력병원 연계</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>계약 의사의 정기적인 방문 진찰 및 처방전 발급</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>부천 및 인근 지역 거점 협력병원과의 긴밀한 핫라인 연계</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>응급 상황 발생 시 119 구급대 및 응급의료센터 신속 이송 프로토콜</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9]">
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35] mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#C5A059]" />
                    <span>24시간 전문 간호 관리</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="break-keep leading-snug">매일 정기 바이탈 체크 및 처방전 기반 투약 관리</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="break-keep leading-snug">욕창 단계별 예방 드레싱 및 상처 치료 케어</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="break-keep leading-snug">비위관(L-tube), 도뇨관(Foley), 장루 위생 관리</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 재활 & 물리치료 */}
          {selectedServiceTab === "rehab" && (
            <div className="space-y-8">
              <div className="border-b border-stone-100 pb-6">
                <span className="text-xs font-semibold text-[#C5A059] uppercase">
                  REHABILITATION & PHYSICAL THERAPY
                </span>
                <h3 className="font-serif-kr text-2xl font-bold text-[#2C3E35] mt-1">
                  일상 회복과 통증 완화를 위한 전문 재활
                </h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  만성질환으로 굳어진 근육과 관절을 이완시키고 잔존 신체 기능을 보존하기 위해 전문 물리치료사가 1:1 맞춤 치료를 시행합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9]">
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35] mb-3">
                    01. 통증 완화 치료
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    <li>· 온열 및 적외선 광선치료</li>
                    <li>· 저주파 및 간섭파 전기자극치료</li>
                    <li>· 혈액순환 촉진 공기압 마사지</li>
                    <li>· 굳어진 관절 스트레칭 및 이완</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9]">
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35] mb-3">
                    02. 관절 및 근력 운동치료
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    <li>· 평행봉 보행 및 워커 보행 훈련</li>
                    <li>· 하지 근력강화 및 균형 감각 유지</li>
                    <li>· 매트 및 침상 이동 훈련</li>
                    <li>· 기립 및 착석 안정화 반복 학습</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9]">
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35] mb-3">
                    03. 일상생활 동작(ADL) & 삼킴치료
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    <li>· 흡인성 폐렴 예방 삼킴장애 재활</li>
                    <li>· 수저 쥐기 등 소근육 손기능 훈련</li>
                    <li>· 스스로 옷 입기 및 세면 동작 연습</li>
                    <li>· 침상 잔존 기능 유지 케어</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 100% 직영 영양 관리 */}
          {selectedServiceTab === "meals" && (
            <div className="space-y-8">
              <div className="border-b border-stone-100 pb-6">
                <span className="text-xs font-semibold text-[#C5A059] uppercase">
                  MOM&apos;S WARM NUTRITION
                </span>
                <h3 className="font-serif-kr text-2xl font-bold text-[#2C3E35] mt-1">
                  엄마의 손맛을 담은 100% 직영 영양 식단
                </h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  외부 위탁 없이 영양사와 조리장이 매일 새벽 배송된 신선한 친환경 식자재로 정갈한 집밥을 조리합니다. 어르신의 소화 능력과 저염·당뇨 식이를 철저히 반영합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9]">
                  <div className="w-8 h-8 rounded-full bg-[#2C3E35] text-[#C5A059] flex items-center justify-center text-xs font-bold mb-3">
                    1
                  </div>
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35] mb-1">
                    100% 자체 직영 조리
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    조리 인력을 자체 고용하여 어르신의 건강 상태와 기호에 맞춘 따뜻한 집밥을 즉시 반영합니다.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9]">
                  <div className="w-8 h-8 rounded-full bg-[#2C3E35] text-[#C5A059] flex items-center justify-center text-xs font-bold mb-3">
                    2
                  </div>
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35] mb-1">
                    친환경 식재료 & 저염식
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    고혈압, 당뇨 등 만성질환을 고려한 저염·저당 건강 조리법과 양질의 단백질 공급을 보장합니다.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9]">
                  <div className="w-8 h-8 rounded-full bg-[#2C3E35] text-[#C5A059] flex items-center justify-center text-xs font-bold mb-3">
                    3
                  </div>
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35] mb-1">
                    개인별 맞춤 식이 형태
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    치아 상태와 연하 기능에 따라 <strong>일반식, 죽식, 다진식(연식), 유동식</strong>으로 부드럽게 조리합니다.
                  </p>
                </div>
              </div>

              {/* Sample Weekly Menu Viewer */}
              <div className="mt-6 pt-6 border-t border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C5A059]" />
                    <h4 className="font-serif-kr text-base font-bold text-[#2C3E35]">
                      금주의 송내 엄마 영양 식단표 미리보기
                    </h4>
                  </div>
                  <span className="text-xs text-stone-500">요일을 선택해 식단을 확인하세요</span>
                </div>

                {/* Day selector */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {SAMPLE_MEAL_PLAN.map((item, idx) => (
                    <button
                      key={item.day}
                      onClick={() => setActiveMealDay(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 cursor-pointer ${
                        activeMealDay === idx
                          ? "bg-[#2C3E35] text-white font-semibold"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {item.day}
                    </button>
                  ))}
                </div>

                {/* Selected Day Menu Card */}
                <div className="mt-4 p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <div className="text-[11px] font-semibold text-[#C5A059] mb-1">아침</div>
                    <div className="text-xs text-stone-800 leading-relaxed">
                      {SAMPLE_MEAL_PLAN[activeMealDay].breakfast}
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <div className="text-[11px] font-semibold text-[#C5A059] mb-1">점심</div>
                    <div className="text-xs text-stone-800 leading-relaxed font-medium">
                      {SAMPLE_MEAL_PLAN[activeMealDay].lunch}
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <div className="text-[11px] font-semibold text-[#C5A059] mb-1">저녁</div>
                    <div className="text-xs text-stone-800 leading-relaxed">
                      {SAMPLE_MEAL_PLAN[activeMealDay].dinner}
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <div className="text-[11px] font-semibold text-[#C5A059] mb-1">오후 간식</div>
                    <div className="text-xs text-stone-800 leading-relaxed">
                      {SAMPLE_MEAL_PLAN[activeMealDay].snack}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 치매 & 전문요양 서비스 */}
          {selectedServiceTab === "dementia" && (
            <div className="space-y-8">
              <div className="border-b border-stone-100 pb-6">
                <span className="text-xs font-semibold text-[#C5A059] uppercase">
                  DEMENTIA & SPECIALIZED NURSING
                </span>
                <h3 className="font-serif-kr text-2xl font-bold text-[#2C3E35] mt-1">
                  치매 & 전문요양 1:1 밀착 수발 서비스
                </h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  국민건강보험공단 치매전문교육을 이수한 숙련된 인력이 상주하여 불안감과 배회를 낮추고 인지 기능을 보존하는 현실인식 및 지남력 훈련을 매일 진행합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9] space-y-3">
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35]">
                    치매 맞춤형 인지 강화 프로그램
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>시간, 장소, 계절을 일깨우는 일상 지남력 및 현실인식 훈련</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>옛 기억을 자극하는 회상 치료 및 음악·미술 표현 활동</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>배회 및 수면 장애를 완화하는 정서 안정 아로마 및 손 마사지</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9] space-y-3">
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35]">
                    중증 어르신 전문요양 케어
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>2시간 간격 체위 변경 및 욕창 방지 에어매트리스 집중 가동</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>경관영양(L-tube), 산소 공급, 가래 흡인(Suction) 위생 관리</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>생애말기 어르신을 위한 평안하고 존엄한 완화 간호 지원</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: 정서 & 여가 프로그램 */}
          {selectedServiceTab === "activities" && (
            <div className="space-y-8">
              <div className="border-b border-stone-100 pb-6">
                <span className="text-xs font-semibold text-[#C5A059] uppercase">
                  ACTIVE EMOTIONAL CARE
                </span>
                <h3 className="font-serif-kr text-2xl font-bold text-[#2C3E35] mt-1">
                  웃음과 활력을 더하는 주간 여가 프로그램
                </h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  어르신의 신체 및 인지 상태에 맞춘 주 5회 이상의 다채로운 그룹 활동을 사회복지사와 전문 강사진이 정성껏 운영합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9] space-y-2">
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35]">
                    신체 & 인지 활동
                  </h4>
                  <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-1">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A059] font-bold">· 실버 건강 체조:</span>
                      <span>낙상 예방 스트레칭, 실버 체조, 가벼운 공놀이, 보행 훈련</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A059] font-bold">· 인지 자극 요법:</span>
                      <span>원예 화분 가꾸기, 종이접기, 미술치료, 두뇌 자극 낱말 퀴즈</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#F5F0EB] border border-[#E8DFC9] space-y-2">
                  <h4 className="font-serif-kr text-base font-bold text-[#2C3E35]">
                    여가 & 계절 축제
                  </h4>
                  <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-1">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A059] font-bold">· 정서 안정 여가:</span>
                      <span>신바람 노래교실, 웃음치료, 추억의 영화 감상, 따뜻한 다도 시간</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A059] font-bold">· 특별 행사:</span>
                      <span>어르신 생신 잔치, 어버이날 카네이션 축제, 명절 송편 빚기, 설 잔치</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

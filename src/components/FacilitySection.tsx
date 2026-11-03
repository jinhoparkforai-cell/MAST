import React, { useState } from "react";
import {
  Building2,
  Maximize2,
  Layers,
  MapPin,
  Sparkles,
  CheckCircle2,
  Eye,
  Heart,
} from "lucide-react";
import { FACILITY_OVERVIEW, FLOOR_GUIDE } from "../data/buchuData";

interface FacilitySectionProps {
  onOpenPhotoLightbox: (photo: { src: string; title: string; desc: string }) => void;
}

export const FacilitySection: React.FC<FacilitySectionProps> = ({
  onOpenPhotoLightbox,
}) => {
  const [selectedFloorIndex, setSelectedFloorIndex] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState<"all" | "living" | "medical" | "amenity">("all");

  const galleryItems = [
    {
      id: "room-1",
      category: "living",
      categoryName: "생활공간",
      title: "어르신 맞춤 침실 (1인실 / 2인실 / 다인실)",
      desc: "따뜻한 자연 채광이 쏟아지는 큰 창문과 전동 의료 침대, 안전 손잡이가 완비된 내 집 같은 생활실",
      src: "/src/assets/images/buchu_room_interior_1793679737743.jpg",
    },
    {
      id: "rehab-1",
      category: "medical",
      categoryName: "의료/재활공간",
      title: "B1F 전문 물리치료 및 보행 재활센터",
      desc: "평행봉 보행 훈련기, 온열 및 전기치료기, 공기압 마사지기를 갖춘 1:1 맞춤형 재활센터",
      src: "/src/assets/images/buchu_rehab_center_1793679738206.jpg",
    },
    {
      id: "cafe-1",
      category: "amenity",
      categoryName: "편의시설",
      title: "1F 가족 면회 라운지 & 인포메이션",
      desc: "가족들이 주말이나 퇴근 후 언제든 편안히 찾아와 담소를 나누실 수 있는 아늑한 면회 라운지",
      src: "/src/assets/images/buchu_dining_cafe_1793679738159.jpg",
    },
    {
      id: "living-lounge",
      category: "living",
      categoryName: "생활공간",
      title: "층별 어르신 휴게 거실 & 케어존",
      desc: "층마다 마련된 편안한 소파와 TV가 있는 넓은 거실에서 다른 어르신들과 자연스럽게 어울리는 공간",
      src: "/src/assets/images/buchu_hero_interior_1793679736816.jpg",
    },
    {
      id: "garden-terrace",
      category: "amenity",
      categoryName: "편의시설",
      title: "도심 속 힐링 테라스 쉼터",
      desc: "맑은 바람을 쐬고 햇살을 맞으며 가벼운 기분 전환을 하실 수 있는 야외 휴식 테라스",
      src: "/src/assets/images/buchu_rooftop_garden_1793679738842.jpg",
    },
  ];

  const filteredGallery = activeGalleryTab === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeGalleryTab);

  const selectedFloor = FLOOR_GUIDE[selectedFloorIndex];

  return (
    <section id="facility" className="py-20 lg:py-28 bg-[#F5F0EB] text-[#1E2C25] border-t border-[#E8DFC9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
            시설 안내
          </span>
          <h2 className="font-serif-kr text-2xl sm:text-4xl font-semibold text-[#2C3E35] mt-2 mb-4">
            엄마의 품처럼 따뜻하고 안전한 공간
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            지하 1층부터 지상 4층 규모, 단 88분만을 위한 아늑하고 쾌적한 도심형 요양원입니다.
            전 층 무문턱 설계와 안전 손잡이, 24시간 간호 스테이션으로 어르신의 안전을 철저히 지킵니다.
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto opacity-70 mt-4" />
        </div>

        {/* Facility Spec Summary Cards */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9] shadow-xs mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            <div className="flex items-start gap-3.5 pt-2 md:pt-0">
              <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-stone-500 font-medium">시설 위치</div>
                <div className="text-sm font-semibold text-[#2C3E35] mt-1">
                  {FACILITY_OVERVIEW.address}
                </div>
                <div className="text-xs text-stone-500 mt-0.5">
                  1호선 송내역 인근 / 도심 접근성 우수
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-6">
              <Building2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-stone-500 font-medium">건물 규모</div>
                <div className="text-sm font-semibold text-[#2C3E35] mt-1">
                  지하 1층 ~ 지상 4층
                </div>
                <div className="text-xs text-stone-500 mt-0.5">
                  재활센터, 힐링 목욕실, 가족 면회실 완비
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-6">
              <Heart className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-stone-500 font-medium">입소 정원</div>
                <div className="text-sm font-semibold text-[#2C3E35] mt-1">
                  정원 88명 한정
                </div>
                <div className="text-xs text-stone-500 mt-0.5">
                  대형 시설의 번잡함 없는 1:1 밀착 안심 케어
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Floor Guide (B1F ~ 4F) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-semibold text-[#C5A059] uppercase">FLOOR GUIDE</span>
              <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#2C3E35]">
                층별 시설 안내
              </h3>
            </div>
            <span className="text-xs text-stone-500 hidden sm:inline">
              층을 선택하여 세부 시설 구성을 확인하세요
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Floor Navigation Buttons */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
              {FLOOR_GUIDE.map((floor, idx) => (
                <button
                  key={floor.floor}
                  onClick={() => setSelectedFloorIndex(idx)}
                  className={`text-left px-4 py-3.5 rounded-xl border transition-all shrink-0 lg:shrink cursor-pointer ${
                    selectedFloorIndex === idx
                      ? "bg-[#2C3E35] border-[#2C3E35] shadow-sm text-white font-semibold"
                      : "bg-[#EAE4D7] border-transparent text-stone-700 hover:bg-white/70"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif-kr text-base">{floor.floor}</span>
                    <span className={`text-xs hidden lg:inline ${selectedFloorIndex === idx ? "text-[#C5A059]" : "text-stone-500"}`}>
                      {floor.title.split("/")[0]}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Floor Detail Card */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9] shadow-xs flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F0EB] border border-[#E8DFC9] text-xs font-serif-kr text-[#2C3E35] font-bold mb-3">
                  <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{selectedFloor.floor}</span>
                </div>
                <h4 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#2C3E35] mb-3">
                  {selectedFloor.title}
                </h4>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-serif-kr mb-6">
                  {selectedFloor.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-stone-100">
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    주요 설비 및 편의 기능
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedFloor.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>모든 생활공간 무문턱 및 안전바 시공 완비</span>
                <span className="text-[#C5A059] font-semibold">송내 엄마 요양원</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="my-10">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-[#C5A059] uppercase">GALLERY</span>
            <h3 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#2C3E35] mt-1">
              공간 갤러리
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              어르신께서 매일 생활하시는 아늑하고 위생적인 공간들을 살펴보세요.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { id: "all", label: "전체보기" },
                { id: "living", label: "생활공간 (1인/2인/다인실)" },
                { id: "medical", label: "의료/재활공간" },
                { id: "amenity", label: "편의시설 (로비/면회실)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    activeGalleryTab === tab.id
                      ? "bg-[#2C3E35] text-white shadow-xs font-semibold"
                      : "bg-white text-stone-700 border border-stone-200/80 hover:bg-stone-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenPhotoLightbox(item)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8DFC9] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#2C3E35] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 shadow-sm">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#2C3E35]/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-md font-medium">
                    {item.categoryName}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif-kr text-base font-semibold text-[#2C3E35] group-hover:text-[#C5A059] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#C5A059] font-medium">
                    <span>클릭하여 사진 확대보기</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

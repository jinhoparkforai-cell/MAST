import React, { useState } from "react";
import { X, Calendar, CheckCircle, Utensils, MapPin, Phone } from "lucide-react";
import { FACILITY_OVERVIEW } from "../data/buchuData";

interface VisitBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitBookingModal: React.FC<VisitBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [visitorName, setVisitorName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("14:00");
  const [visitorCount, setVisitorCount] = useState("2명");
  const [wantMealTrial, setWantMealTrial] = useState(false);
  const [memo, setMemo] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName || !phone) return;
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] w-full max-w-lg rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#2C3E35] px-6 py-4 flex items-center justify-between text-white">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#C5A059]">VISIT RESERVATION</div>
            <h3 className="font-serif-kr text-lg font-bold">송내 엄마 요양원 방문 상담 & 공간 투어</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {isBooked ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-serif-kr text-xl font-bold text-[#2C3E35]">
                방문 상담 예약이 접수되었습니다!
              </h4>
              <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                {visitorName} 보호자님, 예약해 주신 일시에 맞춰 시설장이 직접 맞이하고 1인/2인/다인실 생활공간, 재활센터, 직영 급식 안내를 정성껏 제공해 드립니다.
              </p>
              <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 text-left space-y-1.5 mt-4">
                <div className="flex justify-between">
                  <span className="text-stone-500">예약 일시:</span>
                  <span className="font-medium">{date || "협의 일정"} {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">방문 인원:</span>
                  <span className="font-medium">{visitorCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">식사 체험:</span>
                  <span className="font-medium text-[#2C3E35]">{wantMealTrial ? "신청 (엄마표 직영 식단)" : "미신청"}</span>
                </div>
                <div className="flex justify-between border-t border-stone-100 pt-1.5 mt-1.5">
                  <span className="text-stone-500">오시는 곳:</span>
                  <span className="font-medium text-stone-800">{FACILITY_OVERVIEW.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">상담 문의:</span>
                  <span className="font-bold text-[#2C3E35] font-mono">{FACILITY_OVERVIEW.phone}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-lg bg-[#2C3E35] text-white text-xs font-semibold hover:bg-[#1e2c25] mt-4"
              >
                확인 및 닫기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-white rounded-xl border border-[#E8DFC9] text-xs text-stone-600 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#2C3E35]">시설장 1:1 단독 프라이빗 투어</div>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    동시간대 1팀 단독 진행으로 어르신 상태에 맞춘 편안한 상담이 가능합니다.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    예약자 성함 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    휴대전화 번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    방문 희망일
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    방문 희망 시간
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-white"
                  >
                    <option value="10:00">오전 10:00</option>
                    <option value="11:30">오전 11:30 (식사체험 연계)</option>
                    <option value="14:00">오후 02:00</option>
                    <option value="15:30">오후 03:30</option>
                    <option value="17:00">오후 05:00</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    방문 인원
                  </label>
                  <select
                    value={visitorCount}
                    onChange={(e) => setVisitorCount(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-white"
                  >
                    <option value="1명">1명</option>
                    <option value="2명">2명</option>
                    <option value="3명 이상">3명 이상 (가족동반)</option>
                  </select>
                </div>
              </div>

              {/* Meal Trial Option */}
              <div
                onClick={() => setWantMealTrial(!wantMealTrial)}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                  wantMealTrial
                    ? "bg-[#2C3E35]/10 border-[#2C3E35]"
                    : "bg-white border-stone-200"
                }`}
              >
                <div className="flex items-center gap-2.5 text-xs">
                  <Utensils className="w-4 h-4 text-[#C5A059]" />
                  <div>
                    <div className="font-semibold text-[#2C3E35]">
                      엄마표 100% 직영 영양 식단 사전 시식 체험 신청
                    </div>
                    <div className="text-[11px] text-stone-500">
                      어르신이 드실 친환경 식사를 보호자님이 방문 시 직접 맛보실 수 있습니다.
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={wantMealTrial}
                  onChange={() => {}}
                  className="rounded text-[#2C3E35]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  어르신 건강 상태 및 문의 사항 (선택)
                </label>
                <textarea
                  rows={2}
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="장기요양 등급 여부, 치매 증상, 거동 상태, 등급 신청 지원 필요 여부 등"
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#2C3E35] hover:bg-[#1e2c25] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
              >
                방문 상담 예약 확정하기
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

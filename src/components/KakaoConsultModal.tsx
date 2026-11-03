import React, { useState } from "react";
import { X, Send, MessageCircle, Phone } from "lucide-react";
import { FACILITY_OVERVIEW } from "../data/buchuData";

interface KakaoConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: "bot" | "user";
  text: string;
  time: string;
}

export const KakaoConsultModal: React.FC<KakaoConsultModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "안녕하세요! 부천 송내 엄마 요양원 1:1 상담 채널입니다. 어르신 입소 및 장기요양 등급에 대해 편하게 물어보세요. 😊",
      time: "방금 전",
    },
    {
      sender: "bot",
      text: "아래 추천 질문을 누르시거나 직접 문의 내용을 입력해 주시면 시설장이 신속히 안내해 드립니다.",
      time: "방금 전",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [callerPhone, setCallerPhone] = useState("");
  const [phoneRegistered, setPhoneRegistered] = useState(false);

  if (!isOpen) return null;

  const quickQuestions = [
    {
      q: "장기요양 등급 신청도 도와주시나요?",
      a: "네, 아직 등급이 없으시더라도 국민건강보험공단 등급 신청부터 의사소견서 발급, 방문 조사 대비까지 무료로 친절하게 안내 및 동행해 드립니다.",
    },
    {
      q: "입소 정원과 침실 형태가 궁금해요",
      a: "송내 엄마 요양원은 총 88인 정원의 아늑하고 안전한 도심형 시설입니다. 어르신의 성향과 건강 상태에 맞춰 1인실, 2인실, 다인실을 운영하고 있습니다.",
    },
    {
      q: "식사는 어떻게 제공되나요?",
      a: "100% 직영 조리실에서 영양사와 조리장이 매일 새벽 배송된 친환경 식재료로 정성껏 만듭니다. 어르신의 치아와 소화 상태에 맞춰 일반식, 죽식, 다진식으로 맞춤 제공됩니다.",
    },
    {
      q: "방문 상담 및 투어는 언제 가능한가요?",
      a: "연중무휴 매일 09:00~18:00 사전 예약 후 편안하게 방문 투어가 가능합니다. 시설장님이 1:1로 직접 시설과 케어 프로그램을 안내해 드립니다.",
    },
  ];

  const handleSendQuestion = (question: string, answer: string) => {
    const userMsg: Message = {
      sender: "user",
      text: question,
      time: "방금 전",
    };
    const botMsg: Message = {
      sender: "bot",
      text: answer,
      time: "방금 전",
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: inputText,
      time: "방금 전",
    };
    const botMsg: Message = {
      sender: "bot",
      text: `문의해 주신 "${inputText}" 내용을 전문 상담실장에게 접수하였습니다. 신속한 맞춤 상담을 위해 아래에 연락처를 남겨주시면 곧바로 친절히 안내드립니다.`,
      time: "방금 전",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputText("");
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callerPhone.trim()) return;
    setPhoneRegistered(true);
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: `보호자님의 연락처(${callerPhone})로 상담 요청이 완료되었습니다. 담당자가 상세한 안내 연락을 드리겠습니다. 감사합니다.`,
        time: "방금 전",
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] w-full max-w-lg rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#2C3E35] px-5 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#C5A059] text-[#2C3E35] flex items-center justify-center font-bold text-sm">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-sm font-bold leading-tight">송내 엄마 요양원 1:1 상담</div>
              <div className="text-[11px] text-stone-300">전문 상담사 실시간 응대 중</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FAF7F2] text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                  m.sender === "user"
                    ? "bg-[#2C3E35] text-white font-medium rounded-tr-xs"
                    : "bg-white text-stone-800 border border-stone-200/80 shadow-2xs rounded-tl-xs"
                }`}
              >
                {m.text}
              </div>
              <span className="text-[10px] text-stone-400 mt-1 px-1">{m.time}</span>
            </div>
          ))}

          {/* Quick FAQ Suggestion Chips */}
          <div className="pt-2">
            <div className="text-[11px] font-semibold text-stone-500 mb-2">
              자주 묻는 질문 바로 확인하기
            </div>
            <div className="flex flex-wrap gap-1.5">
              {quickQuestions.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleSendQuestion(item.q, item.a)}
                  className="px-2.5 py-1.5 rounded-full bg-white border border-stone-300 text-stone-700 hover:border-[#C5A059] hover:text-[#2C3E35] transition-colors text-left text-[11px] cursor-pointer"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Contact Form */}
          {!phoneRegistered && (
            <div className="p-3 bg-white rounded-xl border border-[#E8DFC9] mt-3">
              <div className="text-[11px] font-semibold text-stone-800 mb-1">
                전화 상담 간편 요청
              </div>
              <form onSubmit={handlePhoneSubmit} className="flex gap-2">
                <input
                  type="tel"
                  required
                  value={callerPhone}
                  onChange={(e) => setCallerPhone(e.target.value)}
                  placeholder="보호자 연락처 입력"
                  className="flex-1 text-xs p-2 rounded-lg border border-stone-200 bg-[#FAF7F2]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#2C3E35] text-white rounded-lg text-xs font-medium cursor-pointer"
                >
                  요청
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleCustomSend}
          className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="궁금하신 사항을 입력하세요..."
            className="flex-1 text-xs p-2.5 rounded-lg border border-stone-200 bg-[#FAF7F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
          />
          <button
            type="submit"
            className="p-2.5 rounded-lg bg-[#2C3E35] hover:bg-[#1e2c25] text-white transition-colors cursor-pointer"
            aria-label="메시지 전송"
          >
            <Send className="w-4 h-4 fill-current text-[#C5A059]" />
          </button>
        </form>

        {/* Bottom direct dial fallback */}
        <div className="bg-[#FAF7F2] px-4 py-2 border-t border-stone-200/80 flex items-center justify-between text-[11px] text-stone-500">
          <span>직접 유선 통화를 원하시면:</span>
          <a
            href={`tel:${FACILITY_OVERVIEW.phone}`}
            className="font-bold text-[#2C3E35] flex items-center gap-1 hover:underline font-mono"
          >
            <Phone className="w-3 h-3 text-[#C5A059]" />
            <span>{FACILITY_OVERVIEW.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

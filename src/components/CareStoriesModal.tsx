import React from "react";
import { X, Heart, Calendar, Smile, Sun, Coffee } from "lucide-react";

interface CareStoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareStoriesModal: React.FC<CareStoriesModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const stories = [
    {
      title: "함박눈 내리던 날, 침대로 배달된 작은 겨울",
      date: "2024. 12. 18",
      category: "일상의 감동",
      icon: Smile,
      desc: "허리 수술로 침상에 누워 계셔야 하는 이○○ 어르신께 바깥의 새하얀 설경을 보여드리고 싶었던 요양보호사 선생님. 뽀드득 소리가 나는 깨끗한 함박눈을 장갑 낀 손에 가득 담아 달려갔을 때, 어르신의 얼굴에 번진 함박웃음은 그날 우리 모두의 가장 따뜻한 난로가 되었습니다.",
    },
    {
      title: "옥상 치유테라스에서 첫 수확한 바질과 상추",
      date: "2024. 09. 25",
      category: "원예 치유",
      icon: Sun,
      desc: "9층 하늘정원 치유테라스에서 어르신들이 손수 물을 주고 가꾸신 텃밭 작물들을 수확했습니다. 옛 시골집 마당 이야기를 들려주시며 흙을 만지시는 어르신들의 눈빛에서 잃어버렸던 생기와 활력을 다시 발견합니다.",
    },
    {
      title: "매일 아침 9시, 전 직종이 마주 앉는 30분의 기적",
      date: "2024. 08. 10",
      category: "전문 케어",
      icon: Coffee,
      desc: "간호사, 요양보호사, 물리치료사, 영양사, 사회복지사가 한 자리에 모여 어르신 한 분 한 분의 지난밤 수면, 식사량, 배변, 감정 상태를 정밀하게 공유합니다. 작은 변화도 놓치지 않는 밀착 소통이 부추꽃의 가장 든든한 힘입니다.",
    },
    {
      title: "가족과 함께한 사계절 생신 잔치",
      date: "2024. 07. 15",
      category: "가족의 연결",
      icon: Heart,
      desc: "게스트하우스에서 열린 팔순 생신 모임. 멀리 지방에서 올라온 자녀분들과 손주들이 한자리에 모여 직접 끓인 미역국과 정성껏 준비한 떡케이크로 어르신께 가장 행복한 하루를 선물해 드렸습니다.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#8E6D38] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-current text-[#FAF7F2]" />
            <div>
              <div className="text-xs uppercase tracking-wider text-[#FAF7F2]/80">CARE STORIES</div>
              <h3 className="font-serif-kr text-lg font-bold">부추꽃 돌봄 이야기</h3>
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

        {/* Story Feed */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-xs text-stone-600">
            부추꽃더클래식 너싱홈에서 매일 꽃피는 어르신과 직원들의 진솔하고 따뜻한 일상 기록입니다.
          </p>

          <div className="space-y-4">
            {stories.map((story, idx) => {
              const Icon = story.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-[#E7E0D3] shadow-xs space-y-2 hover:border-[#8E6D38]/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#8E6D38]">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{story.category}</span>
                    </span>
                    <span className="text-stone-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{story.date}</span>
                    </span>
                  </div>

                  <h4 className="font-serif-kr text-base font-bold text-stone-900 pt-1">
                    {story.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-serif-kr">
                    {story.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

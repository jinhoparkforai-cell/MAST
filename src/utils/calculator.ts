export interface CostCalculationInput {
  grade: 1 | 2 | 3 | 4 | 5;
  copayRate: 0.20 | 0.12 | 0.08 | 0.0; // 20% 일반, 12% 감경, 8% 감경, 0% 기초수급
  roomType: "single" | "double" | "standard";
  mealsPerDay: number; // usually 3 meals
  hasSnack: boolean;
  days: number; // 30 or 31
}

export interface CostCalculationResult {
  dailyStandardFee: number;
  totalMonthlyStandardFee: number;
  nhisSupportAmount: number; // 공단 부담금 (국가 지원금)
  legalCopayAmount: number; // 법정 본인부담금
  mealFee: number; // 식재료비
  snackFee: number; // 간식비
  roomSurcharge: number; // 상급침실료 (1인실/2인실)
  totalMonthlyPatientCost: number; // 최종 보호자 실부담금
}

// 2024~2026 장기요양 시설급여 수가 (1일당 기준)
const DAILY_FEES: Record<number, number> = {
  1: 84530,
  2: 78420,
  3: 73880,
  4: 73880,
  5: 73880,
};

const ROOM_DAILY_SURCHARGE: Record<string, number> = {
  single: 60000, // 1인실 프리미엄 상급침실료
  double: 25000, // 2인실 상급침실료
  standard: 0,   // 기준실(다인실)
};

const MEAL_UNIT_PRICE = 4000; // 1식당 친환경 직영 식재료비
const SNACK_UNIT_PRICE = 1500; // 1일 간식비

export function calculateNursingHomeCost(input: CostCalculationInput): CostCalculationResult {
  const days = input.days || 30;
  const dailyFee = DAILY_FEES[input.grade] || DAILY_FEES[3];
  const totalMonthlyStandardFee = dailyFee * days;

  // 법정 본인부담금
  const legalCopayAmount = Math.round(totalMonthlyStandardFee * input.copayRate);
  // 공단 지원금
  const nhisSupportAmount = totalMonthlyStandardFee - legalCopayAmount;

  // 식대 & 간식비 (비급여)
  const mealFee = input.copayRate === 0 ? 0 : input.mealsPerDay * MEAL_UNIT_PRICE * days;
  const snackFee = input.copayRate === 0 ? 0 : (input.hasSnack ? SNACK_UNIT_PRICE * days : 0);

  // 상급침실료 (비급여)
  const roomDailyRate = ROOM_DAILY_SURCHARGE[input.roomType] || 0;
  const roomSurcharge = roomDailyRate * days;

  // 총 본인부담금
  const totalMonthlyPatientCost = legalCopayAmount + mealFee + snackFee + roomSurcharge;

  return {
    dailyStandardFee: dailyFee,
    totalMonthlyStandardFee,
    nhisSupportAmount,
    legalCopayAmount,
    mealFee,
    snackFee,
    roomSurcharge,
    totalMonthlyPatientCost,
  };
}

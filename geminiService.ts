
import { GoogleGenAI } from "@google/genai";

export const getFinancialAdvice = async (principal: number, rate: number, safetyOn: boolean) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `身為一名資深理財顧問，請針對以下「口袋建議」投資組合設定給予專業建議：
      - 初始投入本金：${principal} TWD
      - 每月自動贖回比例：${rate}%
      - 80% 本金保護機制：${safetyOn ? "已開啟" : "未開啟"}
      
      請簡短分析其現金流健康度、風險承受度，並提醒投資人注意事項。
      要求：建議說明必須精簡且專業，總長度不可超過 150 字。`
    });
    return response.text;
  } catch (error) {
    console.error("AI 獲取建議失敗", error);
    return "無法取得建議，請稍後再試。";
  }
};
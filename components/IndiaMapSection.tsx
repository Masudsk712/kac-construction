"use client";

import { useState } from "react";

type StateDataType = {
  [key: string]: {
    name: string;
    completed: number;
    ongoing: number;
    upcoming: number;
  };
};

const stateData: StateDataType = {
  IN_AP: { name: "Andhra Pradesh", completed: 10, ongoing: 2, upcoming: 1 },
  IN_WB: { name: "West Bengal", completed: 12, ongoing: 3, upcoming: 1 },
  IN_UP: { name: "Uttar Pradesh", completed: 20, ongoing: 6, upcoming: 2 },
  // 👉 yaha aur states add karte jaana
};

export default function IndiaMap() {
  const [activeState, setActiveState] = useState<string | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-10 items-center justify-center p-10 bg-[#020617] text-white">
      
      {/* LEFT MAP */}
      <svg
        viewBox="0 0 1000 1000"
        className="w-[500px] h-auto"
      >
        {/* 👉 Example states (tu yaha real path paste karega) */}

        {/* ANDHRA PRADESH */}
        <path
          id="IN-AP"
          d="M466.4,665.15L465.86,668.59L464.82,667.1L464.8,665.99ZM465.5,665.21L464.95,664.95L463.21,665.09L463.13,664.08L461.88,664.88L464.28,665.94L464.25,667.37L464.88,667.57L465.8,669.64L455.23,674.84L448.74,677.41L443.55,675.93L439.25,676.44L435.56,678.29L431.97,686.2L432.11,687.54L428.09,691.82L427.71,692.47L428.24,693.67L426.93,694.82L422.74,695.39L421.54,693.36L422.26,691.49L418.83,690.28L414.5,691.12L411.42,692.6L408.78,694.35L406.76,696.62L404.76,702.82L401.82,707.5L400.34,714.46L402.27,724.83L404.7,729.13L402.7,743.05L406.03,752.05L405.79,757.41L408.07,763.55L403.9,755.93L403.12,755.57L402.96,758.21L402.1,757.35L400.43,758.95L403.63,761.88L405.79,761.93L407.98,763.88L407.98,765.46L406.94,764.87L405.61,762.26L403.35,762.2L400.96,760.45L398.78,760.69L399.12,761.94L398.82,762.78L397.85,763.02L397.88,764.02L397,764.42L397.61,765.32L396.79,766.45L394.64,767.42L393.17,767.39L392.58,768.05L391.83,767.44L390.88,768.35L392.72,769.8L391.55,770.65L390.93,769.85L389.94,770.28L389.5,769.62L389.36,768.06L386.8,769.15L385.89,768.5L385.52,767.19L382.42,766.82L380.85,767.43L382.31,768.08L381.9,770.14L382.27,770.87L380.08,771.59L380.27,772.58L378.92,773.56L377.75,772.24L376.33,772.41L376.33,773.35L375.48,773.92L374.43,776.22L372.01,776.02L369.42,774.17L367.53,774.42L366.59,775.85L366.42,773.88L362.66,775.09L361.4,774.77L361.15,776.31L359.91,775.91L358.83,777.06L359.18,778.84L357.91,783.24L356.86,784.04L356.92,785.77L355.35,785.24L355.21,786.43L354.32,786.46L354.37,787.79L351.73,787.96L349.47,786.74L348.72,785.58L347.65,784.89L347.46,783.78L348.05,780.97L349.84,780.97L351.07,778.57L352.02,779.55L353.68,779.39L353.3,777.37L354.32,777.53L354.14,775.5L355.67,774.87L355.79,772.88L357.54,771.79L356.72,770.88L357.53,770.37L357.78,768.65L357.15,767.54L356.14,768.84L354.72,767.29L353.69,767.57L353.36,766.95L351.35,765.88L352.38,759.25L347.66,758.98L346.38,759.89L346.68,758.11L345.72,757.9L345.58,757.15L343.41,757.54L342.76,756.6L342.92,755.97L344.12,756.08L344.24,755.31L343.53,754.62L344.49,753.33L344.36,751.42L342.26,750.05L342.16,751.06L340.64,750.8L340.08,752.04L339.47,752.04L339.41,750.25L340.43,749.86L340.1,748.15L338.51,749.74L337.8,748.73L335.81,748.62L335.47,749.4L336.08,750.83L334.59,751.57L334.66,752.25L332.76,752.92L332.26,753.79L331.34,754.06L330.92,753.36L328.22,755.13L327.17,754.31L326.96,756.04L325.15,756.34L325.37,752.73L323.96,752.66L324.42,751.59L322.54,751.28L321.39,751.87L321.01,750.93L319.38,751.46L318.9,749.81L317.31,750.86L315.72,751.17L316.83,752.02L316.95,753.99L314.89,753.8L313.87,754.46L312.9,753.49L311.92,754.35L311.22,752.21L313.17,748.89L310.14,746L311.41,744.73L310.02,742.88L308.77,742.77L308.99,741.93L310.31,741.73L310.44,741.03L312.7,741.52L312.37,743.75L312.82,745.09L315.64,745.42L316.39,746.93L321.2,745.94L322.37,747.2L322.21,749.76L324.5,749.38L323.93,748.58L324.59,747.61L323,747.59L323.23,746.45L321.57,745.99L323.57,743.59L323.03,742.81L323.41,741.74L326.61,742.17L326.49,738.56L325.29,738.56L324.93,737.43L323.29,736.98L322.98,737.87L324.16,740.35L323.24,740.95L322.42,739.81L322.53,738.64L320.22,738.44L320.27,736.79L318.84,737.39L316.53,736.59L315.37,738.1L315.17,740.31L314.31,740.43L313.57,739.53L310.33,739.51L309.96,738.56L310.69,737.9L308.63,736.34L308.75,735.02L309.62,734.33L310.44,734.75L310.51,733.39L311.36,732.4L308.38,732.69L307.14,731.06L306.33,730.92L305.19,728.7L306.29,724.73L305.77,723.39L307.76,722.65L308.21,717.86L307.15,718.25L305.3,717.69L305.9,716.29L305.6,714.64L306.25,714.06L308.56,715.92L311.6,716.48L312.15,715.9L313.49,715.91L314.41,716.78L316.59,713.17L316.71,710.97L315.63,710.15L316.88,709.02L316.41,708.22L315.47,708.09L315.31,706.97L313.91,707.13L312.92,703.73L311.27,702.06L312.9,701.79L312.98,697.77L314.49,697.19L315.49,698.03L315.75,697.01L313.38,694.74L313.98,692.07L312.78,691.81L314.04,689.78L316.28,688.54L319.33,688.02L326.88,689.14L329.68,689.41L331.2,690.47L332.85,690.16L335.26,690.81L337.82,689.88L341.13,690.99L342.12,689.7L342.91,691.43L344.24,691.95L344.71,691.3L345.84,691.3L346.28,689.75L347.96,688.89L348.5,685.81L350.22,685.88L352.81,684.32L357.25,685.05L358.93,683.77L361.72,685.95L363.5,686.04L365.28,684.12L365.32,682.03L366.05,682.14L366.33,683.43L367.42,683.58L367.27,681.27L367.85,680.66L370.9,679.35L375.12,680.21L376.34,679.53L376.53,671.43L377.71,669.82L382.36,669.19L384.4,667.74L388.76,666.79L392.44,664.75L393.46,665.93L394.95,665.69L396.12,667.52L397.74,667.39L400.34,664.27L400.97,662.21L399.91,661.03L398.71,660.71L399.23,659.38L400.28,657.62L402.82,657.01L404.22,655.21L404.78,656.17L406.54,656.25L407.67,657.9L408.19,660.47L409.33,660.96L409.74,662.28L410.52,661.12L412.05,662.16L412.16,662.92L415.24,663.74L416.43,662.99L415,661.87L415.3,660.53L415.93,660.38L415.86,658.79L413.17,658.14L413.07,659.07L409.32,657.46L410.2,656.14L409.57,654.86L410.38,654.22L411.12,655.82L411.86,656.05L412.9,655.05L413.31,653.3L415.16,652.39L417.95,653.91L417.46,654.9L419.95,654.61L423.04,655.79L423.8,655.03L424.14,652.14L425.38,652.15L425.15,650.48L427.63,651.13L429.23,650.1L432.6,649.53L433.14,646.81L435.62,646.88L437.29,644.74L438.65,645.75L439.92,645.62L442.17,642.97L442.4,640.22L443.04,639.3L442.45,638.69L444.42,635.71L444.58,634.55L450.53,631.33L450.83,630.71L449.83,629.47L451.07,628.17L455.43,626.47L457.54,624.46L461.47,624.9L461.96,625.9L463.82,626.84L464.56,626.64L464.56,624.75L465.45,624.34L466.37,625L466.48,621.89L465.69,620.27L466.46,619.65L466.58,618.12L467.59,617.88L468.2,616.89L466.51,616.56L467.95,614.98L467.28,613.74L470.55,609.86L471.27,610.93L471.97,610.87L472.32,614.36L474.21,614.99L474.52,615.67L473.51,616.88L473.64,618L474.97,619.26L475.89,617.5L479.02,616.14L479.79,614.19L479.29,613.44L479.96,612.84L481.28,613.74L482.43,613.65L482.64,615.05L483.82,615.52L486.27,614.51L486.85,613.46L486.21,612.68L488.35,609.83L486.71,609.53L486,608.29L486.1,606.75L487.24,606.28L489.62,602.67L491.6,603.59L492.12,602.87L493.47,603.14L493.86,602.14L496.08,601.82L496.15,600.85L497.24,600.89L497.67,600.01L495.8,597.94L495.29,598.25L494.6,596.02L495.79,595.4L497.6,595.82L498.75,595.72L499.6,595.06L499.46,593.33L501.15,595.54L501.58,593.45L502.51,594.18L503.26,593.01L502.97,592.02L503.81,591L505.94,595.2L506.19,596.16L507.35,598.21L508.34,598.53L507.17,596.37L508.55,595.45L510.95,601.26L512.96,601.93L515.49,601.76L517.07,603.52L518.27,603.41L519.09,602.57L524.32,602.07L524.43,599.79L525.46,599.77L527.13,598.35L526.73,597.6L528.35,596.28L528.87,595.07L531.09,593.72L531.71,595.31L532.64,593.37L531.83,591.91L533.84,591.98L533.95,590.91L535.03,591.08L534.79,592.05L536.73,593.53L531.58,599.49L530.74,602.05L528.19,604.48L525.02,609.25L518.34,615.52L518.31,616.8L506.58,622.76L502.34,625.67L501.09,627.77L497.64,630.98L497.64,631.99L495.74,634.58L491.95,638.66L474.41,647.6L467.49,652.97L465.44,655.57L464.69,658.36L464.03,658.67L464.24,660L465.85,661.41L467.08,661.06L466.75,664.49Z"
          fill={activeState === "IN-AP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN-AP")}
          style={{ cursor: "pointer" }}
        />

        {/* WEST BENGAL */}
        <path
          id="IN-WB"
          d="M700,400 L760,420 L750,500 L690,480 Z"
          fill={activeState === "IN-WB" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN-WB")}
          style={{ cursor: "pointer" }}
        />

        {/* UTTAR PRADESH */}
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN-UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN-UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN-UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN_UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />
        <path
          id="IN-UP"
          d="M500,300 L650,320 L640,400 L520,380 Z"
          fill={activeState === "IN-UP" ? "#00D4FF" : "#6f9c76"}
          stroke="#fff"
          onClick={() => setActiveState("IN_UP")}
          style={{ cursor: "pointer" }}
        />

        {/* 👉 yaha baki states ke path paste karte jaana */}
      </svg>

      {/* RIGHT CARD */}
      <div className="w-[300px] bg-[#111827] p-6 rounded-xl shadow-lg">
        {activeState && stateData[activeState] ? (
          <>
            <h2 className="text-2xl text-cyan-400 mb-4">
              {stateData[activeState].name}
            </h2>
            <p>✅ Completed: {stateData[activeState].completed}</p>
            <p>🚧 Ongoing: {stateData[activeState].ongoing}</p>
            <p>📌 Upcoming: {stateData[activeState].upcoming}</p>
          </>
        ) : (
          <p>Click any state</p>
        )}
      </div>
    </div>
  );
}
type Level = "01" | "02" | "03" | "04";
type SecondaryColor = "000000" | "121212" | "FFFFFF" | "FFFFFF0D";
type Neutral = "868686" | "777777" | "535353";
type Genre = "55A891" | "27856A" | "5F8109";
type ColorType = "Secondary" | "Neutral" | "Genre";
type SecColor = `${Extract<ColorType, "Secondary">}_${Level}`;
type NeuColor = `${Extract<ColorType, "Neutral">}_${Exclude<Level, "04">}`;
type GenreColor = `${Extract<ColorType, "Genre">}_${Exclude<Level, "04">}`;

type ColorList = SecondaryColor | Neutral | Genre;
type SetColorList = `#${ColorList}`;

type PriRecord = Record<SecColor | NeuColor | GenreColor, SetColorList>;

export const Colorize: PriRecord = {
  Secondary_01: "#000000", // 진한 까만색
  Secondary_02: "#121212", // 까만색
  Secondary_03: "#FFFFFF", // 흰색
  Secondary_04: "#FFFFFF0D", // 흰색-투명도 있는 버전
  Neutral_01: "#868686", // 연한 회색
  Neutral_02: "#777777", // 기본 회색
  Neutral_03: "#535353", // 진한 회색
  Genre_01: "#55A891", // 연한 청록색
  Genre_02: "#27856A", // 진한 청록색
  Genre_03: "#5F8109", // 녹색
};

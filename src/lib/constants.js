// src/lib/constants.js
// Language names, default thresholds, palette

import { ticks } from "d3-array";

export const LANGUAGE_OPTIONS = {
  num_eng: "English",
  num_not_eng: "Non-English",
  num_fra: "French",
  num_ara: "Arabic",
  num_fas: "Farsi",
  num_yid: "Yiddish",
  num_heb: "Hebrew",
  num_pol: "Polish",
  num_rus: "Russian",
  num_ukr: "Ukrainian",
  num_hun: "Hungarian",
  num_gre: "Greek",
  num_ita: "Italian",
  num_por: "Portuguese",
  num_spa: "Spanish",
  num_kor: "Korean",
  num_jpn: "Japanese",
  num_chi: "Chinese",
  num_vie: "Vietnamese",
  num_tgl: "Tagalog",
  num_pan: "Punjabi",
  num_tam: "Tamil",
  num_ben: "Bengali",
  num_guj: "Gujarati"
};

// Colors: BuPu (reversed lighter->darker so index 0 is light)
export const BUPU_COLORS = [
  "#e0ecf4",
  "#bfd3e6",
  "#9ebcda",
  "#8c96c6",
  "#8c6bb1",
  "#88419d",
  "#810f7c",
  "#4d004b"
];

// LANGUAGE_THRESHOLDS: choose thresholds to cover reasonable ranges.
// Where you previously used ticks(...), keep those here.
// NOTE: these are *suggested* defaults; you can override per-section.
export const LANGUAGE_THRESHOLDS = {
  num_eng: ticks(0, 7000, 12),
  num_not_eng: ticks(0, 7000, 12),
  num_fra: ticks(0, 350, 12),
  num_ara: ticks(0, 500, 12),
  num_fas: ticks(0, 700, 12),
  num_yid: [0, 21.875, 43.75, 87.5, 131.25, 175, 218.75, 262.5, 306.25, 350],
  num_heb: ticks(0, 175, 12),
  num_pol: ticks(0, 600, 12),
  num_rus: [0, 30, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
  num_ukr: ticks(0, 500, 12),
  num_hun: ticks(0, 200, 12),
  num_gre: ticks(0, 900, 12),
  num_ita: ticks(0, 2000, 12),
  num_por: ticks(0, 2000, 12),
  num_spa: ticks(0, 400, 12),
  num_kor: ticks(0, 600, 12),
  num_jpn: ticks(0, 80, 12),
  num_chi: ticks(0, 2000, 12), // cover up to ~2400 to include 2021 comfortably
  num_vie: ticks(0, 375, 12),
  num_tgl: ticks(0, 450, 12),
  num_pan: ticks(0, 1400, 12),
  num_tam: ticks(0, 500, 12),
  num_ben: ticks(0, 500, 12),
  num_guj: ticks(0, 300, 12)
};

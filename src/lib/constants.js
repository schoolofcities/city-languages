// src/lib/constants.js
// Language names, default thresholds, palette

import { ticks } from "d3-array";

// Map configuration
export const MAP_DIMENSIONS = {
  width: 1080,
  height: 750
};

export const MOBILE_BREAKPOINT = 768;

export const LANGUAGE_OPTIONS = {
  num_eng: "English",
  num_not_eng: "Non-English",
  num_fra: "French",
  num_ara: "Arabic",
  num_ben: "Bengali",
  num_chi: "Chinese",
  num_fas: "Farsi",
  num_gre: "Greek",
  num_guj: "Gujarati",
  num_heb: "Hebrew",
  num_hun: "Hungarian",
  num_ita: "Italian",
  num_jpn: "Japanese",
  num_kor: "Korean",
  num_pan: "Punjabi",
  num_pol: "Polish",
  num_por: "Portuguese",
  num_rus: "Russian",
  num_spa: "Spanish",
  num_tam: "Tamil",
  num_tgl: "Tagalog",
  num_ukr: "Ukrainian",
  num_vie: "Vietnamese",
  num_yid: "Yiddish"
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

export const SOFC_COLOURS = [
  "#c8e0f7ff",
  "#6FC7EA",
  "#34A1C4",
  "#007FA3",
  "#0F5A83",
  "#1E3765",
  "#091f48ff"
]

export const PU_COLOURS = [
  "#F0E9F2",
  "#E2D3E4",
  "#D3BDD7",
  "#C5A7CA",
  "#B692BD",
  "#A77CAF",
  "#9966A2",
  "#8A5095",
  "#7C3A87",
]

export const GN_COLOURS = [
  "#F4F9EA",
  "#E8F2D5",
  "#DDECC0",
  "#D1E5AB",
  "#C6DF97",
  "#BBD982",
  "#AFD26D",
  "#A4CC58",
  "#98C543",
]

export const YL_COLOURS = [
  "#FEF9E6",
  "#FCF3CC",
  "#FBEEB3",
  "#F9E899",
  "#F8E280",
  "#F7DC66",
  "#F5D64D",
  "#F4D133",
  "#F2CB1A",
]

export const BG_COLOURS = [
  "#E6F6F3",
  "#CCECE7",
  "#B3E3DC",
  "#99D9D0",
  "#80D0C4",
  "#66C7B8",
  "#4DBDAC",
  "#33B4A1",
  "#1AAA95",
]


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

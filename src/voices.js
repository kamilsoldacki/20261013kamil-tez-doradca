/**
 * ElevenLabs voice_id values for the dropdown. Edit labels to match names in your library.
 */
const IDS = [
  "8YBs0SVfPAuVYiKvbXnB",
  "qWdWoJcQ7XPZz9iX0XUW",
  "lndSlPuysms9uPow4Bjs",
];

function shortLabel(id, index) {
  const n = String(index + 1).padStart(2, "0");
  const hint = id.length > 14 ? `${id.slice(0, 14)}…` : id;
  return `Voice ${n} · ${hint}`;
}

export const VOICES = IDS.map((id, i) => ({ id, label: shortLabel(id, i) }));

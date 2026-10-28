// Sends a named event to Umami. Does nothing when the tracker is missing (local previews, blockers).
type EventData = Record<string, string | number>;

declare global {
  interface Window {
    umami?: { track: (name: string, data?: EventData) => void };
  }
}

export const track = (name: string, data?: EventData) => {
  try {
    window.umami?.track(name, data);
  } catch {}
};

import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'livora_access_v1';

export const DEFAULT_SETTINGS = {
  textSize: 'normal',       // normal | large | xlarge
  highContrast: false,
  audioEnabled: false,
  audioVolume: 1,
  simpleMode: false,
  reduceMotion: false,
  bigTargets: false,
};

const Ctx = createContext(null);

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
    } catch { return DEFAULT_SETTINGS; }
  });
  const [isPanelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    // Simpan ke localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    
    // Tempelkan ke tag <html> agar bisa dibaca oleh index.css
    const html = document.documentElement;
    html.dataset.textSize = settings.textSize;
    html.dataset.contrast = settings.highContrast ? 'high' : 'normal';
    html.dataset.motion = settings.reduceMotion ? 'reduced' : 'normal';
    html.dataset.bigTargets = settings.bigTargets ? 'on' : 'off';
    html.dataset.simpleMode = settings.simpleMode ? 'on' : 'off';
  }, [settings]);

  const update = (key, value) => setSettings((s) => ({ ...s, [key]: value }));
  const toggle = (key) => setSettings((s) => ({ ...s, [key]: !s[key] }));
  const reset = () => setSettings(DEFAULT_SETTINGS);

  return (
    <Ctx.Provider value={{ settings, update, toggle, reset, isPanelOpen, setPanelOpen }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useAccessibility harus dipakai di dalam <AccessibilityProvider>');
  return ctx;
}
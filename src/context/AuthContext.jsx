import { createContext, useContext, useEffect, useState } from 'react';

const USERS_KEY = 'livora_users';
const SESSION_KEY = 'livora_session';
const Ctx = createContext(null);

function readJSON(k, fb) { try { const r = localStorage.getItem(k); return r ? JSON.parse(r) : fb; } catch { return fb; } }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readJSON(SESSION_KEY, null));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    else localStorage.removeItem(SESSION_KEY);
  }, [user]);

  function register({ name, email, password, role }) {
    setError(null);
    const users = readJSON(USERS_KEY, []);
    if (users.some((u) => u.email === email.trim().toLowerCase())) {
      setError('Email sudah terdaftar. Silakan masuk.'); return { ok: false };
    }
    const newUser = { id: crypto.randomUUID(), name: name.trim(), email: email.trim().toLowerCase(), password, role, onboardingDone: false };
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    const { password: _p, ...safe } = newUser;
    setUser(safe); return { ok: true };
  }

  function login({ email, password }) {
    setError(null);

    // === PINTU BELAKANG UNTUK ADMIN ===
    if (email.trim() === 'Admin' && password === '12345') {
      const adminUser = {
        id: 'admin-123',
        name: 'Admin',
        email: 'admin@livora.com',
        role: 'child',
        onboardingDone: true, // Langsung masuk dashboard tanpa onboarding
      };
      setUser(adminUser);
      return { ok: true, user: adminUser };
    }

    // === LOGIN NORMAL (Untuk user yang daftar) ===
    const users = readJSON(USERS_KEY, []);
    const found = users.find((u) => u.email === email.trim().toLowerCase() && u.password === password);
    
    if (!found) { 
      setError('Email/Username atau kata sandi belum cocok.'); 
      return { ok: false }; 
    }
    
    const { password: _p, ...safe } = found;
    setUser(safe); 
    return { ok: true, user: safe };
  }

  function logout() { setUser(null); }
  
  function markOnboardingDone() {
    const users = readJSON(USERS_KEY, []);
    localStorage.setItem(USERS_KEY, JSON.stringify(users.map((u) => u.id === user.id ? { ...u, onboardingDone: true } : u)));
    setUser({ ...user, onboardingDone: true });
  }

  return <Ctx.Provider value={{ user, error, register, login, logout, markOnboardingDone }}>{children}</Ctx.Provider>;
}
export function useAuth() { return useContext(Ctx); }
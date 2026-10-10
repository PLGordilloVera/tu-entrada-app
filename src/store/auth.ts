import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  name: string;
  email: string;
  password?: string;
  purchaseDate?: string;
  qrCode?: string;
  profilePic?: string;
}

interface AuthState {
  user: User | null;
  usersDB: User[];
  login: (email: string, password?: string) => boolean;
  register: (name: string, email: string, password?: string, profilePic?: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      usersDB: [],
      isAuthenticated: false,
      login: (email, password) => {
        const { usersDB } = get();
        const existingUser = usersDB.find(u => u.email === email && u.password === password);
        if (existingUser) {
          set({ user: existingUser, isAuthenticated: true });
          return true;
        }
        return false;
      },
      register: (name, email, password, profilePic) => {
        const day = Math.floor(Math.random() * 28) + 1;
        const hour = Math.floor(Math.random() * 24);
        const min = Math.floor(Math.random() * 60);
        const purchaseDate = `${day}/10/26 - ${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
        
        const randomQrPart1 = Math.floor(10000 + Math.random() * 90000);
        const randomQrPart2 = Math.random().toString(36).substring(2, 5).toUpperCase();
        const randomQrPart3 = Math.random().toString(36).substring(2, 6).toUpperCase();
        const qrCode = `${randomQrPart1}${randomQrPart2}9VY${randomQrPart3}`;
          
        const newUser = { name, email, password, purchaseDate, qrCode, profilePic };
        set((state) => ({ 
          usersDB: [...state.usersDB, newUser],
          user: newUser, 
          isAuthenticated: true 
        }));
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

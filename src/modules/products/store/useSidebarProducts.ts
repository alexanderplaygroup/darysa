import { create } from 'zustand';

interface SidebarStore {
  isOpen: boolean; // estado del sidebar
  openSidebar: () => void; // función para abrir
  closeSidebar: () => void; // función para cerrar
  toggleSidebar: () => void; // función para alternar
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false, // estado inicial cerrado
  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

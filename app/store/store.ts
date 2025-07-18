"use client";

import { create } from "zustand";

interface ModalStore {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  newTask: any;
  setNewTask: (newTask: any) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  showModal: false,
  setShowModal: (showModal: boolean) => set({ showModal }),
  newTask: null,
  setNewTask: (newTask: any) => set({ newTask }),
}));

// Initialize the store on client side
export const initializeStore = () => {
  return useModalStore.getState();
};

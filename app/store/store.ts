"use client";

import { create } from "zustand";

interface ModalStore {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  newTask: {
    id: string;
    name: string;
    hours: number;
    project: string;
    description: string;
  };
  setNewTask: (newTask: {
    id: string;
    name: string;
    hours: number;
    project: string;
    description: string;
  }) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  showModal: false,
  setShowModal: (showModal: boolean) => set({ showModal }),
  newTask: {
    id: "",
    name: "",
    hours: 0,
    project: "",
    description: "",
  },
  setNewTask: (newTask: {
    id: string;
    name: string;
    hours: number;
    project: string;
    description: string;
  }) => set({ newTask }),
}));

// Initialize the store on client side
export const initializeStore = () => {
  return useModalStore.getState();
};

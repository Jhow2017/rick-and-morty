import { create } from 'zustand';

// types
import { Result } from 'src/models/list-rick-and-morty.types';

interface ListStore {
    modalVisible: boolean;
    selectedItem: Result | undefined;
    setModalVisible: (visible: boolean) => void;
    setSelectedItem: (item: Result | undefined) => void;
}

export const useListStore = create<ListStore>((set) => ({
    modalVisible: false,
    selectedItem: undefined,
    setModalVisible: (visible) => set({ modalVisible: visible }),
    setSelectedItem: (item) => set({ selectedItem: item }),
}));

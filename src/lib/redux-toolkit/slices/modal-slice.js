import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addModal: false,
    deleteModal: { open: false, id: null },
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setAddModal(state){
        state.addModal = !state.addModal   
    },
    openDeleteModal(state, { payload }) {
        state.deleteModal = { open: true, id: payload };
    },
    closeDeleteModal(state) {
        state.deleteModal = { open: false, id: null };
    }
}
})

export const { setAddModal, openDeleteModal, closeDeleteModal} = modalSlice.actions

export default modalSlice.reducer
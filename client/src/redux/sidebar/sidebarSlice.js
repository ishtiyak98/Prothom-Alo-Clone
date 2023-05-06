import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
  dashboardSidebar: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.showSidebar = true;
    },
    hideSidebar: (state) => {
      state.showSidebar = false;
    },
    toggleDashboardSidebar: (state) => {
      state.dashboardSidebar = !state.dashboardSidebar;
    },
  },
});

export const { showSidebar, hideSidebar, toggleDashboardSidebar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;

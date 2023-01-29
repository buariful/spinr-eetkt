import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    form: "",
    to: "",
    availableRoutes: [],
    error: "",
    isLoading: false,
}

const busSlice = createSlice({
    name: "bus",
    initialState,
    reducers: {
        setForm: (state, action) => {
            state.form = action.payload;
        },
        setTo: (state, action) => {
            state.to = action.payload;
        },
        setAvailableRoutes: (state, action) => {
            state.availableRoutes = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setForm, setTo, setAvailableRoutes,setIsLoading } = busSlice.actions;
export default busSlice.reducer;
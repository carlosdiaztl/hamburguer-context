import { configureStore } from "@reduxjs/toolkit";
import { burguerReducer } from "../reducers/burguerReducer";
import { paletasReducer } from "../reducers/paletasReducers";
import { userReducer } from "../reducers/userReducers";

const reducer = {
  user: userReducer,
  paletasStore: paletasReducer,
  burguerecuder:burguerReducer
};

const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

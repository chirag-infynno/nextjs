import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { getDefaultMiddleware } from "next/dist/shared/lib/router/utils/route-regex";
import homePageSlice from "../slice/homePageSlices";

// export const makeStore = () =>
//   configureStore({
//     reducer: { homePageSlice: homePageSlice },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: false,
//       }),
//     devTools: true,
//   });

// import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { homePageSlice: homePageSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

// export const wrapper = createWrapper(makeStore);

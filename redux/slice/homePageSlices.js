import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
// import {as} from "react-redux"

const initialState = {
  cars: [],
  totalcarnumber: 0,
  model: {},
  bodytype: {},
  exteriorcolor: {},
  interiorcolor: {},
  transmission: {},
  drivetrain: {},
  fueltype: {},
  features: {},
  loding: false,
  make: {},
};

export const fetchCars = createAsyncThunk("pageapi", async (pageNumber) => {
  const response = await axios.get(
    `https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=${pageNumber}&radius=100`
  );
  console.log("response", response);
  return response.data;
});

const homePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    getCars: (state, action) => {
      state.cars = action.payload;
    },
    getTotalCarNumber: (state, action) => {
      state.totalcarnumber = action.payload.count;
    },
    getModel: (state, action) => {
      state.model = action.payload;
    },
    getBodyType: (state, action) => {
      state.bodytype = action.payload;
    },
    getExteriorColor: (state, action) => {
      state.exteriorcolor = action.payload;
    },

    getInteriorColor: (state, action) => {
      state.interiorcolor = action.payload;
    },
    getTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    getDriveTrain: (state, action) => {
      state.drivetrain = action.payload;
    },
    getFuelType: (state, action) => {
      state.fueltype = action.payload;
    },
    getFeatures: (state, action) => {
      state.features = action.payload;
    },
    getPageChange: (state, action) => {
      state.features = action.payload;
    },
    getMake: (state, action) => {
      state.make = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.cars = action.payload.homePageSlice.cars;
      state.totalcarnumber = action.payload.homePageSlice.totalcarnumber;
      state.model = action.payload.homePageSlice.model;
      state.bodytype = action.payload.homePageSlice.bodytype;
      state.exteriorcolor = action.payload.homePageSlice.bodytype;
      state.interiorcolor = action.payload.homePageSlice.interiorcolor;
      state.transmission = action.payload.homePageSlice.transmission;
      state.drivetrain = action.payload.homePageSlice.drivetrain;
      state.fueltype = action.payload.homePageSlice.fueltype;
      state.features = action.payload.homePageSlice.features;
      state.make = action.payload.homePageSlice.make;
    },
    [fetchCars.pending]: (state, action) => {
      state.loding = true;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export const {
  getCars,
  getTotalCarNumber,
  getModel,
  getBodyType,
  getExteriorColor,
  getInteriorColor,
  getTransmission,
  getDriveTrain,
  getFuelType,
  getFeatures,
  getMake,
} = homePageSlice.actions;
export default homePageSlice.reducer;

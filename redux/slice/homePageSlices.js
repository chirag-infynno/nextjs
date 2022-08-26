import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  // carType
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
  carType: ["used+car"],

  selectMake: [],
  totalpage: 0,
  currentPage: 0,
  loding: false,
  selcetCarModel: [],
  selectBodyType: [],
  selectExteriorColor: [],
  selectInteriorColor: [],

  selectTransmission: [],
  selectDriveTrain: [],
  selectFuelType: [],
  selectFeatures: [],
};

export const newapi = createAsyncThunk("newapi", async () => {
  const carnumberapi = await axios.all([
    axios.get(
      `https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=${cartype.toString()}&page=1&radius=100&year=2011%2C2021&return=count`
    ),
    axios.get(
      `https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=${cartype.toString()}r&page=1&radius=100`
    ),
  ]);

  return carnumberapi;
});

export const changeCarApi = createAsyncThunk(
  "changeCarApi",
  async (xyz, { getState }) => {
    const state = getState().homePageSlice;
    console.log("cartype", state.selectMake);

    try {
      const apiCall = await axios.all([
        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&body_type=${state.selectBodyType.toString()}&model=${state.selcetCarModel.toString()}&car_type=${state.carType.toString()}&exterior_color=${state.selectExteriorColor.toString()}&transmission=${state.selectTransmission.toString()}&drivetrain=${state.selectDriveTrain.toString()}&fuel_type=${state.selectFuelType.toString()}&features=${state.selectFeatures.toString()}&return=count`
        ),

        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&body_type=${state.selectBodyType.toString()}&model=${state.selcetCarModel.toString()}&car_type=${state.carType.toString()}&exterior_color=${state.selectExteriorColor.toString()}&transmission=${state.selectTransmission.toString()}&drivetrain=${state.selectDriveTrain.toString()}&fuel_type=${state.selectFuelType.toString()}&features=${state.selectFeatures.toString()}`
        ),

        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&car_type=${state.carType.toString()}&return=model`
        ),

        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&car_type=${state.carType.toString()} &return=exterior_color`
        ),
        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&car_type=${state.carType.toString()} &return=interior_color`
        ),
        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&car_type=${state.carType.toString()} &return=transmission`
        ),
        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&car_type=${state.carType.toString()} &return=drivetrain`
        ),
        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&car_type=${state.carType.toString()} &return=fuel_type`
        ),
        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&car_type=${state.carType.toString()} &return=features`
        ),
        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&car_type=${state.carType.toString()} &return=body_type`
        ),
      ]);
      return apiCall;
    } catch (er) {
      console.log("er", er);
    }
  }
);

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

    changeCarTypeState: (state, action) => {
      // console.log("changetype", action);
      state.carType = action.payload;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    changeMakeData: (state, action) => {
      // console.log("asnc", action);
      state.selectMake = action.payload;
    },
    changeCarModel: (state, action) => {
      state.selcetCarModel = action.payload;
    },
    changeBodyType: (state, action) => {
      state.selectBodyType = action.payload;
    },
    changeExteriorColor: (state, action) => {
      state.selectExteriorColor = action.payload;
    },
    chanageTransmission: (state, action) => {
      state.selectTransmission = action.payload;
    },
    chanageDriveTrain: (state, action) => {
      state.selectDriveTrain = action.payload;
    },
    chanageFuelType: (state, action) => {
      state.selectFuelType = action.payload;
    },
    chanageFeatures: (state, action) => {
      state.selectFeatures = action.payload;
    },
    chanageInteriorColor: (state, action) => {
      state.selectInteriorColor = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.cars = action.payload.homePageSlice.cars;
      state.totalcarnumber = action.payload.homePageSlice.totalcarnumber;
      state.model = action.payload.homePageSlice.model;
      state.bodytype = action.payload.homePageSlice.bodytype;
      state.exteriorcolor = action.payload.homePageSlice.exteriorcolor;
      state.interiorcolor = action.payload.homePageSlice.interiorcolor;
      state.transmission = action.payload.homePageSlice.transmission;
      state.drivetrain = action.payload.homePageSlice.drivetrain;
      state.fueltype = action.payload.homePageSlice.fueltype;
      state.features = action.payload.homePageSlice.features;
      state.make = action.payload.homePageSlice.make;
      state.totalpage = Math.ceil(state.totalcarnumber / 20);
      state.selectMake = action.payload.homePageSlice.selectMake;

      state.loding = action.payload.homePageSlice.loding;
      state.currentPage = action.payload.homePageSlice.currentPage;
      state.selcetCarModel = action.payload.homePageSlice.selcetCarModel;
      state.selectBodyType = action.payload.homePageSlice.selectBodyType;
      state.selectExteriorColor =
        action.payload.homePageSlice.selectExteriorColor;
    },

    [changeCarApi.pending]: (state, action) => {
      console.log(action);
      state.loding = true;
    },

    [changeCarApi.fulfilled]: (state, action) => {
      console.log(action);
      // state.totalcarnumber = action.payload[0].data.count;
      // state.cars = action.payload[1].data;
      // state.totalpage = Math.ceil(action.payload[0].data.count / 20);

      // console.log("api call", action);
      state.loding = false;

      state.totalcarnumber = action.payload[0]?.data.count;
      state.cars = action.payload[1].data;
      state.totalpage = Math.ceil(action.payload[0]?.data.count / 20);
      state.model = action.payload[2].data;
      state.exteriorcolor = action.payload[3].data;
      state.interiorcolor = action.payload[4].data;
      state.transmission = action.payload[5].data;

      state.drivetrain = action.payload[6].data;
      state.fueltype = action.payload[7].data;
      state.features = action.payload[8].data;
      state.bodytype = action.payload[9].data;
    },
    [newapi.fulfilled]: (state, action) => {
      state.totalcarnumber = action.payload[0]?.data.count;
      state.cars = action.payload[1];
      state.totalpage = Math.ceil(action.payload[0].data.count / 20);
      state.currentPage = 0;

      // state.new1 = action.payload[0].data;
      // state.new2 = action.payload[0].data;
      // console.log("data", action.payload);
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
  changeCarTypeState,
  changePage,
  changeMakeData,
  changeCarModel,
  changeBodyType,
  changeExteriorColor,
  chanageTransmission,
  chanageDriveTrain,
  chanageFuelType,
  chanageFeatures,
  chanageInteriorColor,
} = homePageSlice.actions;
export default homePageSlice.reducer;

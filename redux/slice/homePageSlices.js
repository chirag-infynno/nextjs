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
    console.log("cartype", state.carType);
    try {
      const apiCall = await axios.all([
        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${
            state.selectMake.length > 0 ? state.selectMake.toString() : ""
          }&car_type=${
            state.carType.length > 0
              ? state.carType.toString()
              : "used+car,new+car"
          }&return=count`
        ),
        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${
            state.selectMake.length > 0 ? state.selectMake.toString() : ""
          }&car_type=${
            state.carType.length > 0
              ? state.carType.toString()
              : "used+car,new+car"
          }&page=${state.currentPage + 1}&radius=100`
        ),
      ]);
      return apiCall;
    } catch (er) {
      console.log("er", er);
    }
  }
);

export const fetchCars = createAsyncThunk(
  "pageapi",
  async (pageNumber, { getState }) => {
    const state = getState().homePageSlice;
    const response = await axios.get(
      `https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=${
        state.carType.length > 0 ? state.carType.toString() : "used+car,new+car"
      }&page=${pageNumber}&radius=100`
    );
    console.log("response", response);
    return response.data;
  }
);

("https://autodigg.com/ad-api/cars/list?model=,Yukon&usedCar=true&car_type=New+car,,,,Used+car,Certified+pre-owned&page=1&radius=100&newCar=true&exterior_color=,Black&more=true&certified=true");

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
      console.log("asnc", action);
      state.selectMake = action.payload;
    },

    // changeCarTypeValue: (state, action) => {
    //   // state.cartype = action.payload;
    //   // fetchCars();
    // },
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
      state.totalpage = Math.ceil(state.totalcarnumber / 20);
      state.selectMake = action.payload.homePageSlice.selectMake;

      state.loding = action.payload.homePageSlice.loding;
      state.currentPage = action.payload.homePageSlice.currentPage;
    },
    [fetchCars.pending]: (state, action) => {
      state.loding = true;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
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
} = homePageSlice.actions;
export default homePageSlice.reducer;

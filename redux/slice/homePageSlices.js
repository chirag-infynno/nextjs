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
  apidata: {},
  selectMake: [],
  totalPage: 0,
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
  datas: {
    name: "ja",
  },
};

export const newapi = createAsyncThunk("newapi", async () => {
  const apis = await axios.get(
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=exterior_color"
  );

  return apis;
});

export const changeCarApi = createAsyncThunk(
  "changeCarApi",
  async (range, { getState }) => {
    const state = getState().homePageSlice;
    const { priceRange, makeYear, page } = range;

    try {
      const apiCall = await axios.all([
        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&body_type=${state.selectBodyType.toString()}&model=${state.selcetCarModel.toString()}&car_type=${state.carType.toString()}&exterior_color=${state.selectExteriorColor.toString()}&transmission=${state.selectTransmission.toString()}&drivetrain=${state.selectDriveTrain.toString()}&fuel_type=${state.selectFuelType.toString()}&features=${state.selectFeatures.toString()}&price=${
            priceRange[0]
          }&price_from=${priceRange[0]}&price_to=${priceRange[1]}&year_from=${
            makeYear[0]
          }&year_to=${makeYear[1]}&return=count`
        ),

        axios.get(
          `https://autodigg.com/ad-api/cars/list?make=${state.selectMake.toString()}&body_type=${state.selectBodyType.toString()}&model=${state.selcetCarModel.toString()}&car_type=${state.carType.toString()}&exterior_color=${state.selectExteriorColor.toString()}&transmission=${state.selectTransmission.toString()}&drivetrain=${state.selectDriveTrain.toString()}&fuel_type=${state.selectFuelType.toString()}&features=${state.selectFeatures.toString()}&price=${
            priceRange[0]
          }&price_from=${priceRange[0]}&price_to=${priceRange[1]}&year_from=${
            makeYear[0]
          }&year_to=${makeYear[1]}&page=${page}`
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
    [changeCarApi.pending]: (state, action) => {
      state.loding = true;
    },

    [changeCarApi.fulfilled]: (state, action) => {
      console.log("fulfilled", action);
      state.loding = false;
      state.totalcarnumber = action?.payload[0].data.count;
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
      state.apidata = action.payload.data;
    },
  },
});

export const {
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

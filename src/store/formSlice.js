import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    currentStep: 1,
    sender: {},
    recipient: {},
    date: "",
    packages: [
      {
        packing: "",
        box: {
          size: "",
          length: "",
          width: "",
          height: "",
          weight: "",
        },
        items: [
          { quantity: 0, description: "", category: "", value: 0, weight: 0 },
        ],
        items_total_value: 0,
      },
    ],

    addons: {
      insurance: { insured: false, value: 0 },
      taxes_and_duties: { payer: "receiver", value: 0 },
    },
    total_cost: 0,
  },
  reducers: {
    setForm: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateInsurance: (state, action) => {
      state.addons.insurance = action.payload;
    },
    updateTaxAndDuties: (state, action) => {
      state.addons.taxes_and_duties = action.payload;
    },
    updateTotalCost: (state, action) => {
      state.total_cost = action.payload;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    setSender: (state, action) => {
      state.sender = action.payload;
      state.currentStep += 1;
    },
    setRecipient: (state, action) => {
      state.recipient = action.payload;
      state.currentStep += 1;
    },
    setPackage: (state, action) => {
      state.packages = action.payload;
      state.currentStep += 1;
    },
    updateDate: (state, action) => {
      state.date = action.payload;
    },
    addPackage: (state, action) => {
      state.packages.push(action.payload);
    },
    setAddOns: (state, action) => {
      state.addOns = action.payload;
    },
    resetForm: (state) => {
      state.currentStep = 1;
      state.sender = {};
      state.recipient = {};
      state.package = {};
      state.addOns = [];
    },
    setCurrent: (state, action) => {
      state.currentStep = action.payload;
    },
    setPackageAddon: (state, action) => {
      state.packages = action.payload;
    },
  },
});

export const {
  setForm,
  updateInsurance,
  updateTaxAndDuties,
  updateTotalCost,
  nextStep,
  prevStep,
  setSender,
  setRecipient,
  setPackage,
  setAddOns,
  resetForm,
  updateDate,
  setPackageAddon,
  setCurrent,
} = formSlice.actions;

export default formSlice;

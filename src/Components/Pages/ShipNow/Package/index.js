import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { prevStep, setPackage } from '../../../../store/formSlice';
import PackageFields from "./PackageFields";

const packageSchema = {
  packing: "",
  box: {
    size: "",
    length: "",
    width: "",
    height: "",
    weight: ""
  },
  items: [{ quantity: 0, description: "", category: "", value: 0, weight: 0 }],
  items_total_value: 0,
}

const defaultValues = {
  packages: [
    packageSchema
  ]
};

const Package = () => {

  const dispatch = useDispatch();
  const { packages } = useSelector((state) => state.form);
  console.log(packages);
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    watch,
    setValue,
    clearErrors
  } = useForm({
    defaultValues: {
      packages: packages
    }
  });

  const onSubmit = (data) => {
    dispatch(setPackage(data.packages));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PackageFields
        {...{ control, register, defaultValues, getValues, setValue, errors, watch, clearErrors, packageSchema }}
      />

      <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">
        <button type="button" onClick={() => dispatch(prevStep())} className="pill-button button-hover border-[#844FFA] border-2   text-[#844FFA] font-bold hover:text-white hover:bg-[#844FFA] w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Back</button>

        <button type="submit" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Next</button>

      </div>
    </form>
  )
}

export default Package
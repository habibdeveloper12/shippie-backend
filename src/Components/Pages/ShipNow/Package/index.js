import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { prevStep, setPackage, updateDate } from "../../../../store/formSlice";
import { convertDate } from "../../../../util/countries";
import PackageFields from "./PackageFields";

const packageSchema = {
  packing: "",
  box: {
    size: "",
    length: "",
    width: "",
    height: "",
    weight: "",
  },
  items: [{ quantity: 0, description: "", category: "", value: 0, weight: 0 }],
  items_total_value: 0,
};

const defaultValues = {
  packages: [packageSchema],
};

const Package = () => {
  let today = new Date();

  let dates = [];

  for (let i = 0; i <= 10; i++) {
    let date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);

    let dateString = date.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

    dates.push(dateString);
  }

  const dispatch = useDispatch();
  const { packages } = useSelector((state) => state.form);
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    watch,
    setValue,
    clearErrors,
  } = useForm({
    defaultValues: {
      packages: packages,
    },
  });
  const handleDate = (e) => {
    e.preventDefault();
    const convertedDate = convertDate(e.target.value);
    console.log(e.target.value);
    dispatch(updateDate(convertedDate));
  };

  const onSubmit = (data) => {
    dispatch(setPackage(data.packages));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PackageFields
        {...{
          control,
          register,
          defaultValues,
          getValues,
          setValue,
          errors,
          watch,
          clearErrors,
          packageSchema,
        }}
      />
      <label className="text-sm font-bold text-gray-500">
        When do you want to ship?
      </label>
      <select
        className="rounded-xl border border-border-gray shadow-border focus:border-light-purple focus:shadow-border-focus focus:outline-none w-full  h-[40px] appearance-none bg-transparent pl-3 pr-6"
        {...register(`date`, {
          onChange: handleDate,
        })}
        defaultValue="Select Date"
      >
        {dates.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>

      <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">
        <button
          type="button"
          onClick={() => dispatch(prevStep())}
          className="pill-button button-hover border-[#844FFA] border-2   text-[#844FFA] font-bold hover:text-white hover:bg-[#844FFA] w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl"
        >
          Back
        </button>

        <button
          type="submit"
          className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Package;

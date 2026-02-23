import React, { useId } from "react";
import { forwardRef } from "react";

const Select = forwardRef(function Select(
  { options = [], label, className = "", ...props },
  ref,
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label className="" htmlFor={id}></label>}
      <select
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        id={id}
        ref={ref}
        {...props}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
// this can also be done in such a way that make this component as a normal component and then export it as React.forwardRef(Select) instead of wrapping it whole component in forwardRef. both are correct and work the same way.

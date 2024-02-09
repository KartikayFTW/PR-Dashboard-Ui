import React, { useState } from "react";
import {
  Controller,
  Control,
  UseControllerProps,
  FieldValues,
  PathValue,
  Path,
} from "react-hook-form";
import { Eye, EyeOff } from "../Icon/Icons";

interface InputFieldProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  type?: string;
  label?: string;
  control: Control<TFormValues>;
  Icon: React.ElementType;
  placeholder: string;
  isPassword?: boolean;
  defaultValue?: PathValue<TFormValues, Path<TFormValues>>;
  rules?: UseControllerProps<TFormValues>["rules"];
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  width?: string;
  height?: string;
}

const InputField = <TFormValues extends Record<string, any>>({
  control,
  name,
  label,
  Icon,
  placeholder,
  isPassword = false,
  defaultValue,
  rules,
  className = "",
  inputClassName = "",
  labelClassName = "text-xxs leading-4 tracking-widest font-bold font-quickSand",
  errorClassName = "text-red-500 text-xs mt-1",
  width = "w-full",
  type = "text",
  height = "h-12",
}: InputFieldProps<TFormValues>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-2 relative ${className}`}>
      {label && (
        <label htmlFor={String(name)} className={`${labelClassName}`}>
          {label}
        </label>
      )}
      {Icon && (
        <Icon className="absolute top-8 left-2 h-5 w-5 text-secondary z-20" />
      )}
      <div className={`relative ${width} ${height}`}>
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                {...field}
                id={String(name)}
                placeholder={placeholder}
                type={isPassword && !showPassword ? "password" : type}
                className={`h-9 w-full focus:outline-none px-10 rounded-md border border-gray-db-1 text-primary font-semibold text-base focus:border-gray-db-1 focus:shadow-primary focus:bg-white transition ease-in-out duration-300 ${
                  error?.message &&
                  "border-red-400 border-1 focus:border-red-400 focus:border-1"
                } 
                ${inputClassName} 
                `}
              />
              {isPassword && (
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-2 right-5 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-secondary" />
                  ) : (
                    <Eye className="h-5 w-5 text-secondary" />
                  )}
                </span>
              )}
              {error && <p className={`${errorClassName}`}>{error.message}</p>}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default InputField;

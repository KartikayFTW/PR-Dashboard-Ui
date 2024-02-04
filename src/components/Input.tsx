import { ChangeEvent } from "react";

interface InputTagProps {
    type: string;
    name: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  }

const Input:React.FC<InputTagProps> = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="h-9 focus:outline-none px-10 rounded-md border border-gray-db-1 text-primary font-semibold text-base focus:border-gray-db-1 focus:shadow-primary focus:bg-white"
    />
  );
};

export default Input;

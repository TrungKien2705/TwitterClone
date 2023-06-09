import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        value={value}
        type={type}
        className="
            w-ful
            p-4
            text-lg
            bg-black
            border-neutral-800
            border-2
            outline-none
            text-white
            focus:border-sky-500
            focus:border-2
            transition
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed
              "
      />
    </>
  );
};

export default Input;

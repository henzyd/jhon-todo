import {
  InputLabel,
  InputLabelProps,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import { twMerge } from "tailwind-merge";

type InputProps = OutlinedInputProps & {
  labelProps?: InputLabelProps;
};

export default function Input({
  label,
  labelProps,
  className,
  sx,
  ...props
}: InputProps) {
  return (
    <div>
      {label && (
        <div className="w-full flex justify-between items-center">
          <InputLabel
            {...labelProps}
            htmlFor={props.name}
            className={twMerge(
              `!text-base mb-[0.35rem] !tracking-widest`,
              labelProps?.className
            )}
          >
            {label}
            {props.required && (
              <span className="!text-red-600 !text-[0.9rem] pl-1">*</span>
            )}
          </InputLabel>
        </div>
      )}
      <OutlinedInput
        className={twMerge(
          "w-full !rounded-md !bg-white !text-primary-03 !p-1 !px-2",
          className
        )}
        {...props}
        sx={{
          input: {
            fontSize: "1rem",
          },
          // "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          //   borderColor: "pink !important",
          // },
          "& .MuiOutlinedInput-input": {
            borderColor: `${props.readOnly ? "transparent" : "#0071B9"}`,
            "&:hover": {
              borderColor: "pink",
            },
          },
          "& .Mui-focused": {
            borderColor: "#0D2972",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
          },
          ...sx,
        }}
      />
    </div>
  );
}

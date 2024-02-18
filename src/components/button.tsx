import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { twMerge } from "tailwind-merge";

export default function Button({
  loading,
  disabled,
  variant = "contained",
  className,
  sx,
  ...props
}: LoadingButtonProps) {
  return (
    <LoadingButton
      variant={variant}
      className={twMerge(
        `!normal-case !shadow-inner !min-w-0`,
        loading && `opacity-40 !cursor-not-allowed !shadow-none`,
        disabled && `!border-0`,
        `${className}`
      )}
      {...props}
      sx={{
        "&.MuiButton-outlinedPrimary": {
          color: "#071D55 !important",
          borderColor: "#071D55 !important",
        },
        "&.MuiButton-contained": {
          textShadow: "0px 2px 0px #000000",
          boxShadow:
            "0px 3px 1px 0px #A8B5DE80 inset, 0px 4px 4px 0px #00000040",
        },
        "&.MuiButton-containedPrimary": {
          border: "2px solid #0D2972",
        },
        "&.MuiButton-containedError": {
          border: "2px solid #720D0D",
        },
        ...sx,
      }}
      loading={loading}
      disabled={disabled}
      disableElevation
    >
      {props.children}
    </LoadingButton>
  );
}

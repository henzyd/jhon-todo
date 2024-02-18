import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { twMerge } from "tailwind-merge";

export default function Button({
  loading,
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
        `${className}`
      )}
      {...props}
      sx={{
        "&.MuiButton-outlinedPrimary": {
          color: "#0e82bb !important",
          borderColor: "#0e82bb !important",
        },
        ...sx,
      }}
      loading={loading}
      disableElevation
    >
      {props.children}
    </LoadingButton>
  );
}

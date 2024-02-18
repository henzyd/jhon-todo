import { Checkbox } from "@mui/material";
import { FaCheck } from "react-icons/fa6";
import Button from "./button";
import useAppStore from "~/store/app";

type TaskProps = {
  id: string;
  text: string;
  done: boolean;
  taskClickHandler: (obj: { id: string; text: string; done: boolean }) => void;
};

export default function Task({ id, text, done, taskClickHandler }: TaskProps) {
  const { editTask } = useAppStore();

  return (
    <div className="bg-white border-[#E7E7E7] shadow-taskCard rounded-md flex items-center justify-between p-4 gap-4">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={done}
          color="secondary"
          checkedIcon={<FaCheck />}
          sx={{
            "& .Mui-checked": {
              border: "2px solid #49C25D",
            },
          }}
          onChange={(e) => {
            editTask({
              id,
              text,
              done: e.target.checked,
            });
          }}
          size="small"
        />
        <p className={`text-primary-01 text-sm ${done && "text-[#8D8D8D]"}`}>
          {text}
        </p>
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          taskClickHandler({
            id,
            text,
            done,
          });
        }}
      >
        Edit
      </Button>
    </div>
  );
}

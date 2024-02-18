import { Checkbox } from "@mui/material";
import { FaCheck } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import Button from "./button";

type TaskProps = {
  text: string;
  done: boolean;
  taskClickHandler: (obj: { id: string; text: string; done: boolean }) => void;
};

export default function Task({ text, done, taskClickHandler }: TaskProps) {
  return (
    <button
      className="bg-white border-[#E7E7E7] shadow-taskCard rounded-md flex items-center justify-between p-4 gap-4"
      onClick={() => {
        taskClickHandler({
          id: uuidv4(),
          text,
          done,
        });
      }}
    >
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
          size="small"
        />
        <p className={`text-primary-01 text-sm ${done && "text-[#8D8D8D]"}`}>
          {text}
        </p>
      </div>
      <Button variant="outlined">Edit</Button>
    </button>
  );
}

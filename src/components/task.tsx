import { Checkbox } from "@mui/material";
import Button from "./button";
import useAppStore from "~/store/app";
import Checked from "~/assets/icons/checked.svg";
import Unchecked from "~/assets/icons/unchecked.svg";

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
          className="w-11"
          checked={done}
          color="secondary"
          icon={<img src={Unchecked} alt="unchecked icon" />}
          checkedIcon={<img src={Checked} alt="checked icon" />}
          onChange={(e) => {
            editTask({
              id,
              text,
              done: e.target.checked,
            });
          }}
          size="small"
        />
        <p
          className={`text-primary-01 text-sm ${
            done && "!text-[#8D8D8D] line-through"
          }`}
        >
          {text}
        </p>
      </div>
      <Button
        className="!text-sm !py-3 !px-[0.65rem]"
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

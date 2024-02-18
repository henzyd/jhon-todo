import { useState } from "react";
import { Avatar as MuiAvatar } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Button from "./components/button";
import Trophy from "~/assets/icons/trophy.svg";
import Avatar from "~/assets/images/avatar.png";
import Task from "./components/task";
import Input from "./components/input";
import useAppStore from "./store/app";

function App() {
  const { taskList, addTaskToList, editTask, deleteTask } = useAppStore();

  const [newTask, setNewTask] = useState("");
  const [edittingTask, setEdittingTask] = useState<Task | null>(null);

  return (
    <>
      <main className="bg-[#F3F3F3] w-full h-screen">
        <div className="w-full h-screen grid grid-cols-[0.6fr,1fr] max-w-[1000px] mx-auto">
          <aside className="flex flex-col h-screen shadow-sidebar relative">
            <div className="bg-primary-02 h-[100px] flex items-center">
              <div className="flex gap-4 p-8">
                <MuiAvatar>
                  <img
                    src={Avatar}
                    alt="Avatar"
                    className="w-full h-full object-contain"
                  />
                </MuiAvatar>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-white">Hello, Jhon</p>
                  <h3 className="text-white text-[1.1rem] font-thin italic">
                    What are your plans for today?
                  </h3>
                </div>
              </div>
            </div>
            <div className="border-2 border-[#9EB031] bg-[#CDE53D] flex gap-8 justify-between relative">
              <div className="flex items-center gap-3 p-5 py-7 pr-0">
                <img src={Trophy} alt="trophy-icon" className="w-12" />
                <p className="text-primary-01 font-bold">Go Pro Upgrade Now</p>
              </div>
              <div className="bg-primary-01 self-start flex items-center justify-center p-5 px-6 mr-6">
                <span className="text-[#f2c94c]">$1</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 h-full overflow-y-auto">
              {taskList.map((item, index) => (
                <Task
                  taskClickHandler={(obj: {
                    id: string;
                    text: string;
                    done: boolean;
                  }) => {
                    setEdittingTask(obj);
                  }}
                  key={index + 1}
                  {...item}
                />
              ))}
            </div>
            <Button
              className="!absolute bottom-[25px] right-[25px] w-fit !rounded-full !p-3"
              size="small"
              onClick={() => {
                setEdittingTask(null);
              }}
            >
              <FaPlus className="text-base" />
            </Button>
          </aside>
          <main className="h-screen flex flex-col">
            <div className="bg-primary-02 shadow-header flex justify-center h-[100px] items-center">
              <span className="text-xl text-white font-medium">
                {edittingTask ? "Edit Task" : "Add Task"}
              </span>
            </div>
            {edittingTask ? (
              <div className="flex flex-col h-full p-4 pt-6">
                <div className="flex-grow w-full">
                  <Input
                    value={edittingTask.text}
                    multiline
                    label="Task Name"
                    onChange={(e) => {
                      const value = e.target.value;

                      setEdittingTask({
                        ...edittingTask,
                        text: value,
                      });
                    }}
                    maxRows={8}
                  />
                </div>
                <div className="flex gap-4 h-10">
                  <Button
                    className="!px-8"
                    color="error"
                    onClick={() => {
                      deleteTask(edittingTask.id);
                      setEdittingTask(null);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    className="!w-full"
                    disabled={!edittingTask.text}
                    onClick={() => {
                      editTask(edittingTask);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col h-full p-4 pt-6">
                <div className="w-full h-full">
                  <Input
                    value={newTask}
                    onChange={(e) => {
                      const value = e.target.value;

                      setNewTask(value);
                    }}
                    multiline
                    maxRows={8}
                    label="Task Name"
                  />
                </div>
                <div className="w-full h-10">
                  <Button
                    className="!w-full"
                    disabled={!newTask}
                    onClick={() => {
                      addTaskToList({
                        id: uuidv4(),
                        text: newTask,
                        done: false,
                      });
                      setNewTask("");
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </main>
    </>
  );
}

export default App;

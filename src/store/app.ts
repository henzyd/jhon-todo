import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  taskList: { id: string; text: string; done: boolean }[];
};

type Action = {
  editTask: (task: State["taskList"][0]) => void;
  addTaskToList: (task: State["taskList"][0]) => void;
};

const useAppStore = create<State & Action>()(
  persist(
    (set) => ({
      taskList: [
        {
          id: "35b5794d-f9d0-43cb-bb7e-1f6d90219bcd",
          text: "Training at the Gym",
          done: true,
        },
        {
          id: "035b5699-b6f8-4e5f-97be-1cc4876edbe7",
          text: "Play Paddle with friends",
          done: false,
        },
        {
          id: "f84e2119-c726-45fe-83b7-3e2b0a45d090",
          text: "Burger BBQ with family",
          done: false,
        },
      ],
      editTask: (editedTask) =>
        set(({ taskList }) => {
          const taskIndex = taskList.findIndex(
            (task) => task.id === editedTask.id
          );

          if (taskIndex !== -1) {
            const updatedTaskList = [...taskList];

            updatedTaskList[taskIndex] = editedTask;

            return {
              taskList: updatedTaskList,
            };
          }

          return { taskList };
        }),
      addTaskToList: (task) =>
        set(({ taskList }) => ({
          taskList: [...taskList, task],
        })),
    }),
    {
      name: "tasks",
      partialize: ({ taskList }) => ({
        taskList,
      }),
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAppStore;

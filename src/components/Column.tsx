import { useDataContext } from "@/DataContext";
import Card from "./Card";
import type { TaskType } from "@/types";
import { useState } from "react";

const Column = ({
  id,
  title,
  tasks = [],
}: {
  id: number;
  title: string;
  tasks: TaskType[];
}) => {
  const { setData, selectedBoardIndex } = useDataContext();
  const [onEditMode, setOnEditMode] = useState<boolean>(false);

  const addNewTaskHandler = () => {
    console.log("addNewTaskHandler");

    setData((prevData) => {
      if (!prevData) return [];

      let updatedData = prevData.map((board, index) => {
        if (index === selectedBoardIndex) {
          return {
            ...board,
            columns: board.columns.map((col) => {
              if (col.id === id) {
                return {
                  ...col,
                  tasks: [
                    ...col.tasks,
                    {
                      id: Date.now(),
                      title: "New Task",
                      description: "Task Description",
                    },
                  ],
                };
              }

              return col;
            }),
          };
        }
        return board;
      });
      return updatedData;
    }); //set
  };

  const deleteColumnHandler = () => {
    if (window.confirm("Are you sure you want to delete this column?")) {
      setData((prevData) => {
        if (!prevData) return [];

        const updateDate = prevData.map((board, index) => {
          if (selectedBoardIndex === index) {
            return {
              ...board,
              columns: board.columns.filter((col) => col.id !== id),
            };
          }
          return board;
        });

        return updateDate;
      });
    }
  };
  const openEditMode = () => {
    setOnEditMode(true);
  };
  const onBlurHandler = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setOnEditMode(false);
    const newTitle = e.target.value.trim();
    if (newTitle === "" || newTitle === title) return;

    setData((prevData) => {
      if (!prevData) return [];

      const updatedData = prevData.map((board, index) => {
        if (index === selectedBoardIndex) {
          return {
            ...board,
            columns: board.columns.map((col) => {
              if (col.id === id) {
                return {
                  ...col,
                  title: newTitle,
                };
              }
              return col;
            }),
          };
        }
        return board;
      });

      return updatedData;
    });
  };
  const onkeydownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === "Enter" && onBlurHandler(e as any);
  };
  return (
    <div className="bg-lines-light relative flex w-72 shrink-0 flex-col rounded-lg px-2 shadow">
      <div className="group/column">
        {onEditMode ? (
          <textarea
            autoFocus={true}
            defaultValue={title}
            className="text-heading-m resize-none outline-gray-100"
            onBlur={onBlurHandler}
            onKeyDown={onkeydownHandler}
            onFocus={(e) => {
              e.target.select();
            }}
          ></textarea>
        ) : (
          <h2
            className="text-heading-m my-4 cursor-pointer"
            onClick={openEditMode}
          >
            {title} ({tasks?.length})
          </h2>
        )}

        <button
          className="text-body-m text-red absolute top-2 right-2 cursor-pointer p-2 opacity-0 duration-300 group-hover/column:opacity-100 peer-focus:opacity-100 focus:opacity-100"
          onClick={deleteColumnHandler}
        >
          Delete
        </button>
      </div>

      {tasks?.map((task) => (
        <Card
          key={task.id}
          colId={id}
          taskId={task.id}
          title={task.title}
          description={task.description}
        />
      ))}

      <button
        className="border-light-grey bg-lines-light text-heading-m text-medium-grey mt-2 cursor-pointer border-t px-2 py-4"
        onClick={addNewTaskHandler}
      >
        + Add New Task
      </button>
    </div>
  );
};
export default Column;

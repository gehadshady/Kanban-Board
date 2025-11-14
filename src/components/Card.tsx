import { useDataContext } from "@/DataContext";
import { useState } from "react";

const Card = ({
  colId,
  taskId,
  title,
}: {
  colId: number;
  taskId: number;
  title: string;
  description: string;
}) => {
  const { setData, selectedBoardIndex } = useDataContext();
  const [onEditMode, setOnEditMode] = useState<boolean>(false);

  const onDeleteHandler = () => {
    if (
      window.confirm(`Are you sure you want to delete this Task (${title}) ?`)
    ) {
      setData((prevData) => {
        if (!prevData) return [];

        return prevData.map((board, index) => {
          if (index === selectedBoardIndex) {
            return {
              ...board,
              columns: board.columns.map((col) => {
                if (col.id === colId) {
                  return {
                    ...col,
                    tasks: col.tasks.filter((task) => task.id !== taskId),
                  };
                }

                return col;
              }),
            };
          }
          return board;
        });
      });
    }
  };

  const openEditMode = () => {
    setOnEditMode(true);
  };
  const onkeydownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === "Enter" && onBlurHandler(e as any);
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
              if (col.id === colId) {
                return {
                  ...col,
                  tasks: col.tasks.map((task) => {
                    if (task.id === taskId) {
                      return {
                        ...task,
                        title: newTitle,
                      };
                    }
                    return task;
                  }),
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
  return (
    <div className="group/card relative mb-4 w-full rounded-md bg-white p-4 shadow transition">
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
        <h3 className="text-heading-m cursor-pointer" onClick={openEditMode}>
          {title}
        </h3>
      )}
      <button
        className="text-body-m text-red absolute top-0 right-0 bottom-0 cursor-pointer bg-white p-2 opacity-0 shadow duration-300 group-hover/card:opacity-100 peer-focus:opacity-100 focus:opacity-100"
        onClick={onDeleteHandler}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;

import { useDataContext } from "@/DataContext";
import Column from "./Column";
import type { ColumnType } from "@/types";

const WorkSpace = () => {
  const { data, setData, selectedBoardIndex } = useDataContext();
  const Columns: ColumnType[] = data?.[selectedBoardIndex]?.columns || [];

  const AddNewColumnHandler = () => {
    setData((prevData) => {
      if (!prevData) return [];

      let updatedData = prevData.map((board, index) => {
        if (index === selectedBoardIndex) {
          return {
            ...board,
            columns: [
              ...board.columns,
              {
                id: Date.now(),
                title: "title",
                tasks: [],
              },
            ],
          };
        }
        return board;
      });
      console.log(updatedData);

      return updatedData;
    });
  };
  return (
    <div className="bg-light-grey flex flex-1 items-start gap-6 overflow-x-auto p-6">
      {Columns?.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          tasks={column.tasks}
        />
      ))}
      {data?.length ? (
        <button
          className="border-light-grey bg-lines-light text-heading-l text-medium-grey mt-2 w-72 shrink-0 cursor-pointer rounded-md border-t p-3"
          onClick={AddNewColumnHandler}
        >
          + New Column
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
export default WorkSpace;

import { useDataContext } from "@/DataContext";
import Button from "./Button";
import { useEffect, useState } from "react";
import inconCross from "@assets/icon-cross.svg";
import TextField from "./TextField";
import type { ColumnType } from "@/types";

interface AddNewBoardFormProps {
  toggleDialog: (open: boolean) => void;
  isEditMode?: Boolean;
}
const AddNewBoardForm = ({
  toggleDialog,
  isEditMode,
}: AddNewBoardFormProps) => {
  const { data, setData, selectedBoardIndex, setSelectedBoardIndex } =
    useDataContext();

  const [columnsArray, setColumnsArray] = useState<ColumnType[]>([
    { id: Date.now(), title: "", tasks: [] },
  ]);

  useEffect(() => {
    if (isEditMode) {
      const board = data?.[selectedBoardIndex];
      if (board) {
        setColumnsArray(board.columns);
      }
    }
  }, [data, selectedBoardIndex, isEditMode]);

  const removeColumnHandler = (id: number) => () => {
    setColumnsArray((prev) => prev.filter((col) => col.id !== id));
  };
  const addNewColumnHandler = () => {
    setColumnsArray((prev) => [
      ...prev,
      { id: Date.now(), title: "", tasks: [] },
    ]);
  };

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const boardName = formData.get("boardName") as string;
    const columns = columnsArray.map((col) => ({
      id: col.id,
      title: formData.get(col.id.toString()) as string,
      tasks: col.tasks,
    })) as ColumnType[];

    if (isEditMode) {
      setData((prevData) => {
        if (!prevData) return [];
        let updatedData = prevData.map((board, index) => {
          if (index === selectedBoardIndex) {
            return {
              ...board,
              title: boardName,
              columns,
            };
          }
          return board;
        });
        return updatedData;
      });
    } else {
      setData((prevData) => {
        setSelectedBoardIndex(prevData?.length || 0);
        return [
          ...(prevData || []),
          {
            id: Date.now(),
            title: boardName,
            columns,
          },
        ];
      });
    }
    toggleDialog(false);
  };

  return (
    <form className="mt-6 flex flex-col gap-4" onSubmit={handelSubmit}>
      <div className="flex flex-col gap-2">
        <label className="text-body-m text-medium-grey font-bold">Name</label>
        <TextField
          name="boardName"
          required
          defaultValue={isEditMode ? data?.[selectedBoardIndex]?.title : ""}
          placeholder="e.g. Platform Launch"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-body-m text-medium-grey font-bold">
          Columns
        </label>
        {columnsArray.map((column) => (
          <div key={column.id} className="flex items-center gap-4">
            <TextField
              name={column.id.toString()}
              required
              placeholder="e.g. website design"
              defaultValue={column.title}
            />
            <button
              className="cursor-pointer"
              type="button"
              onClick={removeColumnHandler(column.id)}
            >
              <img src={inconCross} alt="inconCross" />
            </button>
          </div>
        ))}
      </div>
      <Button variant="secondary" onClick={addNewColumnHandler} type="button">
        + Add New Column
      </Button>
      <Button variant="primary" type="submit">
        {isEditMode ? "Update" : "Create New"} Board
      </Button>
    </form>
  );
};
export default AddNewBoardForm;

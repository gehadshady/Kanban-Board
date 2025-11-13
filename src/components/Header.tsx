import { useState } from "react";
import DialogPrimitive from "./DialogPrimtive";
import DropDownMenuPrimitive from "./DropDownMenuPrimitive";
import iconVerticalEllipsis from "@assets/icon-vertical-ellipsis.svg";
import { useDataContext } from "@/DataContext";
import AddNewBoardForm from "./AddNewBoardForm";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { data, setData, selectedBoardIndex, setSelectedBoardIndex } =
    useDataContext();
  console.log(data?.length);
  const onEditBoard = () => {
    setOpen(true);
  };
  const onDeleteBoard = () => {
    if (window.confirm("Are you sure you want to delete this board?")) {
      setData((prevData) => {
        const newData = prevData?.filter(
          (_, index) => index !== selectedBoardIndex,
        );

        return newData;
      });
      setSelectedBoardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    }
  };
  return (
    <header className="flex h-[97px] shrink-0 items-center">
      <div className="border-lines-light text-main-purple flex w-[300px] items-center gap-4 self-stretch border-r border-b pl-8 text-[32px] font-bold">
        Kanban
      </div>
      <div className="border-lines-light flex flex-1 items-center justify-between self-stretch border-b pr-6 pl-6">
        <h2 className="text-heading-xl font-bold">Platform Launch</h2>
        <DropDownMenuPrimitive
          disabled={data?.length == 0}
          items={{
            edit: {
              label: "Edit Board",
              onClick: onEditBoard,
              // disabled: data?.length == 0,
            },
            delete: {
              label: "Delete Board",
              onClick: onDeleteBoard,
              // disabled: data?.length == 0,
            },
          }}
          triggerComponent={() => (
            <button className="text-main-purple outline:none flex cursor-pointer items-center gap-2 p-2 text-[14px] font-bold">
              <img src={iconVerticalEllipsis} alt="icon vertical ellipsis" />
            </button>
          )}
        />
        <DialogPrimitive
          isOpen={open}
          setOpen={setOpen}
          title="Edit Board"
        ></DialogPrimitive>

        <DialogPrimitive isOpen={open} setOpen={setOpen} title="Edit Board">
          <AddNewBoardForm isEditMode={true} toggleDialog={setOpen} />
        </DialogPrimitive>
      </div>
    </header>
  );
};
export default Header;

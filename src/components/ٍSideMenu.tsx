import clsx from "clsx";
import { useState } from "react";
import DialogPrimitive from "./DialogPrimtive";
import iconBoard from "@assets/icon-board.svg";
import { useDataContext } from "@/DataContext";
import AddNewBoardForm from "./AddNewBoardForm";

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const { data, selectedBoardIndex, setSelectedBoardIndex } = useDataContext();

  return (
    <>
      <aside className="side-menu border-lines-light -mt-px w-[300px] border-r bg-white font-bold">
        <p className="text-heading-s px-8 py-4">
          ALL BOARDS ({data?.length || 0})
        </p>
        <ul>
          {data?.map((item, index) => (
            <li key={item.id}>
              <button
                className={clsx(
                  "text-heading-m text-medium-grey data-[isactive=false]:hover:bg-main-purple/10 data-[isactive=false]:hover:text-main-purple flex w-11/12 items-center gap-4 rounded-e-full px-8 py-4 transition",
                  {
                    "bg-main-purple !text-white": index === selectedBoardIndex,
                  },
                )}
                onClick={() => setSelectedBoardIndex(index)}
                data-isactive={index === selectedBoardIndex}
              >
                <img src={iconBoard} alt="" />

                {item.title}
              </button>
            </li>
          ))}
          <li>
            <DialogPrimitive
              isOpen={open}
              setOpen={setOpen}
              title="Create New Board"
              triggerComponent={() => (
                <button className="text-heading-m text-main-purple flex w-full items-center gap-4 px-8 py-4">
                  <img src={iconBoard} alt="" /> + Create New Board
                </button>
              )}
            >
              <AddNewBoardForm toggleDialog={setOpen} />
            </DialogPrimitive>
          </li>
        </ul>
      </aside>
    </>
  );
};
export default SideMenu;

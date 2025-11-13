import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";

interface DropdownItem {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface DropDownMenuProps {
  triggerComponent?: (disabled?: boolean) => React.ReactNode;
  items?: Record<string, DropdownItem>;
  disabled?: boolean;
}

const DropDownMenuPrimitive = ({
  triggerComponent,
  items,
  disabled,
}: DropDownMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div>{triggerComponent && triggerComponent(disabled)}</div>
        {/* <button
          className="inline-flex size-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
        >
          <DotsVerticalIcon />
        </button> */}
      </DropdownMenu.Trigger>
      {!disabled && (
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
            sideOffset={5}
          >
            {items &&
              Object.keys(items).map((item) => (
                <DropdownMenu.Item
                  className={clsx(
                    "group text-body-l data-[highlighted]:bg-light-grey cursor-pointer p-4 leading-none outline-none",
                    {
                      "text-red": item == "delete",
                    },
                  )}
                  key={item}
                  onClick={items[item].onClick}
                  disabled={items[item].disabled}
                >
                  {items[item].label}
                </DropdownMenu.Item>
              ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      )}
    </DropdownMenu.Root>
  );
};

export default DropDownMenuPrimitive;

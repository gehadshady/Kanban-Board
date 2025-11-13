import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import type { JSX } from "react";

interface DialogProps {
  title?: string;
  triggerComponent?: () => React.ReactNode | JSX.Element;
  children?: React.ReactNode;
  isOpen?: boolean;
  setOpen?: (open: boolean) => void;
}
const DialogPrimitive = ({
  title,
  triggerComponent,
  children,
  isOpen,
  setOpen,
}: DialogProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {triggerComponent && triggerComponent()}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[480px] translate-x-[-50%] translate-y-[-50%] overflow-auto rounded-[6px] bg-white p-8 focus:outline-none">
          <Dialog.Title className="text-heading-l font-bold">
            {title}
          </Dialog.Title>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogPrimitive;

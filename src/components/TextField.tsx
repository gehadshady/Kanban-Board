import clsx from "clsx";

interface TextFieldProps {
  placeholder: string;
  isInvalid?: boolean;
  name: string;
  ref?: React.Ref<HTMLInputElement>;
  required?: boolean;
  defaultValue?: string;
}

const TextField = ({
  placeholder,
  isInvalid,
  name,
  ref,
  required,
  defaultValue,
}: TextFieldProps) => {
  return (
    <div className="relative flex min-w-80 flex-1 items-center">
      {isInvalid && (
        <span className="text-body-l text-red absolute right-4">
          Can’t be empty
        </span>
      )}
      <input
        type="text"
        name={name}
        ref={ref}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className={clsx(
          "border-medium-grey/25 text-body-l focus:border-main-purple focus:ring-main-purple w-full rounded-[4px] border py-2 pl-4 focus:ring-1 focus:outline-none",
          {
            "border-red pr-32": isInvalid,
            "pr-4": !isInvalid,
          },
        )}
      />
    </div>
  );
};

export default TextField;

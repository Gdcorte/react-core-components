import { FunctionComponent } from "react";
import { ElemDropdownOption } from "../Elements";
import {
  DropdownMenuProps,
  DropdownOptionProps,
  isDropdownOption,
} from "../interface";

function emptyCallback() {
  return;
}

export function renderBodyDropdown({
  options,
  label,
  SubDropdown,
  closeCallback,
}: {
  options: (DropdownOptionProps | DropdownMenuProps)[];
  label: string;
  SubDropdown: FunctionComponent<DropdownMenuProps>;
  closeCallback?: CallableFunction;
}) {
  const optionsNode = options.map((option) => {
    if (isDropdownOption(option)) {
      return (
        <ElemDropdownOption
          key={`drop-opt ${Math.random().toFixed(5)}`}
          href={option.href}
          selected={option.selected}
          onClick={option.onClick}
          data={option.data}
          closeCallback={closeCallback}
        >
          {option.label}
        </ElemDropdownOption>
      );
    }

    return (
      <SubDropdown
        key={`drop-menu ${Math.random().toFixed(5)}`}
        label={option.label}
        options={option.options}
        listOrientation={option.listOrientation}
        closeOnClick={option.closeOnClick}
      />
    );
  });

  return optionsNode;
}

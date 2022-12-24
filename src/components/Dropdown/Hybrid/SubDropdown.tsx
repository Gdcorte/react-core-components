import { FunctionComponent, RefObject, useState } from "react";
import { DropdownMenuProps } from "../interface";
import {
  ElemDropdownMenu,
  ElemDropdownList,
  ElemDropdownSubContainer,
} from "../Elements";
import { OutsideClickHandler } from "../../../hooks/OutsideClick";
import { Carrets } from "../../../icons";
import { renderBodyDropdown } from "../helper";

interface ClickDropdownMenuProps extends DropdownMenuProps {
  parentRef?: RefObject<HTMLObjectElement>;
  closeCallback?: CallableFunction;
}

export const SubDropdown: FunctionComponent<ClickDropdownMenuProps> = ({
  label,
  options,
  listOrientation,
  parentRef,
  showCarret,
  closeCallback,
}) => {
  const [isOpen, setisOpen] = useState(false);

  function toggleOpen() {
    setisOpen(!isOpen);
  }

  function setClosed() {
    setisOpen(false);
  }

  function setOpen() {
    setisOpen(true);
  }

  parentRef && OutsideClickHandler(parentRef, setClosed);

  const CarretNode = Carrets[listOrientation || "down"];
  const body = renderBodyDropdown({
    options,
    label,
    SubDropdown,
    closeCallback: closeCallback,
  });

  return (
    <ElemDropdownSubContainer mouseEnter={setOpen} mouseLeave={setClosed}>
      <ElemDropdownMenu
        onClick={toggleOpen}
        elementRef={parentRef}
        elementKey={`main-menu-${label}-${Math.random().toFixed(5)}`}
      >
        <div className="dropdown-menu-label">{label}</div>
        {showCarret ? <CarretNode /> : <></>}
      </ElemDropdownMenu>

      {body.length && isOpen ? (
        <ElemDropdownList listOrientation={listOrientation}>
          {body}
        </ElemDropdownList>
      ) : (
        <></>
      )}
    </ElemDropdownSubContainer>
  );
};

SubDropdown.defaultProps = {
  listOrientation: "left",
  showCarret: true,
};

export default SubDropdown;

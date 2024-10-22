import Select, { GroupBase, Props } from "react-select";
import styled from "styled-components";
import { SelectOption } from "./interface";

const StyledSelect = styled(Select)<{
  $separator: boolean;
}>`
  background: inherit;

  .myselect__control {
    min-height: unset;

    border: inherit;
    background: inherit;

    text-decoration: none;

    cursor: pointer;
  }

  .myselect__control.myselect__control--is-focused {
    border: inherit;
    box-shadow: none;
  }

  .myselect__value-container {
    padding: 2px;
  }

  .myselect__input-container {
    margin: 0;
  }

  .myselect__indicator-separator {
    background: transparent;
  }
  .myselect__indicator {
    padding: 0;
    border-left: ${({ $separator }) => ($separator ? "1px solid;" : "none")};

    color: inherit;
  }

  .myselect__menu {
    background: inherit;
  }

  .myselect__option {
    cursor: pointer;
  }

  .myselect__option--is-focused {
    background: ${({ theme }) => theme.background.contrast};
  }
`;

type CustomProps<
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group> & {
  separator?: boolean;
};

export default function SimpleSelect<
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  classNamePrefix,
  separator = false,
  ...props
}: CustomProps<Option, IsMulti, Group>) {
  return (
    // @ts-expect-error ongoing issue with Option generics and typescripts
    <StyledSelect
      $separator={separator}
      {...props}
      classNamePrefix="myselect"
    />
  );
}

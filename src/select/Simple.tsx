import Select, { GroupBase, Props } from "react-select";
import styled from "styled-components";
import { SelectOption } from "./interface";

const StyledSelect = styled(Select)``;

type CustomProps<
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group> & {};

export default function SimpleSelect<
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ ...props }: CustomProps<Option, IsMulti, Group>) {
  // @ts-expect-error ongoing issue with Option generics and typescripts
  return <StyledSelect {...props} />;
}

type StatusFlag = {
  isValid?: boolean;
  isRequired?: boolean;
  disabled?: boolean;
};

export function convertStatusFlagToClass({
  isRequired,
  isValid,
  disabled,
}: StatusFlag) {
  return `${isRequired == true ? "required" : ""} 
  ${isValid == false ? "error" : ""} 
  ${disabled == true ? "disabled" : ""}`;
}

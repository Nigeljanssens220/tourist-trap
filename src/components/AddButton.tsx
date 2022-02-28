import React, { FC } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ButtonProps from "./SubtractButton";

export interface AddButtonProps extends React.HTMLProps<HTMLInputElement> {
  className: string;
}
const AddButton: FC<AddButtonProps> = ({ className }) => {
  return <AddCircleOutlineOutlinedIcon className={className} />;
};

export default AddButton;

import React, { FC } from "react";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

export interface SubtractButtonProps extends React.HTMLProps<HTMLInputElement> {
  className: string;
}
const SubtractButton: FC<SubtractButtonProps> = ({ className }) => {
  return <RemoveCircleOutlineOutlinedIcon className={className} />;
};

export default SubtractButton;

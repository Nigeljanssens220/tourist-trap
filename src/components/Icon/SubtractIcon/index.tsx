import React, { FC } from "react";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

export interface SubtractButtonProps
  extends React.HTMLProps<HTMLButtonElement> {
  className: string;
}
const SubtractIcon: FC<SubtractButtonProps> = ({ className }) => {
  return <RemoveCircleOutlineOutlinedIcon className={className} />;
};

export default SubtractIcon;

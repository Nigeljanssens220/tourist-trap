import React, { FC } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export interface AddButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className: string;
}
const AddIcon: FC<AddButtonProps> = ({ className }) => {
  return <AddCircleOutlineOutlinedIcon className={className} />;
};

export default AddIcon;

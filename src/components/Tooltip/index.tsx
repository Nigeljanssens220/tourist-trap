import React, { FC, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

interface TooltipProps {
  tooltipText: string;
  transitionTime?: number;
}

const CustomTooltip: FC<TooltipProps> = ({
  tooltipText,
  transitionTime = 300,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Tooltip
      title={tooltipText}
      arrow
      open={showTooltip}
      onOpen={() => setShowTooltip(true)}
      onClose={() => setShowTooltip(false)}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: transitionTime }}
    >
      <button onClick={() => setShowTooltip(!showTooltip)}>
        <HelpOutlineIcon className='text-xs sm:text-sm pb-1 text-zinc-500 ml-1' />
      </button>
    </Tooltip>
  );
};

export default CustomTooltip;

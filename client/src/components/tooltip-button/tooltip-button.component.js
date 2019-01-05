import React from 'react';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";

export const TooltipButton = ({className, onClick, title, label}) => (
    <div
        className={className}
        onClick={onClick}>
        <Tooltip title={title}>
            <Typography
                variant={"body2"}>
                {label}
            </Typography>
        </Tooltip>
    </div>
);

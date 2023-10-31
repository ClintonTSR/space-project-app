import React from 'react';
import { Typography } from "@mui/material";

const HightlightedText = ({ children }: { children: React.ReactNode }) => {
    return (
        <Typography component="span" fontWeight={800}
                    sx={{ color: '#fcba03' }}> {children}
        </Typography>
    );
};

export default HightlightedText;
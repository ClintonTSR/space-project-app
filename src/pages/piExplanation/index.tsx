import React from 'react';
import { Box, Button, Stack, Typography } from "@mui/material";
import { useGetCircumferenceQuery, useGetPiQuery } from "src/tanstack/queries/pi";
import HightlightedText from "src/components/HightlightedText";
import { Link } from "react-router-dom";

const PiExplanationPage = () => {
    const { data: piValue } = useGetPiQuery({})
    const { data: sunCircumference } = useGetCircumferenceQuery({ query: { planetName: 'sun' } })
    return (
        <Stack alignItems="center" rowGap={3} padding={3} bgcolor="#222" minHeight="100vh" color="white"
               textAlign="center">
            <Typography variant="h3" fontWeight={700} align="center">
                How the circumference of sun is calculated
            </Typography>
            <Typography>
                To calculate the circumference, we use the general formula where circumference = 2πr
                <br/>
                r is radius, which is half of the diameter
                <br/>
                The diameter of the sun is known to be 1392684 km
            </Typography>
            <Typography>
                According to our calculation, the known pi value is
                <HightlightedText>{piValue}</HightlightedText>
                <br/>
                Therefore, the diameter of the sun is {piValue} * 1392684 km
                which resulted in <HightlightedText> {sunCircumference}  </HightlightedText> km
            </Typography>
            <Box>
                <Button color="warning" variant="contained"
                        component={Link} to="/"> Back to Home Page
                </Button>
            </Box>
        </Stack>
    );
};

export default PiExplanationPage;
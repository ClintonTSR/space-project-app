import React from 'react';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetCircumferenceQuery } from "src/tanstack/queries/pi";

const HomePage = () => {
    const { data: sunCircumference } = useGetCircumferenceQuery({ query: { planetName: 'sun' } })
    const sunImgUrl = "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg";
    return (
        <Stack alignItems="center" rowGap={3} padding={3} bgcolor="#222" minHeight="100vh" color="white">
            <Typography variant="h2" fontWeight={700} align="center">Welcome to explore the space</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box overflow="hidden">
                        <img style={{ objectFit: "contain", maxWidth: '100%' }}
                             src={sunImgUrl} alt="sun"/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack rowGap={2} paddingY={3}>
                        <Typography variant="h3" fontWeight={600}>
                            The Sun
                        </Typography>
                        <Typography>
                            The sun is an ordinary star, one of about 100 billion in our galaxy, the Milky Way.
                            The sun has extremely important influences on our planet: It drives weather, ocean currents,
                            seasons, and climate, and makes plant life possible through photosynthesis.
                        </Typography>
                        <Typography>
                            Source: <Link style={{ color: 'white' }}
                                          to="https://education.nationalgeographic.org/resource/sun/">
                            National Geographic</Link>
                        </Typography>
                        <Typography>
                            The circumference of the sun is
                            <Typography component="span" fontWeight={800}
                                        sx={{ color: '#fcba03' }}> {sunCircumference} km
                            </Typography>
                        </Typography>
                        <Box>
                            <Button color="warning" variant="contained"
                                    component={Link} to="/pi"> How do we calculate it?
                            </Button>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default HomePage;
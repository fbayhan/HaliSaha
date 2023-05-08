import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function SoccerField(props) {
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <h2>Player Wizard</h2>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        Saha
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        Oyuncular
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
}

export default SoccerField;
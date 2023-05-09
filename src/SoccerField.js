import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useEffect, useLayoutEffect, useRef, useState} from 'react';

function SoccerField(props) {

    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.clientWidth);
        setHeight(ref.current.clientHeight);
    }, []);

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div style={{ backgroundColor:"red"}}>
            <h2>Player Wizard</h2>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={8} >
                        Saha
                        <Item style={{ backgroundColor:"blue",  display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',}}>xs=8
                            <div ref={ref} style={{
                                color: "white",display: 'flex',
                                backgroundColor: "green", width: '80%', height: width * 1.6,  alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{ border: '2px solid white' , width:'90%', height:'95%'}}>

                                    <div style={{ border: '2px solid white', width: '25%', height:'10%', ali }}>Kale 1</div>
                                    <div>Orta Çizgi
                                        <div>Yuvarlak</div>
                                    </div>

                                    <div>Kale 2</div>
                                </div>
                            </div>

                        </Item>
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

const mystyle = {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    fontFamily: "Arial",
    height: 100

};


export default SoccerField;
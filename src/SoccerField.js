import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useEffect, useLayoutEffect, useRef, useState} from 'react';

import SoccerFieldImage from './images/SoccerField.png'
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

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
    function onDragEnd(result) {
        console.log("onDragEnd")
        console.log("onDragEnd")
    }

    return (
        <div>
            <h2>Player Wizard</h2>
            <hr/>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>

                    <DragDropContext onDragEnd={onDragEnd}>

                    <Grid item xs={8}>
                        <h3>Saha</h3>
                        <Item style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <div ref={ref}>
                                <img src={SoccerFieldImage} width="100%" height="100%"/>
                            </div>

                        </Item>
                    </Grid>

                        <Droppable droppableId="firstTeam">
                    <Grid item xs={4}>
                        <h3> Oyuncular</h3>


                        <ul className="characters">
                            <Draggable>
                            <li>
                                <span>1</span>
                                <p>Fatih Bayhan </p>
                                <IconButton color="primary"
                                            aria-label="upload picture"
                                            component="label">

                                    <DeleteIcon/>
                                </IconButton>
                            </li>
                            </Draggable>
                            <li>
                                <span>3</span>
                                <p>Fatih Bayhan </p>
                                <IconButton color="primary"
                                            aria-label="upload picture"
                                            component="label">

                                    <DeleteIcon/>
                                </IconButton>
                            </li>
                            <li>
                                <span>5</span>
                                <p>Fatih Bayhan </p>
                                <IconButton color="primary"
                                            aria-label="upload picture"
                                            component="label">

                                    <DeleteIcon/>
                                </IconButton>
                            </li>
                            <li>
                                <span>6</span>
                                <p>Fatih Bayhan </p>
                                <IconButton color="primary"
                                            aria-label="upload picture"
                                            component="label">

                                    <DeleteIcon/>
                                </IconButton>
                            </li>
                            <li>
                                <span>7</span>
                                <p>Fatih Bayhan </p>
                                <IconButton color="primary"
                                            aria-label="upload picture"
                                            component="label">

                                    <DeleteIcon/>
                                </IconButton>
                            </li>


                        </ul>


                    </Grid>
                        </Droppable>

                    </DragDropContext>
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
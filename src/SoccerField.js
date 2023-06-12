import './App.css';

import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useEffect, useLayoutEffect, useRef, useState} from 'react';

import SoccerFieldImage from './images/SoccerField.png'
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function SoccerField(props) {
    const field = [
        {
            "id": 41,
            "GoalKeeper": false,
            "Name": "Fatih Bayhan",
            "BackNumber": 38,
            "top": 125,
            "left": 150,
            "team": 1
        },
        {
            "id": 42,
            "GoalKeeper": false,
            "Name": "Fatih Bayhan",
            "BackNumber": 2,
            "top": 125,
            "left": 350,
            "team": 1
        },
        {
            "id": 43,
            "GoalKeeper": false,
            "Name": "Nurcan",
            "BackNumber": 3,
            "top": 125,
            "left": 550,
            "team": 1
        },
        {
            "id": 44,
            "GoalKeeper": false,
            "Name": "Leyla",
            "BackNumber": 4,
            "top": 225,
            "left": 450,
            "team": 1
        },
        {
            "id": 45,
            "GoalKeeper": false,
            "Name": "Ali",
            "BackNumber": 5,
            "top": 325,
            "left": 150,
            "team": 1
        },
        {
            "id": 46,
            "GoalKeeper": false,
            "Name": "Hakan",
            "BackNumber": 12,
            "top": 325,
            "left": 250,
            "team": 1
        },
        {
            "id": 47,
            "GoalKeeper": false,
            "Name": "Alperen",
            "BackNumber": 7,
            "top": 325,
            "left": 450,
            "team": 1
        },
        {
            "id": 48,
            "GoalKeeper": false,
            "Name": "Marla",
            "BackNumber": 8,
            "top": 425,
            "left": 250,
            "team": 1
        },
        {
            "id": 49,
            "GoalKeeper": false,
            "Name": "Fatih Parlak",
            "BackNumber": 9,
            "top": 425,
            "left": 350,
            "team": 1
        }
    ];

    const soccerField = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const [localCoords, setLocalCoords] = useState({x: 0, y: 0});

    const [playerCoords, setPlayerCoords] = useState(field);


    const handleMouseMove = event => {
        // 👇️ Get the mouse position relative to the element
        setLocalCoords({
            x: event.clientX - event.target.offsetLeft,
            y: event.clientY - event.target.offsetTop,
        });
    };


    const fieldPlayerMoved = playerId => event => {
        console.log(playerCoords);
        console.log("Fatih " + playerId);
        event.stopPropagation();
        event.preventDefault();
        const yAxis = event.clientY - event.target.offsetTop;
        const xAxis = event.clientX - event.target.offsetLeft;

        console.log(xAxis, yAxis);
        setLocalCoords({
            x: event.clientX - event.target.offsetLeft,
            y: event.clientY - event.target.offsetTop,
        });

        let objIndex = playerCoords.findIndex(obj => obj.id == playerId);
        let updatedArray = playerCoords;
        console.log(objIndex)
        updatedArray[objIndex].top=xAxis;
        updatedArray[objIndex].left=yAxis;
        setPlayerCoords(updatedArray);

        console.log(playerCoords);

    }

    useLayoutEffect(() => {
        setWidth(soccerField.current.clientWidth);
        setHeight(soccerField.current.clientHeight);
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
        console.log(localCoords.x + "  " + localCoords.y)
    }


    const getCssByDragging = (snapshot) => {
        // Giving isDraggingOver preference
        //    console.log(snapshot);
        if (snapshot.isDraggingOver) {
            return 'pink';
        }

        // If it is the home list but not dragging over
        if (snapshot.draggingFromThisWith) {
            return 'blue';
        }

        // Otherwise use our default background
        return 'white';
    };

    const styles = {
        soccerField: {
            width: "100%",
            aspectRatio: 0.67,
            backgroundImage: `url('${SoccerFieldImage}')`,
            //   ` ve ' arasındaki farka bak
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: "relative"
        },
        fieldPlayer: {
            display: 'block',
            border: "solid 2px   #000000",
            borderRadius: "50%",
            color: "red",
            aspectRatio: 1,
            width: width * 0.1,
            fontSize: width * 0.08,
            position: "absolute  ",


        }
    }



    const firstTeam = [
        {
            "id": 1,
            "GoalKeeper": false,
            "Name": "Fatih Bayhan",
            "BackNumber": 38,
            "top": 125,
            "left": 150
        },
        {
            "id": 2,
            "GoalKeeper": false,
            "Name": "Fatih Bayhan",
            "BackNumber": 2,
            "top": 125,
            "left": 350
        },
        {
            "id": 3,
            "GoalKeeper": false,
            "Name": "Nurcan",
            "BackNumber": 3,
            "top": 125,
            "left": 550
        },
        {
            "id": 4,
            "GoalKeeper": false,
            "Name": "Leyla",
            "BackNumber": 4,
            "top": 225,
            "left": 450
        },
        {
            "id": 5,
            "GoalKeeper": false,
            "Name": "Ali",
            "BackNumber": 5,
            "top": 325,
            "left": 150
        },
        {
            "id": 6,
            "GoalKeeper": false,
            "Name": "Hakan",
            "BackNumber": 12,
            "top": 325,
            "left": 250
        },
        {
            "id": 7,
            "GoalKeeper": false,
            "Name": "Alperen",
            "BackNumber": 7,
            "top": 325,
            "left": 450
        },
        {
            "id": 8,
            "GoalKeeper": false,
            "Name": "Marla",
            "BackNumber": 8,
            "top": 425,
            "left": 250
        },
        {
            "id": 9,
            "GoalKeeper": false,
            "Name": "Fatih Parlak",
            "BackNumber": 9,
            "top": 425,
            "left": 350
        }
    ];

    const secondTeam = [
        {
            "id": 10,
            "GoalKeeper": false,
            "Name": "Alfa",
            "BackNumber": 1
        },
        {
            "id": 11,
            "GoalKeeper": false,
            "Name": "Beta",
            "BackNumber": 2
        },
        {
            "id": 12,
            "GoalKeeper": false,
            "Name": "Utku",
            "BackNumber": 3
        },
        {
            "id": 13,
            "GoalKeeper": false,
            "Name": "Batu",
            "BackNumber": 4
        },
        {
            "id": 14,
            "GoalKeeper": false,
            "Name": "Ece",
            "BackNumber": 5
        },
        {
            "id": 15,
            "GoalKeeper": false,
            "Name": "Nurcan",
            "BackNumber": 6
        },
        {
            "id": 16,
            "GoalKeeper": false,
            "Name": "Bilge",
            "BackNumber": 7
        },
        {
            "id": 17,
            "GoalKeeper": false,
            "Name": "Begüm",
            "BackNumber": 8
        },
        {
            "id": 18,
            "GoalKeeper": false,
            "Name": "Turan Bayhan",
            "BackNumber": 9
        }
    ];

    return (
        <div>
            <h2 onMouseMove={handleMouseMove}>Player Wizard</h2>
            <hr/>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <DragDropContext onDragEnd={onDragEnd}>

                        <Grid item xs={8}>
                            <h2>
                                Relative: ({localCoords.x}, {localCoords.y})
                            </h2>
                            <br/>


                            <h3>Saha {width}</h3>

                            {/*Burayı şimdilik yoruma attım, yeniden hard coded yapacağım, yaptığımda silerim*/}

                            {/*<Item    onMouseUp={handleMouseMove} >*/}
                            {/*    <Droppable droppableId="field">*/}
                            {/*        {(provided, snapshot) => (*/}
                            {/*            <div ref={soccerField}    >*/}
                            {/*                <div ref={provided.innerRef}*/}
                            {/*                     style={styles.soccerField}  {...provided.droppableProps} >*/}

                            {/*                    {field.map(({*/}
                            {/*                                        id,*/}
                            {/*                                        GoalKeeper,*/}
                            {/*                                        Name,*/}
                            {/*                                        BackNumber,*/}
                            {/*                                        top,*/}
                            {/*                                        left,*/}
                            {/*                                    team*/}
                            {/*                                    }, index) => {*/}
                            {/*                        return (*/}
                            {/*                            <Draggable key={id} draggableId={id + ""} index={index}>*/}
                            {/*                                {(provided) => (*/}
                            {/*                                    <span style={{...styles.fieldPlayer, left:150, top:250}}*/}
                            {/*                                          ref={provided.innerRef}    {...provided.dragHandleProps}  {...provided.draggableProps}*/}
                            {/*                                    >*/}
                            {/*                                        {getCssByDragging(snapshot)}*/}
                            {/*                                        {index} {team}*/}

                            {/*                                    </span>*/}

                            {/*                            //         <span style={{*/}
                            {/*                            //             ...styles.fieldPlayer, left: left,*/}
                            {/*                            //             top: top*/}
                            {/*                            //         }}*/}
                            {/*                            //               ref={provided.innerRef} {...provided.draggableProps}*/}
                            {/*                            //               {...provided.dragHandleProps}>*/}
                            {/*                            // {BackNumber}</span>*/}

                            {/*                                )}*/}

                            {/*                            </Draggable>*/}
                            {/*                        )*/}
                            {/*                    })}*/}

                            {/*                    /!*{provided.placeholder}*!/*/}
                            {/*                    <span style={{*/}
                            {/*                        ...styles.fieldPlayer, left: 150,*/}
                            {/*                        top: 150*/}
                            {/*                    }}*/}
                            {/*                    >*/}
                            {/*                                 22</span>*/}
                            {/*                </div>*/}

                            {/*            </div>*/}
                            {/*        )}*/}
                            {/*    </Droppable>*/}


                            {/*</Item>*/}

                            {/*Burayı şimdilik yoruma attım, yeniden hard coded yapacağım, yaptığımda silerim, ikisinin arasını yoruma açabilirsin gerekirse*/}


                            <Item onMouseUp={handleMouseMove}>

                                <div ref={soccerField}>
                                    <div
                                        style={styles.soccerField}>

                                        {field.map(({
                                                        id,
                                                        GoalKeeper,
                                                        Name,
                                                        BackNumber,
                                                        top,
                                                        left,
                                                        team
                                                    }, index) => {
                                            return (


                                                <span  key={id} style={{
                                                    ...styles.fieldPlayer, left: left,
                                                    top: top
                                                }} draggable="true"
                                                      onDragOver={fieldPlayerMoved(id)}
                                                >
                                                                {BackNumber}</span>


                                            )
                                        })}


                                    </div>

                                </div>


                            </Item>


                        </Grid>


                        <Grid item xs={4}>
                            <h3> Oyuncular</h3>

                            <h4>Takım 1</h4>

                            <Droppable droppableId="team1">
                                {(provided, snapshot) => (
                                    <ul className="characters"  {...provided.droppableProps} ref={provided.innerRef}>
                                        {firstTeam.map(({id, GoalKeeper, Name, BackNumber, top, left}, index) => {
                                            return (
                                                <Draggable key={id} draggableId={id + ""} index={index}>
                                                    {(provided) => (
                                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            <span>{BackNumber}</span>
                                                            <p>{Name} </p>
                                                            <IconButton color="primary"
                                                                        aria-label="upload picture"
                                                                        component="label">
                                                                <DeleteIcon/>
                                                            </IconButton>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            );
                                        })}
                                    </ul>
                                )}
                            </Droppable>
                            <br/>
                            <br/>
                            <h4>Takım 2</h4>

                            <ul className="characters">

                                <Droppable droppableId="team2">
                                    {(provided, snapshot) => (
                                        <ul className="characters"  {...provided.droppableProps}
                                            ref={provided.innerRef}>
                                            {secondTeam.map(({id, GoalKeeper, Name, BackNumber}, index) => {
                                                return (
                                                    <Draggable key={id} draggableId={id + ""} index={index}>
                                                        {(provided) => (
                                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                <span>{BackNumber}</span>
                                                                <p>{Name} </p>
                                                                <IconButton color="primary"
                                                                            aria-label="upload picture"
                                                                            component="label">
                                                                    <DeleteIcon/>
                                                                </IconButton>
                                                            </li>
                                                        )}
                                                    </Draggable>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </Droppable>


                            </ul>


                        </Grid>


                    </DragDropContext>
                </Grid>
            </Box>

        </div>
    );


}


export default SoccerField;
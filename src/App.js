import './App.css';
import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import DnDDemo from "./DnDDemo";
import {Grid, Paper} from "@mui/material";
import {styled} from '@mui/material/styles';
import SoccerField from "./SoccerField";

function App() {
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    const [players, setPlayers] = useState([]);
    const [playerName, setPlayerName] = useState("");
    const [firstTeam, setFirstTeam] = useState([]);
    const [secondTeam, setSecondTeam] = useState([]);


    const firstTeamItemsDemo = [{
        "id": 3,
        "name": "Fatih"
    },
        {
            "id": 4,
            "name": "Nurcan"
        },
        {
            "id": 5,
            "name": "Ali"
        },
        {
            "id": 6,
            "name": "Alperen"
        },
    ];

    const secondTeamItemsDemo = [{
        "id": 30,
        "name": "Liste 2 Fatih"
    },
        {
            "id": 40,
            "name": "Nurcan 2"
        },
        {
            "id": 50,
            "name": "Ali 2"
        },
        {
            "id": 60,
            "name": "Alperen 2"
        },
    ];


    // useEffect(() => {
    //     setFirstTeam(firstTeamItemsDemo);
    //     setSecondTeam(secondTeamItemsDemo);
    // }, []);


    function reorder(list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    function move(source, destination) {

        let sourceArray = getDroppableList(source.droppableId);
        let destinationArray = getDroppableList(destination.droppableId);


        let removedItem = sourceArray[source.index];
        sourceArray.splice(source.index, 1);
        destinationArray.splice(destination.index, 0, removedItem);
        updateDroppableList(source.droppableId, sourceArray);
        updateDroppableList(destination.droppableId, destinationArray);

    };


    function handleOnDragEnd(result) {
        //if (!result.destination) return;
        const {source, destination} = result;


        const items = Array.from(players);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPlayers(items);
    }


    function handleChange() {
        setPlayerName(playerName);
        if (playerName != "")
            setPlayers(current => [...current, {"name": playerName, "id": new Date().getTime()}]);
    }

    const handleKeyDown = (event) => {

        if (event.key === 'Enter' && playerName != "") {
            setPlayers(current => [...current, {"name": playerName, "id": new Date().getTime()}]);
        }
    }


    function onDragEnd(result) {
        const {source, destination} = result;

        if (!destination || !source) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                getDroppableList(source.droppableId),
                source.index,
                destination.index
            );
            updateDroppableList(source.droppableId, items);

        } else {
            move(
                source,
                destination
            );
        }
    }

    const getDroppableList = (id) => {

        switch (id) {
            case "players":
                return players;
            case "team1":
                return firstTeam;
            case "team2":
                return secondTeam;
        }
    }

    const updateDroppableList = (id, list) => {

        switch (id) {
            case "players":
                setPlayers(list);
                return players;
            case "team1":
                setFirstTeam(list);
                return firstTeam;
            case "team2":
                setSecondTeam(list)
                return secondTeam;
        }
    }


    return (

        <Container fixed>

            <SoccerField></SoccerField>


            {/*<DnDDemo></DnDDemo>*/}
            <h1>Room 5004</h1>    <h2>29 Mayıs 2022 Atatürk Halı Lisesi</h2>
            <p>You added {playerName}</p>

            <Box component="form" sx={{'& > :not(style)': {m: 1, width: '25ch'},}} noValidate autoComplete="off">

                <TextField id="outlined-basic" label="Outlined" onChange={e => setPlayerName(e.target.value)}
                           onKeyDown={handleKeyDown}/>
                <Button variant="contained" onClick={handleChange}> EKLE</Button>


            </Box>

            <Grid container spacing={2}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Grid item xs={4}>
                        <Item>
                            <h4>Tüm Oyuncular</h4>

                            <div>{players.length} players added</div>


                            <Droppable droppableId="players">
                                {(provided, snapshot) => (
                                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                        {players.map(({id, name}, index) => {
                                            return (
                                                <Draggable key={id} draggableId={id + ""} index={index}>
                                                    {(provided) => (
                                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                                                            <p>
                                                                {name}
                                                            </p>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            );
                                        })}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>


                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <h4>1. Takım</h4>
                            <div>{firstTeam.length} players added first team</div>

                            <Droppable droppableId="team1">
                                {(provided) => (

                                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                        {firstTeam.map(({id, name}, index) => {
                                            return (
                                                <Draggable key={id} draggableId={id + ""} index={index}>
                                                    {(provided) => (
                                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                                                            <p>
                                                                {name}
                                                            </p>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            );
                                        })}
                                        {provided.placeholder}
                                    </ul>
                                )}

                            </Droppable>


                        </Item>
                    </Grid>
                    <Grid item xs={4}>

                        <Item>
                            <h4>2. Takım</h4>
                            <div>{secondTeam.length} players added first team</div>

                            <Droppable droppableId="team2">
                                {(provided) => (

                                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                        {secondTeam.map(({id, name}, index) => {
                                            return (
                                                <Draggable key={id} draggableId={id + ""} index={index}>
                                                    {(provided) => (
                                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                                                            <p>
                                                                {name}
                                                            </p>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            );
                                        })}
                                        {provided.placeholder}
                                    </ul>
                                )}

                            </Droppable>


                        </Item>
                    </Grid>
                </DragDropContext>
            </Grid>


        </Container>
    );


}

export default App;

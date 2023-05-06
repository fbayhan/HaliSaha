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

function App() {
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [count, setCount] = useState(0);
    const [players, setPlayers] = useState([]);
    const [playerName, setPlayerName] = useState("");
    const [characters, updateCharacters] = useState(players);

    const [firstTeam, setFirstTeam] = useState([]);


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

    useEffect(() => {
        setFirstTeam(firstTeamItemsDemo);
    }, []);


    function reorder(list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    function move(source, destination, droppableSource, droppableDestination) {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };


    function handleOnDragEnd(result) {
        //if (!result.destination) return;

        const {source, destination} = result;

        console.log(source);
        console.log(destination);


        const items = Array.from(players);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPlayers(items);
    }

    function handleOnDragEndFirstTeam(result) {
        //if (!result.destination) return;
        console.log(result);

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

    const id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    function getList(id) {
        this.state[this.id2List[id]];
    }

    function onDragEnd(result) {
        const {source, destination} = result;

        console.log(source);
        console.log(destination);

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            console.log("Aynı yere konuyor");
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = {items};

            if (source.droppableId === 'droppable2') {
                state = {selected: items};
            }

            this.setState(state);
        } else {

            console.log("Farklı yere konuyor");
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    }

    return (

        <Container fixed>
            {/*<DnDDemo></DnDDemo>*/}
            <h1>Room 5004</h1>    <h2>29 Mayıs 2022 Atatürk Halı Lisesi</h2>
            <p>You added {playerName}</p>

            <Box component="form" sx={{'& > :not(style)': {m: 1, width: '25ch'},}} noValidate autoComplete="off">

                <TextField id="outlined-basic" label="Outlined" onChange={e => setPlayerName(e.target.value)}
                           onKeyDown={handleKeyDown}/>
                <Button variant="contained" onClick={handleChange}> EKLE</Button>


            </Box>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <h4>Tüm Oyuncular</h4>

                        <div>{players.length} players added</div>

                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="players">
                                {(provided) => (
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
                        </DragDropContext>

                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h4>1. Takım</h4>
                        <div>{players.length} players added first team</div>
                        <DragDropContext onDragEnd={onDragEnd}>
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
                        </DragDropContext>

                    </Item>
                </Grid>
                <Grid item xs={4}>

                    <Item>
                        <h4>2. Takım</h4>

                    </Item>
                </Grid>

            </Grid>


        </Container>
    );


}

export default App;

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import DnDDemo from "./DnDDemo";

function App() {
    const [count, setCount] = useState(0);
    const [players, setPlayers] = useState([]);
    const [playerName, setPlayerName] = useState("");
    const [characters, updateCharacters] = useState(players);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

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
        console.log(event)
        if (event.key === 'Enter' && playerName != "") {
            setPlayers(current => [...current, {"name": playerName, "id": new Date().getTime()}]);
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

                <div>{players.length} player added</div>

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
            </Box>


        </Container>
    );
}

export default App;

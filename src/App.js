import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


function App() {
    const [count, setCount] = useState(0);
    const [players, setPlayers] = useState([]);
    const [playerName, setPlayerName] = useState("");


    function handleChange() {
        setPlayerName(playerName);
        if (playerName != "")
            setPlayers(current => [...current, playerName]);
    }

    return (
        <Container fixed>

            <h1>Room 5004</h1>    <h2>29 Mayıs 2022 Atatürk Halı Lisesi</h2>
            <p>You added {playerName}</p>

            <Box component="form"
                 sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                 noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Outlined"
                           onChange={e => setPlayerName(e.target.value)}/>
                <Button variant="contained" onClick={handleChange}>EKLE</Button>
                <div>{players.length} player added</div>
                <ul>

                    {players.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))}

                </ul>
            </Box>


        </Container>
    );
}

export default App;

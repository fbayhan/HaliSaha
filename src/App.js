import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function App() {
    const [count, setCount] = useState(0);
    const [players, setPlayers] = useState([]);
    const [playerName, setPlayerName] = useState("");

    function sayHello() {
        setCount(count + 1)
    }

    function handleChange() {
        setPlayerName(playerName);
        setCount(count + 1)

        setPlayers(current => [...current, playerName])

    }

    return (
        <div >
            <p>You clicked {count} times  {playerName}</p>

            <Box component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined"   onChange={e => setPlayerName(e.target.value)} />
                <Button variant="contained" onClick={handleChange}>EKLE</Button>

                <ul>

                    {players.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))}

                </ul>
            </Box>



        </div>
    );
}

export default App;

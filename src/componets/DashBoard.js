import React from 'react';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';



const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Dashboard = () => {
  

  const [volume, setVolume] = useState(30);
  const [quality, setQuality] = React.useState('');
  const [online, setOnline] = useState(true);

  const handleSwitch = (e) => {
    setOnline(e.target.checked)
  }
  
    const handleChange = (event) => {
      setQuality(event.target.value);
    };

  return (
    <div>
    <div style= {{display:"flex", justifyContent: "space-around", marginTop: "40px"}}>
       <Paper
       style = {{
         width: "400px",
         height: "300px",
         margin: 'auto'
        }}
       elevation={3} >
         <h1>Online Mode</h1>
         <p style = {{ textAlign: "left", margin: "auto 30px"}}>Are you connected to the internet?</p>
         <Switch {...label} checked= {online} onChange= {handleSwitch} />
        </Paper>

      <Paper
       style = {{
         width: "400px",
         height: "300px",
         margin: 'auto'
        }}
       elevation={3} >
         <h1>Master Volume</h1>
         <p style = {{ textAlign: "left", margin: "auto 30px"}}>Overrides all other sounds in this application</p>
         
         <div style = {{width: "275px", margin: "50px auto auto auto"}}>
         <Slider
        aria-label="Temperature"
        value={volume}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      /> 
      </div>
         </Paper>

      <Paper
       style = {{
         width: "400px",
         height: "300px",
         margin: 'auto'
        }}
       elevation={3} >
         <h1>Sound Quality</h1>
         <p style = {{ textAlign: "left", margin: "auto 30px"}}>Manually control the music quality in event of poor connection</p>
         
         <FormControl fullWidth style = {{margin: "20px auto auto auto"}}>

         <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          label="Quality"
          onChange={handleChange}
        >
          <MenuItem value={1}>Low Quality</MenuItem>
          <MenuItem value={2}>Normal Quality</MenuItem>
          <MenuItem value={3}>High Quality</MenuItem>
        </Select>
        </FormControl>
         </Paper>
         </div>
         <h1>System Notifications:</h1>
         {volume >= 80 && <p>Volume is too loud!</p>}
         {quality == 1 && <p>Quality is low</p>}
         {online  && <p>Bad connection</p>}
    </div>
  );
}

export default Dashboard;

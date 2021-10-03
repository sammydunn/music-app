import React from 'react';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

function valuetext(value) {
  return `${value}`;
}
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

const Dashboard = () => {
  

  return (
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
         <Switch {...label} defaultChecked />
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
        defaultValue={30}
        getAriaValueText={valuetext}
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
         <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>Low Quality</MenuItem>
          <MenuItem value={2}>Normal Quality</MenuItem>
          <MenuItem value={3}>High Quality</MenuItem>
        </Select>
        </FormControl>
         </Paper>
    </div>
  );
}

export default Dashboard;

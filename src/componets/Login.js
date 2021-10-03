import { useState } from 'react'; 
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Login = (props) => {
 

  const handleLogin = (e) => {
    e.preventDefault()
  }


  return (
    <div>
      <Paper elevation={3} 
      style={{
          width:"400px",
          height: "auto",
          display: 'flex',
          flexDirection: "column",
          margin: "40px auto auto auto",
        }}
      >

        <Typography variant="h4" style={{margin:"20px", textAlign:"center"}}>
          Welcome to MyMusicApp
        </Typography>

        <p style={{fontSize:"20px", margin:"0 auto auto auto"}}>
          Login
        </p>

        <div style={{margin:"40px"}}>

          <form onSubmit={handleLogin}>

            <TextField fullWidth
              style={{
                marginBottom:"30px",
              }}
            />

            <TextField fullWidth
              style={{
                marginBottom:"30px",
              }}
            />

            <Button onClick={()=>{setLoggedIn(true)}} type="submit" variant="contained" color="primary" style={{display:"flex", margin:"auto"}}>Login</Button>

         </form>

        </div>

      </Paper>
    </div>
  );
}

export default Login;
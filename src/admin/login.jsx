import { useState } from 'react';
import axios from "axios";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import AdminBusiness from './adminBusiness';
import globalState from '../dataStore/globalState';
import MyAppBar from '../user/basePage';
export default function Login()
{
    const [userName,setUserName]=useState('admin');
    const [password,setPassword]=useState('123456');
    const [showComponent,setShowComponent]=useState(false);
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      const userData = {
        name: userName,
        password: password
      };
      await axios.post("http://localhost:8787/login", userData)
        .then((response) => {
          console.log(response.status);
          if(response.status===200)
          {
            setShowComponent(true);
            globalState.isLogin(true);
          }
        })
        .catch((error) => {
          console.log("error");
          // alert("The Name and Password is Wrong!!!!!!!!!!!!");
          setError(true);
          setUserName('');
          setPassword('');

        });
        
    };
    return(<><MyAppBar/>
    <br />
    {showComponent ? <AdminBusiness/>:
    <form onSubmit={handleSubmit}>

        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="userName" variant="standard" 
        value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx2" type='password' label="password" variant="standard" 
        value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Box>
      {error && (<Alert severity="error">ERROR - your username or password is incorrect</Alert>)}
      <Button type='submit' variant="outlined" size="small">
          Login
        </Button>
    </form>}
    </>)
}
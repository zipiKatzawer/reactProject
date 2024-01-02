import { observer } from "mobx-react-lite";
import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import bussinesData from "../dataStore/bussinesData";

const EditDetails=observer(({setEditForm})=>
{
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [owner, setOwner] = useState("")
    const [logo, setLogo] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = (e) => {
    e.preventDefault();
    bussinesData.addBusiness({id, name, address, phone, owner, logo, description});
    setEditForm(false);
  };

    return(<div>
      
      <form onSubmit={handleSubmit}>
            <p><TextField id="outlined-password-input" label="id"  type="text" autoComplete="current-password" 
            onChange={(e) => setId(e.target.value)} /></p> 
          <p><TextField id="outlined-password-input" label="name" type="text" autoComplete="current-password"
           onChange={(e) => setName(e.target.value)}  /></p> 
          <p><TextField id="outlined-password-input" label="address" type="text" autoComplete="current-password"
           onChange={(e) => setAddress(e.target.value)}  /></p> 
          <p><TextField id="outlined-password-input" label="phone" type="text" autoComplete="current-password" 
          onChange={(e) => setPhone(e.target.value)}  /></p> 
          <p><TextField id="outlined-password-input" label="owner" type="text" autoComplete="current-password" 
          onChange={(e) => setOwner(e.target.value)}  /></p> 
          <p><TextField id="outlined-password-input" label="logo" type="text" autoComplete="current-password" 
          onChange={(e) => setLogo(e.target.value)}  /></p> 
          <p><TextField id="outlined-password-input" label="description" type="text" autoComplete="current-password"
           onChange={(e) => setDescription(e.target.value)}  /></p> 
  <Button type='submit' variant="outlined" size="small">
          Save
        </Button>
  </form>

    </div>)
});
export default EditDetails;
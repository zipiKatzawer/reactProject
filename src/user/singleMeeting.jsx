import { observer } from "mobx-react-lite";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';
import serviceData from "../dataStore/serviceData";
import MyDatePicker from "./MyDatePicker";
import meetingData from "../dataStore/meetingData";
const SingleMeeting=observer(({setOpen})=>
{
    const [service, setService] = useState({

      id: "",
      serviceType: "",
      dateTime: "",
      clientName: "",
      clientPhone: "",
      clientEmail: "",
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setService({
        ...service,
        [name]: value,
      });
    };
    const handleSubmit = async (e) => {

      e.preventDefault();
      meetingData.addMeeting(service)
      setOpen(false)
      e.target.reset();
    }
    return(<>
   
    <Dialog open={open} >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
    <form onSubmit={handleSubmit}>
    
     <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">serviceType</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name="serviceType"
          onChange={handleChange}
          label="Service"
        >
          {serviceData.listService.map((service) => (
            <MenuItem value={service.name}>{service.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <p><TextField name="id" id="outlined-password-input" label="id" type="text" autoComplete="current-password"
          onChange={handleChange}/> </p>
           <p><TextField name="clientName" id="outlined-password-input" label="clientName" type="text" autoComplete="current-password"
        onChange={handleChange}/> </p>
        <p><TextField name="clientPhone" id="outlined-password-input" label="clientPhone" type="text" autoComplete="current-password"
      onChange={handleChange}/></p>
       <p><TextField name="clientEmail" id="outlined-password-input" label="clientEmail" type="text" autoComplete="current-password"
    onChange={handleChange}

  /></p>
  <MyDatePicker
              name="dateTime"
              onChange={(date) => {
                setService((prevService) => ({
                  ...prevService,
                  dateTime: date,
                }));
              }}
            />
            <Button type="submit">Save</Button>

    </form>
    </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </>)
}
);
export default SingleMeeting;


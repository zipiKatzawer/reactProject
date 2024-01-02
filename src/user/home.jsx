import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import SingleMeeting from "./singleMeeting";
import BusinessDetails from "../admin/businessDetails";
import ShowService from "../admin/showService";
const Home=observer(()=>{
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(true);
  };

    return(<div >
      <Button className="buttonLogin" variant="outlined" onClick={() => { navigate("/admin") }}
       style={{ position: 'absolute', top: 10, left: 10, padding: '10px' }}>
            Login as admin</Button>
    <BusinessDetails/>
    <br />
    
        <ShowService/>
        <br />
        <Button onClick={handleClick} variant="outlined" size="small">
          Schedule
        </Button>
        {open && <SingleMeeting setOpen={setOpen}/>}
    </div>)
})
export default Home;
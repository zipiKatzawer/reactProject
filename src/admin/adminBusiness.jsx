import { useState } from "react";
import { Link,Outlet } from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import BusinessDetails from "./businessDetails"
import EditDetails from "./editDetails";
const AdminBusiness=()=>{
    const [value, setValue] = useState('1');
const handleButtonClick = () => {
    setEditForm(true);
  };
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const [editForm, setEditForm] = useState(false)
    return(<>
    {editForm?<EditDetails setEditForm={setEditForm}/>:
    <div>
    <BusinessDetails setEditForm={setEditForm}/>
    <br />
    <Button  onClick={handleButtonClick} variant="outlined" size="small">
          Edit
        </Button>
        <br />
        </div>}
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
        
                  <Tab label="Meeting" value="1" component={Link} to="meetings" disabled={editForm}/>
                  <Tab label="Service" value="2" component={Link} to="services" disabled={editForm}/>
              
          </TabList>
        </Box>
        
      </TabContext>
    </Box>
    
    <Outlet />
    </>)
}
export default AdminBusiness;
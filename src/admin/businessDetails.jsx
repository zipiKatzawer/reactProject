import { observer } from "mobx-react-lite";
import bussinesData from "../dataStore/bussinesData";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BusinessDetails = observer(() => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: 4, boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)' }}>
      <CardMedia
        component="img"
        height="140"
        image={bussinesData.business.logo}
        alt="Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bussinesData.business.name}
        </Typography>
        <Typography color="text.secondary"><strong>ID:</strong> {bussinesData.business.id}</Typography>
        <Typography color="text.secondary"><strong>Address:</strong> {bussinesData.business.address}</Typography>
        <Typography color="text.secondary"><strong>Phone:</strong> {bussinesData.business.phone}</Typography>
        <Typography color="text.secondary"><strong>Owner:</strong> {bussinesData.business.owner}</Typography>
        <Typography variant="body2" color="text.secondary">
          {bussinesData.business.description}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default BusinessDetails;
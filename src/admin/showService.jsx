import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { yellow } from '@mui/material/colors';
import Button from '@mui/material/Button';
import serviceData from '../dataStore/serviceData';

const ShowService=observer(()=>
{
  const serviceList = serviceData.listService;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return(
        <>
              <Grid container spacing={2}>
        {serviceList.map((x) => (
          <Grid item key={x.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }} id="card">
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: yellow[700] }} aria-label="recipe">{x.id}</Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={x.name}
              />

              <CardContent>
                <Typography paragraph>Description meeting: {x.description}</Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button onClick={handleExpandClick} variant="text" size="small">
                  {expanded ? 'Hide Details' : 'Show More Details'}
                </Button>
              </CardActions>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography>price: {x.price}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
        </>
    )
});
export default ShowService;
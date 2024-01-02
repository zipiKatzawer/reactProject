import React from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import meetingData from '../dataStore/meetingData';

const Meeting = observer(() => {
  const meetingList = meetingData.listMeeting;

  const sortedList = meetingList
    .slice()
    .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

  const getColor = (dateTime) => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const meetingDate = new Date(dateTime);

    if (meetingDate.toDateString() === today.toDateString()) {
      return 'red';
    }
    if (meetingDate >= today && meetingDate <= nextWeek) {
      return 'orange';
    }
    return 'green';
  };

  return (
    <div>
      <h1>Meeting</h1>
      <Grid container spacing={2}>
        {sortedList.map((meeting) => (
          <Grid item key={meeting.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 275, borderColor: getColor(meeting.dateTime), borderWidth: 2, borderStyle: 'solid' }}>
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  serviceType: {meeting.serviceType}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  dateTime: {meeting.dateTime}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  clientName:{meeting.clientName}
                </Typography>
                <Typography sx={{ mb: 1.5}} color="text.secondary">
                  clientPhone: {meeting.clientPhone}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  clientEmail:{meeting.clientEmail}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
});

export default Meeting;


"use client";
import React, { useState } from 'react';
import { Typography, Grid, Avatar, Paper, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import Layout from './layout';
import usersData from '../public/user';
import { AiOutlineEye, AiOutlineComment, AiOutlineShareAlt, AiOutlineHeart, AiFillBell } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const Forum = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
    console.log("sdhuaidsakdajdmalsdk");
  };

  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h4" style={{ marginBottom: '20px' }}>Discussion Forum</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4">Market Stories</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              backgroundColor: 'darkblue',
              color: 'white',
            },
          }}
          variant="permanent"
          anchor="left"
          open={open}
        >
          <List>
            {['Hello User', 'Bell', 'Discussion Forum', 'Market Sentiments', 'Sentiment Market', 'Sector', 'Watchlist', 'Events', 'New/Interview'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index === 0 ? <AiFillBell /> : null}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <IconButton
  onClick={toggleDrawer}
  sx={{
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'darkblue',
    color: 'white',
    zIndex: 1, // Ensure the button is above the drawer
  }}
>
  <IoIosArrowForward style={{ transform: open ? 'rotate(0deg)' : 'rotate(-90deg)' }} />
</IconButton>
        </Drawer>
        
        {Array.isArray(usersData.users) && usersData.users.map((user) => (
          <Grid item xs={12} key={user.name}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Paper elevation={3} style={{ padding: '20px', height: '150px', position: 'relative' }}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Avatar alt={user.name} src={user.imageUrl} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" style={{ fontSize: '16px', marginRight: '10px' }}>{user.name}</Typography>
                      <Button onClick = {()=>{console.log("hello")}}variant="contained" sx={{ borderRadius: '10px', backgroundColor: 'blue', color: 'white', fontSize: '10px' }} style={{ position: 'relative', left: '80px', bottom: '25px' }}>Sector 2</Button>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" style={{ fontSize: '20px', marginTop: '10px' }}>{user.description}</Typography>
                  <Typography variant="body2" style={{ fontSize: '12px', color: 'blue', position: 'absolute', top: '5px', right: '5px', marginTop: '7px' }}>{user.time}</Typography>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                    <div><AiOutlineHeart /> 2k</div>
                    <div><AiOutlineEye /> 2k</div>
                    <div><AiOutlineComment /> 2k comments</div>
                    <div><AiOutlineShareAlt /> Share</div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} style={{ padding: '20px', height: '75%', width: '50%' }}>
                  <img src={user.market.imageUrl} alt={user.market.title} style={{ maxWidth: '100%', height: '100px', width: '150px', marginBottom: '10px' }} />
                  <Typography variant="h6" style={{ fontSize: '14px', marginBottom: '5px' }}>Market: {user.market.title}</Typography>
                  <Typography variant="body1" style={{ fontSize: '10px', maxHeight: '70px', overflow: 'hidden', position: 'relative', bottom: '10px' }}>{user.market.description}</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Forum;
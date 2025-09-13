import React, { useState } from 'react';
import { Box, Button, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import staffLogo from '../../assets/logo.png';
import Order from './Order';
import Shifts from './Shifts';
import Profile from './Profile';
import sBg from "../../assets/s-bg.jpg";

export default function StaffHome() {
  const [activePage, setActivePage] = useState('dashboard'); // 'dashboard', 'orders', 'shifts', 'profile'

  const stats = [
    { title: 'Total Orders Today', value: '28', color: '#3B82F6', change: '+12% from yesterday' },
    { title: 'Pending Orders', value: '5', color: '#F59E0B', change: '3 urgent' },
    { title: 'Delivered Orders', value: '23', color: '#10B981', change: '95% delivery rate' },
    { title: 'Active Staff', value: '12', color: '#8B5CF6', change: '8 on shift now' },
  ];

  const navButtons = [
    { label: 'Dashboard', key: 'dashboard', color: '#F59E0B' },
    { label: 'Orders', key: 'orders', color: '#FBBF24' },
    { label: 'Shifts', key: 'shifts', color: '#F59E0B' },
    { label: 'Profile', key: 'profile', color: '#FBBF24' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${sBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowX: 'hidden',
        px: { xs: 2, sm: 4, lg: 20 },
        py: { xs: 3, lg: 6 },
      }}
    >
      {/* Navbar + Logo */}
            {/* Navbar + Logo */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
          mb: 4,
          p: 2,
          borderRadius: 2,
          backgroundColor: 'rgba(230,230,230.5)', 
          position:'sticky',
          top:0,
          zIndex:10,// semi-transparent dark background
        }}
      >
        <Avatar src={staffLogo} alt="Logo" sx={{ width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 } }} />

        {navButtons.map((btn) => (
          <Button
            key={btn.key}
            onClick={() => setActivePage(btn.key)}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              mr: { lg: 2 },
              mb: { xs: 1, sm: 0 },
              color: activePage === btn.key ? 'white' : btn.color,
              backgroundColor: activePage === btn.key ? btn.color : 'rgba(255,255,255,0.8)',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: activePage === btn.key ? btn.color : 'rgba(255,255,255,0.9)',
              },
            }}
          >
            {btn.label}
          </Button>
        ))}
      </Box>

      {/* Page Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: { xs: 3, lg: 6 },
          color: '#FFD700',
          textShadow: '1px 1px 2px black',
        }}
      >
        {activePage === 'dashboard' && '📊 Dashboard Overview'}
        {activePage === 'orders' && '📦 Order Management'}
        {activePage === 'shifts' && '⏰ Staff Shifts'}
        {activePage === 'profile' && '👤 My Profile'}
      </Typography>

      {/* Conditional Rendering */}
      {activePage === 'dashboard' && (
        <Grid container spacing={{ xs: 2, sm: 3, lg: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card
                sx={{
                  p: { xs: 2, lg: 3 },
                  border: `2px solid ${stat.color}`,
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  height: '100%',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: stat.color }}>
                    {stat.title}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2">{stat.change}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {activePage === 'orders' && <Box sx={{ mt: 4 }}><Order /></Box>}
      {activePage === 'shifts' && <Box sx={{ mt: 4 }}><Shifts /></Box>}
      {activePage === 'profile' && <Box sx={{ mt: 4 }}><Profile /></Box>}
    </Box>
  );
}

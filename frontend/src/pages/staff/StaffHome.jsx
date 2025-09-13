import React, { useState } from 'react';
import { Box, Button, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import staffLogo from '../../assets/logo.png';
import Order from './Order';
import Shifts from './Shifts';
import Profile from './Profile';
import sBg from "../../assets/s-bg.jpg";

export default function StaffHome() {
  const [activePage, setActivePage] = useState('dashboard'); // 'dashboard', 'orders', 'shifts', 'profile'

  // Example stats for dashboard
  const stats = [
    { title: 'Total Orders Today', value: '28', color: '#3B82F6', change: '+12% from yesterday' },
    { title: 'Pending Orders', value: '5', color: '#F59E0B', change: '3 urgent' },
    { title: 'Delivered Orders', value: '23', color: '#10B981', change: '95% delivery rate' },
    { title: 'Active Staff', value: '12', color: '#8B5CF6', change: '8 on shift now' },
  ];

  // Navigation Buttons
  const navButtons = [
    { label: 'Dashboard', key: 'dashboard', color: '#F59E0B' }, // orange
    { label: 'Orders', key: 'orders', color: '#FBBF24' }, // yellow
    { label: 'Shifts', key: 'shifts', color: '#F59E0B' }, 
    { label: 'Profile', key: 'profile', color: '#FBBF24' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        p: 3,
        backgroundImage: `url(${sBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowX: 'hidden',
      }}
    >
      {/* Navbar + Logo */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 4,
          flexWrap: 'wrap',
        }}
      >
        <Avatar src={staffLogo} alt="Logo" sx={{ width: 56, height: 56 }} />

        {navButtons.map((btn) => (
          <Button
            key={btn.key}
            onClick={() => setActivePage(btn.key)}
            sx={{
              width: { xs: '100%', sm: 'auto' }, // w-full on small screens
              mr: { lg: 2 }, // lg:mr-auto like spacing
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
          mb: 3,
          color: '#FFD700', // bright yellow
          textShadow: '1px 1px 2px black',
        }}
      >
        {activePage === 'dashboard' && '📊 Dashboard Overview'}
        {activePage === 'orders' && '📦 Order Management'}
        {activePage === 'shifts' && '⏰ Staff Shifts'}
        {activePage === 'profile' && '👤 My Profile'}
      </Typography>

      {/* Conditional Rendering of Pages */}
      {activePage === 'dashboard' && (
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card
                sx={{
                  p: 2,
                  border: `2px solid ${stat.color}`,
                  backgroundColor: 'rgba(255,255,255,0.85)',
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

      {activePage === 'orders' && <Order />}
      {activePage === 'shifts' && <Shifts />}
      {activePage === 'profile' && <Profile />}
    </Box>
  );
}

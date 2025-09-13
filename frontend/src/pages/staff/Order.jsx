import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Badge,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  Search,
  FilterList,
  AccessTime,
  CheckCircle,
  LocalShipping,
  Inventory2,
} from '@mui/icons-material';
import logo from "../../assets/logo.png"; // <-- replace with your logo path

export default function Order() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock orders data
  const orders = [
    {
      id: '#ORD-001',
      customer: 'John Doe',
      items: ['Burger Combo', 'Large Fries', 'Coke'],
      total: 15.99,
      status: 'Pending',
      orderTime: '2:30 PM',
      phone: '+1 (555) 123-4567',
      address: '123 Main St, City',
      estimatedDelivery: '3:15 PM',
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      items: ['Margherita Pizza', 'Sprite'],
      total: 18.5,
      status: 'Delivered',
      orderTime: '2:15 PM',
      phone: '+1 (555) 234-5678',
      address: '456 Oak Ave, City',
      deliveredTime: '2:45 PM',
    },
    {
      id: '#ORD-003',
      customer: 'Mike Johnson',
      items: ['Club Sandwich', 'Coffee', 'Cookie'],
      total: 12.75,
      status: 'Pending',
      orderTime: '2:45 PM',
      phone: '+1 (555) 345-6789',
      address: '789 Pine St, City',
      estimatedDelivery: '3:30 PM',
    },
    {
      id: '#ORD-004',
      customer: 'Sarah Wilson',
      items: ['Caesar Salad', 'Orange Juice'],
      total: 10.25,
      status: 'Delivered',
      orderTime: '1:50 PM',
      phone: '+1 (555) 456-7890',
      address: '321 Elm St, City',
      deliveredTime: '2:20 PM',
    },
    {
      id: '#ORD-005',
      customer: 'Tom Brown',
      items: ['Hot Dog', 'Chips', 'Water'],
      total: 8.99,
      status: 'Pending',
      orderTime: '2:55 PM',
      phone: '+1 (555) 567-8901',
      address: '654 Maple Ave, City',
      estimatedDelivery: '3:40 PM',
    },
    {
      id: '#ORD-006',
      customer: 'Lisa Davis',
      items: ['Chicken Wrap', 'Smoothie'],
      total: 14.5,
      status: 'Delivered',
      orderTime: '1:30 PM',
      phone: '+1 (555) 678-9012',
      address: '987 Cedar St, City',
      deliveredTime: '2:00 PM',
    },
    {
      id: '#ORD-007',
      customer: 'David Miller',
      items: ['Fish Tacos', 'Iced Tea'],
      total: 16.75,
      status: 'Pending',
      orderTime: '3:10 PM',
      phone: '+1 (555) 789-0123',
      address: '147 Birch Ln, City',
      estimatedDelivery: '3:55 PM',
    },
    {
      id: '#ORD-008',
      customer: 'Emma Garcia',
      items: ['Veggie Burger', 'Sweet Potato Fries'],
      total: 13.25,
      status: 'Delivered',
      orderTime: '1:15 PM',
      phone: '+1 (555) 890-1234',
      address: '258 Spruce St, City',
      deliveredTime: '1:45 PM',
    },
  ];

  // Filter orders based on search and status
  const filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || order.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const pendingCount = orders.filter(order => order.status === 'Pending').length;
  const deliveredCount = orders.filter(order => order.status === 'Delivered').length;

  return (
    <Box
      p={3}
      sx={{
        width: '100%',
        maxWidth: { lg: '1200px' },
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      {/* Header */}
      

      {/* Stats */}
      <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
        <Card sx={{ width: 250, border: '1px solid #2196f3' }}>
          <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                backgroundColor: '#2196f3',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <Inventory2 />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Total Orders
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {orders.length}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ width: 250, border: '1px solid #ff9800' }}>
          <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                backgroundColor: '#ff9800',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <AccessTime />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Pending
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="#ff9800">
                {pendingCount}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ width: 250, border: '1px solid #4caf50' }}>
          <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                backgroundColor: '#4caf50',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <CheckCircle />
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Delivered
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="#4caf50">
                {deliveredCount}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Filters */}
      <Card sx={{ width: '100%', maxWidth: 800 }}>
        <CardContent sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <TextField
            variant="outlined"
            placeholder="Search by customer or order ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            size="small"
            InputProps={{
              startAdornment: <Search sx={{ mr: 1 }} />,
            }}
            sx={{ flex: 1, minWidth: 200 }}
          />

          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              label="Status"
              onChange={e => setStatusFilter(e.target.value)}
              size="small"
              startAdornment={<FilterList sx={{ mr: 1 }} />}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="delivered">Delivered</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>

      {/* Orders List */}
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        width="100%"
        maxWidth={800}
        alignItems="center"
      >
        {filteredOrders.length === 0 && (
          <Card sx={{ width: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <LocalShipping sx={{ fontSize: 50, color: 'gray', mb: 2 }} />
              <Typography color="textSecondary">No orders found.</Typography>
            </CardContent>
          </Card>
        )}

        {filteredOrders.map(order => (
          <Card key={order.id} sx={{ border: '1px solid #ffeb3b', width: '100%' }}>
            <CardHeader
              title={`${order.customer} (${order.id})`}
              subheader={`Phone: ${order.phone}`}
            />
            <CardContent>
              <List dense>
                {order.items.map((item, idx) => (
                  <ListItem key={idx}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="body2" color="textSecondary">
                Total: ${order.total.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Status: {order.status}
              </Typography>
              {order.status === 'Pending' ? (
                <Typography variant="body2" color="textSecondary">
                  Estimated Delivery: {order.estimatedDelivery}
                </Typography>
              ) : (
                <Typography variant="body2" color="textSecondary">
                  Delivered At: {order.deliveredTime}
                </Typography>
              )}
              <Typography variant="body2" color="textSecondary">
                Address: {order.address}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

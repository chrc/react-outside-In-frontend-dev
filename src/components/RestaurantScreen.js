import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

import RestaurantList from './RestaurantList';
import NewRestaurantForm from './NewRestaurantForm';

const RestaurantScreen = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">Restaurants</Typography>
      <NewRestaurantForm />
      <RestaurantList />
    </CardContent>
  </Card>
);

export default RestaurantScreen;

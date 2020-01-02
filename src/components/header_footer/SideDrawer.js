import React from "react";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from 'react-scroll';


const SideDrawer = props => {


const scrollToElement =(element) =>{
  scroller.scrollTo(element,{
     duration:1500,
     delay:100,
     smooth: true,
     offset:-140
  });
  props.onClose(false)
}

   
  return (
    <SwipeableDrawer
    
      anchor="right"
    
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() =>scrollToElement('Event start')}>
          Event start
        </ListItem>

        <ListItem button onClick={() => scrollToElement('VenueNfo')}>
        VenueNfo
        </ListItem>

        <ListItem button onClick={() => scrollToElement('Hightlight')}>
          Hightlight
        </ListItem>

        <ListItem button onClick={() => scrollToElement('Pricing')}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => scrollToElement('Location')}>
          Location
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default SideDrawer;

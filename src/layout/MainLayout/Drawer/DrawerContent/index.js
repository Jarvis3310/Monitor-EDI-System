import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { sidebarItems } from './sidebarConfig';

const Drawer = () => {
  return (
    <div style={{  height: '100%', overflow: 'auto' }}>
      { sidebarItems.map((section, idx) => (
        <Accordion key={idx}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {section.items.map((item, idx) => (
                <ListItem button key={idx} component={Link} to={`/${section.title}-${item}`}>
                  {item}
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Drawer;

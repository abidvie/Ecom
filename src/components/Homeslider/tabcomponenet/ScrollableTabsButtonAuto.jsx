import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className=' '>
  <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
       
      >
        <Tab label="Fashiom" />
        <Tab label="Bags" />
        <Tab label="Electronics" />
        <Tab label="Beauty" />
        <Tab label="Jwelery" />
        <Tab label="Groceried" />
        <Tab label="Footware" />
      
      </Tabs>
    </div>
    </>
   
    
   
  );
}
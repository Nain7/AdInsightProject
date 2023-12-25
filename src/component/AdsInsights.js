import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './Dashboard.css';



const columns = [
  {
    field: 'campaigns',
    headerName: <span style={{ fontWeight: 'bold' }}>Campaigns</span>,
    width: 110,
    editable: true,
    
  },
  
  {
    field: 'clicks',
    headerName: <span style={{ fontWeight: 'bold' }}>Clicks</span>,
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'cost',
    headerName: (
      <span style={{ fontWeight: 'bold' }}>Cost</span>
    ),
    type: 'number',
    width: 120,
    editable: true,
    valueFormatter: (params) =>
    `USD ${params.value.toLocaleString()}`, 

  },
  {
    field: 'conversions',
    headerName: (
      <span style={{ fontWeight: 'bold' }}>Conversions</span>
    ),
    type: 'number',
    width: 140,
    editable: true,
  },
  {
    field: 'revenue',
    headerName: (
      <span style={{ fontWeight: 'bold' }}>Revenue</span>
    ),
    type: 'number',
    width: 120,
    editable: true,
    valueFormatter: (params) =>
    `USD ${params.value.toLocaleString()}`, 
  },
];

const rows = [
  { id: 1, campaigns:'Cosmetics', clicks: 712, cost: 4272, conversions:8, revenue:16568 },
  { id: 2, campaigns:'Serums', clicks: 3861, cost: 27331, conversions:115, revenue:362526 },
  { id: 3, campaigns:'Facewash', clicks: 9462, cost: 76831, conversions:123, revenue:266800 },
  { id: 4, campaigns:'Shampoos', clicks: 439, cost: 2151, conversions:5, revenue:11029 },
  { id: 5, campaigns:'Conditioners', clicks: 1680, cost: 3864, conversions:49, revenue:175245 },
  { id: 6, campaigns:'Facewash2', clicks: 4978, cost: 29370, conversions:189, revenue:623106},
  { id: 7, campaigns:'Cosmetics', clicks: 26510, cost: 143819, conversions:489, revenue:1573563},
];



const AdsInsights = () => {
  return ( 
  
    <div>
       
     
      <h1 className="dashboard-header"> Ad Insight</h1>
      <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          
        />
       </Box>
      
    </div>
  
  );
};

export default AdsInsights;

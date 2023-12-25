import React from 'react';
import { Box, Switch } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { DataGrid } from '@mui/x-data-grid';

const data = [
  { value: 5, label: '40% Male' },
  { value: 10, label: '35% Female' },
  { value: 15, label: '25% Unknown' },                                                                                             
];

const size = {
  width: 400,
  height: 200,
};

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <text x={left + width / 2} y={top + height / 2}>
      {children}
    </text>
  );
}

const columns = [
  { field: 'group', 
  headerName: <span style={{ fontWeight: 'bold' }}>Group</span>, 
  width: 110, 
  editable: true },

  { field: 'clicks', 
  headerName: <span style={{ fontWeight: 'bold' }}>Clicks</span>, 
  width: 110, 
  type: 'number', 
  editable: true },

  {
    field: 'cost',
    headerName: <span style={{ fontWeight: 'bold' }}>Cost</span>,
    type: 'number',
    width: 120,
    editable: true,
    valueFormatter: (params) => `USD ${params.value.toLocaleString()}`,
  },

  { field: 'conversions', 
  headerName: <span style={{ fontWeight: 'bold' }}>Conversions</span>, 
  type: 'number', 
  width: 140, 
  editable: true },

  {
    field: 'revenue',
    headerName: <span style={{ fontWeight: 'bold' }}>Revenue</span>,
    type: 'number',
    width: 120,
    editable: true,
    valueFormatter: (params) => `USD ${params.value.toLocaleString()}`,
  },
];


const rows = [
  { id: 1, group: 'Male', clicks: 348, cost: 12528, conversions: 42, revenue: 62118 },
  { id: 2, group: 'Female', clicks: 692, cost: 24912, conversions: 35, revenue: 5175 },
  { id: 3, group: 'Unknown', clicks: 105, cost: 3943, conversions: 3, revenue: 4489 },
];

const AdsCharts = ({ onToggleContent }) => {
  const [showPieChart, setShowPieChart] = React.useState(true);

  const toggleContent = () => {
    setShowPieChart((prev) => !prev);
    onToggleContent(); 
  };

  return (
    <div className="dashboard-box">
      <h1 className="dashboard-header">Ad Insight</h1>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flex: 1 }}>
          {showPieChart ? (
            <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
              <PieCenterLabel></PieCenterLabel>
            </PieChart>
          ) : (
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
          )}
        </Box>
        <Box sx={{ alignSelf: 'flex-end', paddingBottom: 2, paddingRight: 2 }}>
          <Switch
            checked={showPieChart}
            onChange={toggleContent}
            inputProps={{ 'aria-label': 'controlled' }}
           
          />
        </Box>
      </Box>
    </div>
  );
};

export default AdsCharts;

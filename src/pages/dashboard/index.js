// material-ui
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// project import
import FlowTable from './FlowTable';
import JobTable from './JobTable';
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = ({ isJob }) => {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h5">{isJob ? 'Job-List' : 'Flow-List'}</Typography>
        </Box>
        <Box>
          {isJob ? (
            <Link to="/KH-SIT">
              <Button variant="contained">Flow-List</Button>
            </Link>
          ) : (
            <Link to="/KH-SIT-JOB">
              <Button variant="contained">Job-List</Button>
            </Link>
          )}
        </Box>
      </Box>
      <Box>
        <MainCard>{isJob ? <JobTable /> : <FlowTable />}</MainCard>
      </Box>
    </Box>
  );
};

export default DashboardDefault;

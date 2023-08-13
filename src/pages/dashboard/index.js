// material-ui
import {
  Grid,
  Typography
} from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {

  return (
      <Grid container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Run Flow & Job Status</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard>
          <OrdersTable />
        </MainCard>
      </Grid>
  );
};

export default DashboardDefault;

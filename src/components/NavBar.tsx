import { AppBar, Toolbar, Typography } from '@mui/material';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: 'black' }} variant="dense">
        <Typography variant="h6" color="inherit" component="div" sx={{ padding: 2 }}>
          Movies
        </Typography>
        <Typography variant="h6" color="inherit" component="div" sx={{ padding: 2 }}>
          Series
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

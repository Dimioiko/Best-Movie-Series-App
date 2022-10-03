import { useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import FormControl from '@mui/material/FormControl';

export default function NavBar() {
  // const title: string = useParams();
  return (
    <AppBar
      position="static"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        display: 'flex'
      }}>
      <Toolbar variant="dense" sx={{ width: '100%', display: 'flex' }}>
        <Box sx={{ display: 'flex' }}>
          <MoviesMenu />
          <SeriesMenu />
        </Box>
        <Box sx={{ width: '80%', display: 'flex' }}>
          <div>test</div>
          {/* <FormControl sx={{ backgroundColor: 'white', display: 'flex' }}>
            <TextField
              id="search-bar"
              className="text"
              label="Enter a city name"
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
            <IconButton type="submit" aria-label="search">
              <div>Test</div>
            </IconButton>
          </FormControl> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export function MoviesMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('event', event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{ color: 'white' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        Movies
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <MenuItem
          onClick={() => {
            navigate('./MoviesNowPlaying');
            handleClose();
          }}>
          MoviesNowPlaying
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export function SeriesMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('event', event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{ color: 'white' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        Series
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <MenuItem
          onClick={() => {
            navigate('./PopularSeries');
            handleClose();
          }}>
          SeriesNowPlaying
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

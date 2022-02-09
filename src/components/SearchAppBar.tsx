import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Link, ListItem, SwipeableDrawer } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { PART_OF_SPEECH_DICT } from '../helpers/partOfSpeech';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchAppBar() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Dictionary
          </Typography>
        </Toolbar>
        <SwipeableDrawer
          open={open}
          anchor="left"
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
          <Divider />
          <ListItem>
            <Link
              color="textPrimary"
              variant="button"
              underline="none"
              onClick={() => navigate('/')}
            >
              Home
            </Link>
          </ListItem>
          {PART_OF_SPEECH_DICT.map((part) => {
            return (
              <ListItem key={part}>
                <Link
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  onClick={() => navigate(`/partOf-speech/${part}`)}
                >
                  {part}
                </Link>
              </ListItem>
            );
          })}
        </SwipeableDrawer>
      </AppBar>
    </Box>
  );
}

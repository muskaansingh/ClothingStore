import React from 'react';
import {AppBar} from '@material-ui/core';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    icon: {
      marginRight: theme.spacing(55),
      color: "white",
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(53)
    },
  
  }));

const Header = () => {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" className={classes.title}>
                        ClothingStore!
                        </Typography>

                        <IconButton aria-label="cart" className={classes.icon}>
                            <StyledBadge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
 
                    </Toolbar>
                </AppBar>
            </div>
        );
        }

export default Header;








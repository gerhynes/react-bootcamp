import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";

const content = {
  english: {
    search: "Search",
    emoji: "😬"
  },
  gaeilge: {
    search: "Cuardaigh ",
    emoji: "😎"
  },
  français: {
    search: "Recherche",
    emoji: "😘"
  },
  deutsch: {
    search: "Suchen",
    emoji: "🧐"
  },
  español: {
    search: "Buscar",
    emoji: "😉"
  },
  italiano: {
    search: "Ricerca",
    emoji: "😄"
  }
};

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const { search, emoji } = content[language];
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <ToolBar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="shades-emoji">
                {emoji}
              </span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              Hooks Login
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));

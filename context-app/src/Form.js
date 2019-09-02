import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedicon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";

const words = {
  english: {
    signIn: "Sign In",
    email: "Email",
    password: "Password",
    rememberMe: "Remember Me"
  },
  gaeilge: {
    signIn: "Sínigh isteach",
    email: "Ríomhphost",
    password: "Pasfhocal",
    rememberMe: "Cuimhnigh orm"
  },
  français: {
    signIn: "Se connecter",
    email: "Email",
    password: "Mot de Passe",
    rememberMe: "Se souvenir de moi"
  },
  deutsch: {
    signIn: "Anmelden",
    email: "E-Mail",
    password: "Passwort",
    rememberMe: "Angemeldet bleiben"
  },
  español: {
    signIn: "Iniciar sesión",
    email: "Correo",
    password: "Contraseña",
    rememberMe: "Recordar mis datos"
  },
  italiano: {
    signIn: "Accedi",
    email: "Email",
    password: "Password",
    rememberMe: "Ricordami"
  }
};

function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { classes } = props;
  const { email, signIn, password, rememberMe } = words[language];
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedicon></LockOutlinedicon>
        </Avatar>
        <Typography variant="h5">{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="gaeilge">Gaeilge</MenuItem>
          <MenuItem value="français">Français</MenuItem>
          <MenuItem value="deutsch">Deutsch</MenuItem>
          <MenuItem value="español">Español</MenuItem>
          <MenuItem value="italiano">Italiano</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">{email}</InputLabel>
            <Input id="email" name="email" autoFocus></Input>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">{password}</InputLabel>
            <Input id="password" name="password" autoFocus></Input>
          </FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={rememberMe}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Form);

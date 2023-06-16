import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert, Box, Button, Grid, Snackbar, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useLogin } from "../services/authService";

const anchorStyle = {
  color: "#333",
  marginTop: "10px",
};

function Login() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });
  const {
    status: statusLogin,
    error: errorLogin,
    request: requestLogin,
    response: responseLogin,
    loading: loadingLogin,
    source: sourceLogin,
    resetAttributes: resetAttributesLogin,
  } = useLogin({ email, password });

  const handleSubmit = (event) => {
    event.preventDefault();

    setToast({
      ...toast,
      show: false,
    });

    resetAttributesLogin();

    if (!email || !password) {
      setToast({
        show: true,
        type: "error",
        message: "Há campos requeridos não preenchidos.",
      });
      return;
    }

    requestLogin();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setToast({
      ...toast,
      show: false,
    });
  };

  useEffect(() => {
    if (auth.isAutenticated) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (!statusLogin) return;

    if (statusLogin === 200) {
      auth.signIn(
        responseLogin.access_token,
        responseLogin.name,
        responseLogin.email
      );
      navigate("/");
      return;
    }

    setToast({
      show: true,
      type: "error",
      message: "Usuário ou senha incorretos",
    });
  }, [statusLogin]);

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item xs={4} mt={20}>
        <form onSubmit={handleSubmit}>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="E-mail"
                variant="standard"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                type={"password"}
                label="Senha"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} alignItems={"end"}>
              <Box sx={{ display: "flex" }} justifyContent={"flex-end"}>
                <Button type={"submit"} variant="contained">
                  Entrar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={toast.show}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={toast?.type || "warning"}
            sx={{ width: "100%" }}
          >
            {toast.message}
          </Alert>
        </Snackbar>

        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Link style={anchorStyle} to="/cadastrar">
            Criar um novo cadastro
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;

import { useEffect, useState } from "react";
import { useRegister } from "../services/userService";
import { Alert, Box, Button, Grid, Snackbar, TextField } from "@mui/material";
import { Link, redirect, useNavigate } from "react-router-dom";

const anchorStyle = {
  color: "#333",
  marginTop: "10px",
};

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: ""
  });

  const {
    status: statusRegister,
    error: errorRegister,
    request: requestRegister,
    response: responseRegister,
    loading: loadingRegister,
    source: sourceRegister,
    resetAttributes: resetAttributesRegister,
  } = useRegister("/user", {name, email, password});

  const sendForm = (event) => {
    event.preventDefault();

    setToast({
      ...toast,
      show: false,
    });

    if (!name || !email || !password) {
      setToast({
        show: true,
        type: "error",
        message: "Há campos requeridos não preenchidos."
      });
      resetAttributesRegister();
      return;
    }

    requestRegister();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setToast({
      ...toast,
      show: false,
    });
  };

  useEffect(() => {
    if (!statusRegister) return;

    if (statusRegister !== 201) {
      setToast({
        show: true,
        type: "error",
        message: "Houve um problema na requisição, tente novamente mais tarde."
      });
      return;
    }

    setToast({
      show: true,
      type: "success",
      message: 'Usuário registrado com sucesso!'
    });

    setTimeout(() => navigate("/login"), 3000)
  }, [statusRegister]);

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={4}>
        <form onSubmit={sendForm} style={{ width: "100%" }}>
          <Grid container mt={20} rowSpacing={2}>
            <Grid item xs={12}>
              <TextField
                id="name"
                label="Nome"
                variant="standard"
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                type={"email"}
                label="E-mail"
                variant="standard"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                type={"password"}
                label="Senha"
                variant="standard"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex" }} justifyContent={"flex-end"}>
                <Button type={"submit"} variant="contained" disabled={loadingRegister}>
                  {loadingRegister ? 'Carregando...' : 'Cadastrar'}
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={toast.show}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity={toast?.type || 'warning'}
              sx={{ width: "100%" }}
            >
              {toast.message}
            </Alert>
          </Snackbar>

          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Link style={anchorStyle} to="/login">
              Voltar para o login
            </Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default Register;

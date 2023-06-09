import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Alert, Button, Chip, Grid, Snackbar, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useRegister } from "../../../services/moduleService";
import { useParams } from "react-router-dom";

function TagsForm() {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const {
    status: statusRegister,
    response: responseRegister,
    request: requestRegister,
    loading: loadingRegister,
  } = useRegister({ name, description });
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      setToast({
        show: false,
        type: "error",
        message: "Há campos requeridos inválidos",
      });
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
      console.error(responseRegister);
      setToast({
        show: false,
        type: "error",
        message: "Houve um erro no servidor, tente novamente mais tarde",
      });
      return;
    }

    setToast({
      show: true,
      type: "success",
      message: "Modulo cadastrado com sucesso",
    });

    setName("");
    setDescription("");
  }, [statusRegister]);

  return (
    <div>
      <Header />

      <Grid container mt={5} justifyContent={"center"}>
        <Grid item xs={8}>
          <Typography textAlign={"center"} variant="h5">
            Nova Tag
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"}>
        <Grid xs={8} item>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid xs={12} item>
                <TextField
                  value={name}
                  id="name"
                  label="Nome"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid xs={12} mt={2} item>
                <TextField
                  value={description}
                  id="description"
                  label="Descrição"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} mt={2} display={"flex"} justifyContent={"end"}>
              {!id && (
                <Button variant={"contained"} type={"submit"}>
                  Cadastrar
                </Button>
              )}
            </Grid>
          </form>
        </Grid>
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
      </Grid>

      <Footer />
    </div>
  );
}

export default TagsForm;

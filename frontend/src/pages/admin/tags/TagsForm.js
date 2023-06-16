import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import {
  useCreate,
  useDelete,
  useGetById,
  useUpdate,
} from "../../../services/tagService";
import { useNavigate, useParams } from "react-router-dom";

function ModulesForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const {
    status: statusCreate,
    error: errorCreate,
    request: requestCreate,
    loading: loadingCreate,
  } = useCreate({ name, description });

  const {
    status: statusUpdate,
    error: errorUpdate,
    request: requestUpdate,
    loading: loadingUpdate,
  } = useUpdate({ id, name, description });

  const {
    status: statusGetById,
    response: responseGetById,
    error: errorGetById,
    request: requestGetById,
    loading: loadingGetById,
  } = useGetById(id);

  const {
    status: statusDelete,
    response: responseDelete,
    error: errorDelete,
    request: requestDelete,
    loading: loadingDelete,
  } = useDelete(id);

  useEffect(() => {
    if (id) requestGetById();
  }, []);

  useEffect(() => {
    if (!statusGetById) return;

    if (statusGetById !== 200) {
      console.error(errorCreate);
      setToast({
        show: true,
        type: "error",
        message: "Houve um erro no servidor, tente novamente mais tarde.",
      });
      return;
    }

    setName(responseGetById.name);
    setDescription(responseGetById.description);
  }, [statusGetById]);

  useEffect(() => {
    if (!statusCreate) return;

    if (statusCreate !== 201) {
      console.error(errorCreate);
      setToast({
        show: true,
        type: "error",
        message: "Houve um erro no servidor, tente novamente mais tarde.",
      });
      return;
    }

    setName("");
    setDescription("");

    setToast({
      show: true,
      type: "success",
      message: "Registro cadastrado com sucesso.",
    });
  }, [statusCreate]);

  useEffect(() => {
    if (!statusUpdate) return;

    if (statusUpdate !== 200) {
      console.error(errorUpdate);
      setToast({
        show: true,
        type: "error",
        message: "Houve um erro no servidor, tente novamente mais tarde.",
      });
      return;
    }

    setToast({
      show: true,
      type: "success",
      message: "Registro atualizado com sucesso.",
    });
  }, [statusUpdate]);

  useEffect(() => {
    if (!statusDelete) return;

    if (statusDelete !== 200) {
      console.error(errorDelete);
      setToast({
        show: true,
        type: "error",
        message: "Houve um erro no servidor, tente novamente mais tarde.",
      });
      return;
    }

    setToast({
      show: true,
      type: "success",
      message: "Registro deletado com sucesso.",
    });

    setTimeout(() => {
      navigate("/tags/lista");
    }, 3000);
  }, [statusDelete]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;

    if (id) {
      requestUpdate();
      return;
    }

    requestCreate();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setToast({
      ...toast,
      show: false,
    });
  };

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

              <Grid
                item
                xs={12}
                mt={4}
                display={"flex"}
                justifyContent={"space-around"}
              >
                {id && (
                  <Button
                    onClick={() => requestDelete()}
                    variant={"contained"}
                    type={"button"}
                    color={"error"}
                  >
                    Excluir
                  </Button>
                )}

                <Button variant={"contained"} type={"submit"}>
                  {id ? "Atualizar" : "Cadastrar"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
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
      <Footer />
    </div>
  );
}

export default ModulesForm;

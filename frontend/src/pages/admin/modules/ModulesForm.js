import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  useGetById,
  useCreate,
  useUpdate,
} from "../../../services/moduleService";
import { useGetAll as useGetAllTags } from "../../../services/tagService";

function TagsForm() {
  let { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantityQuestions, setQuantityQuestions] = useState("");
  const [tags, setTags] = useState([]);
  const [tagSelected, setTagSelected] = useState({
    tag: "",
    percent: "",
  });
  const [tagsToSelect, setTagsToSelect] = useState([]);

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const {
    status: statusCreate,
    response: responseCreate,
    request: requestCreate,
    loading: loadingCreate,
  } = useCreate({
    name,
    description,
    quantityQuestions: parseInt(quantityQuestions),
    tags,
  });

  const {
    status: statusUpdate,
    response: responseUpdate,
    request: requestUpdate,
    loading: loadingUpdate,
  } = useUpdate({
    id,
    name,
    description,
    quantityQuestions: parseInt(quantityQuestions),
    tags,
  });

  const {
    status: statusGetById,
    response: responseGetById,
    request: requestGetById,
    loading: loadingGetById,
  } = useGetById(id);

  const {
    status: statusGetAllTags,
    response: responseGetAllTags,
    request: requestGetAllTags,
    loading: loadingGetAllTags,
  } = useGetAllTags(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !quantityQuestions || !tags.length) {
      setToast({
        show: true,
        type: "error",
        message: "Há campos requeridos inválidos",
      });
      return;
    }

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

  const addTag = () => {
    const exist = tags.find((t) => t.tag.id === tagSelected.tag.id);

    if (exist) {
      setTagSelected({
        tag: "",
        percent: "",
      });
      return;
    }

    if (!tagSelected.tag || !tagSelected.percent) return;

    let qty = 0;
    for (let i = 0; i < tags.length; i++) qty += parseInt(tags[i].percent);

    qty += parseInt(tagSelected.percent);

    if (qty > 100) {
      setToast({
        show: true,
        type: "error",
        message: "A porcentagem excederá os 100%",
      });
      return;
    }

    setTags((oldTag) => [...oldTag, tagSelected]);

    setTagSelected({
      tag: "",
      percent: "",
    });
  };

  useEffect(() => {
    if (id) requestGetById();
    requestGetAllTags();
  }, []);

  useEffect(() => {
    if (statusGetAllTags !== 200) return;
    setTagsToSelect(responseGetAllTags);
  }, [statusGetAllTags]);

  useEffect(() => {
    if (statusGetById !== 200) return;

    setName(responseGetById.name);
    setDescription(responseGetById.description);
    setQuantityQuestions(responseGetById.quantityQuestions);

    setTags(
      responseGetById.moduleTags.map((mt) => ({
        tag: mt.tag,
        percent: mt.percentTag,
      }))
    );
  }, [statusGetById]);

  useEffect(() => {
    if (!statusCreate) return;

    if (statusCreate !== 201) {
      console.error(responseCreate);
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
    setQuantityQuestions("");
    setTags([]);
    setTagsToSelect([]);
  }, [statusCreate]);

  useEffect(() => {
    if (!statusUpdate) return;

    if (statusUpdate !== 200) {
      console.error(responseUpdate);
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
      message: "Modulo atualizado com sucesso",
    });
  }, [statusUpdate]);

  return (
    <div>
      <Header />

      <Grid container mt={5} justifyContent={"center"}>
        <Grid item xs={8}>
          <Typography variant="h5">
            {id ? "Editar módulo " + name : "Criar um novo módulo"}
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} mt={2}>
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

              <Grid xs={12} mt={2} item>
                <TextField
                  value={quantityQuestions}
                  id="quantityQuestions"
                  label="Quantidade de Perguntas"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setQuantityQuestions(e.target.value)}
                />
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6} mt={2}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">
                      Tag
                    </InputLabel>
                    <Select
                      labelId="tag"
                      id="tag"
                      value={tagSelected.tag}
                      onChange={(e) => {
                        setTagSelected({
                          ...tagSelected,
                          tag: e.target.value,
                        });
                      }}
                      label="Tag"
                    >
                      {tagsToSelect.map((tagInfo) => (
                        <MenuItem key={tagInfo.id} value={tagInfo}>
                          {tagInfo.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid xs={5} mt={2} item>
                  <TextField
                    type={"number"}
                    value={tagSelected.percent}
                    id="percent"
                    label="Porcentagem de perguntas"
                    variant="standard"
                    fullWidth
                    onChange={(e) => {
                      setTagSelected({
                        ...tagSelected,
                        percent: e.target.value,
                      });
                    }}
                  />
                </Grid>

                <Grid
                  xs={1}
                  mt={2}
                  item
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Button
                    variant={"contained"}
                    type={"button"}
                    onClick={() => addTag()}
                  >
                    +
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12} mt={2}>
                {tags.map((infoTag) => (
                  <Chip
                    onClick={() =>
                      setTags(tags.filter((t) => t.tag.id !== infoTag.tag.id))
                    }
                    key={infoTag.tag.id}
                    label={infoTag.tag.name + " " + infoTag.percent + "%"}
                  />
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} mt={2} display={"flex"} justifyContent={"end"}>
              <Button variant={"contained"} type={"submit"}>
                {id ? "Atualizar Módulo" : "Cadastrar Módulo"}
              </Button>
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

export default TagsForm;

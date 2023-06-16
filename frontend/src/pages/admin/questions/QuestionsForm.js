import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  useCreate,
  useGetById,
  useUpdate,
} from "../../../services/questionService";
import { useGetAll as useGetAllTags } from "../../../services/tagService";

function QuestionsForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [descriptionAnswers, setDescriptionAnswers] = useState("");
  const [answers, setAnwers] = useState([]);
  const [isCorrectAnswers, setIsCorrectAnswers] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const {
    status: statusGetAllTags,
    error: errorGetAllTags,
    response: responseGetAllTags,
    request: requestGetAllTags,
    loading: loadingGetAllTags,
  } = useGetAllTags();

  const {
    status: statusCreate,
    error: errorCreate,
    response: responseCreate,
    request: requestCreate,
    loading: loadingCreate,
  } = useCreate({ description, tagId: tag, answers });

  const {
    status: statusUpdate,
    error: errorUpdate,
    response: responseUpdate,
    request: requestUpdate,
    loading: loadingUpdate,
  } = useUpdate({ id, description, tagId: tag, answers });

  const {
    status: statusGetById,
    error: errorGetById,
    response: responseGetById,
    request: requestGetById,
    loading: loadingGetById,
  } = useGetById(id);

  const addAnswers = () => {
    if (!descriptionAnswers) {
      setToast({
        show: true,
        type: "error",
        message: "O campo descrição deve ser preenchido.",
      });
      return;
    }

    setAnwers((oldAnswers) => [
      ...oldAnswers,
      {
        description: descriptionAnswers,
        correct: isCorrectAnswers,
      },
    ]);

    setDescriptionAnswers("");
    setIsCorrectAnswers(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !tag) {
      setToast({
        show: true,
        type: "error",
        message: "O campo descrição e tag devem ser preenchidos.",
      });
      return;
    }

    if (!answers.length) {
      setToast({
        show: true,
        type: "error",
        message: "Deve ter pelo menos uma resposta na pergunta",
      });
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

  useEffect(() => {
    requestGetAllTags();

    if (id) requestGetById();
  }, []);

  useEffect(() => {
    if (statusGetAllTags !== 200) return;
    setTags(responseGetAllTags);
  }, [statusGetAllTags]);

  useEffect(() => {
    if (statusGetById !== 200) return;

    setDescription(responseGetById.description);
    setTag(responseGetById.tag.id);
    setAnwers(responseGetById.answers);
  }, [statusGetById]);

  useEffect(() => {
    if (!statusCreate) return;

    if (statusCreate !== 201) {
      console.error(errorCreate);
      setToast({
        show: true,
        type: "error",
        message: "Houve um problema no servidor, tente novamente mais tarde",
      });
      return;
    }

    setToast({
      show: true,
      type: "success",
      message: "Pergunta cadastrada com sucesso",
    });

    setDescription("");
    setDescriptionAnswers("");
    setIsCorrectAnswers(false);
    setAnwers([]);
    setTag("");
  }, [statusCreate]);

  useEffect(() => {
    if (!statusUpdate) return;

    if (statusUpdate !== 200) {
      console.error(errorUpdate);
      setToast({
        show: true,
        type: "error",
        message: "Houve um problema no servidor, tente novamente mais tarde",
      });
      return;
    }

    setToast({
      show: true,
      type: "success",
      message: "Pergunta atualizada com sucesso",
    });
  }, [statusUpdate]);

  return (
    <div>
      <Header />

      <Grid container mt={5} justifyContent={"center"}>
        <Grid item xs={8}>
          <Typography variant="h5">Informações Da Pergunta</Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"}>
        <Grid xs={8} item>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid xs={12} mt={2} item>
                <TextField
                  value={description}
                  id="description"
                  label="Descrição da Pergunta"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>

              <Grid xs={12} mt={2} item>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">
                    Tag
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    label="Age"
                  >
                    {tags.map((tag) => (
                      <MenuItem key={tag.id} value={tag.id}>
                        {tag.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Grid xs={9} mt={2} item>
                <TextField
                  value={descriptionAnswers}
                  id="descriptionAnswersTmp"
                  label="Descrição da Resposta"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setDescriptionAnswers(e.target.value)}
                />
              </Grid>

              <Grid item xs={2}>
                <FormGroup>
                  <FormControlLabel
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column-reverse",
                    }}
                    control={
                      <Checkbox
                        checked={isCorrectAnswers}
                        onChange={(e) => setIsCorrectAnswers(!!e.target.value)}
                      />
                    }
                    label="Correta?"
                  />
                </FormGroup>
              </Grid>

              <Grid
                item
                xs={1}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Button
                  onClick={() => addAnswers()}
                  variant={"contained"}
                  type={"button"}
                  display={"flex"}
                >
                  +
                </Button>
              </Grid>
            </Grid>

            <Grid container mt={2}>
              <Grid item xs={12} mt={2}>
                {answers.map((answer, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{answer.description}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>Resposta correta?: {answer.correct ? "Sim" : "Não"}</p>
                      <p>Descrição da resposta: {answer.description}</p>
                      <div>
                        <Button
                          onClick={() =>
                            setAnwers((current) =>
                              current.filter(
                                (currentAnswer) =>
                                  currentAnswer.description !==
                                  answer.description
                              )
                            )
                          }
                          variant={"contained"}
                          type={"button"}
                          display={"flex"}
                          color={"error"}
                        >
                          Remover Resposta
                        </Button>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Grid>
            </Grid>

            <Grid container>
              <Grid
                item
                xs={12}
                mt={4}
                display={"flex"}
                justifyContent={"space-around"}
              >
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

export default QuestionsForm;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useGetById, useRegister } from "../../../services/moduleService";
import {
  useGetAll as useGetAllQuestions,
  useCreate,
} from "../../../services/questionService";

function TagsForm() {
  let { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [questionsAux, setQuestionsAux] = useState({
    moduleId: id ? parseInt(id) : "",
    tagId: "",
    description: "",
    answers: [
      {
        description: "",
        correct: false,
      },
    ],
  });

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const {
    status: statusRegister,
    response: responseRegister,
    request: requestRegister,
    loading: loadingRegister,
  } = useRegister({ name, description });

  const {
    status: statusRegisterQuestion,
    response: responseRegisterQuestion,
    request: requestRegisterQuestion,
    loading: loadingRegisterQuestion,
    resetAttributes: resetAttributesRegisterQuestion,
  } = useCreate(questionsAux);

  const {
    status: statusGetById,
    response: responseGetById,
    request: requestGetById,
    loading: loadingGetById,
  } = useGetById(id);

  const {
    status: statusGetAllQuestions,
    response: responseGetAllQuestions,
    request: requestGetAllQuestions,
    loading: loadingGetAllQuestions,
    resetAttributes: resetAttributesGetAllQuestions,
  } = useGetAllQuestions(id);

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

  const addNewQuestion = () => {
    if (
      !questionsAux ||
      !questionsAux.description ||
      !questionsAux.tagId ||
      !questionsAux.moduleId ||
      !questionsAux.answers.length
    ) {
      setToast({
        show: true,
        message: "Há campos requeridos inválidos",
        type: "error",
      });
      return;
    }

    let isEmptyAnswers = false;

    for (let i = 0; i < questionsAux.answers.length; i++) {
      if (!questionsAux.answers[i].description) {
        isEmptyAnswers = true;
        break;
      }
    }

    if (isEmptyAnswers) {
      setToast({
        show: true,
        message: "Há campos requeridos inválidos",
        type: "error",
      });
      return;
    }

    resetAttributesRegisterQuestion();
    requestRegisterQuestion();
  };

  useEffect(() => {
    if (id) {
      requestGetById();
      requestGetAllQuestions();
    }
  }, []);

  useEffect(() => {
    if (!statusGetById) return;
    if (statusGetById !== 200) return;

    setName(responseGetById.name);
    setDescription(responseGetById.description);
    setTags(responseGetById?.moduleTags || []);
  }, [statusGetById]);

  useEffect(() => {
    if (!statusGetAllQuestions) return;
    if (statusGetAllQuestions !== 200) return;
    setQuestions(responseGetAllQuestions);
  }, [statusGetAllQuestions]);

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

  useEffect(() => {
    if (!statusRegisterQuestion) return;

    if (statusRegisterQuestion !== 201) {
      console.error(responseRegisterQuestion);
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
      message: "Pergunta cadastrada com sucesso",
    });

    setQuestionsAux({
      moduleId: parseInt(id),
      tagId: "",
      description: "",
      answers: [
        {
          description: "",
          correct: false,
        },
      ],
    });

    resetAttributesGetAllQuestions();
    requestGetAllQuestions();
  }, [statusRegisterQuestion]);

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
            </Grid>

            <Grid item xs={12} mt={2} display={"flex"} justifyContent={"end"}>
              <Button variant={"contained"} type={"submit"}>
                {id ? "Atualizar Módulo" : "Cadastrar Módulo"}
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>

      <Grid container mt={7} justifyContent={"center"}>
        <Grid xs={8} item>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">Criar nova pergunta</Typography>
            </Grid>

            <Grid xs={12} item mt={2}>
              <TextField
                value={questionsAux.description}
                id="questionDescription"
                label="Descrição da pergunta"
                variant="standard"
                fullWidth
                onChange={(e) =>
                  setQuestionsAux({
                    ...questionsAux,
                    description: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid xs={12} item mt={2}>
              <FormControl fullWidth variant="standard">
                <InputLabel
                  id="demo-simple-select-label"
                  value={questionsAux.description}
                >
                  Tag
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={questionsAux.tagId}
                  label="Age"
                  onChange={(e) =>
                    setQuestionsAux({
                      ...questionsAux,
                      tagId: e.target.value,
                    })
                  }
                >
                  {tags.map((tagModule) => (
                    <MenuItem key={tagModule.tag.id} value={tagModule.tag.id}>
                      {tagModule.tag.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {questionsAux.answers.map((questionAux, index) => (
              <Grid
                key={index}
                container
                alignItems={"center"}
                justifyContent={"center"}
                mt={2}
              >
                <Grid xs={8} item>
                  <TextField
                    value={questionAux.description}
                    id="answersDescription"
                    label="Descrição da resposta"
                    variant="standard"
                    fullWidth
                    onChange={(e) => {
                      let aux = [...questionsAux.answers];
                      let item = { ...aux[index] };
                      item.description = e.target.value;
                      aux[index] = item;
                      setQuestionsAux({
                        ...questionsAux,
                        answers: aux,
                      });
                    }}
                  />
                </Grid>
                <Grid
                  xs={2}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  item
                >
                  <Checkbox
                    onChange={(e) => {
                      let aux = [...questionsAux.answers];
                      let item = { ...aux[index] };
                      item.correct = e.target.checked;
                      aux[index] = item;
                      setQuestionsAux({
                        ...questionsAux,
                        answers: aux,
                      });
                    }}
                  />
                </Grid>
                <Grid
                  xs={2}
                  item
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Button
                    dataindex={index}
                    variant={"contained"}
                    type={"submit"}
                    onClick={() => {
                      setQuestionsAux({
                        ...questionsAux,
                        answers: questionsAux.answers.filter(
                          (answer) => answer !== questionAux
                        ),
                      });
                    }}
                  >
                    -
                  </Button>
                  <Button
                    variant={"contained"}
                    type={"submit"}
                    onClick={() =>
                      setQuestionsAux({
                        ...questionsAux,
                        answers: [
                          ...questionsAux.answers,
                          {
                            description: "",
                            correct: false,
                          },
                        ],
                      })
                    }
                  >
                    +
                  </Button>
                </Grid>
              </Grid>
            ))}

            <Grid item xs={12} mt={4} display={"flex"} justifyContent={"end"}>
              <Button
                variant={"contained"}
                type={"submit"}
                onClick={() => addNewQuestion()}
              >
                Adicionar nova pergunta
              </Button>
            </Grid>
          </Grid>

          <Grid container mt={7}>
            <Grid item xs={12}>
              <Typography variant="h5">Perguntas criadas do módulo</Typography>
            </Grid>

            <Grid item xs={12} mt={2}>
              {questions.map((question) => (
                <Accordion key={question.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>{question.description}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ol>
                      {question.answers.map((answer) => (
                        <li key={answer.id}> {answer.description}</li>
                      ))}
                    </ol>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Grid>
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

      <Footer />
    </div>
  );
}

export default TagsForm;

import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  Grid,
  Snackbar,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useGetSimulate } from "../../../services/moduleService";
import { useCreate } from "../../../services/attempHistoryService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function SimulatedForm() {
  const navigate = useNavigate();

  const { moduleId } = useParams();
  const [module, setModule] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const {
    status: statusGetSimulate,
    response: responseGetSimulate,
    error: errorGetSimulate,
    request: requestGetSimulate,
    loading: loadingGetSimulate,
  } = useGetSimulate(moduleId);

  const {
    status: statusCreate,
    response: responseCreate,
    error: errorCreate,
    request: requestCreate,
    loading: loadingCreate,
  } = useCreate({ moduleId, answeredQuestions });

  useEffect(() => {
    requestGetSimulate();
  }, []);

  useEffect(() => {
    if (statusGetSimulate !== 200) return;
    setModule(responseGetSimulate.module);
    const questions = responseGetSimulate.questions.map((question) => {
      let qntCorrect = 0;

      question.answers.map((answer) => {
        if (answer.correct) qntCorrect++;
      });
      question.qtyToSelect = qntCorrect;

      return question;
    });

    setQuestions(questions);
  }, [statusGetSimulate]);

  useEffect(() => {
    if (statusCreate !== 201) return;

    navigate(`/simulados-realizados/resultado/${responseCreate.id}`);
  }, [statusCreate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answeredQuestions.length !== questions.length) {
      setToast({
        show: true,
        type: "error",
        message: `Ainda falta ${
          questions.length - answeredQuestions.length
        } perguntas sem responder`,
      });
      return;
    }

    answeredQuestions.moduleId = moduleId;
    requestCreate();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setToast({
      ...toast,
      show: false,
    });
  };

  const changeAnswers = (selected, questionId, answerId) => {
    let answeredQuestionsAux = [...answeredQuestions];
    let question = answeredQuestionsAux.find(
      (currentAnswer) => currentAnswer.questionId === questionId
    );

    if (question) {
      if (selected) {
        answeredQuestionsAux = answeredQuestionsAux.filter(
          (currentAnswer) => currentAnswer.questionId !== questionId
        );

        question.answers.push(answerId);
        answeredQuestionsAux.push(question);
        setAnsweredQuestions(answeredQuestionsAux);
      } else {
        question.answers = question.answers.filter(
          (currentAnswer) => currentAnswer !== answerId
        );

        answeredQuestionsAux = answeredQuestionsAux.filter(
          (currentAnswer) => currentAnswer.questionId !== questionId
        );

        answeredQuestionsAux.push(question);
        setAnsweredQuestions(answeredQuestionsAux);
      }

      return;
    }

    setAnsweredQuestions((oldAnsweredQuestions) => [
      ...oldAnsweredQuestions,
      { questionId, answers: [answerId] },
    ]);
  };

  return (
    <div>
      <Header />

      <Grid container mt={5} justifyContent={"center"}>
        <Grid item xs={8}>
          <Typography variant="h5">
            Simulado do módulo "{module?.name}"
          </Typography>
        </Grid>
      </Grid>

      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={8} mt={3}>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <ol>
                  {questions.map((question) => (
                    <li key={question.id}>
                      <Grid container>
                        <Grid item xs={12}>
                          <p>
                            {question.description} (Selecione{" "}
                            {question.qtyToSelect})
                          </p>
                        </Grid>

                        <Grid item xs={12}>
                          <ol>
                            {question.answers.map((answer) => (
                              <li key={answer.id}>
                                <Checkbox
                                  onChange={(e) =>
                                    changeAnswers(
                                      !!e.target.checked,
                                      question.id,
                                      answer.id
                                    )
                                  }
                                />{" "}
                                {answer.description}
                              </li>
                            ))}
                          </ol>
                        </Grid>
                      </Grid>
                    </li>
                  ))}
                </ol>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                <Button variant={"contained"} type={"submit"}>
                  Enviar Simulado
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

export default SimulatedForm;

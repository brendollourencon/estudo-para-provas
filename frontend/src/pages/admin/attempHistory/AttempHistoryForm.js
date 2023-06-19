import { Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import { useGetById } from "../../../services/attempHistoryService";
import { useEffect, useState } from "react";

function AttempHistoryForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [attempHistoryService, setAttempHistoryService] = useState({
    module: "",
    hitPercentage: 0,
    data: [],
  });

  const {
    status: statusGetById,
    error: errorGetById,
    response: responseGetById,
    request: requestGetById,
    loading: loadingGetById,
  } = useGetById(id);

  useEffect(() => {
    requestGetById();
  }, []);

  useEffect(() => {
    if (statusGetById !== 200) return;
    setAttempHistoryService(responseGetById);
  }, [statusGetById]);

  return (
    <div>
      <Header />

      <Grid container mt={5} justifyContent={"center"}>
        <Grid item xs={8}>
          <Typography variant="h5">
            Simulado: {attempHistoryService.module.name}
          </Typography>

          <Typography variant="h5">
            Aproveitamento {attempHistoryService.hitPercentage}%
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"}>
        <Grid xs={8} item>
          <Grid container>
            <Grid xs={12} mt={2} item>
              <ol>
                {attempHistoryService.data.map(
                  ({ question, answersCorrect, answersSelecteds, correct }) => (
                    <li
                      key={question.id}
                      style={{
                        backgroundColor: correct ? "#bdf7c9" : "#f7bdbd",
                      }}
                    >
                      <p>{question.description}</p>
                      <p>Correto: {correct ? "Sim" : "Não"}</p>
                      <div>
                        <p style={{ margin: "0" }}>Resposta(s) escolhida:</p>
                        {answersSelecteds.map((answer) => (
                          <p key={answer.id} style={{ margin: "0" }}>
                            {answer.description}
                          </p>
                        ))}
                      </div>

                      {!correct && (
                        <div>
                          <p style={{ marginBottom: "0" }}>
                            Resposta(s) corretas:{" "}
                          </p>
                          {answersCorrect.map((answer) => (
                            <p key={answer.id} style={{ margin: "0" }}>
                              {answer.description}
                            </p>
                          ))}
                        </div>
                      )}
                    </li>
                  )
                )}
              </ol>
            </Grid>

            <Grid xs={12} item display={"flex"} justifyContent={"center"}>
              <Button
                variant={"contained"}
                type={"button"}
                onClick={() => navigate("/simulados-realizados/lista")}
              >
                Voltar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default AttempHistoryForm;

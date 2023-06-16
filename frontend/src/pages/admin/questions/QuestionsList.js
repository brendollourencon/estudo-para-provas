import { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useGetAll } from "../../../services/questionService";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "description", headerName: "Descrição", width: 400 },
];

function QuestionsList() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const {
    status: statusGetAll,
    response: responseGetAll,
    error: errorGetAll,
    request: requestGetAll,
    loading: loadingGetAll,
  } = useGetAll();

  useEffect(() => {
    requestGetAll();
  }, []);

  useEffect(() => {
    if (statusGetAll !== 200) return;

    setRows(
      responseGetAll.map((tag) => {
        return {
          id: tag.id,
          description: tag.description,
        };
      })
    );
  }, [statusGetAll]);

  return (
    <div>
      <Header />

      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={8} mt={3} display={"flex"} justifyContent={"end"}>
          <Button
            onClick={() => navigate("/perguntas/novo")}
            variant="contained"
          >
            Cadastrar Novo
          </Button>
        </Grid>
      </Grid>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={8} mt={3}>
          <DataGrid
            onRowClick={(row) => navigate(`/perguntas/${row.id}`)}
            rows={rows}
            columns={columns}
            autoHeight
            disableRowSelectionOnClick
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default QuestionsList;

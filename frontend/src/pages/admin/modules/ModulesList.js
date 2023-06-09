import { Button, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetAll } from "../../../services/moduleService";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Nome", width: 400 },
  { field: "description", headerName: "Descrição", width: 400 },
];

function ModulesList() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const {
    status: statusGetModules,
    response: responseGetModules,
    error: errorGetModules,
    request: requestGetModules,
    loading: loadingGetModules,
  } = useGetAll();

  useEffect(() => {
    requestGetModules();
  }, []);

  useEffect(() => {
    if (statusGetModules !== 200) return;
    setRows(
      responseGetModules.map((modules) => {
        return {
          id: modules.id,
          name: modules.name,
          description: modules.description,
        };
      })
    );
  }, [statusGetModules]);

  return (
    <div>
      <Header />

      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={8} mt={3} display={"flex"} justifyContent={"end"}>
          <Button onClick={() => navigate("/modulo/novo")} variant="contained">
            Cadastrar Novo
          </Button>
        </Grid>
      </Grid>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={8} mt={3}>
          <DataGrid
            onRowClick={(row) => navigate(`/modulo/${row.id}`)}
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

export default ModulesList;

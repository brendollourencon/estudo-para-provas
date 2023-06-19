import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Modal,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useGetAll } from "../../../services/attempHistoryService";
import { useGetAll as useGetAllModules } from "../../../services/moduleService";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "hitPercentage", headerName: "Quantidade de acerto" },
  { field: "moduleName", headerName: "Módulo" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function AttempHistoryList() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modules, setModules] = useState([]);
  const [module, setModule] = useState("");

  const {
    status: statusGetAll,
    response: responseGetAll,
    error: errorGetAll,
    request: requestGetAll,
    loading: loadingGetAll,
  } = useGetAll();

  const {
    status: statusGetAllModules,
    response: responseGetAllModules,
    error: errorGetAllModules,
    request: requestGetAllModules,
    loading: loadingGetAllModules,
  } = useGetAllModules();

  useEffect(() => {
    requestGetAll();
    requestGetAllModules();
  }, []);

  useEffect(() => {
    if (statusGetAll !== 200) return;

    setRows(
      responseGetAll.map((info) => ({
        id: info.id,
        hitPercentage: info.hitPercentage + "%",
        moduleName: info.module.name,
      }))
    );
  }, [statusGetAll]);

  useEffect(() => {
    if (statusGetAllModules !== 200) return;
    setModules(responseGetAllModules);
  }, [statusGetAllModules]);

  return (
    <div>
      <Header />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={12}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-standard-label">
                  Modulos
                </InputLabel>
                <Select
                  labelId="module"
                  id="module"
                  value={module}
                  onChange={(e) => setModule(e.target.value)}
                  label="Selecione o módulo para iniciar o simulado"
                >
                  {modules.map((mod) => (
                    <MenuItem key={mod.id} value={mod.id}>
                      {mod.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              mt={2}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                variant="contained"
                onClick={() =>
                  navigate(
                    module
                      ? `/simulado/modulo/${module}`
                      : "/simulados-realizados/lista"
                  )
                }
              >
                Iniciar Simulado
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={8} mt={3} display={"flex"} justifyContent={"end"}>
          <Button onClick={() => setOpen(true)} variant="contained">
            Iniciar Novo Simulado
          </Button>
        </Grid>
      </Grid>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={8} mt={3}>
          <DataGrid
            onRowClick={(row) =>
              navigate(`/simulados-realizados/resultado/${row.id}`)
            }
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

export default AttempHistoryList;

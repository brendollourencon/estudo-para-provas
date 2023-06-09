import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useGetAll } from "../../../services/moduleService";
import MenuItem from "@mui/material/MenuItem";
import { useRegister } from "../../../services/tagService";

function ModulesForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [moduleTemp, setModuleTemp] = useState("");
  const [modules, setModules] = useState([]);
  const [modulesSelected, setModulesSelected] = useState([]);

  const {
    status: statusGetModules,
    response: responseGetModules,
    error: errorGetModules,
    request: requestGetModules,
    loading: loadingGetModules,
  } = useGetAll();

  const {
    status: statusRegister,
    response: responseRegister,
    error: errorRegisters,
    request: requestRegister,
    loading: loadingRegister,
  } = useRegister({ name, description, modules: modulesSelected });

  useEffect(() => {
    requestGetModules();
  }, []);

  useEffect(() => {
    if (!statusGetModules) return;
    if (statusGetModules !== 200) return;
    setModules(responseGetModules);
  }, [statusGetModules]);

  useEffect(() => {
    if (!statusRegister) return;
    if (statusRegister !== 201) return;
  }, [statusRegister]);

  useEffect(() => {
    if (!moduleTemp) return;

    const findInfo = modules.find((mod) => mod.id === moduleTemp);
    const aux = modulesSelected;

    if (aux.some((data) => data.id === findInfo.id)) {
      setModuleTemp("");
      return;
    }

    aux.push(findInfo);
    setModulesSelected(aux);
    setModuleTemp("");
  }, [moduleTemp]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !modulesSelected.length) {
      return;
    }

    requestRegister();
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

              <Grid item xs={12} mt={2}>
                <FormControl fullWidth variant="standard">
                  <InputLabel id="modulesTemp">Módulos</InputLabel>
                  <Select
                    labelId="modulesTemp"
                    id="modulesTemp"
                    value={moduleTemp}
                    label="Módulos"
                    onChange={(e) => setModuleTemp(e.target.value)}
                  >
                    {modules.map((module) => (
                      <MenuItem key={module.id} value={module.id}>
                        {module.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} mt={2}>
                {modulesSelected.map((modSelected) => (
                  <Chip key={modSelected.id} label={modSelected.name} />
                ))}
              </Grid>

              <Grid item xs={12} mt={2} display={"flex"} justifyContent={"end"}>
                <Button variant={"contained"} type={"submit"}>
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default ModulesForm;

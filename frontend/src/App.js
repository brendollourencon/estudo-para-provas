import { Route, Routes } from "react-router-dom";
import { RequireAuth, useAuth } from "./contexts/AuthContext";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import ModulesList from "./pages/admin/modules/ModulesList";
import ModulesForm from "./pages/admin/modules/ModulesForm";
import TagsList from "./pages/admin/tags/TagsList";
import TagsForm from "./pages/admin/tags/TagsForm";
import QuestionsList from "./pages/admin/questions/QuestionsList";
import QuestionsForm from "./pages/admin/questions/QuestionsForm";
import AttempHistoryForm from "./pages/admin/attempHistory/AttempHistoryForm";
import AttempHistoryList from "./pages/admin/attempHistory/AttempHistoryList";
import SimulatedForm from "./pages/admin/attempHistory/SimulatedForm";

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      <Route
        path="/tags/lista"
        element={
          <RequireAuth>
            <TagsList />
          </RequireAuth>
        }
      />
      <Route
        path="/tag/novo"
        element={
          <RequireAuth>
            <TagsForm />
          </RequireAuth>
        }
      />
      <Route
        path="/tag/:id"
        element={
          <RequireAuth>
            <TagsForm />
          </RequireAuth>
        }
      />

      <Route
        path="/perguntas/lista"
        element={
          <RequireAuth>
            <QuestionsList />
          </RequireAuth>
        }
      />
      <Route
        path="/perguntas/novo"
        element={
          <RequireAuth>
            <QuestionsForm />
          </RequireAuth>
        }
      />
      <Route
        path="/perguntas/:id"
        element={
          <RequireAuth>
            <QuestionsForm />
          </RequireAuth>
        }
      />

      <Route
        path="/modulos/lista"
        element={
          <RequireAuth>
            <ModulesList />
          </RequireAuth>
        }
      />

      <Route
        path="/modulo/:id"
        element={
          <RequireAuth>
            <ModulesForm />
          </RequireAuth>
        }
      />
      <Route
        path="/modulo/novo"
        element={
          <RequireAuth>
            <ModulesForm />
          </RequireAuth>
        }
      />

      <Route
        path="/simulados-realizados/lista"
        element={
          <RequireAuth>
            <AttempHistoryList />
          </RequireAuth>
        }
      />
      <Route
        path="simulados-realizados/resultado/:id"
        element={
          <RequireAuth>
            <AttempHistoryForm />
          </RequireAuth>
        }
      />
      <Route
        path="/simulado/modulo/:moduleId"
        element={
          <RequireAuth>
            <SimulatedForm />
          </RequireAuth>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar" element={<Register />} />
      <Route path="/cadastrar" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

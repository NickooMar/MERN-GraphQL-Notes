import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Projects from "./pages/Projects";
import ProjectsDetails from "./pages/ProjectDetails";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/projects"} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectsDetails />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;

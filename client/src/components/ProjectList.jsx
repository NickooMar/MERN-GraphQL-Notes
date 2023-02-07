import React from "react";

import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";

const ProjectList = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  console.log({ loading, error, data });

  return <div>ProjectList</div>;
};

export default ProjectList;

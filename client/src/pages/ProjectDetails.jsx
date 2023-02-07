import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/projects";

import TaskList from "../components/Task/TaskList";
import TaskForm from "../components/Task/TaskForm";

const ProjectDetails = () => {
  const params = useParams();

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: params.id },
    skip: !params.id,
  });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="">
      <div>
        <h1 className="text-2xl"> {data.project.name}</h1>
        <p>{data.project.description}</p>
      </div>
      <TaskForm  />
      <TaskList tasks={data.project.tasks} />
      <button className="bg-red-500 px-3 py-2 rounded-lg">Delete</button>
    </div>
  );
};

export default ProjectDetails;

import React, { useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";

const ProjectForm = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const [createProject, { loading, error, data }] = useMutation(
    CREATE_PROJECT,
    {
      refetchQueries: [
        {
          query: GET_PROJECTS,
        },
        "GetProjects",
      ],
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    });
    setProject({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/5 ">
      {error && <p>{error.message}</p>}
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Write a title"
        onChange={handleChange}
        value={project.name}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      />
      <textarea
        name="description"
        rows="3"
        placeholder="Write a description"
        onChange={handleChange}
        value={project.description}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      ></textarea>
      <button
        type="submit"
        disabled={!project.name || !project.description || loading}
        className="bg-blue-500 px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400"
      >
        Save
      </button>
    </form>
  );
};

export default ProjectForm;

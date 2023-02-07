import React from "react";

import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../graphql/tasks";

const TaskCard = ({ task }) => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"],
  });

  return (
    <div className="bg-zinc-900 px-5 py-3 mb-2 flex justify-between ">
      <h1>{task.title}</h1>
      <button onClick={() => deleteTask({ variables: { id: task._id } })} className='bg-red-500 p-2 rounded-md'>
        Delete
      </button>
    </div>
  );
};

export default TaskCard;

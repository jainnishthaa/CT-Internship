import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { moveTask } from "../redux/taskSlice";

const TaskCard = ({ task, statusColor }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  const handleMoveTask = (status) => {
    dispatch(moveTask({ id: task.id, status }));
    setShowOptions(false);
  };

  const handleDeleteTask=()=>{
    dispatch(deleteTask({id:task.id}))
    setShowOptions(false);
  }

  return (
    <div className="task-card">
      <button
        className="options-button"
        onClick={() => setShowOptions(!showOptions)}
        onBlur={()=>setShowOptions(!showOptions)}
      >
        …
      </button>
      {showOptions && (
        <div className="options-menu show">
          {task.status !== "In Process" && (
            <button onClick={() => handleMoveTask("In Process")}>
              Move to In Process
            </button>
          )}
          {task.status !== "Blocked" && (
            <button onClick={() => handleMoveTask("Blocked")}>
              Move to Blocked
            </button>
          )}
          {task.status !== "To Be Reviewed" && (
            <button onClick={() => handleMoveTask("To Be Reviewed")}>
              Move to To Be Reviewed
            </button>
          )}
          <button onClick={() => handleDeleteTask()} style={{color:"red"}}>Delete</button>
        </div>
      )}
      <div className="task-header">
        <h4>{task.title}</h4>
        <span style={{ backgroundColor: statusColor, color: "white" }}>
          {task.date}
        </span>
      </div>
      <div className="task-content">
        <p>{task.desc}</p>
      </div>
    </div>
  );
};

export default TaskCard;

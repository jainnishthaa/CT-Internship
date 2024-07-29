import { useState } from "react";
import TaskColumn from "./components/TaskColumn";
import AddTask from "./components/AddTask";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddTask = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="kanban-board">
      <button className="add-task-button" onClick={handleAddTask}>
        Add Task
      </button>
      <div className="columns">
        <TaskColumn
          status="Not Started"
          statusColor="#0089ED"
          isModalOpen={isModalOpen}
        />
        <TaskColumn
          status="In Process"
          statusColor="#02DD74"
          isModalOpen={isModalOpen}
        />
        <TaskColumn
          status="Blocked"
          statusColor="#FF441B"
          isModalOpen={isModalOpen}
        />
        <TaskColumn
          status="To Be Reviewed"
          statusColor="#D6009A"
          isModalOpen={isModalOpen}
        />
      </div>
      {isModalOpen && <AddTask setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from "./Header";
import Checklist from "./checklist/Checklist";
import RightPart from "./Right_part";
import ArchiveList from "./archive_list/ArchiveList";

const App = () => {
  // store users' todo tasks and checked tasks
  const [tasks, setTasks] = useState([]);
  const [archiveTasks, setArchivedTasks] = useState([
    "checked1",
    "checked2",
    "checked3",
  ]);

  useEffect(() => {
    // Fetch tasks (both regular and archived)
    Axios.get("http://localhost:3000/")
      .then((res) => {
        const { taskCreated, archivedTasks } = res.data;
        const taskNames = taskCreated.map((task) => task.name);
        const archivedTaskNames = archivedTasks.map((task) => task.name);

        setTasks(taskNames);
        setArchivedTasks(archivedTaskNames);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []); // Empty dependency array ensures the effect runs once on component mount

  // add new task to the original tasks list
  const addTask = (newTask) => {
    console.log("React: user submitted a new task: " + newTask);

    // Make API request to send data back to the server
    Axios.post("http://localhost:3000/submit", { task: newTask })
      .then((res) => {
        // If the server successfully processes the request, update the state
        setTasks([...tasks, newTask]);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  // Update deleteTask function
  const deleteTask = (checkedTask) => {
    // Make API request to delete task from the server
    Axios.delete(`http://localhost:3000/delete/${checkedTask}`)
      .then((res) => {
        // If the server successfully processes the request, update the state
        const updatedTasks = tasks.filter((task) => task !== checkedTask);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  // Update archiveTask function
  const archiveTask = (archivedTask) => {
    // Make API request to archive task on the server
    Axios.post("http://localhost:3000/archive", { task: archivedTask })
      .then((res) => {
        // If the server successfully processes the request, update the state
        deleteTask(archivedTask); // Remove task from the main tasks list
        setArchivedTasks([...archiveTasks, archivedTask]); // Add task to the archive tasks list
      })
      .catch((error) => {
        console.error("Error archiving task:", error);
      });
  };

  // Update unarchiveTask function
  const unarchiveTask = (unarchiveTask) => {
    // Make API request to unarchive task on the server
    Axios.post("http://localhost:3000/unarchive", { task: unarchiveTask })
      .then((res) => {
        // If the server successfully processes the request, update the state
        setArchivedTasks(archiveTasks.filter((task) => task !== unarchiveTask)); // Remove task from the archive tasks list
        setTasks([...tasks, unarchiveTask]); // Add task back to the regular tasks list
      })
      .catch((error) => {
        console.error("Error unarchiving task:", error);
      });
  };

  console.log(tasks);

  return (
    <div>
      <Header />
      <div className="body-container row align-items-md-baseline">
        <Checklist
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          archiveTask={archiveTask}
        />
        <RightPart archiveTasks={archiveTasks} unarchiveTask={unarchiveTask} />
      </div>
    </div>
  );
};

export default App;

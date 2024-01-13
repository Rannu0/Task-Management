import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from "./Header";
import Checklist from "./checklist/Checklist";
import RightPart from "./Right_part";
import ArchiveList from "./archive_list/ArchiveList";

const App = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await Axios.get("http://localhost:3000/test");
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  // store users' todo tasks and checked tasks
  const [tasks, setTasks] = useState([
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
  ]);
  const [archiveTasks, setArchivedTasks] = useState([
    "checked1",
    "checked2",
    "checked3",
  ]);

  // add new task to the original tasks list
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  //delete checked task from the original tasks list
  const deleteTask = (checkedTask) => {
    const updatedTasks = tasks.filter((task) => task !== checkedTask);
    setTasks(updatedTasks);
  };

  const archiveTask = (archivedTask) => {
    // Remove archived task from the original tasks list
   deleteTask(archivedTask);

    // Add the archived task to the archive tasks list
    setArchivedTasks([...archiveTasks, archivedTask]);
  };

  const unarchiveTask = (unarchiveTask) => {
    addTask(unarchiveTask);
    const updatedTasks = archiveTasks.filter((task) => task !== unarchiveTask);
    setArchivedTasks(updatedTasks);

  }

  console.log(tasks);

  return (
    <div>
      <Header />
      <div className="body-container row align-items-md-baseline">
        <Checklist tasks={tasks} addTask={addTask} deleteTask={deleteTask} archiveTask={archiveTask}/>
        <RightPart archiveTasks={archiveTasks} unarchiveTask={unarchiveTask} />
      </div>
    </div>
  );
};

export default App;

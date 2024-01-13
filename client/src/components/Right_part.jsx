import React, { useState } from "react";
import ArchiveList from "./archive_list/ArchiveList";
import Weather from "./archive_list/Weather";

function RightPart(props) {
  const archiveTasks = props.archiveTasks;
  

  return (
    <div className="col-md-5">
      <Weather />

      <ArchiveList archiveTasks={archiveTasks} />
    </div>
  );
}

export default RightPart;

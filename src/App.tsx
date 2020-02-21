import React, { Suspense } from "react";
import "./App.css";

import { createResource } from "./resource";
import { Person } from "./person";

const resource = createResource();

function App() {
  // console.log(resource.meh());
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Person resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;

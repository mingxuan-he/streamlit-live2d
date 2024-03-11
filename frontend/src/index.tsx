import React from "react"
import ReactDOM from "react-dom/client"
import Live2DViewer from "./Live2DViewer"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Live2DViewer />
  </React.StrictMode>
);
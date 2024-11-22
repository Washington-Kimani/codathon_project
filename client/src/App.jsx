import {BrowserRouter} from "react-router-dom";

// Import mainapp
import MainApp from "./mainapp/MainApp.jsx";

function App() {

  return (
    <BrowserRouter>
      <MainApp/>
    </BrowserRouter>
  )
}

export default App

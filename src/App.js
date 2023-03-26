import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faComment } from '@fortawesome/free-solid-svg-icons'
// library.add(faComment)

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index path="/*" element={<Labs/>}/>
            <Route path="/hello" element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
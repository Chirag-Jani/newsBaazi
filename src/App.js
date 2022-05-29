import "./App.css";
import Navbar from "./Components/Navbar";
import Newslist from "./Components/Newslist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Newslist
                apiKey={apiKey}
                pageSize={pageSize}
                key="general"
                catagory={"general"}
                country={"in"}
              />
            }
          />
          <Route
            path="/business"
            element={
              <Newslist
                apiKey={apiKey}
                pageSize={pageSize}
                key="business"
                catagory={"business"}
                country={"in"}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <Newslist
                apiKey={apiKey}
                pageSize={pageSize}
                key="entertainment"
                catagory={"entertainment"}
                country={"in"}
              />
            }
          />
          <Route
            path="/health"
            element={
              <Newslist
                apiKey={apiKey}
                pageSize={pageSize}
                key="health"
                catagory={"health"}
                country={"in"}
              />
            }
          />
          <Route
            path="/science"
            element={
              <Newslist
                apiKey={apiKey}
                pageSize={pageSize}
                key="science"
                catagory={"science"}
                country={"in"}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <Newslist
                apiKey={apiKey}
                pageSize={pageSize}
                key="sports"
                catagory={"sports"}
                country={"in"}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <Newslist
                apiKey={apiKey}
                pageSize={pageSize}
                key="technology"
                catagory={"technology"}
                country={"in"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

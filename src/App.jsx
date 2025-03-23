import { BrowserRouter, Routes, Route } from "react-router-dom";
import DevtinderLanding from "./components/DevtinderLanding";
import Login from "./components/Login";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<DevtinderLanding />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

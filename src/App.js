import styled from "styled-components";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";
import ResponseModal from "./components/responseHandler/ResponseModal";

const App = () => {
  const responseHandler = useSelector((state) => state.userAddres.resHandler);

  return (
    <Wrapper>
      <Router>
        <Navigation logoleft={"43px"} isWallet={true} />
        {responseHandler && <ResponseModal />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/UI/header/header";
import AppRouter from "./router/app-router";

function App() {
  return (
    <BrowserRouter>
      <MainSection>
        <Navigation></Navigation>
        <Content>
          <AppRouter></AppRouter>
        </Content>
      </MainSection>
    </BrowserRouter>
  );
}

export default App;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

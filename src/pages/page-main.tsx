import PageComponent from "../components/comp-main/page-main";
import { Section, Wrapper } from "./page-style";

function PageMain() {
  return (
    <Section>
      <Wrapper>
        <PageComponent></PageComponent>
      </Wrapper>
    </Section>
  );
}

export default PageMain;

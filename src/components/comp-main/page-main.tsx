import * as st from "./page-main-style";

function CompPageMain() {
  return (
    <st.DivStyled>
      <st.Title>
        Главная страница в разработке, но{" "}
        <st.Link href="/projects">
          <st.Span>проекты</st.Span>
        </st.Link>{" "}
        уже есть 😎
      </st.Title>
    </st.DivStyled>
  );
}

export default CompPageMain;

import Lock from "../../assets/lock.svg";
import Mood from "../../assets/mood.svg";
import Book from "../../assets/book.svg";
import Question from "../../assets/question.svg";
import ProjectList from "./page-project-list";

function CompPageProjects() {
  const items = [
    {
      key: "1",
      href: "/password-generator/",
      img: Lock,
      title: "Генератор паролей",
      text: "Данный генератор способен создавать пароли длиной до 32 символов с использованием строчных и заглавных букв, цифр, а также специальных символов. ",
    },
    {
      key: "2",
      href: "/emoji-after-words/",
      img: Mood,
      title: "Эмодзи после слов",
      text: "Помогает создать простые копипасты",
    },
    {
      key: "3",
      href: "/stendhal-editor/",
      img: Book,
      title: "StendhalEditor",
      text: "С помощью этого веб-приложения можно перенести текст в книгу в Minecraft. Для работы требуется мод.",
    },
    {
      key: "4",
      href: "#",
      img: Question,
      title: "В разработке",
      text: "Что-то будет",
    },
  ];

  return <ProjectList items={items}></ProjectList>;
}

export default CompPageProjects;

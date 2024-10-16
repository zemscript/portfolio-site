import { Card } from "antd";
import styled from "styled-components";

interface ProjectItems {
  key: string;
  href: string;
  img: string;
  title: string;
  text: string;
}

interface ProjectListProps {
  items: ProjectItems[];
}

function ProjectList({ items }: ProjectListProps) {
  return (
    <>
      <UlGrid>
        {items.map((items) => (
          <li key={items.key}>
            <LinkStyled href={items.href}>
              <CardStyled>
                <TitleWrapper>
                  <ImgStyled src={items.img} alt={items.title}></ImgStyled>
                  <h3>{items.title}</h3>
                </TitleWrapper>
                <p>{items.text}</p>
              </CardStyled>
            </LinkStyled>
          </li>
        ))}
      </UlGrid>
    </>
  );
}

export default ProjectList;

export const UlGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
  margin: 0rem 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) and (min-width: 426px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-color: #dbdbdb;
  transition: all 0.3s ease;
  img {
    max-width: 100%;
    height: auto;
  }
  h3,
  p {
    margin: 0;
  }
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.5rem);
  }
  &:active {
    transform: translateY(-0.1rem);
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const LinkStyled = styled.a`
  text-decoration: none;
`;

export const ImgStyled = styled.img`
  margin-right: 0.5rem;
`;

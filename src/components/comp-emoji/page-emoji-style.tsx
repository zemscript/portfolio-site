import styled from "styled-components";

export const DivCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: var(--fontTitle);
  font-size: 2.5rem;
  text-align: center;
`;

export const InputTextarea = styled.textarea`
  padding: 1rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  font-family: var(--fontText);
  font-size: var(--fontSize14);
  resize: vertical;
  height: 20rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const TextEmoji = styled.span`
  font-family: var(--fontText);
  font-size: var(--fontSize14);
  cursor: pointer;
  user-select: none;
  display: inline-block;
  word-break: break-word;
  border: solid;
  padding: 1rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  white-space: pre-wrap;

  .placeholder {
    color: #818181;
  }

  &:active {
    border-color: var(--colorActive);
  }
`;

export const BlockInput = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20%;
  max-width: 70%;
`;

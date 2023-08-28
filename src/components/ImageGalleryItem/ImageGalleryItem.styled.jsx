import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 16px;
  border: 1px solid rgba(99, 101, 100, 0.5);
  overflow: hidden;

  transform: scale(1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: auto;
  height: 380px;
  object-fit: cover;
`;

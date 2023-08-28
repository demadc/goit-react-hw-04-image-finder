import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;

  z-index: 900;
  width: 100%;
  min-height: 64px;
  background-color: #5b79ef;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

export const Btn = styled.button`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 0;
  opacity: 0.6;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #b0c9e4;
  }
`;

export const Field = styled.input`
  display: block;
  width: 200px;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
`;

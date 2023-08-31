import { CustomButton } from './Button.styled';

export const Button = ({ handleLoadMore }) => {
  return <CustomButton onClick={handleLoadMore}>Load more</CustomButton>;
};

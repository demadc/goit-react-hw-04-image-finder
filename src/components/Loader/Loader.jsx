import { Overlay } from 'components/Overlay/Overlay';
import { DotLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <Overlay>
      <DotLoader color="#36d7b7" />
    </Overlay>
  );
};

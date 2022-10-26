import { Vortex } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{
        display: 'block',
        margin: '0 auto',
      }}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      position="fixed"
      left="50%"
    />
  );
};

export default Loader;

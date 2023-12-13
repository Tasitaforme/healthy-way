import { InfinitySpin } from 'react-loader-spinner';

export default function Loader() {
  const style = { textAlign: 'center' };

  return (
    <div style={style}>
      <InfinitySpin color="var(--green-light)" />
    </div>
  );
}

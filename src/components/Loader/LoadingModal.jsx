import Modal from 'react-modal';
import {
  BodyTextFirst,
  HeadlineFirst,
} from '../StyledComponents/Components.styled';
import Loader from './Loader';
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    background: '#0F0F0F',
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20',
    outline: 'none',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

export default function LoadingModal({ isOpen }) {
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div style={{ padding: '10px', width: '250px' }}>
        <HeadlineFirst>Please wait a moment...</HeadlineFirst>
        <BodyTextFirst>
          <br />
          The first request may take some time... Don't worry, that's because we
          use a free deployment service for our backend.
          <br />
          <br />
          Web services on free instances automatically “fall asleep” after 15
          minutes of inactivity. When a new request comes in for the free
          service, the service is started again so that it can process the
          request. This may cause a delay in the first response.
        </BodyTextFirst>
        <Loader />
      </div>
    </Modal>
  );
}

// import LoadingModal from '../Loader/LoadingModal';
// {isLoading && <LoadingModal isOpen={isLoading} />}

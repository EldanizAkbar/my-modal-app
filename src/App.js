import React, { useState } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openFirstModal = () => {
    setIsFirstModalOpen(true);
    setIsSecondModalOpen(false);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
    setIsFirstModalOpen(false);
  };

  const closeModal = () => {
    setIsFirstModalOpen(false); 
    setIsSecondModalOpen(false);
  };

  return (
    <div className="app">
      <Button color="blue" text="Open first modal" onClick={openFirstModal} />
      <Button color="green" text="Open second modal" onClick={openSecondModal} />

      {isFirstModalOpen && (
        <Modal
          header="First Modal"
          closeButton={true}
          text="This is the content of the first modal. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra elementum velit, ac semper neque."
          actions={<button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2' onClick={closeModal}>Close</button>}
          onClose={closeModal}
        />
      )}

      {isSecondModalOpen && (
        <Modal
          header="Second Modal"
          closeButton={true}
          text="This is the content of the second modal. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisl erat. Morbi in."
          actions={<button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2' onClick={closeModal}>Close</button>}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;

import React, { useRef, useEffect } from 'react';
import './modal.scss';

const Modal = ({ header, closeButton, text, actions, onClose }) => {
  const modalRef = useRef();

  const handleClose = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <div className="modal-header">
          <h1><strong>{header}</strong></h1>
          {closeButton && <button onClick={onClose}><img src="https://th.bing.com/th/id/R.5a1db3d7cc5c519207ecffb523cdd32d?rik=TcDAysT%2bc5suYA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_127536.png&ehk=0KM42xgjApFdtjoq5%2btGYoZdslcaiRRpSQokdAR2ndE%3d&risl=&pid=ImgRaw&r=0" alt="" width={20} height={20} /></button>}
        </div>
        <div className="modal-content">{text}</div>
        <div className="modal-actions">{actions}</div>
      </div>
    </div>
  );
};

export default Modal;



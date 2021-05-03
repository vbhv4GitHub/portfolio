import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
   position: 'fixed',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   zIndex: 1000,
};

const OVERLAY_STYLES = {
   position: 'fixed',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   backgroundColor: 'rgba(0,0,0,0.5)',
   zIndex: 1000,
};

const Modal = ({ open, children, onClose }) => {
   if (!open) return null;
   return ReactDom.createPortal(
      <>
         <div style={OVERLAY_STYLES} />
         <div style={MODAL_STYLES}>
            <button
               style={{ marginLeft: '240px', display: 'block' }}
               className='btn btn-secondary'
               onClick={onClose}
            >
               Close
            </button>
            {children}
         </div>
      </>,
      document.getElementById('portal')
   );
};

export default Modal;

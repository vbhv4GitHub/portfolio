import React from 'react';
import ReactDom from 'react-dom';
import { motion } from 'framer-motion';
import { variant2 } from '../PageTransitions/PageTransitions';

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
         <motion.div
            style={MODAL_STYLES}
            initial='hidden'
            animate='visible'
            variants={variant2}
         >
            <button
               style={{ marginLeft: '263px', display: 'block' }}
               className='btn btn-red'
               onClick={onClose}
            >
               Close
            </button>
            {children}
         </motion.div>
      </>,
      document.getElementById('portal')
   );
};

export default Modal;

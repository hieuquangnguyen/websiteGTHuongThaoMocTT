import React, { ReactNode, MouseEvent, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import st from '@/components/modals/modalDetailProduct/modalProduct.module.css';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const ModalProduct: React.FC<ModalProps> = ({ onClose, children, title }) => {
  const handleCloseClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const modalContent = (
    <div className={st.modal_overlay} onClick={handleOverlayClick}>
      <div className={st.modal_wrapper}>
        <div className={st.modal}>
          <div className={st.modal_header}>
            <a href="#" onClick={handleCloseClick}>
              X
            </a>
          </div>
          {/* {title && <h1>{title}</h1>} */}
          <div className={st.modal_body}>{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root')!);
};

export default ModalProduct;

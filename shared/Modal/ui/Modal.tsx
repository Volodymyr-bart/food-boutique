import { useThemeStore } from "@/store/theme";
import Image from "next/image";
import { ReactNode, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";

type Props = {
  children: ReactNode;
  onClose?: () => void;
};

const Modal = ({ children, onClose }: Props) => {
  const { isModalOpen, closeModal } = useThemeStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      closeModal: state.closeModal,
    }),
    shallow
  );

  const handleClose = useCallback(() => {
    closeModal();
    if (onClose) {
      onClose();
    }
  }, [closeModal, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  const closeModalOnEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      closeModalOnEsc(event);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModalOnEsc]);

  const modalClass = isModalOpen
    ? "fixed z-20 inset-0 overflow-y-auto "
    : "hidden";
  const overlayClass = isModalOpen
    ? "flex items-center justify-center min-h-screen "
    : "hidden";
  return (
    <div className={modalClass}>
      <div className={overlayClass}>
        <div
          className="fixed inset-0 bg-primaryBlack opacity-20"
          onClick={(e) => handleBackdropClick(e)}
        ></div>
        <div className="relative bg-primaryWhite p-10 w-[600px] rounded-[20px]">
          {children}
          <button className="absolute top-0 right-0 m-4" onClick={handleClose}>
            <Image src="/icons/close.png" alt="close" width={28} height={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

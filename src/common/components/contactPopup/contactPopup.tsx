import s from "./contactPopup.module.css";

type ContactPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  if (!isOpen) return null;

  return (
    <div
      className={s.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={s.popup} onClick={(e) => e.stopPropagation()}>
        <button
          className={s.closeButton}
          onClick={onClose}
          aria-label="Закрыть"
        >
          &times;
        </button>
        <h2>Связаться со мной</h2>
        <p>Телефон: +7 (963) 123 45 67</p>
      </div>
    </div>
  );
}

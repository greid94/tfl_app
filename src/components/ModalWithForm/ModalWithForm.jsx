import "./ModalWithForm.css";

export default function ModalWithForm({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  submitText = "Submit",
}) {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div
        className="modal__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✖
        </button>
        <h2 className="modal__title" id="modal-title">
          {title}
        </h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit">
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
}

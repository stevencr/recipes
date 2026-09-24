import { useEffect } from 'react';

type Props = {
  items: string[];
  onClose: () => void;
};

export function ShoppingListModal({ items, onClose }: Props) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="shopping-modal" role="dialog" aria-modal="true" aria-labelledby="shopping-list-title">
      <button className="shopping-modal__backdrop" aria-label="Close shopping list" onClick={onClose} />
      <section className="shopping-modal__panel">
        <header className="shopping-modal__header">
          <div>
            <span className="shopping-modal__eyebrow">Shopping list</span>
            <h2 id="shopping-list-title">Everything for today</h2>
          </div>
          <button className="shopping-modal__close" aria-label="Close shopping list" onClick={onClose}>×</button>
        </header>
        <div className="shopping-modal__body">
          <ul className="shopping-list">
            {items.map((item) => (
              <li key={item}>
                <span className="shopping-list__check" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <footer className="shopping-modal__footer">
          <span>{items.length} items</span>
          <button className="shopping-modal__done" onClick={onClose}>Done</button>
        </footer>
      </section>
    </div>
  );
}

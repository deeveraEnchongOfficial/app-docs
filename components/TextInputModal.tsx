import React, { useState, useEffect, ChangeEvent } from 'react';
import styles from '../components/counters.module.css'; // Import CSS modules for styling

const TextInputModal = ({ isOpen, onClose, onSubmit }: { isOpen: boolean, onClose: () => void, onSubmit: (value: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    localStorage.setItem('submittedValue', e.target.value);
  };

  useEffect(() => {
    const value = localStorage.getItem('submittedValue');
    if (value) {
      setInputValue(value);
    }
  }, []);

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Text Input Modal</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter text"
        />
        <div className={styles.modalButtons}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TextInputModal;

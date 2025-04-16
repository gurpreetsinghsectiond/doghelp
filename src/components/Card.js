import React, { useState } from 'react';
import styles from '@/styles/Card.module.css';
import { FaTimes, FaPaw } from 'react-icons/fa';

const Card = ({ title, image, fact, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <div className={styles.card_image_container}>
          <img 
            src={image} 
            alt={title} 
            className={styles.card_image}
            loading="lazy" 
          />
        </div>
        <div className={styles.card_content}>
          <h3 className={styles.card_title}>{title}</h3>
          <p className={styles.card_fact}>{fact}</p>
          <button className={styles.learn_more_btn}>
            <FaPaw className={styles.paw_icon} /> Learn More
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal_overlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close_btn} onClick={closeModal}>
              <FaTimes />
            </button>
            <div className={styles.modal_content}>
              <div className={styles.modal_image_container}>
                <img 
                  src={image} 
                  alt={title} 
                  className={styles.modal_image}
                  loading="lazy" 
                />
              </div>
              <div className={styles.modal_info}>
                <h2 className={styles.modal_title}>{title}</h2>
                <p className={styles.modal_fact}><strong>Fact:</strong> {fact}</p>
                <div className={styles.modal_description}>
                  <h3>About this dog:</h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card; 
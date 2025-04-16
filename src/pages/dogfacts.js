import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { fetchRandomDogCards } from '@/utils/api';
import styles from '@/styles/DogFacts.module.css';
import { FaSync } from 'react-icons/fa';

export default function DogFacts() {
  const [dogCards, setDogCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadNewCards = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const newCards = await fetchRandomDogCards(18);
      setDogCards(newCards);
    } catch (err) {
      console.error('Error loading dog cards:', err);
      setError('Failed to load dog information. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    loadNewCards();
  }, []);

  return (
    <Layout>
      <div className={styles.dogfacts_container}>
        <div className={styles.heading_container}>
          <h1>Dog Facts</h1>
          <button 
            className={styles.refresh_btn} 
            onClick={loadNewCards}
            disabled={loading}
          >
            <FaSync className={`${styles.refresh_icon} ${loading ? styles.spinning : ''}`} />
            Refresh Facts
          </button>
        </div>

        {error && (
          <div className={styles.error_message}>
            <p>{error}</p>
          </div>
        )}

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.loading_spinner}></div>
          </div>
        ) : (
          <div className={styles.card_grid}>
            {dogCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                image={card.image}
                fact={card.fact}
                description={card.description}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
} 
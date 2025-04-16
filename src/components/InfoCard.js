import React from 'react';
import styles from '@/styles/InfoCard.module.css';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';

const InfoCard = ({ name, title, image, bio, email, linkedin, twitter }) => {
  return (
    <div className={styles.info_card}>
      <div className={styles.image_container}>
        <img 
          src={image} 
          alt={name} 
          className={styles.image} 
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.title}>{title}</p>
        <p className={styles.bio}>{bio}</p>
        
        <div className={styles.social_links}>
          {email && (
            <a href={`mailto:${email}`} className={styles.social_link} aria-label={`Email ${name}`}>
              <FaEnvelope />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.social_link} aria-label={`LinkedIn profile of ${name}`}>
              <FaLinkedin />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className={styles.social_link} aria-label={`Twitter profile of ${name}`}>
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard; 
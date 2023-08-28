import React from 'react';
import styles from './treatmentCard.module.css';

const TreatmentCard = ({ imageUrl, description, style, onClick, className }) => (
    <div style={style} className={styles.tCard}>
        {/* <div style={style} className={`${styles.tCard} ${className}`}> */}
        <div onClick={onClick}>
            <div className={styles.imgContainer}>
                <img
                    src={imageUrl}
                    alt={description}
                    className={styles.tCardImage}
                />
            </div>
            <div className={styles.tCardTitle}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    </div>
)

export default TreatmentCard;

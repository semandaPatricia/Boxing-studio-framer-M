import React from 'react';
import  Styles from '@/styles/trainerinfocard.module.css'
interface Trainer {
  name: string;
  description: string;
}

interface TrainerInfoCardProps {
  trainer: Trainer;
}

const TrainerInfoCard: React.FC<TrainerInfoCardProps> = ({ trainer }) => {
  return (
    <div className={Styles.trainerinfocard}>
      <h3 className='bold text-xl'>{trainer.name}</h3>
      <p>{trainer.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TrainerInfoCard;

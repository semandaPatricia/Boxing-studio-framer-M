import React, { useState } from 'react';
import TrainerInfoCard from './TrainerInfoCard';

interface Trainer {
  name: string;
  image: string;
  description: string;
}

interface ImageCarouselProps {
  trainers: Trainer[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ trainers }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedTrainer(trainers[index]);
  };

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-2xl font-bold mb-4">Personal Trainers</h2>
      <div className="flex flex-wrap -mx-4">
        {trainers.map((trainer, index) => (
          <div key={index} className="w-1/2 sm:w-1/3 lg:w-1/4 px-4 mb-4">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="rounded-lg w-full cursor-pointer hover:opacity-75"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
      {selectedTrainer && <TrainerInfoCard trainer={selectedTrainer} />}
    </div>
  );
};

export default ImageCarousel;

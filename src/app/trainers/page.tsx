"use client";
import React from 'react';
import ImageCarousel from './TrainerImageCarousel';

const trainersData = [
  {
    "name": "John Smith",
    "image": "/Images/trainer1.jpg",
    "description": "John is a certified personal trainer with 10 years of experience. He specializes in weight training and functional fitness."
  },
  {
    "name": "Emily Johnson",
    "image": "/Images/trainer2.jpg",
    "description": "Emily is passionate about helping her clients achieve their fitness goals through customized workout plans and nutritional guidance."
  },
  {
    "name": "Michael Davis",
    "image": "/Images/trainer3.jpg",
    "description": "Michael is an endurance athlete turned personal trainer. He enjoys coaching clients in running, cycling, and triathlon."
  },
  {
    "name": "Sarah Miller",
    "image": "/Images/trainer4.jpg",
    "description": "Sarah believes in a holistic approach to fitness, focusing on strength, flexibility, and mindfulness."
  },
  {
    "name": "David Brown",
    "image": "/Images/trainer5.jpg",
    "description": "David's training philosophy centers around functional movement patterns and injury prevention."
  },
  {
    "name": "Jessica White",
    "image": "/Images/trainer7.jpg",
    "description": "Jessica is dedicated to helping her clients improve their overall health and well-being through exercise and lifestyle changes."
  }
];

const Trainers: React.FC = () => {
  return (
    <div>
      <h2> TRAINERS</h2>
      <ImageCarousel trainers={trainersData} />
    </div>
  );
}

export default Trainers;

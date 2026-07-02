import React from 'react';
import './BreathingExercises.css';
import deepBreathingImage from '../assets/deep_breathing.png';
import nostrilBreathingImage from '../assets/nostril_breathing.png';
import boxBreathingImage from '../assets/box_breathing.png';
import fourSevenEightImage from '../assets/4-7-8_breathing.png';
import bellyBreathingImage from '../assets/belly_breathing.png';
import threePartBreathImage from '../assets/three_part_breath.png';
import clearingHeadImage from '../assets/clearing_head.png';
import rollBreathingImage from '../assets/roll_breathing.png';
import morningBreathingImage from '../assets/morning_breathing.png';
import oceanBreathingImage from '../assets/ocean_breathing.png';
import skullShiningBreathImage from '../assets/skull_shining_breath.png';
const BreathingExercise = ({ exerciseName }) => {
  console.log("Exercise Name:", exerciseName); // ✅ Debugging Log

  const exercises = {
    "Deep Breathing": {
      imageSrc: deepBreathingImage,
      steps: [
        "Sit or lie down in a comfortable position.",
        "Place one hand on your stomach and the other on your chest.",
        "Inhale deeply through your nose, filling your belly with air.",
        "Exhale slowly through your mouth.",
        "Repeat for 5 minutes."
      ]
    },
    "Alternate Nostril Breathing": {
      imageSrc: nostrilBreathingImage,
      steps: [
        "Sit in a comfortable position with a straight spine.",
        "Close your right nostril with your thumb and inhale through your left nostril.",
        "Close your left nostril with your ring finger and exhale through your right nostril.",
        "Inhale through your right nostril, then close it and exhale through your left nostril.",
        "Repeat this cycle for 5 minutes."
      ]
    },
    "Box Breathing": {
      imageSrc: boxBreathingImage, // Make sure you have this image in your assets folder
      steps: [
        "Inhale deeply through your nose for 4 seconds.",
        "Hold your breath for 4 seconds.",
        "Exhale slowly through your mouth for 4 seconds.",
        "Hold your breath again for 4 seconds.",
        "Repeat the cycle for 5 minutes."
      ]
    },
    "4-7-8 Breathing": {
      imageSrc: fourSevenEightImage, // Make sure you have this image in your assets folder
      steps: [
        "Inhale deeply through your nose for 4 seconds.",
        "Hold your breath for 7 seconds.",
        "Exhale slowly through your mouth for 8 seconds.",
        "Repeat this pattern for 5 minutes."
      ]
    },
"Belly Breathing": { 
    imageSrc: bellyBreathingImage, // Add an image for Belly Breathing
    steps: [
      "Sit or lie down in a comfortable position.",
      "Place one hand on your stomach and the other on your chest.",
      "Inhale deeply through your nose, letting your belly rise.",
      "Exhale slowly through your mouth, feeling your belly fall.",
      "Repeat for 5 minutes."
    ]
  },
  "Three Part Breath": { 
    imageSrc: threePartBreathImage,
    steps: [
      "Sit comfortably with a straight spine.",
      "Inhale deeply into your belly, then your ribs, then your chest.",
      "Exhale from your chest, then ribs, then belly.",
      "Repeat the cycle slowly for 5 minutes."
    ]
  },
  "Clearing Your Head": { 
    imageSrc: clearingHeadImage,
    steps: [
      "Find a quiet place to sit comfortably.",
      "Take a deep inhale through your nose.",
      "Exhale through your mouth, sighing out any tension.",
      "Repeat for a few minutes, focusing on clearing your mind."
    ]
  },
  "Roll Breathing": { 
    imageSrc: rollBreathingImage,
    steps: [
      "Lie down in a comfortable position.",
      "Inhale, expanding your lower lungs, then your upper lungs.",
      "Exhale slowly, feeling your breath roll out smoothly.",
      "Repeat for 5 minutes."
    ]
  },
  "Morning Breathing": { 
    imageSrc: morningBreathingImage,
    steps: [
      "Stand tall, slightly bending forward at the waist.",
      "Inhale deeply while standing up straight.",
      "Exhale as you bend forward again.",
      "Repeat this motion 5-10 times."
    ]
  },
  "Ocean Breathing": { 
    imageSrc: oceanBreathingImage,
    steps: [
      "Inhale deeply through your nose.",
      "Exhale while making a soft 'haaa' sound like ocean waves.",
      "Focus on slow, rhythmic breathing.",
      "Repeat for 5 minutes."
    ]
  },
  "Skull Shining Breath": { 
    imageSrc: skullShiningBreathImage,
    steps: [
      "Sit comfortably with a straight spine.",
      "Inhale deeply, then exhale forcefully through the nose.",
      "Continue rapid, strong exhales for 30 seconds.",
      "Return to normal breathing and repeat."
    ]
  }
};
  const exercise = exercises[exerciseName];

  if (!exercise) {
    console.log("Exercise not found!");
    return <p style={{ color: "red" }}>No exercise found.</p>;
  }

  return (
    <div className="exercise-container">
      <h2>{exerciseName}</h2>
      <img src={exercise.imageSrc} alt={exerciseName} className="exercise-image" />
      <ul className="exercise-steps">
        {exercise.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default BreathingExercise;












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

const exercises = {
  "Deep Breathing": {
    imageSrc: deepBreathingImage,
    duration: "2 minutes · 10 rounds",
    pattern: "Inhale 5s · Hold 2s · Exhale 5s",
    steps: [
      "Sit or lie down in a comfortable position.",
      "Place one hand on your stomach and the other on your chest.",
      "Inhale deeply through your nose for 5 seconds, filling your belly with air.",
      "Hold gently for 2 seconds.",
      "Exhale slowly through your mouth for 5 seconds.",
      "Repeat for 10 calm rounds, about 2 minutes total."
    ]
  },
  "Alternate Nostril Breathing": {
    imageSrc: nostrilBreathingImage,
    duration: "112 seconds · 7 rounds",
    pattern: "Inhale 4s · Switch 4s · Exhale 4s · Switch 4s",
    steps: [
      "Sit comfortably with a straight spine.",
      "Close your right nostril with your thumb and inhale through your left nostril for 4 seconds.",
      "Close your left nostril with your ring finger and exhale through your right nostril for 4 seconds.",
      "Inhale through your right nostril for 4 seconds, then close it and exhale through your left nostril for 4 seconds.",
      "Repeat this left-right cycle for 7 rounds, about 2 minutes total."
    ]
  },
  "Box Breathing": {
    imageSrc: boxBreathingImage,
    duration: "96 seconds · 6 rounds",
    pattern: "Inhale 4s · Hold 4s · Exhale 4s · Hold 4s",
    steps: [
      "Inhale deeply through your nose for 4 seconds.",
      "Hold your breath for 4 seconds.",
      "Exhale slowly through your mouth for 4 seconds.",
      "Hold your breath again for 4 seconds.",
      "Repeat the complete box cycle for 6 rounds."
    ]
  },
  "4-7-8 Breathing": {
    imageSrc: fourSevenEightImage,
    duration: "About 95 seconds · 5 rounds",
    pattern: "Inhale 4s · Hold 7s · Exhale 8s",
    steps: [
      "Inhale deeply through your nose for 4 seconds.",
      "Hold your breath for 7 seconds.",
      "Exhale slowly through your mouth for 8 seconds.",
      "Repeat this pattern for 5 rounds, letting each exhale slow your heart rate."
    ]
  },
  "Belly Breathing": {
    imageSrc: bellyBreathingImage,
    duration: "2 minutes · 10 rounds",
    pattern: "Inhale 4s · Hold 2s · Exhale 6s",
    steps: [
      "Sit or lie down in a comfortable position.",
      "Place one hand on your stomach and the other on your chest.",
      "Inhale deeply through your nose for 4 seconds, letting your belly rise.",
      "Hold softly for 2 seconds.",
      "Exhale slowly through your mouth for 6 seconds, feeling your belly fall.",
      "Repeat for 10 rounds."
    ]
  },
  "Three Part Breath": {
    imageSrc: threePartBreathImage,
    duration: "2 minutes · 8 rounds",
    pattern: "Belly 3s · Ribs 3s · Chest 3s · Exhale 6s",
    steps: [
      "Sit comfortably with a straight spine.",
      "Inhale into your belly for 3 seconds, then your ribs for 3 seconds, then your chest for 3 seconds.",
      "Exhale slowly from chest, ribs, and belly for 6 seconds.",
      "Repeat the cycle for 8 rounds."
    ]
  },
  "Clearing Your Head": {
    imageSrc: clearingHeadImage,
    duration: "90 seconds · 9 rounds",
    pattern: "Inhale 4s · Long sigh out 6s",
    steps: [
      "Find a quiet place to sit comfortably.",
      "Take a deep inhale through your nose for 4 seconds.",
      "Exhale through your mouth with a long sigh for 6 seconds, releasing tension.",
      "Repeat for 9 rounds, focusing on clearing your mind."
    ]
  },
  "Roll Breathing": {
    imageSrc: rollBreathingImage,
    duration: "112 seconds · 8 rounds",
    pattern: "Belly 4s · Chest 3s · Roll out 7s",
    steps: [
      "Lie down in a comfortable position.",
      "Inhale to expand your lower lungs for 4 seconds, then your upper lungs for 3 seconds.",
      "Exhale slowly for 7 seconds, feeling your breath roll out smoothly.",
      "Repeat for 8 rounds."
    ]
  },
  "Morning Breathing": {
    imageSrc: morningBreathingImage,
    duration: "90 seconds · 9 rounds",
    pattern: "Bend and exhale 4s · Rise and inhale 4s · Relax 2s",
    steps: [
      "Stand tall, then bend slightly forward at the waist.",
      "Exhale for 4 seconds as you bend forward.",
      "Inhale deeply for 4 seconds as you stand up straight.",
      "Relax your shoulders for 2 seconds.",
      "Repeat this motion for 9 rounds."
    ]
  },
  "Ocean Breathing": {
    imageSrc: oceanBreathingImage,
    duration: "2 minutes · 10 rounds",
    pattern: "Inhale 5s · Ocean exhale 7s",
    steps: [
      "Inhale deeply through your nose for 5 seconds.",
      "Exhale while making a soft 'haaa' sound like ocean waves for 7 seconds.",
      "Focus on slow, rhythmic breathing.",
      "Repeat for 10 rounds."
    ]
  },
  "Skull Shining Breath": {
    imageSrc: skullShiningBreathImage,
    duration: "60 seconds · 20 bursts",
    pattern: "Passive inhale 2s · Sharp exhale 1s",
    steps: [
      "Sit comfortably with a straight spine.",
      "Inhale passively, then exhale forcefully through the nose.",
      "Continue rapid, strong exhale bursts for 30 seconds.",
      "Rest and repeat once. Stop immediately if you feel dizzy."
    ]
  }
};

const BreathingExercise = ({ exerciseName }) => {
  const exercise = exercises[exerciseName];

  if (!exercise) {
    return <p className="breathing-empty">No exercise found.</p>;
  }

  return (
    <section className="exercise-container">
      <div className="exercise-media">
        <img src={exercise.imageSrc} alt={exerciseName} className="exercise-image" />
      </div>
      <div className="exercise-details">
        <span className="exercise-badge">{exercise.duration}</span>
        <h2>{exerciseName}</h2>
        <p className="exercise-pattern">{exercise.pattern}</p>
        <ol className="exercise-steps">
          {exercise.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BreathingExercise;
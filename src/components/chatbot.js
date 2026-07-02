import React, { useEffect, useMemo, useRef, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import "./chatbot.css";

const defaultMessages = [
  { text: "Hey! How can I assist you today?", sender: "bot" },
];

const Chatbot = ({ user }) => {
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const chatRef = useMemo(() => doc(db, "Users", user.uid, "appData", "chatbot"), [user.uid]);

  useEffect(() => {
    const unsubscribe = onSnapshot(chatRef, (snapshot) => {
      const savedMessages = snapshot.exists() ? snapshot.data().messages : null;
      setMessages(savedMessages && savedMessages.length ? savedMessages : defaultMessages);
    });

    return unsubscribe;
  }, [chatRef]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  const getBotResponse = (message) => {
  const text = message.toLowerCase();

  const chatbotData = [
    {
      keywords: ["hi", "hello", "hey", "good morning", "good evening"],
      replies: [
        "Hello! 😊 How are you feeling today?",
        "Hi there! I'm here to help with your health concerns.",
        "Hey! Tell me what's bothering you today."
      ]
    },

    {
      keywords: ["how are you"],
      replies: [
        "I'm doing great! Thanks for asking. 😊 How can I help you today?"
      ]
    },

    {
      keywords: ["fever", "temperature", "feverish", "high temperature"],
      replies: [
        "A fever usually indicates your body is fighting an infection. Drink plenty of fluids, rest well, and monitor your temperature. If it becomes very high or lasts more than 2 days, please consult a doctor."
      ]
    },

    {
      keywords: ["headache", "migraine", "head hurts", "pain in my head"],
      replies: [
        "Headaches can happen because of stress, dehydration, lack of sleep, or illness. Try drinking water, resting, and avoiding bright screens for a while."
      ]
    },

    {
      keywords: ["cold", "runny nose", "blocked nose", "sneezing"],
      replies: [
        "It sounds like you may have a common cold. Rest well, stay hydrated, and drink warm fluids. If symptoms worsen or continue for several days, consult a doctor."
      ]
    },

    {
      keywords: ["cough", "dry cough", "wet cough"],
      replies: [
        "Stay hydrated and avoid smoking or dusty environments. If your cough lasts more than a week or you experience difficulty breathing, seek medical advice."
      ]
    },

    {
      keywords: ["vomit", "vomiting", "throwing up", "threw up", "nausea"],
      replies: [
        "Try sipping water slowly and avoid heavy meals for a while. If vomiting continues or you feel dehydrated, it's best to consult a doctor."
      ]
    },

    {
      keywords: ["diarrhea", "loose motion", "loose motions"],
      replies: [
        "Drink plenty of fluids and oral rehydration solution (ORS) to prevent dehydration. If symptoms are severe or continue for more than two days, seek medical care."
      ]
    },

    {
      keywords: ["stomach pain", "stomach ache", "abdominal pain", "abdomen pain"],
      replies: [
        "Avoid spicy or oily food, drink enough water, and rest. If the pain becomes severe or persistent, consult a healthcare professional."
      ]
    },

    {
      keywords: ["sore throat", "throat pain"],
      replies: [
        "Warm salt-water gargles and warm drinks may help soothe a sore throat. If symptoms worsen or you develop a high fever, consult a doctor."
      ]
    },

    {
      keywords: ["back pain", "backache"],
      replies: [
        "Gentle stretching, maintaining good posture, and applying a warm compress may help. If the pain is severe or lasts for several days, seek medical advice."
      ]
    },

    {
      keywords: ["fatigue", "tired", "weak", "exhausted"],
      replies: [
        "Feeling tired can happen because of stress, lack of sleep, dehydration, or illness. Make sure you're getting enough rest, eating balanced meals, and staying hydrated."
      ]
    },

    {
      keywords: ["stress", "stressed", "work pressure", "office pressure", "burnout", "overworked"],
      replies: [
        "I'm sorry you're feeling stressed. Taking short breaks, deep breathing, and getting enough sleep can really help. You can also explore the Breathing Exercises section in this app."
      ]
    },

    {
      keywords: ["anxiety", "anxious", "panic", "panic attack", "worried"],
      replies: [
        "Anxiety can feel overwhelming. Try taking slow, deep breaths and focus on calming yourself. If these feelings become frequent or intense, consider talking to a mental health professional."
      ]
    },

    {
      keywords: ["sad", "depressed", "lonely", "upset"],
      replies: [
        "I'm sorry you're feeling this way. Talking to someone you trust and taking care of yourself can help. If these feelings continue for a long time, consider reaching out to a mental health professional."
      ]
    },

    {
      keywords: ["sleep", "can't sleep", "insomnia", "not sleeping"],
      replies: [
        "Try avoiding screens before bedtime, reduce caffeine intake in the evening, and maintain a regular sleep schedule."
      ]
    },

    {
      keywords: ["exercise", "gym", "workout", "fitness"],
      replies: [
        "That's great! Regular exercise helps improve both physical and mental health. Just remember to stay hydrated and avoid overtraining."
      ]
    },

    {
      keywords: ["diet", "food", "nutrition", "healthy eating"],
      replies: [
        "A balanced diet with fruits, vegetables, protein, and whole grains supports good health. Staying hydrated is equally important."
      ]
    },

    {
      keywords: ["thank you", "thanks"],
      replies: [
        "You're welcome! 😊 Take care of yourself, and feel free to ask if you need anything else."
      ]
    },

    {
      keywords: ["bye", "goodbye", "see you"],
      replies: [
        "Take care! 😊 Wishing you good health. Have a wonderful day!"
      ]
    }
  ];

  for (const item of chatbotData) {
    if (item.keywords.some(keyword => text.includes(keyword))) {
      const reply =
        item.replies[Math.floor(Math.random() * item.replies.length)];
      return reply;
    }
  }

  return "I'm sorry, I couldn't fully understand your concern. Could you describe your symptoms in a little more detail? For example, you can tell me when the symptoms started, how severe they are, or any other symptoms you're experiencing.";
};

  const saveMessages = async (nextMessages) => {
    setMessages(nextMessages);
    await setDoc(chatRef, { messages: nextMessages }, { merge: true });
  };

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: capitalizeFirstLetter(input.trim()), sender: "user" };
    const botReply = { text: getBotResponse(input), sender: "bot" };
    const nextMessages = [...messages, userMessage, botReply];

    setInput("");
    await saveMessages(nextMessages);
  };

  const handleClearChat = async () => {
    await saveMessages(defaultMessages);
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={`${msg.sender}-${index}`} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} type="button">Send</button>
        <button onClick={handleClearChat} type="button">Clear</button>
      </div>
    </div>
  );
};

export default Chatbot;

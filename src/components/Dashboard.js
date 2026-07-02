import { useEffect, useMemo, useRef, useState } from "react";
import { signOut, updatePassword } from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import Chatbot from "./chatbot";
import HealthInfoDetails from "./HealthInfoDetails";
import BreathingExercise from "./BreathingExercise";
import { auth, db } from "./firebase";
import "./Dashboard.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const healthCategories = [
  ["Nutrients", "Nutrients"],
  ["Vitamins", "Vitamins & Minerals"],
  ["Diseases", "Common Diseases & Prevention"],
  ["Lifestyle", "Healthy Lifestyle Tips"],
  ["MentalHealth", "Mental Health & Well-being"],
  ["DietPlans", "Diet Plans & Nutrition Guides"],
  ["FirstAid", "First Aid & Emergency Care"],
  ["MedicalTerms", "Medical Terms & Explanations"],
];
const exercises = [
  "Morning Breathing",
  "Belly Breathing",
  "Deep Breathing",
  "Box Breathing",
  "4-7-8 Breathing",
  "Alternate Nostril Breathing",
  "Three Part Breath",
  "Clearing Your Head",
  "Roll Breathing",
  "Ocean Breathing",
  "Skull Shining Breath",
];
const exercisePlans = {
  "Morning Breathing": {
    totalSeconds: 90,
    pattern: [
      { label: "Bend forward and exhale", seconds: 4 },
      { label: "Rise slowly and inhale", seconds: 4 },
      { label: "Relax shoulders", seconds: 2 },
    ],
    cue: "A gentle wake-up rhythm with movement and breath.",
  },
  "Belly Breathing": {
    totalSeconds: 120,
    pattern: [
      { label: "Inhale into belly", seconds: 4 },
      { label: "Hold softly", seconds: 2 },
      { label: "Exhale and let belly fall", seconds: 6 },
    ],
    cue: "Best for grounding your body and slowing stress.",
  },
  "Deep Breathing": {
    totalSeconds: 120,
    pattern: [
      { label: "Inhale deeply", seconds: 5 },
      { label: "Hold", seconds: 2 },
      { label: "Exhale slowly", seconds: 5 },
    ],
    cue: "A balanced calm-down practice.",
  },
  "Box Breathing": {
    totalSeconds: 96,
    pattern: [
      { label: "Inhale", seconds: 4 },
      { label: "Hold", seconds: 4 },
      { label: "Exhale", seconds: 4 },
      { label: "Hold", seconds: 4 },
    ],
    cue: "Used for focus and steady nerves.",
  },
  "4-7-8 Breathing": {
    totalSeconds: 95,
    pattern: [
      { label: "Inhale", seconds: 4 },
      { label: "Hold", seconds: 7 },
      { label: "Exhale", seconds: 8 },
    ],
    cue: "A slower rhythm for winding down.",
  },
  "Alternate Nostril Breathing": {
    totalSeconds: 120,
    pattern: [
      { label: "Close right, inhale left", seconds: 4 },
      { label: "Switch, exhale right", seconds: 4 },
      { label: "Inhale right", seconds: 4 },
      { label: "Switch, exhale left", seconds: 4 },
    ],
    cue: "A guided left-right breathing cycle.",
  },
  "Three Part Breath": {
    totalSeconds: 120,
    pattern: [
      { label: "Fill belly", seconds: 3 },
      { label: "Fill ribs", seconds: 3 },
      { label: "Fill chest", seconds: 3 },
      { label: "Exhale chest, ribs, belly", seconds: 6 },
    ],
    cue: "Build awareness through three levels of breath.",
  },
  "Clearing Your Head": {
    totalSeconds: 90,
    pattern: [
      { label: "Inhale through nose", seconds: 4 },
      { label: "Long sigh out", seconds: 6 },
    ],
    cue: "Simple reset for mental clutter.",
  },
  "Roll Breathing": {
    totalSeconds: 120,
    pattern: [
      { label: "Belly expands", seconds: 4 },
      { label: "Chest expands", seconds: 3 },
      { label: "Roll breath out", seconds: 7 },
    ],
    cue: "A wave-like breath from lower lungs to upper lungs.",
  },
  "Ocean Breathing": {
    totalSeconds: 120,
    pattern: [
      { label: "Inhale through nose", seconds: 5 },
      { label: "Exhale with ocean sound", seconds: 7 },
    ],
    cue: "Soft wave-like breathing for calm focus.",
  },
  "Skull Shining Breath": {
    totalSeconds: 60,
    pattern: [
      { label: "Passive inhale", seconds: 2 },
      { label: "Sharp nose exhale", seconds: 1 },
    ],
    cue: "Short energizing bursts. Stop if dizzy.",
  },
};
const dailyTips = [
  "Take a 5 minute walk after meals to support digestion and blood sugar balance.",
  "Add one colorful fruit or vegetable to your next meal.",
  "Pause for 60 seconds and relax your jaw, shoulders, and hands.",
  "Keep water nearby, but also add electrolytes or fruit if plain water feels boring.",
  "Stretch your neck and upper back after long screen time.",
  "Try to get morning light; it helps your body clock and sleep rhythm.",
  "Prepare tomorrow's medicine or water bottle tonight so your morning starts easier.",
];
const moodScores = {
  Good: 90,
  Okay: 70,
  Stressed: 50,
  Tired: 55,
  Unwell: 40,
};
const weeklySuggestions = [
  "Pick one breathing exercise as your anchor for the week and repeat it at the same time daily.",
  "Log mood even on busy days; a 10 second note is enough to keep your pattern visible.",
  "Keep medication reminders specific, then mark each dose so your dashboard can show progress.",
  "Try a light stretch or short walk after screen-heavy study sessions.",
  "Review your last 7 mood logs before Sunday night and plan one small support habit.",
  "Pair your morning routine with water, sunlight, and one calm breathing round.",
  "Use the chatbot for quick first-pass guidance, then contact a professional for urgent symptoms.",
];
const hospitals = [
  { name: "Apollo Hospitals", address: "Plot No. 13, Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai, Maharashtra 400614", contact: "+91 22 6280 6280" },
  { name: "Ashoka Medicover Hospital", address: "Nasik", contact: "+91 253 660 6600" },
  { name: "Bharati Vidyapeeth Medicover Hospital", address: "Navi Mumbai", contact: "+91 22 3919 9222" },
  { name: "Bombay Hospital & Medical Research Centre", address: "12, Marine Lines, Mumbai, Maharashtra 400020", contact: "+91 22 2206 7676" },
  { name: "DY Patil Hospital and Research Centre", address: "Sector 5, Nerul, Navi Mumbai, Maharashtra 400706", contact: "+91 22 3096 9999" },
  { name: "Fortis Hiranandani Hospital", address: "Mini Sea Shore Road, Sector 10A, Vashi, Navi Mumbai, Maharashtra 400703", contact: "+91 22 3919 9222" },
  { name: "Kokilaben Dhirubhai Ambani Hospital", address: "Rao Saheb Achutrao Patwardhan Marg, Four Bungalows, Andheri West, Mumbai, Maharashtra 400053", contact: "+91 22 4269 6969" },
  { name: "Lilavati Hospital and Research Centre", address: "A-791, Bandra Reclamation, Bandra West, Mumbai, Maharashtra 400050", contact: "+91 22 2675 1000" },
  { name: "Medicover Hospital", address: "Aurangabad", contact: "+91 240 660 6600" },
  { name: "Medicover Hospitals", address: "Sangamner", contact: "+91 2425 660 660" },
  { name: "Medicover Hospitals KLE", address: "Pimpri Chinchwad, Pune", contact: "+91 20 660 66000" },
  { name: "MGM New Bombay Hospital", address: "Sector 3, Vashi, Navi Mumbai, Maharashtra 400703", contact: "+91 18002665456" },
  { name: "P.D. Hinduja Hospital & Medical Research Centre", address: "Veer Savarkar Marg, Mahim, Mumbai, Maharashtra 400016", contact: "+91 22 2445 2575" },
  { name: "Tata Memorial Hospital", address: "Dr E Borges Road, Parel, Mumbai, Maharashtra 400012", contact: "+91 22 2417 7000" },
].sort((a, b) => a.name.localeCompare(b.name));

const getDateKey = (date = new Date()) => {
  const parsedDate = date instanceof Date ? date : new Date(date);
  return Number.isNaN(parsedDate.getTime()) ? "" : parsedDate.toISOString().slice(0, 10);
};

const getEntryDateKey = (entry) => {
  if (entry?.dateKey) return entry.dateKey;
  return getDateKey(entry?.date);
};

const normalizeReminderTime = (value = "") => {
  const timeText = String(value).trim();
  const match = timeText.match(/^(\d{1,2}):(\d{2})(?:\s?(AM|PM))?$/i);
  if (!match) return timeText;

  let hour = Number(match[1]);
  const minute = match[2];
  const meridiem = match[3]?.toUpperCase();

  if (meridiem === "PM" && hour < 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;

  return `${String(hour).padStart(2, "0")}:${minute}`;
};

const formatReminderTime = (value = "") => {
  const normalized = normalizeReminderTime(value);
  const [hourText, minute = "00"] = normalized.split(":");
  const hour = Number(hourText);
  if (Number.isNaN(hour)) return value;

  const displayHour = hour % 12 || 12;
  const meridiem = hour >= 12 ? "PM" : "AM";
  return `${displayHour}:${minute} ${meridiem}`;
};

const getLastSevenDateKeys = () =>
  Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    return getDateKey(date);
  });

const getStreak = (entries) => {
  const entryDates = new Set(entries.map(getEntryDateKey).filter(Boolean));
  let streak = 0;
  const cursor = new Date();

  while (entryDates.has(getDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
};

const Dashboard = ({ user }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const [currentExercise, setCurrentExercise] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [reminders, setReminders] = useState([]);
  const [medicationLogs, setMedicationLogs] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [exerciseLog, setExerciseLog] = useState([]);
  const [medication, setMedication] = useState("");
  const [time, setTime] = useState("");
  const [days, setDays] = useState([]);
  const [mood, setMood] = useState("Good");
  const [journalNote, setJournalNote] = useState("");
  const [hospitalSearch, setHospitalSearch] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    bloodGroup: "",
    allergies: "",
    conditions: "",
    emergencyContact: "",
  });
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [exerciseSeconds, setExerciseSeconds] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [dueReminder, setDueReminder] = useState(null);
  const notifiedReminderKeys = useRef(new Set());
  const completedSessionRef = useRef(null);

  const userRef = useMemo(() => doc(db, "Users", user.uid), [user.uid]);
  const remindersRef = useMemo(() => doc(db, "Users", user.uid, "appData", "reminders"), [user.uid]);
  const medicationLogsRef = useMemo(() => doc(db, "Users", user.uid, "appData", "medicationLogs"), [user.uid]);
  const journalRef = useMemo(() => doc(db, "Users", user.uid, "appData", "journal"), [user.uid]);
  const exerciseLogRef = useMemo(() => doc(db, "Users", user.uid, "appData", "exerciseLog"), [user.uid]);

  useEffect(() => {
    const unsubscribeProfile = onSnapshot(userRef, (snapshot) => {
      if (snapshot.exists()) {
        setProfile((currentProfile) => ({
          ...currentProfile,
          ...snapshot.data(),
        }));
      }
    });
    const unsubscribeReminders = onSnapshot(remindersRef, (snapshot) => {
      setReminders(snapshot.exists() ? snapshot.data().items || [] : []);
    });
    const unsubscribeMedicationLogs = onSnapshot(medicationLogsRef, (snapshot) => {
      setMedicationLogs(snapshot.exists() ? snapshot.data().items || [] : []);
    });
    const unsubscribeJournal = onSnapshot(journalRef, (snapshot) => {
      setJournalEntries(snapshot.exists() ? snapshot.data().entries || [] : []);
    });
    const unsubscribeExerciseLog = onSnapshot(exerciseLogRef, (snapshot) => {
      setExerciseLog(snapshot.exists() ? snapshot.data().items || [] : []);
    });

    return () => {
      unsubscribeProfile();
      unsubscribeReminders();
      unsubscribeMedicationLogs();
      unsubscribeJournal();
      unsubscribeExerciseLog();
    };
  }, [exerciseLogRef, journalRef, medicationLogsRef, remindersRef, userRef]);

  useEffect(() => {
    if (!timerRunning || activeSection !== "Exercise Session") return;

    const timer = setInterval(() => {
      setExerciseSeconds((seconds) => {
        if (seconds <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return seconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeSection, timerRunning]);

  useEffect(() => {
    if (!currentExercise || exerciseSeconds !== 0 || completedSessionRef.current === currentExercise) return;

    completedSessionRef.current = currentExercise;
    const plan = exercisePlans[currentExercise] || { totalSeconds: 60 };
    const nextLog = [
      {
        id: Date.now(),
        exercise: currentExercise,
        seconds: plan.totalSeconds,
        points: Math.max(10, Math.round(plan.totalSeconds / 6)),
        dateKey: getDateKey(),
        date: new Date().toLocaleString(),
      },
      ...exerciseLog,
    ];

    setExerciseLog(nextLog);
    setDoc(exerciseLogRef, { items: nextLog }, { merge: true });
  }, [currentExercise, exerciseLog, exerciseLogRef, exerciseSeconds]);

  useEffect(() => {
    if (!("Notification" in window)) return;
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const checkMedicationReminders = () => {
      const now = new Date();
      const currentDay = daysOfWeek[now.getDay()];
      const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      const todayKey = getDateKey(now);

      reminders.forEach((reminder) => {
        const reminderTime = normalizeReminderTime(reminder.time);
        const daysForReminder = Array.isArray(reminder.days) ? reminder.days : String(reminder.days || "").split(", ");
        const notificationKey = `${reminder.id}-${todayKey}-${currentTime}`;

        if (reminderTime === currentTime && daysForReminder.includes(currentDay) && !notifiedReminderKeys.current.has(notificationKey)) {
          notifiedReminderKeys.current.add(notificationKey);
          setDueReminder(reminder);

          if ("Notification" in window && Notification.permission === "granted") {
            new Notification("Medication Reminder", {
              body: `Time to take ${reminder.medication}.`,
            });
          }
        }
      });
    };

    checkMedicationReminders();
    const interval = setInterval(checkMedicationReminders, 30000);
    return () => clearInterval(interval);
  }, [reminders]);

  const filteredHospitals = hospitals.filter((hospital) =>
    `${hospital.name} ${hospital.address}`.toLowerCase().includes(hospitalSearch.toLowerCase())
  );
  const displayName = profile.firstName || user.displayName?.split(" ")[0] || user.email?.split("@")[0] || "there";
  const todayKey = getDateKey();
  const tipIndex = Math.floor(new Date().setHours(0, 0, 0, 0) / 86400000) % dailyTips.length;
  const weeklySuggestion = weeklySuggestions[new Date().getDay()];
  const todaysMedicationLogs = medicationLogs.filter((log) => log.dateKey === todayKey);
  const todaysTaken = todaysMedicationLogs.filter((log) => log.status === "taken").length;
  const todaysSkipped = todaysMedicationLogs.filter((log) => log.status === "skipped").length;
  const todaysReminderCount = reminders.filter((reminder) => {
    const reminderDays = Array.isArray(reminder.days) ? reminder.days : String(reminder.days || "").split(", ");
    return reminderDays.includes(daysOfWeek[new Date().getDay()]);
  }).length;
  const medicationStatus =
    todaysReminderCount === 0
      ? "No medicines scheduled today"
      : todaysTaken >= todaysReminderCount
        ? "All medicines done today"
        : todaysTaken > 0
          ? "Medicine half done today"
          : "Medicines pending today";
  const todaysExercises = exerciseLog.filter((entry) => entry.dateKey === todayKey);
  const todaysExerciseNames = [...new Set(todaysExercises.map((entry) => entry.exercise))];
  const totalPoints = [
    ...exerciseLog.map((entry) => entry.points || 10),
    ...medicationLogs.filter((entry) => entry.status === "taken").map(() => 8),
    ...journalEntries.map(() => 6),
  ].reduce((sum, points) => sum + points, 0);
  const currentStreak = getStreak(journalEntries);
  const lastSevenKeys = getLastSevenDateKeys();
  const moodTrend = lastSevenKeys.map((dateKey) => {
    const entry = journalEntries.find((journalEntry) => getEntryDateKey(journalEntry) === dateKey);
    return {
      label: new Date(`${dateKey}T00:00:00`).toLocaleDateString(undefined, { weekday: "short" }),
      mood: entry?.mood || "None",
      score: entry ? moodScores[entry.mood] || 60 : 18,
    };
  });
  const wellnessScore = Math.min(
    100,
    Math.round(
      38 +
        Math.min(todaysTaken, todaysReminderCount || 1) * 12 +
        Math.min(todaysExercises.length, 3) * 10 +
        (journalEntries[0]?.dateKey === todayKey ? 16 : 0)
    )
  );

  const toggleDay = (day) => {
    setDays((currentDays) =>
      currentDays.includes(day)
        ? currentDays.filter((selectedDay) => selectedDay !== day)
        : [...currentDays, day]
    );
  };

  const saveReminders = async (nextReminders) => {
    setReminders(nextReminders);
    await setDoc(remindersRef, { items: nextReminders }, { merge: true });
  };

  const saveMedicationLogs = async (nextLogs) => {
    setMedicationLogs(nextLogs);
    await setDoc(medicationLogsRef, { items: nextLogs }, { merge: true });
  };

  const handleAddReminder = async () => {
    if (!medication || !time || days.length === 0) {
      alert("Please fill out all fields.");
      return;
    }

    const newReminder = {
      id: Date.now(),
      medication,
      time,
      days,
      createdAt: new Date().toISOString(),
    };

    await saveReminders([...reminders, newReminder]);
    setMedication("");
    setTime("");
    setDays([]);
  };

  const handleDeleteReminder = async (id) => {
    await saveReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const handleAddJournalEntry = async () => {
    if (!journalNote.trim()) {
      alert("Please write a short note first.");
      return;
    }

    const nextEntries = [
      {
        id: Date.now(),
        mood,
        note: journalNote.trim(),
        dateKey: getDateKey(),
        date: new Date().toLocaleString(),
      },
      ...journalEntries,
    ];

    setJournalEntries(nextEntries);
    await setDoc(journalRef, { entries: nextEntries }, { merge: true });
    setMood("Good");
    setJournalNote("");
  };

  const handleStartExercise = (exercise) => {
    const plan = exercisePlans[exercise] || { totalSeconds: 60 };
    setCurrentExercise(exercise);
    setExerciseSeconds(plan.totalSeconds);
    completedSessionRef.current = null;
    setTimerRunning(true);
    setActiveSection("Exercise Session");
  };

  const handleLogMedication = async (reminder, status) => {
    const nextLogs = [
      {
        id: Date.now(),
        reminderId: reminder.id,
        medication: reminder.medication,
        scheduledTime: reminder.time,
        status,
        dateKey: getDateKey(),
        date: new Date().toLocaleString(),
      },
      ...medicationLogs.filter((log) => !(log.reminderId === reminder.id && log.dateKey === getDateKey())),
    ];

    await saveMedicationLogs(nextLogs);
    if (dueReminder?.id === reminder.id) setDueReminder(null);
  };

  const handleSaveProfile = async () => {
    await setDoc(userRef, { ...profile, email: user.email }, { merge: true });
    alert("Profile saved.");
  };

  const handleChangePassword = async () => {
    if (newPassword.length < 6) {
      alert("New password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      await updatePassword(user, newPassword);
      setNewPassword("");
      setConfirmNewPassword("");
      alert("Password updated.");
    } catch (error) {
      alert("Please log in again before changing your password. Firebase requires a recent login for this.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return (
          <div className="feature-section home-dashboard">
            <section className="home-hero-panel">
              <div>
                <span className="eyebrow">Today in Healthify+</span>
                <h1>Welcome back, {displayName}</h1>
                <p>Your reminders, journal, exercise sessions, and chat history are saved privately to your account.</p>
              </div>
              <div className="wellness-score">
                <span>Wellness Score</span>
                <strong>{wellnessScore}</strong>
                <small>Based on today's logs</small>
              </div>
            </section>

            {dueReminder && (
              <div className="due-reminder-banner">
                <div>
                  <strong>{dueReminder.medication} is due now</strong>
                  <span>Browser notifications work when Healthify+ is open and notification permission is allowed.</span>
                </div>
                <button className="start-button" onClick={() => handleLogMedication(dueReminder, "taken")} type="button">Mark Taken</button>
              </div>
            )}

            <div className="stats-grid">
              <div className="stat-card" onClick={() => setActiveSection("Health Journal")}>
                <span>Current Streak</span>
                <strong>{currentStreak} day{currentStreak === 1 ? "" : "s"}</strong>
                <p>Keep logging your daily mood.</p>
              </div>
              <div className="stat-card" onClick={() => setActiveSection("Medication Reminders")}>
                <span>Medication</span>
                <strong>{todaysTaken}/{todaysReminderCount}</strong>
                <p>{medicationStatus}</p>
              </div>
              <div className="stat-card" onClick={() => setActiveSection("Breathing Exercises")}>
                <span>Exercises Today</span>
                <strong>{todaysExercises.length}</strong>
                <p>{todaysExerciseNames.length ? todaysExerciseNames.join(", ") : "Start a guided session."}</p>
              </div>
              <div className="stat-card">
                <span>Health Points</span>
                <strong>{totalPoints}</strong>
                <p>Earn points from journals, medicine, and breathing sessions.</p>
              </div>
            </div>

            <div className="home-insights-grid">
              <section className="insight-panel">
                <h2>Mood Trend</h2>
                <div className="mood-chart">
                  {moodTrend.map((day) => (
                    <div className="mood-bar" key={day.label}>
                      <div className="bar-track">
                        <span style={{ height: `${day.score}%` }} />
                      </div>
                      <small>{day.label}</small>
                      <em>{day.mood}</em>
                    </div>
                  ))}
                </div>
              </section>

              <section className="insight-panel">
                <h2>Daily Tip</h2>
                <p>{dailyTips[tipIndex]}</p>
                <h3>This Week</h3>
                <p>{weeklySuggestion}</p>
              </section>

              <section className="insight-panel activity-panel">
                <h2>Today's Activity</h2>
                <ul>
                  <li>{journalEntries[0]?.dateKey === todayKey ? `Mood logged: ${journalEntries[0].mood}` : "Mood not logged yet"}</li>
                  <li>{todaysTaken} medicine intake{todaysTaken === 1 ? "" : "s"} done</li>
                  <li>{todaysSkipped} skipped dose{todaysSkipped === 1 ? "" : "s"} tracked</li>
                  <li>{todaysExercises.length ? todaysExerciseNames.join(", ") : "No exercise completed yet"}</li>
                </ul>
              </section>
            </div>
          </div>
        );

      case "Medication Reminders":
        return (
          <div className="reminder-section">
            <h1>Manage Your Medication Reminders</h1>
            <div className="reminder-form">
              <label>Medication Name:</label>
              <input type="text" value={medication} onChange={(e) => setMedication(e.target.value)} placeholder="Enter medication name" />

              <label>Time:</label>
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

              <div className="days-of-week">
                <label>Days of the Week:</label>
                {daysOfWeek.map((day) => (
                  <button key={day} className={days.includes(day) ? "selected" : ""} onClick={() => toggleDay(day)} type="button">
                    {day}
                  </button>
                ))}
              </div>

              <button className="add-reminder-btn" onClick={handleAddReminder} type="button">Add Reminder</button>
            </div>

            <h2>Saved Reminders</h2>
            <p className="helper-note">Notifications pop up when this app is open and your browser allows notification permission.</p>
            <ul className="reminder-list">
              {reminders.map((reminder) => (
                <li key={reminder.id}>
                  <div>
                    <strong>{reminder.medication}</strong>
                    <span>{formatReminderTime(reminder.time)} on {Array.isArray(reminder.days) ? reminder.days.join(", ") : reminder.days}</span>
                  </div>
                  <div className="reminder-actions">
                    <button className="start-button" onClick={() => handleLogMedication(reminder, "taken")} type="button">Taken</button>
                    <button className="copyBtn" onClick={() => handleLogMedication(reminder, "skipped")} type="button">Skipped</button>
                    <button className="delete-btn" onClick={() => handleDeleteReminder(reminder.id)} type="button">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
            <h2>Today's Intake History</h2>
            <div className="history-list">
              {todaysMedicationLogs.length ? todaysMedicationLogs.map((log) => (
                <div className={`history-pill ${log.status}`} key={log.id}>
                  <strong>{log.medication}</strong>
                  <span>{log.status === "taken" ? "Taken" : "Skipped"} at {new Date(log.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                </div>
              )) : <p>No intake logged today.</p>}
            </div>
          </div>
        );

      case "Health Journal":
        return (
          <div className="journal-section">
            <h1>Daily Health Journal</h1>
            <p>Save how you feel, symptoms, sleep notes, or anything you want to remember for later.</p>
            <div className="reminder-form">
              <label>Mood:</label>
              <select value={mood} onChange={(e) => setMood(e.target.value)}>
                <option>Good</option>
                <option>Okay</option>
                <option>Stressed</option>
                <option>Tired</option>
                <option>Unwell</option>
              </select>
              <label>Note:</label>
              <textarea value={journalNote} onChange={(e) => setJournalNote(e.target.value)} placeholder="Example: headache in evening, slept 6 hours..." rows="4" />
              <button className="add-reminder-btn" onClick={handleAddJournalEntry} type="button">Save Check-in</button>
            </div>
            <div className="journal-list">
              {journalEntries.map((entry) => (
                <div className="widget" key={entry.id}>
                  <h2>{entry.mood}</h2>
                  <p>{entry.note}</p>
                  <small>{entry.date}</small>
                </div>
              ))}
            </div>
          </div>
        );

      case "Breathing Exercises":
        return (
          <div className="breathing-exercises-section">
            <h1>Breathing Exercises for Stress Relief</h1>
            <p>Select an exercise to begin your guided breathing session. Each timer follows that technique's real rhythm.</p>
            <div className="exercise-summary">
              <div>
                <span>Completed Sessions</span>
                <strong>{exerciseLog.length}</strong>
              </div>
              <div>
                <span>Today</span>
                <strong>{todaysExercises.length}</strong>
              </div>
              <div>
                <span>Favorite Today</span>
                <strong>{todaysExerciseNames[0] || "None yet"}</strong>
              </div>
            </div>
            <div className="exercise-cards">
              {exercises.map((exercise) => (
                <div className="exercise-card" key={exercise}>
                  <h2>{exercise}</h2>
                  <p>{exercisePlans[exercise].cue}</p>
                  <span>{Math.round(exercisePlans[exercise].totalSeconds / 60)} min session</span>
                  <button className="start-button" onClick={() => handleStartExercise(exercise)} type="button">Start Exercise</button>
                </div>
              ))}
            </div>
          </div>
        );

      case "Exercise Session":
        return (
          <div className="exercise-session">
            <h1>{currentExercise} Session</h1>
            <p>Guided session to help manage stress and calm your mind.</p>
            <BreathingGuide
              exerciseName={currentExercise}
              plan={exercisePlans[currentExercise]}
              seconds={exerciseSeconds}
              timerRunning={timerRunning}
              onStart={() => setTimerRunning(true)}
              onPause={() => setTimerRunning(false)}
              onReset={() => {
                setExerciseSeconds((exercisePlans[currentExercise] || { totalSeconds: 60 }).totalSeconds);
                completedSessionRef.current = null;
                setTimerRunning(false);
              }}
            />
            <BreathingExercise exerciseName={currentExercise} />
            <button className="end-session-btn" onClick={() => setActiveSection("Breathing Exercises")} type="button">End Session</button>
          </div>
        );

      case "Health Info":
        return selectedCategory ? (
          <HealthInfoDetails category={selectedCategory} onBack={() => setSelectedCategory(null)} />
        ) : (
          <div className="Health-info">
            <h1>Health Information</h1>
            <p>Select a category to learn more:</p>
            <div className="Health-info-categories">
              {healthCategories.map(([key, label]) => (
                <button className="category-btn" key={key} onClick={() => setSelectedCategory(key)} type="button">{label}</button>
              ))}
            </div>
          </div>
        );

      case "Emergency Contacts":
        return (
          <div className="Emergency-Contacts-section">
            <h1>Emergency Contact</h1>
            <p>Find emergency contact numbers for hospitals near you.</p>
            <input type="text" id="searchHospital" placeholder="Search hospital..." value={hospitalSearch} onChange={(e) => setHospitalSearch(e.target.value)} />
            <ul id="hospitalList">
              {filteredHospitals.map((hospital) => (
                <li key={hospital.name} className="hospital-item">
                  <div className="hospital-details">
                    <strong className="hospital-name">{hospital.name}</strong>
                    <span className="hospital-address">{hospital.address}</span>
                  </div>
                  <div className="contact-info">
                    <span className="phone-number">{hospital.contact}</span>
                    <button className="copyBtn" onClick={() => navigator.clipboard.writeText(hospital.contact)} type="button">Copy</button>
                  </div>
                </li>
              ))}
            </ul>
            {filteredHospitals.length === 0 && <p style={{ color: "red" }}>No hospital found.</p>}
          </div>
        );

      case "Chatbot":
        return (
          <div className="chatbot-page">
            <h1>Medical Assistant Bot</h1>
            <Chatbot user={user} />
          </div>
        );

      default:
        return <h1>Welcome to Your Healthify+ Dashboard</h1>;
    }
  };

  return (
    <div className="dashboard">
      <nav className="sidebar">
        <ul>
          <li onClick={() => setActiveSection("Home")}>Home</li>
          <li onClick={() => setActiveSection("Medication Reminders")}>Medication Reminders</li>
          <li onClick={() => setActiveSection("Health Journal")}>Health Journal</li>
          <li onClick={() => setActiveSection("Breathing Exercises")}>Breathing Exercises</li>
          <li onClick={() => setActiveSection("Health Info")}>Health Info</li>
          <li onClick={() => setActiveSection("Emergency Contacts")}>Emergency Contacts</li>
          <li onClick={() => setActiveSection("Chatbot")}>Chatbot</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </nav>
      <div className="dashboard-content-wrapper">
        <header className="dashboard-topbar">
          <div className="topbar-name">
            <span>Signed in as</span>
            <strong>{displayName}</strong>
          </div>
          <button className="profile-button" onClick={() => setProfileOpen(true)} type="button">
            {(profile.firstName || user.email || "U").charAt(0).toUpperCase()}
          </button>
        </header>
        {profileOpen && (
          <div className="profile-overlay">
            <div className="profile-panel">
              <div className="profile-panel-header">
                <div className="profile-title-block">
                  <div className="profile-avatar-large">{(profile.firstName || user.email || "U").charAt(0).toUpperCase()}</div>
                  <h2>Your Profile</h2>
                  <p>{displayName}</p>
                  <small>{user.email}</small>
                </div>
                <button className="copyBtn" onClick={() => setProfileOpen(false)} type="button">Close</button>
              </div>

              <div className="profile-grid">
                <label>First name<input value={profile.firstName || ""} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} /></label>
                <label>Last name<input value={profile.lastName || ""} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} /></label>
                <label>Age<input value={profile.age || ""} onChange={(e) => setProfile({ ...profile, age: e.target.value })} /></label>
                <label>Blood group<input value={profile.bloodGroup || ""} onChange={(e) => setProfile({ ...profile, bloodGroup: e.target.value })} placeholder="Example: B+" /></label>
                <label>Allergies<input value={profile.allergies || ""} onChange={(e) => setProfile({ ...profile, allergies: e.target.value })} placeholder="Example: peanuts" /></label>
                <label>Emergency contact<input value={profile.emergencyContact || ""} onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })} /></label>
                <label className="profile-wide">Health conditions<textarea value={profile.conditions || ""} onChange={(e) => setProfile({ ...profile, conditions: e.target.value })} rows="3" placeholder="Example: asthma, diabetes, migraine..." /></label>
              </div>

              <button className="add-reminder-btn" onClick={handleSaveProfile} type="button">Save Profile</button>

              <div className="password-box">
                <h3>Change Password</h3>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New password" minLength={6} />
                <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} placeholder="Confirm new password" minLength={6} />
                <button className="start-button" onClick={handleChangePassword} type="button">Update Password</button>
              </div>
            </div>
          </div>
        )}
        <main className="main-content">{renderContent()}</main>
      </div>
    </div>
  );
};

const BreathingGuide = ({ exerciseName, plan, seconds, timerRunning, onStart, onPause, onReset }) => {
  const activePlan = plan || { totalSeconds: 60, pattern: [{ label: "Breathe slowly", seconds: 6 }], cue: "Follow a steady rhythm." };
  const cycleLength = activePlan.pattern.reduce((sum, phase) => sum + phase.seconds, 0);
  const elapsed = Math.max(0, activePlan.totalSeconds - seconds);
  const cycleSecond = cycleLength ? elapsed % cycleLength : 0;
  let phaseCursor = 0;
  const currentPhase = activePlan.pattern.find((phase) => {
    phaseCursor += phase.seconds;
    return cycleSecond < phaseCursor;
  }) || activePlan.pattern[0];
  const progress = Math.round(((activePlan.totalSeconds - seconds) / activePlan.totalSeconds) * 100);
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  return (
    <div className="breathing-guide">
      <div className={`breathing-figure ${timerRunning ? "is-running" : ""}`}>
        <div className="figure-head" />
        <div className="figure-body">
          <div className="figure-lung left" />
          <div className="figure-lung right" />
        </div>
      </div>
      <div className="breathing-timer">
        <span>{exerciseName}</span>
        <strong>{minutes}:{remainingSeconds}</strong>
        <p>{seconds === 0 ? "Session complete. Points added to your dashboard." : currentPhase.label}</p>
        <div className="phase-strip">
          {activePlan.pattern.map((phase) => (
            <span className={phase.label === currentPhase.label && seconds !== 0 ? "active" : ""} key={phase.label}>
              {phase.label} <small>{phase.seconds}s</small>
            </span>
          ))}
        </div>
        <div className="timer-progress" aria-label="Session progress">
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="timer-actions">
          <button className="start-button" onClick={onStart} type="button">Start</button>
          <button className="copyBtn" onClick={onPause} type="button">Pause</button>
          <button className="copyBtn" onClick={onReset} type="button">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

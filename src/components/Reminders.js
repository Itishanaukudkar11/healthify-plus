import React, { useState, useEffect } from 'react';
import './medicationReminders.css';

const MedicationReminders = () => {
  const [medicationName, setMedicationName] = useState('');
  const [time, setTime] = useState('');
  const [ampm, setAmPm] = useState('AM');
  const [selectedDays, setSelectedDays] = useState([]);
  const [reminders, setReminders] = useState([]);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentHour = now.getHours() % 12 || 12;
      const currentMinutes = now.getMinutes().toString().padStart(2, '0');
      const currentAmPm = now.getHours() >= 12 ? 'PM' : 'AM';
      const currentDay = daysOfWeek[now.getDay()];
      
      reminders.forEach(reminder => {
        if (
          reminder.time === `${currentHour}:${currentMinutes}` &&
          reminder.ampm === currentAmPm &&
          reminder.days.includes(currentDay)
        ) {
          new Notification('Medication Reminder', {
            body: `Time to take ${reminder.medicationName}!`,
          });
        }
      });
    };
    
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
    
    const interval = setInterval(checkReminders, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [reminders]);

  const handleDayToggle = (day) => {
    setSelectedDays(selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day]
    );
  };

  const addReminder = () => {
    if (!medicationName || !time || selectedDays.length === 0) {
      alert('Please fill all fields and select at least one day.');
      return;
    }

    const newReminder = {
      id: Date.now(),
      medicationName,
      time,
      ampm,
      days: selectedDays.join(', '),
    };

    setReminders([...reminders, newReminder]);
    setMedicationName('');
    setTime('');
    setAmPm('AM');
    setSelectedDays([]);
  };

  return (
    <div className="reminders-container">
      <h1>Manage Your Medication Reminders</h1>

      <div className="reminder-form">
        <label>
          <strong>Medication Name:</strong>
          <input
            type="text"
            placeholder="Enter medication name"
            value={medicationName}
            onChange={(e) => setMedicationName(e.target.value)}
          />
        </label>

        <label>
          <strong>Time:</strong>
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            {hours.map(hour => (
              <option key={hour} value={`${hour}:00`}>{hour}:00</option>
            ))}
          </select>
        </label>

        <label>
          <strong>AM/PM:</strong>
          <select value={ampm} onChange={(e) => setAmPm(e.target.value)}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </label>

        <div className="days-of-week">
          <strong>Days:</strong>
          {daysOfWeek.map((day) => (
            <label key={day} className="day-label">
              <input
                type="checkbox"
                checked={selectedDays.includes(day)}
                onChange={() => handleDayToggle(day)}
              />
              {day}
            </label>
          ))}
        </div>

        <button className="add-reminder-btn" onClick={addReminder}>
          Add Reminder
        </button>
      </div>

      <h2>Saved Reminders</h2>
      <ul className="reminder-list">
        {reminders.map((reminder) => (
          <li key={reminder.id}>
            {reminder.medicationName} at {reminder.time} {reminder.ampm} on {reminder.days}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationReminders;


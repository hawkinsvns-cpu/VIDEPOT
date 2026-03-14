import React, { useState } from 'react';

function App() {
  const [attendance, setAttendance] = useState([]);

  const markPresent = (name) => {
    setAttendance([...attendance, { name, time: new Date().toLocaleTimeString() }]);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Varanasi Attendance App</h1>
      <button onClick={() => markPresent('Bhai')} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Mark Attendance
      </button>
      <ul style={{ marginTop: '20px' }}>
        {attendance.map((entry, index) => (
          <li key={index}>{entry.name} was here at {entry.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

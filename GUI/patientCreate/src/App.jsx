import { useState } from 'react'
import './App.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [dob, setDob] = useState(null);
  const [vaccineDate, setVaccineDate] = useState(null);


  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Enter your full name:
          <input name="fullName" />
        </label>

        <br />

        <h4>Select your Date of Birth:</h4>
        <DatePicker
          selected={dob}
          onChange={(date) => setDob(date)}
          dateFormat="MM/dd/yyyy"
          placeholderText="Select date"
        />

        <br /><br />

        <h4>
          When did you last receive the Haemophilus influenza type b (Hib) Vaccine?
        </h4>

        <DatePicker
          selected={vaccineDate}
          onChange={(date) => setVaccineDate(date)}
          dateFormat="MM/dd/yyyy"
          placeholderText="Select date"
        />

        <br /><br />

        <button type="submit">Submit Data</button>
      </form>
    </>
  );
}
function formatDate(date) {
  if (!date) return "";
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  const formJson = Object.fromEntries(formData.entries());
  exportUserInfo(formJson)
}
function exportUserInfo(userInfo) {
  const formattedDob = formatDate(userInfo.dob);

  const fileData =
  `${userInfo.fullName}\n` +
  `${formattedDob}\n`

  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.download = "user-info.txt";
  link.href = url;
  link.click();

  URL.revokeObjectURL(url);
}
export default App
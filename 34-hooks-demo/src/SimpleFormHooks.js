import React, { useState } from "react";

export default function SimpleFormHooks() {
  const [email, setEmail] = useState("");
  const handleChange = e => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h1>The value is: {email}</h1>
      <label>
        Email
        <input type="text" value={email} onChange={handleChange} />
      </label>
      <button onClick={() => setEmail("")}>Submit</button>
    </div>
  );
}

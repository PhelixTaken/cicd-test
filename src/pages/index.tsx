import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  function onButtonClick() {
    if (name.trim().length === 0) return setError("Please fill in your name");
    setError(undefined);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      {error && <p id="name-error">{error}</p>}
      <button id="name-button" onClick={onButtonClick}>
        Set name
      </button>
      Hello!!1113333!
    </div>
  );
}

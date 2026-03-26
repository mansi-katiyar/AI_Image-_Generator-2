import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");

  const generate = async () => {
    const res = await axios.post("http://localhost:5000/api/image/generate", { prompt });
    setImage(res.data.imageUrl);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>AI Image Generator</h1>
      <input onChange={(e)=>setPrompt(e.target.value)} placeholder="Enter prompt" />
      <button onClick={generate}>Generate</button>
      {image && <img src={image} alt="generated" style={{ marginTop: 20 }} />}
    </div>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="malek.JPG" className="avatar" alt="Malek AbuHammad" />;
}

function Intro() {
  return     
    <div>
      <h1>Malek AbuHammad</h1>
      <p>
        Full-stack web developer
      </p>
    </div>;
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="#cb4335" />
      <Skill skill="Tailwind" emoji="💪" color="#f1c40f" />
      <Skill skill="JavaScript" emoji="💪" color="#28b463" />
      <Skill skill="React" emoji="💪" color="#212f3c" />
      <Skill skill="Java" emoji="💪" color="#616a6b" />
      <Skill skill="Java Spring Boot" emoji="💪" color="#7b7d7d" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.color, color: "#e9f7ef" }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

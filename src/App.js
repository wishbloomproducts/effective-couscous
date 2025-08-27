import React, { useState } from "react";
import { questionsRecovery, questionsRetention } from "./questions";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(100);
  const [finished, setFinished] = useState(false);
  const [path, setPath] = useState(null); // "recovery" or "retention"

  const handleAnswer = (q, opt, delta) => {
    setAnswers({ ...answers, [q]: opt });
    setScore((prev) => prev + delta); // deductions are negative
  };

  const next = () => {
    if (step === 1) {
      if (answers.hairfall === "Yes") setPath("recovery");
      else setPath("retention");
    }
    const totalSteps =
      path === "recovery"
        ? questionsRecovery.length
        : path === "retention"
        ? questionsRetention.length
        : 2;
    if (step < totalSteps - 1) setStep(step + 1);
    else setFinished(true);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  if (finished) {
    // ✅ Results Page
    let advice = "";
    let color = "green";

    if (path === "recovery") {
      if (score >= 95) {
        advice =
          "Your hair health is excellent, though very early signs of thinning are present. With preventive care, you can fully restore your hair.";
        color = "darkgreen";
      } else if (score >= 80) {
        advice =
          "Mild to early-stage hair fall is visible. With consistent treatment and healthy lifestyle changes, your chances of recovery are very high.";
        color = "green";
      } else if (score >= 60) {
        advice =
          "You are experiencing noticeable hair loss. Recovery is achievable with proper treatment and consistent effort.";
        color = "orange";
      } else if (score >= 40) {
        advice =
          "Hair loss is significant. Professional consultation and medical treatment will be essential.";
        color = "orangered";
      } else {
        advice =
          "Severe hair loss and multiple risk factors are present. Recovery will be very challenging and may require intensive clinical treatment.";
        color = "red";
      }
    } else {
      if (score === 100) {
        advice =
          "You have no visible hair fall and no significant risk factors. Your chances of retaining healthy hair are excellent.";
        color = "darkgreen";
      } else if (score >= 95) {
        advice =
          "You have no visible hair fall, but mild risk factors exist. With preventive care, you can easily maintain your hair health.";
        color = "green";
      } else if (score >= 80) {
        advice =
          "Moderate risks of future hair loss exist. Preventive lifestyle adjustments are recommended.";
        color = "orange";
      } else if (score >= 60) {
        advice =
          "You have several risk factors that may lead to hair fall in the future. Professional consultation is strongly advised.";
        color = "orangered";
      } else {
        advice =
          "Multiple strong risk factors are present. Without intervention, hair fall in the future is highly likely.";
        color = "red";
      }
    }

    return (
      <div className="quiz-container">
        <h1>🌿 Neemasya Hair Health Quiz</h1>
        <h2>Your Score: {score}%</h2>
        <div className="meter">
          <div
            className="meter-fill"
            style={{ width: `${score}%`, background: color }}
          >
            {score}%
          </div>
        </div>
        <p>{advice}</p>
      </div>
    );
  }

  const q =
    path === "recovery"
      ? questionsRecovery[step]
      : path === "retention"
      ? questionsRetention[step]
      : step === 0
      ? {
          key: "gender",
          text: "Select your gender",
          options: ["Male", "Female"],
          scores: [0, 0],
        }
      : {
          key: "hairfall",
          text: "Do you have hair fall?",
          options: ["Yes", "No"],
          scores: [0, 0],
        };

  return (
    <div className="quiz-container">
      <h1>🌿 Neemasya Hair Health Quiz</h1>
      <h2>
        Step {step + 1} of{" "}
        {path === "recovery"
          ? questionsRecovery.length
          : path === "retention"
          ? questionsRetention.length
          : 2}
      </h2>
      <h3>{q.text}</h3>
      {q.options.map((opt, i) => (
        <div key={i} className="option">
          <input
            type="radio"
            name={q.key}
            checked={answers[q.key] === opt}
            onChange={() => handleAnswer(q.key, opt, q.scores[i])}
          />
          {opt}
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button onClick={back} disabled={step === 0}>
          Back
        </button>
        <button onClick={next} style={{ marginLeft: "10px" }}>
          {step ===
          (path === "recovery"
            ? questionsRecovery.length - 1
            : path === "retention"
            ? questionsRetention.length - 1
            : 1)
            ? "Finish"
            : "Next"}
        </button>
      </div>
    </div>
  );
}

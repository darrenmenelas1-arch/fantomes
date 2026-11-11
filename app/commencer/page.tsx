"use client";

import Link from "next/link";
import { useState } from "react";
import "./commencer.css";
import { questions } from "./questions";
import type { Option } from "./questions";
import Resultat from "./resultat";

export default function Commencer() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);

  const total = questions.length;
  const done = step >= total;
  const percent = done ? 100 : Math.round(((step + 1) / total) * 100);

  function choose(option: Option) {
    setAnswers([...answers.slice(0, step), option]);
    setStep(step + 1);
  }

  return (
    <main className="page quiz">
      <div className="quiz-top">
        {step === 0 ? (
          <Link href="/" className="back" aria-label="Retour à l’accueil">
            ←
          </Link>
        ) : (
          <button
            type="button"
            className="back"
            aria-label="Question précédente"
            onClick={() => setStep(step - 1)}
          >
            ←
          </button>
        )}
        <div className="progress">
          <div className="progress-bar" style={{ width: percent + "%" }} />
        </div>
      </div>

      {done ? (
        <Resultat answers={answers} />
      ) : (
        <section>
          <p className="step-count">
            Question {step + 1} sur {total}
          </p>
          <h1>{questions[step].title}</h1>
          <ul className="options">
            {questions[step].options.map((option) => (
              <li key={option.label}>
                <button
                  type="button"
                  className="option"
                  onClick={() => choose(option)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

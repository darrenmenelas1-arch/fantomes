"use client";

import Link from "next/link";
import { useState } from "react";
import "./commencer.css";

type Option = { label: string; value: number };
type Question = { title: string; options: Option[] };

const questions: Question[] = [
  {
    title: "Combien d’abonnements penses-tu avoir ?",
    options: [
      { label: "1 à 3", value: 2 },
      { label: "4 à 7", value: 5 },
      { label: "8 à 12", value: 10 },
      { label: "Plus de 12", value: 14 },
    ],
  },
  {
    title: "Quand as-tu vérifié tes prélèvements pour la dernière fois ?",
    options: [
      { label: "Ce mois-ci", value: 0 },
      { label: "Il y a quelques mois", value: 1 },
      { label: "Il y a plus d’un an", value: 2 },
      { label: "Je ne l’ai jamais vraiment fait", value: 3 },
    ],
  },
  {
    title: "Combien crois-tu dépenser par mois en abonnements ?",
    options: [
      { label: "Moins de 20 €", value: 15 },
      { label: "Entre 20 € et 50 €", value: 35 },
      { label: "Entre 50 € et 100 €", value: 75 },
      { label: "Plus de 100 €", value: 120 },
    ],
  },
];

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

  const monthly = answers[2]?.value ?? 0;
  const yearly = monthly * 12;

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
        <div
          className="progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        >
          <div className="progress-bar" style={{ width: `${percent}%` }} />
        </div>
      </div>

      {!done ? (
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
      ) : (
        <section>
          <p className="step-count">Ton estimation</p>
          <h1>Voilà ce que tes abonnements te coûtent.</h1>
          <div className="pain" style={{ marginTop: "1.75rem" }}>
            <p className="pain-figure">{yearly.toLocaleString("fr-FR")} €</p>
            <p

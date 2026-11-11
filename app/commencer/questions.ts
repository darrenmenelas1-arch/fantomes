export type Option = { label: string; value: number };
export type Question = { title: string; options: Option[] };

export const questions: Question[] = [
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

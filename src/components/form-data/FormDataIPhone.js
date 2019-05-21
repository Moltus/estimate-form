const FormDataIPhone = {
  step1: {
    id: 1,
    question: "Quel est le modèle de votre iPhone ?",
    choices: [
      { id: "1a", button: "6", info: "" },
      { id: "1b", button: "6 Plus", info: "" },
      { id: "1c", button: "6S", info: "" },
      { id: "1d", button: "6S Plus", info: "" },
      { id: "1e", button: "SE", info: "" },
      { id: "1f", button: "7", info: "" },
      { id: "1g", button: "7 Plus", info: "" },
      { id: "1h", button: "8", info: "" },
      { id: "1i", button: "8 Plus", info: "" },
      { id: "1j", button: "X", info: "" },
      { id: "1k", button: "XS", info: "" },
      { id: "1l", button: "XS Max", info: "" },
      { id: "1m", button: "XR", info: "" }
    ],
    stepIcon: "IphoneModel"
  },
  step2: {
    id: 2,
    question: "Quelle est sa capacité ?",
    choices: [
      { id: "2a", button: "32 Go", info: "" },
      { id: "2b", button: "64 Go", info: "" },
      { id: "2c", button: "128 Go", info: "" },
      { id: "2d", button: "256 Go", info: "" }
    ],
    stepIcon: "IphoneCapacity"
  },
  step3: {
    id: 3,
    question: "Votre iPhone est-il fonctionnel ?",
    choices: [
      { id: "3a", button: "0%", info: "Ne fonctionne plus ou dommage liquide" },
      {
        id: "3b",
        button: "50%",
        info: "Fonctionne partiellement (bouton, son...), aucun dommage liquide"
      },
      {
        id: "3c",
        button: "100%",
        info: "Fonctionne parfaitement, aucun dommage liquide"
      }
    ],
    stepIcon: "IphoneFunctional"
  },
  step4: {
    id: 4,
    question: "Quel est l'état de votre écran ?",
    choices: [
      {
        id: "4a",
        button: "Usure prononcée",
        info:
          "Impact, fissure, délamination, tâche blanche, pixel mort ou décoloration"
      },
      {
        id: "4b",
        button: "Usure normale",
        info: "Micro-rayure ou rayure superficielle"
      },
      { id: "4c", button: "Comme neuf", info: "Intact, aucune marque d'usure" }
    ],
    stepIcon: "IphoneScreen"
  },
  step5: {
    id: 5,
    question: "Quel est l'état de la coque ?",
    choices: [
      {
        id: "5a",
        button: "Usure prononcée",
        info: "Impact, enfoncement, fissure ou cassure"
      },
      {
        id: "5b",
        button: "Usure normale",
        info: "Micro-rayure ou rayure superficielle"
      },
      { id: "5c", button: "Comme neuve", info: "Intact, aucune marque d'usure" }
    ],
    stepIcon: "IphoneCase"
  },
  step6: {
    id: 6,
    question: "Important :",
    subQuestion:
      "Il est obligatoire de déconnecter votre compte iCloud avant de nous revendre votre iPhone.",
    choices: [{ id: "6a", button: "C'est compris !", info: "" }],
    stepIcon: "IcloudDisconnect"
  },
  step7: {
    id: 7,
    question: "Laissez-nous votre email",
    subQuestion: "Vous recevrez notre proposition sur cette adresse)",
    input: "steve.wozniak@apple.com",
    choices: [{ id: "7a", button: "Estimer Mon Produit", info: "" }],
    stepIcon: "Mail"
  }
};

export default FormDataIPhone;

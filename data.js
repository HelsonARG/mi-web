const data = {
  materias: [
    "Pensamiento Científico",
    "Problemática Educativa",
    "Problemática Filosófica",
    "Sociología General",
    "Optativo: Área Socio-Cultural",
    "Psicología General"
  ],

  clases: [
    {
      id: 1,
      materia: "General",
      titulo: "Mesa Virtual de Consultas — Tutorías Ciencias de la Educación",
      url: "https://www.youtube.com/watch?v=k-FL3TfRRlw",
      fecha: "2026-03-16",
      duracion: "",
      descripcion: "Mesa virtual de consultas del equipo de tutorías de Ciencias de la Educación, FHyCS.",
      resumenId: 3
    },
    {
      id: 2,
      materia: "Pensamiento Científico",
      titulo: "Clase Teórica 1 — Pensamiento Científico",
      url: "https://www.youtube.com/watch?v=lMj2AnS6qDg",
      fecha: "2026-03-17",
      duracion: "",
      descripcion: "Primera clase teórica de la materia Pensamiento Científico.",
      resumenId: 5
    },
    {
      id: 3,
      materia: "Pensamiento Científico",
      titulo: "Clase Práctica 1 — Pensamiento Científico",
      url: "https://www.youtube.com/watch?v=sCCZKPy4JzQ",
      fecha: "2026-03-19",
      duracion: "",
      descripcion: "Primera clase práctica de la materia Pensamiento Científico.",
      resumenId: 6
    },
    {
      id: 4,
      materia: "Problemática Filosófica",
      titulo: "Clase Teórica 1 — Problemática Filosófica",
      url: "https://youtu.be/oiEOtL68bec",
      fecha: "2026-03-20",
      duracion: "",
      descripcion: "Primera clase teórica de la materia Problemática Filosófica.",
      resumenId: 7
    },
    {
      id: 5,
      materia: "Problemática Filosófica",
      titulo: "Clase Teórica 2 — Problemática Filosófica",
      url: "https://youtu.be/R7jON5FNSqc",
      fecha: "2026-03-27",
      duracion: "",
      descripcion: "Segunda clase teórica de la materia Problemática Filosófica.",
      resumenId: 8
    }
  ],

  apuntes: [
    {
      id: 1,
      materia: "General",
      titulo: "Presentación de Cátedras — Curso de Ambientación",
      url: "",
      fotos: "https://photos.app.goo.gl/3UTr4cskSib3fqat6",
      fecha: "2026-03-06",
      fuente: "Viernes 6 de marzo de 2026",
      descripcion: "Fotos de la presentación de cátedras del curso de ambientación."
    },
    {
      id: 2,
      materia: "Problemática Filosófica",
      titulo: "Programa — Problemática Filosófica 2026",
      pdf: "https://drive.google.com/file/d/1j9ThIhev_L-dc2KWck2Qc3rlyRNLl8aS/view?usp=sharing",
      pdfDescarga: "https://drive.google.com/uc?export=download&id=1j9ThIhev_L-dc2KWck2Qc3rlyRNLl8aS",
      fecha: "2026-03-14",
      fuente: "Cátedra 2026",
      subcategoria: "Programas",
      descripcion: "Programa oficial de la materia Problemática Filosófica para el ciclo lectivo 2026."
    },
    {
      id: 3,
      materia: "General",
      titulo: "Mesa Virtual de Consultas — Tutorías Ciencias de la Educación",
      url: "https://docs.google.com/document/d/1Fiq2upcYNYdpxO9f1_3ncPlZdSHrxqi_vAzX9F8bDcU/edit?usp=sharing",
      fecha: "2026-03-16",
      fuente: "Equipo de Tutorías FHyCS — 16 de marzo de 2026",
      descripcion: "Resumen de la mesa virtual de consultas del equipo de tutorías de Ciencias de la Educación, FHyCS.",
      claseId: 1
    },
    {
      id: 4,
      materia: "General",
      titulo: "Plan de Estudios — Profesorado y Licenciatura en Ciencias de la Educación",
      pdf: "https://drive.google.com/file/d/1JOxCNR4uW2X8cU7MU-oyScErVBoH7nhX/view?usp=sharing",
      pdfDescarga: "https://drive.google.com/uc?export=download&id=1JOxCNR4uW2X8cU7MU-oyScErVBoH7nhX",
      fecha: "2026-03-14",
      fuente: "14 de marzo de 2026",
      subcategoria: "Programas",
      descripcion: "Plan de estudios oficial del Profesorado y Licenciatura en Ciencias de la Educación — FHyCS, UNJu."
    },
    {
      id: 5,
      materia: "Pensamiento Científico",
      titulo: "Resumen — Clase Teórica 1. Pensamiento Científico",
      url: "https://docs.google.com/document/d/15k_U7mpecZE8nUPArQ4IS0YI4U8yJhFTqg3VWbIq7Xg/edit?usp=sharing",
      fecha: "2026-03-17",
      fuente: "Clase Teórica 1 — 17 de marzo de 2026",
      descripcion: "Resumen de la primera clase teórica de Pensamiento Científico.",
      claseId: 2
    },
    {
      id: 6,
      materia: "Pensamiento Científico",
      titulo: "Resumen — Clase Práctica 1. Pensamiento Científico",
      url: "https://docs.google.com/document/d/1mWwDAe6eOP7HDRPz-LBqY3hY_U4SJR_mnk_bRQ21bLg/edit?usp=sharing",
      fecha: "2026-03-19",
      fuente: "Clase Práctica 1 — 19 de marzo de 2026",
      descripcion: "Resumen de la primera clase práctica de Pensamiento Científico.",
      claseId: 3
    },
    {
      id: 7,
      materia: "Problemática Filosófica",
      titulo: "Resumen — Clase Teórica 1. Problemática Filosófica",
      url: "https://docs.google.com/document/d/1adj-EUbYRtjyHY_RU1_NjiQtL4FJxHhK7_IE6M8nyQA/edit?usp=sharing",
      fecha: "2026-03-20",
      fuente: "Clase Teórica 1 — 20 de marzo de 2026",
      descripcion: "Resumen de la primera clase teórica de Problemática Filosófica.",
      claseId: 4
    },
    {
      id: 8,
      materia: "Problemática Filosófica",
      titulo: "Resumen — Clase Teórica 2. Problemática Filosófica",
      url: "https://docs.google.com/document/d/1jQZJrpUAe8HUWpRZkoDVjsviL0pnZfMf35RjR0D66r8/edit?usp=sharing",
      fecha: "2026-03-27",
      fuente: "Clase Teórica 2 — 27 de marzo de 2026",
      descripcion: "Resumen de la segunda clase teórica de Problemática Filosófica.",
      claseId: 5
    }
  ],

  trabajos: []
};

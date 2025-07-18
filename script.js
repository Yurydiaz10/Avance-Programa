const mallaDiv = document.getElementById("malla");

const semestres = [
  {
    titulo: "1er Semestre",
    ramos: [
      { nombre: "Cálculo", id: "calculo", desbloquea: ["algebra", "matematica"] },
      { nombre: "Introducción a la contaduría pública", id: "intro_conta" },
      { nombre: "Fundamentos de contabilidad", id: "fund_conta", desbloquea: ["conta_corto", "costos"] },
      { nombre: "Taller de habilidades informáticas para la gestión", id: "tic", desbloquea: ["sis_info"] },
      { nombre: "Introducción al derecho y constitución política", id: "intro_derecho", desbloquea: ["leg1", "laboral", "hacienda", "renta"] },
      { nombre: "Estilos de vida saludable", id: "vida" }
    ]
  },
  {
    titulo: "2do Semestre",
    ramos: [
      { nombre: "Álgebra Lineal", id: "algebra", requiere: ["calculo"], desbloquea: ["estadistica1", "investigacion"] },
      { nombre: "Matemática para finanzas", id: "matematica", requiere: ["calculo"], desbloquea: ["evaluacion"] },
      { nombre: "Contabilidad de los recursos y obligaciones de corto plazo", id: "conta_corto", requiere: ["fund_conta"], desbloquea: ["conta_largo"] },
      { nombre: "Comprensión y producción de textos académicos generales", id: "textos" },
      { nombre: "Legislación comercial I", id: "leg1", requiere: ["intro_derecho"], desbloquea: ["leg2"] },
      { nombre: "Fundamentos de economía y comer

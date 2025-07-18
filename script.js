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
      { nombre: "Fundamentos de economía y comercio", id: "eco1", desbloquea: ["macro", "hacienda"] }
    ]
  },
  {
    titulo: "3er Semestre",
    ramos: [
      { nombre: "Estadística I para las ciencias de la administración", id: "estadistica1", requiere: ["algebra"], desbloquea: ["estadistica2"] },
      { nombre: "Proceso administrativo", id: "procesos", desbloquea: ["costos"] },
      { nombre: "Contabilidad de los recursos y obligaciones de largo plazo y patrimonio", id: "conta_largo", requiere: ["conta_corto"], desbloquea: ["informes"] },
      { nombre: "Legislación laboral", id: "laboral", requiere: ["intro_derecho"] },
      { nombre: "Legislación comercial II", id: "leg2", requiere: ["leg1"] },
      { nombre: "Macroeconomía y coyuntura", id: "macro", requiere: ["eco1"], desbloquea: ["empresa"] },
      { nombre: "Inglés con fines generales y académicos I", id: "ingles1", desbloquea: ["ingles2"] }
    ]
  },
  {
    titulo: "4to Semestre",
    ramos: [
      { nombre: "Estadística II para las ciencias de la administración", id: "estadistica2", requiere: ["estadistica1"] },
      { nombre: "Investigación y gestión de operaciones", id: "investigacion", requiere: ["algebra"] },
      { nombre: "Informes financieros", id: "informes", requiere: ["conta_largo"], desbloquea: ["control", "conta_esp1", "publica"] },
      { nombre: "Hacienda pública", id: "hacienda", requiere: ["intro_derecho", "eco1"], desbloquea: ["publica"] },
      { nombre: "Economía de empresa", id: "empresa", requiere: ["macro"] },
      { nombre: "Inglés con fines generales y académicos II", id: "ingles2", requiere: ["ingles1"], desbloquea: ["ingles3"] },
      { nombre: "Formación social y ciudadana", id: "formacion1" }
    ]
  },
  {
    titulo: "5to Semestre",
    ramos: [
      { nombre: "Humanismo, pensamiento administrativo y organizaciones", id: "humanismo" },
      { nombre: "Fundamentos de control, auditoría y aseguramiento", id: "control", requiere: ["informes"], desbloquea: ["auditoria"] },
      { nombre: "Contabilidades especiales I", id: "conta_esp1", requiere: ["informes"], desbloquea: ["conta_esp2"] },
      { nombre: "Costos", id: "costos", requiere: ["procesos", "fund_conta"], desbloquea: ["presupuestos"] },
      { nombre: "Ciencias humanas", id: "humanas" },
      { nombre: "Contabilidad pública", id: "publica", requiere: ["informes", "hacienda"] },
      { nombre: "Inglés con fines generales y académicos III", id: "ingles3", requiere: ["ingles2"], desbloquea: ["ingles4"] }
    ]
  },
  {
    titulo: "6to Semestre",
    ramos: [
      { nombre: "Impuesto a la renta y complementarios, impuesto al patrimonio", id: "renta", requiere: ["intro_derecho"], desbloquea: ["iva"] },
      { nombre: "Auditoría, riesgos y aseguramiento", id: "auditoria", requiere: ["control"], desbloquea: ["gestion"] },
      { nombre: "Contabilidades especiales II", id: "conta_esp2", requiere: ["conta_esp1"] },
      { nombre: "Presupuestos", id: "presupuestos", requiere: ["costos"], desbloquea: ["admin"] },
      { nombre: "Seminario de teoría contable", id: "seminario" },
      { nombre: "Inglés con fines generales y académicos IV", id: "ingles4", requiere: ["ingles3"] },
      { nombre: "Electiva profesional I", id: "electiva1" }
    ]
  },
  {
    titulo: "7mo Semestre",
    ramos: [
      { nombre: "Impuestos de IVA y consumo, y Mecanismo de retención en la fuente", id: "iva", requiere: ["renta"], desbloquea: ["procedimiento"] },
      { nombre: "Control de gestión y gobierno corporativo", id: "gestion", requiere: ["auditoria"], desbloquea: ["revisoria"] },
      { nombre: "Administración y gestión financiera", id: "admin", requiere: ["presupuestos"] },
      { nombre: "Sistemas de información y bases de datos contables", id: "sis_info", requiere: ["tic"], desbloquea: ["lab2", "seguridad"] },
      { nombre: "Laboratorio contable I", id: "lab1", desbloquea: ["lab2"] },
      { nombre: "Electiva profesional II", id: "electiva2" }
    ]
  },
  {
    titulo: "8vo Semestre",
    ramos: [
      { nombre: "Procedimiento tributario", id: "procedimiento", requiere: ["iva"] },
      { nombre: "Revisoría fiscal", id: "revisoria", requiere: ["gestion"] },
      { nombre: "Laboratorio contable II", id: "lab2", requiere: ["lab1", "sis_info"] },
      { nombre: "Evaluación financiera de proyectos", id: "evaluacion", requiere: ["matematica"] },
      { nombre: "Seguridad de la información contable", id: "seguridad", requiere: ["sis_info"] },
      { nombre: "Taller de escritura científica", id: "escritura" }
    ]
  },
  {
    titulo: "9no Semestre",
    ramos: [
      { nombre: "Contabilidad de gestión", id: "gestion_contable" },
      { nombre: "Ética y desarrollo profesional", id: "etica" },
      { nombre: "Taller de habilidades gerenciales enfoque contable financiero", id: "gerencial" },
      { nombre: "Formación social y ciudadana II", id: "formacion2" },
      { nombre: "Inteligencia de negocios y analítica de datos para la gestión", id: "inteligencia" },
      { nombre: "Electiva profesional III", id: "electiva3" }
    ]
  },
  {
    titulo: "10mo Semestre",
    ramos: [
      { nombre: "Electiva profesional IV", id: "electiva4" },
      { nombre: "Electiva profesional V", id: "electiva5" },
      { nombre: "Trabajo de grado", id: "grado" },
      { nombre: "Artístico humanístico", id: "artistico" },
      { nombre: "Consultorio empresarial", id: "consultorio" }
    ]
  }
];

const crearSemestre = (semestre) => {
  const container = document.createElement("div");
  container.className = "semestre";
  const titulo = document.createElement("h2");
  titulo.textContent = semestre.titulo;
  container.appendChild(titulo);

  semestre.ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.innerText = ramo.nombre;
    div.id = ramo.id;
    div.onclick = () => aprobarRamo(ramo, div);
    container.appendChild(div);
  });

  mallaDiv.appendChild(container);
};

function desbloquearRamo(id) {
  const elem = document.getElementById(id);
  if (elem && elem.classList.contains("bloqueado")) {
    elem.classList.remove("bloqueado");
  }
}

function aprobarRamo(ramo, div) {
  if (div.classList.contains("bloqueado") || div.classList.contains("aprobado")) return;

  div.classList.add("aprobado");

  if (ramo.desbloquea) {
    ramo.desbloquea.forEach(id => {
      const dependiente = encontrarRamoPorId(id);
      const prereqs = dependiente?.requiere || [];
      const todosAprobados = prereqs.every(rid => document.getElementById(rid)?.classList.contains("aprobado"));
      if (todosAprobados) desbloquearRamo(id);
    });
  }
}

function encontrarRamoPorId(id) {
  for (const semestre of semestres) {
    const ramo = semestre.ramos.find(r => r.id === id);
    if (ramo) return ramo;
  }
  return null;
}

function inicializar() {
  semestres.forEach(crearSemestre);
  semestres.forEach(sem => {
    sem.ramos.forEach(ramo => {
      if (!ramo.requiere || ramo.requiere.length === 0) desbloquearRamo(ramo.id);
    });
  });
}

inicializar();

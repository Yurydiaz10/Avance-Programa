const ramos = [
  // Primer año
  // 1er Semestre
  { nombre: "Cálculo", semestre: 1, abre: ["Álgebra Lineal", "Matemática para finanzas"] },
  { nombre: "Introducción a la contaduría pública", semestre: 1 },
  { nombre: "Fundamentos de contabilidad", semestre: 1, abre: ["Contabilidad de los recursos y obligaciones de corto plazo", "Costos"] },
  { nombre: "Taller de habilidades informáticas para la gestión", semestre: 1, abre: ["Sistemas de información y bases de datos contables"] },
  { nombre: "Introducción al derecho y constitución política", semestre: 1, abre: ["Legislación comercial I", "Legislación laboral", "Hacienda pública", "Impuesto a la renta y complementarios, impuesto al patrimonio"] },
  { nombre: "Estilos de vida saludable", semestre: 1 },

  // 2do Semestre
  { nombre: "Álgebra Lineal", semestre: 2, prerequisitos: ["Cálculo"], abre: ["Estadística I para las ciencias de la administración", "Investigación y gestión de operaciones"] },
  { nombre: "Matemática para finanzas", semestre: 2, prerequisitos: ["Cálculo"], abre: ["Evaluación financiera de proyectos"] },
  { nombre: "Contabilidad de los recursos y obligaciones de corto plazo", semestre: 2, prerequisitos: ["Fundamentos de contabilidad"], abre: ["Contabilidad de los recursos y obligaciones de largo plazo y patrimonio"] },
  { nombre: "Comprensión y producción de textos académicos generales", semestre: 2 },
  { nombre: "Legislación comercial I", semestre: 2, prerequisitos: ["Introducción al derecho y constitución política"], abre: ["Legislación comercial II"] },
  { nombre: "Fundamentos de economía y comercio", semestre: 2, abre: ["Macroeconomía y coyuntura", "Hacienda pública"] },

  // Segundo año
  // 3er Semestre
  { nombre: "Estadística I para las ciencias de la administración", semestre: 3, prerequisitos: ["Álgebra Lineal"], abre: ["Estadística II para las ciencias de la administración"] },
  { nombre: "Proceso administrativo", semestre: 3, abre: ["Costos"] },
  { nombre: "Contabilidad de los recursos y obligaciones de largo plazo y patrimonio", semestre: 3, prerequisitos: ["Contabilidad de los recursos y obligaciones de corto plazo"], abre: ["Informes financieros"] },
  { nombre: "Legislación laboral", semestre: 3, prerequisitos: ["Introducción al derecho y constitución política"] },
  { nombre: "Legislación comercial II", semestre: 3, prerequisitos: ["Legislación comercial I"] },
  { nombre: "Macroeconomía y coyuntura", semestre: 3, prerequisitos: ["Fundamentos de economía y comercio"], abre: ["Economía de empresa"] },
  { nombre: "Inglés con fines generales y académicos I", semestre: 3, abre: ["Inglés con fines generales y académicos II"] },

  // 4to Semestre
  { nombre: "Estadística II para las ciencias de la administración", semestre: 4, prerequisitos: ["Estadística I para las ciencias de la administración"] },
  { nombre: "Investigación y gestión de operaciones", semestre: 4, prerequisitos: ["Álgebra Lineal"] },
  { nombre: "Informes financieros", semestre: 4, prerequisitos: ["Contabilidad de los recursos y obligaciones de largo plazo y patrimonio"], abre: ["Fundamentos de control, auditoría y aseguramiento", "Contabilidades especiales I", "Contabilidad pública"] },
  { nombre: "Hacienda pública", semestre: 4, prerequisitos: ["Introducción al derecho y constitución política", "Fundamentos de economía y comercio"], abre: ["Contabilidad pública"] },
  { nombre: "Economía de empresa", semestre: 4, prerequisitos: ["Macroeconomía y coyuntura"] },
  { nombre: "Inglés con fines generales y académicos II", semestre: 4, prerequisitos: ["Inglés con fines generales y académicos I"], abre: ["Inglés con fines generales y académicos III"] },
  { nombre: "Formación social y ciudadana", semestre: 4 },

  // Tercer año
  // 5to Semestre
  { nombre: "Humanismo, pensamiento administrativo y organizaciones – cátedra", semestre: 5 },
  { nombre: "Fundamentos de control, auditoría y aseguramiento", semestre: 5, prerequisitos: ["Informes financieros"], abre: ["Auditoría, riesgos y aseguramiento"] },
  { nombre: "Contabilidades especiales I", semestre: 5, prerequisitos: ["Informes financieros"], abre: ["Contabilidades especiales II"] },
  { nombre: "Costos", semestre: 5, prerequisitos: ["Fundamentos de contabilidad", "Proceso administrativo"], abre: ["Presupuestos"] },
  { nombre: "Ciencias humanas", semestre: 5 },
  { nombre: "Contabilidad pública", semestre: 5, prerequisitos: ["Informes financieros", "Hacienda pública"] },
  { nombre: "Inglés con fines generales y académicos III", semestre: 5, prerequisitos: ["Inglés con fines generales y académicos II"], abre: ["Inglés con fines generales y académicos IV"] },

  // 6to Semestre
  { nombre: "Impuesto a la renta y complementarios, impuesto al patrimonio", semestre: 6, prerequisitos: ["Introducción al derecho y constitución política"], abre: ["Impuestos de IVA y consumo, y Mecanismo de retención en la fuente"] },
  { nombre: "Auditoría, riesgos y aseguramiento", semestre: 6, prerequisitos: ["Fundamentos de control, auditoría y aseguramiento"], abre: ["Control de gestión y gobierno corporativo"] },
  { nombre: "Contabilidades especiales II", semestre: 6, prerequisitos: ["Contabilidades especiales I"] },
  { nombre: "Presupuestos", semestre: 6, prerequisitos: ["Costos"], abre: ["Administración y gestión financiera"] },
  { nombre: "Seminario de teoría contable", semestre: 6 },
  { nombre: "Inglés con fines generales y académicos IV", semestre: 6, prerequisitos: ["Inglés con fines generales y académicos III"] },
  { nombre: "Electiva profesional I", semestre: 6 },

  // Cuarto año
  // 7mo Semestre
  { nombre: "Impuestos de IVA y consumo, y Mecanismo de retención en la fuente", semestre: 7, prerequisitos: ["Impuesto a la renta y complementarios, impuesto al patrimonio"], abre: ["Procedimiento tributario"] },
  { nombre: "Control de gestión y gobierno corporativo", semestre: 7, prerequisitos: ["Auditoría, riesgos y aseguramiento"], abre: ["Revisoría fiscal"] },
  { nombre: "Administración y gestión financiera", semestre: 7, prerequisitos: ["Presupuestos"] },
  { nombre: "Sistemas de información y bases de datos contables", semestre: 7, prerequisitos: ["Taller de habilidades informáticas para la gestión"], abre: ["Laboratorio contable II", "Seguridad de la información contable"] },
  { nombre: "Laboratorio contable I", semestre: 7, abre: ["Laboratorio contable II"] },
  { nombre: "Electiva profesional II", semestre: 7 },

  // 8vo Semestre
  { nombre: "Procedimiento tributario", semestre: 8, prerequisitos: ["Impuestos de IVA y consumo, y Mecanismo de retención en la fuente"] },
  { nombre: "Revisoría fiscal", semestre: 8, prerequisitos: ["Control de gestión y gobierno corporativo"] },
  { nombre: "Laboratorio contable II", semestre: 8, prerequisitos: ["Laboratorio contable I", "Sistemas de información y bases de datos contables"] },
  { nombre: "Evaluación financiera de proyectos", semestre: 8, prerequisitos: ["Matemática para finanzas"] },
  { nombre: "Seguridad de la información contable", semestre: 8, prerequisitos: ["Sistemas de información y bases de datos contables"] },
  { nombre: "Taller de escritura científica", semestre: 8 },

  // Quinto año
  // 9no Semestre
  { nombre: "Contabilidad de gestión", semestre: 9 },
  { nombre: "Ética y desarrollo profesional", semestre: 9 },
  { nombre: "Taller de habilidades gerenciales enfoque contable financiero", semestre: 9 },
  { nombre: "Formación social y ciudadana", semestre: 9 },
  { nombre: "Inteligencia de negocios y analítica de datos para la gestión", semestre: 9 },
  { nombre: "Electiva profesional III", semestre: 9 },

  // 10mo Semestre
  { nombre: "Electiva profesional IV", semestre: 10 },
  { nombre: "Electiva profesional V", semestre: 10 },
  { nombre: "Trabajo de grado", semestre: 10 },
  { nombre: "Artístico humanístico", semestre: 10 },
  { nombre: "Consultorio empresarial", semestre: 10 },
];

// Lógica de interacción
const malla = document.getElementById("malla");
const ramosMap = {};
let aprobados = new Set();

function cargarAprobados() {
  const data = localStorage.getItem("ramosAprobados");
  if (data) aprobados = new Set(JSON.parse(data));
}

function guardarAprobados() {
  localStorage.setItem("ramosAprobados", JSON.stringify([...aprobados]));
}

function crearSemestres() {
  for (let i = 1; i <= 10; i++) {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre";
    contenedor.id = `semestre-${i}`;
    const titulo = document.createElement("h2");
    titulo.textContent = `${i}º Semestre`;
    contenedor.appendChild(titulo);
    malla.appendChild(contenedor);
  }
}

function crearRamos() {
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.textContent = ramo.nombre;
    div.dataset.nombre = ramo.nombre;
    div.onclick = () => aprobarRamo(div, ramo);
    ramosMap[ramo.nombre] = div;
    document.getElementById(`semestre-${ramo.semestre}`).appendChild(div);
  });
}

function restaurarEstado() {
  ramos.forEach(ramo => {
    const div = ramosMap[ramo.nombre];
    if (aprobados.has(ramo.nombre)) {
      div.classList.add("aprobado");
    }
  });
}

function actualizarBloqueos() {
  ramos.forEach(ramo => {
    const div = ramosMap[ramo.nombre];
    const requisitos = ramo.prerequisitos || [];
    const habilitado = requisitos.every(pr => ramosMap[pr]?.classList.contains("aprobado"));
    if (habilitado) div.classList.remove("bloqueado");
    else div.classList.add("bloqueado");
  });
}

function aprobarRamo(div, ramo) {
  if (div.classList.contains("bloqueado")) return;
  div.classList.toggle("aprobado");
  if (div.classList.contains("aprobado")) aprobados.add(ramo.nombre);
  else aprobados.delete(ramo.nombre);
  guardarAprobados();
  actualizarBloqueos();
}

// Inicialización
cargarAprobados();
crearSemestres();
crearRamos();
restaurarEstado();
actualizarBloqueos();

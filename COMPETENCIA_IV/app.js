//base de datos local de preguntas

const bd_juego = [
{
id:0,
pregunta:"1.- Un tribunal arbitral tiene a su cargo la solución de una controversia. ¿En qué orden debe aplicar las normas jurídicas correspondientes, según la Ley General de Contrataciones Públicas (Ley N.º 32069)?",
op0:"Las controversias se resuelven mediante la aplicación de la Constitución Política del Perú, de la presente ley y su reglamento, así como de las normas de derecho público y las de derecho privado. Se mantiene obligatoriamente este orden de preferencia en la aplicación del derecho. Esta disposición es de orden público.",
op1:"Las controversias deben resolverse aplicando prioritariamente las normas de derecho privado y, de forma supletoria, la Constitución y las normas de derecho público.",
op2:"El tribunal puede aplicar discrecionalmente las normas de derecho público o privado, sin un orden específico, según lo estime más conveniente para resolver la controversia.",
op3:"Las controversias se resuelven aplicando únicamente el Reglamento de la Ley de Contrataciones del Estado, sin que sea necesario considerar otras normas del ordenamiento jurídico.",
correcta:"0"
},
{
id:1,
pregunta:"2.- Según la Ley N.º 32069, ¿cuáles son las fuentes jurídicas que deben observarse para resolver controversias en contratación pública, en el orden establecido?",
op0:"Reglamentos internos de las entidades, derecho privado y jurisprudencia internacional.",
op1:"Derecho privado, derecho público, Constitución y ley de contrataciones.",
op2:"Constitución Política del Perú, Ley de Contrataciones, su Reglamento, derecho público y derecho privado",
op3:"Jurisprudencia del Tribunal Constitucional, ley de contrataciones y tratados internacionales.",
correcta:"2"
},
{
id:2,
pregunta:"3.- En un contrato con fideicomiso, la entidad resolvió el contrato por incumplimiento del contratista. ¿Cuál es la implicancia inmediata?",
op0:"La entidad debe solicitar al fiduciario la liquidación anticipada del fideicomiso.",
op1:"La parte que resolvió debe comunicar a la empresa fiduciaria sobre la resolución del contrato.",
op2:"Se debe transferir el fideicomiso a la entidad mediante resolución judicial.",
op3:"No procede ninguna comunicación porque el contrato fue resuelto por incumplimiento.",
correcta:"1"
},
{
id:3,
pregunta:"4.- Los bienes inventariados durante la constatación física son responsabilidad del contratista:",
op0:"Hasta que la entidad autorice el inicio de la liquidación",
op1:"Hasta la culminación del acto de constatación física",
op2:"Hasta la emisión del acta de recepción final",
op3:"Hasta la entrega de los bienes a un nuevo contratista",
correcta:"1"
},
{
id:4,
pregunta:"5.- Cuando se acuerda la suspensión del plazo de ejecución contractual por eventos no atribuibles a las partes, ¿Cuál es el efecto principal para el contratista?",
op0:"Se reconoce automáticamente el pago de mayores gastos generales por todo el periodo de suspensión.",
op1:"La ejecución de las prestaciones se interrumpe, sin que ello suponga el reconocimiento de mayores gastos generales o costos directos, salvo aquellos necesarios para viabilizar la suspensión.",
op2:"La entidad está obligada a suscribir una adenda para formalizar la suspensión del contrato.",
op3:"Se le exonera temporalmente de toda obligación contractual, incluida la gestión administrativa",
correcta:"1"
},
{
id:5,
pregunta:"6.- Una entidad prioriza reducir el precio de contratación sin considerar la durabilidad ni el costo de mantenimiento del bien adquirido. ¿Qué principio se ha desatendido?",
op0:"Equidad y colaboración",
op1:"Valor por dinero",
op2:"Transparencia",
op3:"Eficiencia",
correcta:"1"
},
{
id:6,
pregunta:"7.- Si un comité de selección favorece de manera encubierta a un proveedor, otorgándole puntuación injustificada, ¿Qué principio se vulnera más gravemente?",
op0:"Legalidad",
op1:"Igualdad de trato",
op2:"Publicidad",
op3:"Sostenibilidad",
correcta:"1"
},
{
id:7,
pregunta:"8.- En el Ministerio la Juventud se convoca una LP para bienes. Si un postor impugna, quién resuelve el recurso de apelación",
op0:"El titular de la Entidad",
op1:"Presidencia Ejecutiva del OECE",
op2:"Tribunal de Contrataciones Públicas",
op3:"La Autoridad de Gestión Administrativa",
correcta:"2"
},
{
id:8,
pregunta:"9.- En una compra por encargo, ¿Quién ejerce las atribuciones para resolver el recurso de apelación?",
op0:"El OECE",
op1:"La Entidad encargada",
op2:"La Entidad encargante",
op3:"Perú Compras",
correcta:"1"
},
{
id:9,
pregunta:"10.- Una contratación de servicios se clasifica como de alto riesgo si el promedio de postores en los dos años previos es igual o menor a.................",
op0:"1",
op1:"2",
op2:"3",
op3:"4",
correcta:"1"
},
{
id:10,
pregunta:"11.- Una contratación de bienes se considera de alto riesgo si el promedio de postores en procedimientos similares durante los dos años anteriores ha sido menor o igual a ______.",
op0:"4",
op1:"2",
op2:"3",
op3:"5",
correcta:"2"
},
{
id:11,
pregunta:"12.- Si una contratación de servicios es declarada de “estratégica”, ¿Qué condiciones se verifican?",
op0:"Baja cuantía, alta competencia.",
op1:"Alta cuantía, alto riesgo.",
op2:"Alta especialización, bajo costo.",
op3:"Bajo riesgo, alta participación de postores.",
correcta:"1"
},
{
id:12,
pregunta:"13.- La verificación del promedio de postores como criterio de riesgo debe realizarse considerando procedimientos similares en los ________",
op0:"ejercicios fiscales en los que se haya aprobado el mismo objeto contractual",
op1:"dos años anteriores al ejercicio fiscal correspondiente",
op2:"periodos contractuales en los que se haya ejecutado el contrato sin ampliaciones",
op3:"últimos cinco años reportados en la base histórica del SEACE",
correcta:"1"
},
{
id:13,
pregunta:"14.- Se considera que una contratación presenta un nivel alto de riesgo cuando existe una probabilidad significativa de baja participación de postores, entre otras razones, si el promedio histórico de participantes en procesos similares durante los dos años anteriores ha sido menor o igual a ________.",
op0:"3, tratándose de bienes",
op1:"4, tratándose de servicios",
op2:"3, tratándose de servicios",
op3:"2, tratándose de bienes",
correcta:"0"
},
{
id:14,
pregunta:"15.- ¿Cuál de las siguientes condiciones es necesaria para que una contratación de obra sea clasificada como básica?",
op0:"Que la inversión esté vinculada a bienes estratégicos para seguridad nacional.",
op1:"Que la complejidad técnica sea considerada alta según el SNPMGI.",
op2:"Que el promedio de postores en procesos similares en los dos años anteriores sea menor a tres.",
op3:"Que no se trate de un saldo de obra y la entidad tenga experiencia previa en ejecuciones similares.",
correcta:"3"
},
{
id:15,
pregunta:"16.- ¿Qué herramienta debe utilizarse como referencia para determinar la complejidad e innovación técnica de una inversión pública?",
op0:"El Sistema Integrado de Administración Financiera (SIAF)",
op1:"El SNPMGI – Sistema Nacional de Programación Multianual y Gestión de Inversiones",
op2:"El Plan Anual de Contrataciones",
op3:"El Plan de Desarrollo Concertado",
correcta:"1"
},
{
id:16,
pregunta:"17.- Una obra de pavimentación urbana en una ciudad intermedia, que ha sido ejecutada previamente por la entidad en proyectos similares y cuyo promedio de postores ha sido superior a tres, se considera:",
op0:"Avanzada",
op1:"Crítica",
op2:"Básica",
op3:"Rutinaria",
correcta:"2"
},
{
id:17,
pregunta:"18.- La consulta al mercado para obras con diseño se orienta a ________ la cuantía del rubro de ejecución y ________ el presupuesto que gura en el PAC del CMN.",
op0:"incrementar / justificar",
op1:"sincerar / actualizar",
op2:"suprimir / redistribuir",
op3:"reducir / validar",
correcta:"1"
},
{
id:18,
pregunta:"19.- Una municipalidad distrital contratará una IOARR para renovar la instalación eléctrica de una posta médica rural. El expediente ya fue aprobado por la OPMI.",
op0:"Crítica, porque se ejecuta en zona rural.",
op1:"Básica, ya que los IOARR se consideran siempre como tal.",
op2:"Avanzada, si el monto excede las 100 UIT.",
op3:"Estratégica, si está en el plan de reconstrucción.",
correcta:"1"
},
{
id:19,
pregunta:"20.- La Municipalidad de Ventanilla ejecutó un expediente técnico para la construcción de una alameda ecológica con mobiliario urbano reciclado. Es la primera vez que aborda este tipo de intervención y el diseño tiene componentes innovadores en paisajismo urbano.",
op0:"Básica, si los costos son menores al umbral establecido.",
op1:"Avanzada, por innovación y falta de experiencia en el objeto contractual.",
op2:"Crítica, por impacto en la comunidad urbana.",
op3:"Operacional, si se hace con recursos ordinarios.",
correcta:"1"
},
{
id:20,
pregunta:"21.- Cual de las siguientes corresponde a un tipo de interacción con el mercado",
op0:"consulta al mercado",
op1:"Estudio de mercado",
op2:"Investigación de mercado",
op3:"Investigación de mercado",
correcta:"0"
},
{
id:21,
pregunta:"22.- En una CPI, el requerimiento se formula a partir de la ________ de la entidad y no exige ________ técnicas detalladas.",
op0:"necesidad / especificaciones",
op1:"estrategia / costos",
op2:"licitación / soluciones",
op3:"oferta / evaluación",
correcta:"0"
},
{
id:22,
pregunta:"23.- ¿Cuál de las siguientes afirmaciones es incorrecta respecto a la estrategia de contratación en CPI?",
op0:"Debe contener los hitos esperados de la fase de I+D.",
op1:"Establece los criterios para decidir si se contratará la solución resultante.",
op2:"Permite omitir la evaluación de viabilidad económica si la solución es innovadora.",
op3:"Es un documento técnico que orienta todo el procedimiento CPI.",
correcta:"2"
},
{
id:23,
pregunta:"24.- La Municipalidad Distrital de Colcapampa contrata al consultor ConsulGestión SAC para que desarrolle la formulación de un proyecto de infraestructura educativa. Una vez obtenida la viabilidad, procede a contratar a otro consultor, ProyecTec SRL, para la elaboración del expediente técnico de obra. ¿A qué sistema de entrega corresponde esta secuencia?",
op0:"Diseño de operación y mantenimiento",
op1:"Diseño y construcción",
op2:"Solo formulación o solo diseño",
op3:"Entrega integrada de proyecto o alianza",
correcta:"2"
},
{
id:24,
pregunta:"25.- En qué proceso de contratación no se realiza interacción con el mercado:",
op0:"Licitación Pública con dialogo competitivo",
op1:"Licitación Pública con MDA",
op2:"Compra Pública de Innovación",
op3:"Concurso Público con dialogo competitivo",
correcta:"1"
},
{
id:25,
pregunta:"26.- ¿Quiénes deben integrar, como mínimo, el jurado evaluador en un MDA según el Reglamento?",
op0:"Un representante del Ministerio de Economía, un especialista en contratación pública y un clínico.",
op1:"Un representante del MINSA, uno de la entidad evaluadora de tecnologías sanitarias y un experto en negociación",
op2:"Tres miembros de la alta dirección del MINSA y dos consultores internacionales.",
op3:"El jefe de la DEC, un auditor y un representante del área usuaria.",
correcta:"1"
},
{
id:26,
pregunta:"27.- ¿Qué función cumple el jurado de expertos en coordinación con la DEC en el marco de un proceso MDA?",
op0:"Aprobar el presupuesto analítico y validar las especificaciones técnicas.",
op1:"Emitir el dictamen final vinculante sobre las propuestas económicas de los postores.",
op2:"Participar en la estrategia de contratación.",
op3:"Evaluar la trazabilidad de las adquisiciones en función al control concurrente",
correcta:"2"
},
{
id:27,
pregunta:"28.- Complete el enunciado: En la estrategia de contratación bajo MDA, se debe determinar la modalidad de _______ y la fuente de ________, a n de garantizar viabilidad financiera.",
op0:"ejecución / financiamiento del MINSA",
op1:"pago / financiamiento",
op2:"adjudicación / ejecución contractual",
op3:"licitación / transferencia presupuestal",
correcta:"1"
},
{
id:28,
pregunta:"29.- Conforme con la normativa, la indagación puede ser:",
op0:"Avanzada",
op1:"Técnica",
op2:"Especializada",
op3:"Compleja",
correcta:"0"
},
{
id:29,
pregunta:"30.- En cuanto al incentivo por estándares ambientales y de seguridad, ¿Qué condición debe cumplirse para su aplicación?",
op0:"Que el contratista haya incluido criterios de sostenibilidad en su propuesta económica.",
op1:"Que los estándares superen lo exigido por la normativa y se hayan establecido indicadores base en el contrato.",
op2:"Que el contratista presente evidencia documental al término del contrato.",
op3:"Que la supervisión valide el cumplimiento ambiental bajo estándares internacionales.",
correcta:"1"
},
{
id:30,
pregunta:"31.- ¿Cuál es el monto máximo que puede otorgarse por el incentivo de respuesta rápida de la supervisión?",
op0:"Hasta el 3% del monto del contrato original.",
op1:"Hasta el 3% del monto del contrato vigente.",
op2:"Un monto fijo calculado según el porcentaje de avance físico.",
op3:"Hasta el 3% del monto acumulado de valorizaciones.",
correcta:"0"
},
{
id:31,
pregunta:"32.- El monto máximo del incentivo por excelencia ambiental equivale hasta el _______ del monto del contrato ________.",
op0:"3% / con adicionales",
op1:"1% / original",
op2:"2% / vigente",
op3:"1.5% / actualizado",
correcta:"1"
},
{
id:32,
pregunta:"33.- Durante las actuaciones preparatorias qué actividad debe registrarse en la PLADICOP",
op0:"El acta de la reunión de la conformación y/o aclaración, de la difusión del requerimiento",
op1:"El informe de la interacción con el mercado",
op2:"Las actas de acuerdo del comité o jurado cuando participan en las actividades de la estrategia de contratación",
op3:"El informe de la estrategia de contratación",
correcta:"3"
},
{
id:33,
pregunta:"34.- Respecto a la omisión de requisitos en la interposición del recurso de apelación, indique cuál de las siguientes afirmaciones es correcta:",
op0:"La omisión de las pruebas instrumentales conlleva el rechazo directo del recurso.",
op1:"La falta de nomenclatura del procedimiento de selección puede ser subsanada en un plazo de 2 días hábiles.",
op2:"La ausencia de la firma del impugnante permite la subsanación posterior si fue un error material.",
op3:"La omisión de la nomenclatura del procedimiento y de la firma del impugnante conlleva el rechazo directo del recurso.",
correcta:"3"
},
{
id:34,
pregunta:"35.- Señale cuál de los siguientes requisitos es de cumplimiento obligatorio al momento de la primera presentación del recurso, sin posibilidad de subsanación",
op0:"Firma del impugnante o de su representante",
op1:"Identificación del impugnante y número de documento oficial nacional de identidad",
op2:"Nomenclatura del procedimiento de selección y firma",
op3:"Pruebas instrumentales pertinentes y garantía",
correcta:"2"
},
{
id:35,
pregunta:"36.- Quien es el responsable de registrar en la pladicop la prorroga de la evaluación del CP con dialogo competitivo",
op0:"La DEC",
op1:"El área usuaria",
op2:"El Jurado",
op3:"El comité",
correcta:"0"
},
{
id:36,
pregunta:"37.- Quien es el responsable de registrar en la pladicop la prorroga de la evaluación del Concurso de proyectos arquitectónicos y urbanísticos",
op0:"La DEC",
op1:"El oficial de compra",
op2:"El jurado",
op3:"El comité",
correcta:"0"
},
{
id:37,
pregunta:"38.- Las compras corporativas, compras centralizadas y compras por encargo:",
op0:"No se consideran dentro del PAC por tener naturaleza descentralizada.",
op1:"Se incluyen solo si la entidad actúa como conductora del proceso.",
op2:"Deben ser incluidas en el PAC como modalidades de contratación pública eficiente.",
op3:"Se registran en el SEACE pero no necesariamente en el PAC.",
correcta:"2"
},
{
id:38,
pregunta:"39.- Cual de las siguientes alternativas no representa a una modalidad de contrato eficiente",
op0:"Catálogo electrónico de acuerdo marco",
op1:"compra corporativa",
op2:"contratos menores",
op3:"compra centralizada",
correcta:"0"
},
{
id:39,
pregunta:"40.- Cuál es el plazo máximo con que cuenta la entidad contratante para efectuar el pago al contratista, cuando de la liquidación parcial de una obra ejecutada bajo el sistema de entrega !diseño y construcción! resulta un saldo a su favor",
op0:"20 d/h",
op1:"20días",
op2:"10 días",
op3:"10 d/h",
correcta:"3"
},
{
id:40,
pregunta:"41.- Cuál es la secuencia correcta de la Asociación para la innovación",
op0:"Evaluación de ofertas definitivas/Precalificación con diálogo competitivo",
op1:"Evaluación de ofertas definitivas/Adjudicación para la innovación",
op2:"Adjudicación para la innovación/Evaluación de ofertas definitivas",
op3:"Precalificación con diálogo competitivo/Evaluación de ofertas definitivas",
correcta:"1"
},
{
id:41,
pregunta:"42.- Cuál es la secuencia correcta de la Licitación pública con diálogo competitivo",
op0:"Precalificación con diálogo competitivo/evaluación de ofertas definitivas",
op1:"evaluación de ofertas definitivas/Precalificación con diálogo competitivo",
op2:"Precalificación con dialogo competitivo/negociación",
op3:"Evaluación de ofertas definitivas/negociación",
correcta:"0"
},
{
id:42,
pregunta:"43.- Cuál es la secuencia correcta del Concurso público con precalificación",
op0:"Precalificación/evaluación de ofertas definitivas",
op1:"Evaluación de ofertas/precalificación con dialogo competitivo",
op2:"evaluación de ofertas definitivas/Precalificación",
op3:"Evaluación de ofertas definitivas/negociación",
correcta:"0"
},
{
id:43,
pregunta:"44.- En qué procedimiento de selección no se integran las Bases",
op0:"LP de bienes especializados",
op1:"LP de obras con negociación",
op2:"CP dialogo competitivo",
op3:"CP con precalificación",
correcta:"2"
},
{
id:44,
pregunta:"45.- Marque la afirmación correcta:",
op0:"La DGA aprueba la ejecución de cada contrato estandarizado que se utilice.",
op1:"La identificación de información confidencial puede realizarla la entidad sin participación del proveedor.",
op2:"Las guías oficiales de los contratos estandarizados son vinculantes si existen.",
op3:"El proveedor no puede solicitar confidencialidad en la fase de actuaciones preparatorias.",
correcta:"2"
},
{
id:45,
pregunta:"46.- Respecto a las funciones y actuaciones del jurado dentro del procedimiento de selección, señale la alternativa correcta:",
op0:"Ante la ausencia del titular, el suplente lo sustituye provisionalmente.",
op1:"Si hay subetapa de negociación, el jurado conduce las rondas de forma colegiada, y por mayoría determina las decisiones.",
op2:"Los miembros que realizan la evaluación por mayoría otorgan puntajes a las ofertas.",
op3:"El jurado se encarga de la elaboración de bases de acuerdo con la estrategia de contratación.",
correcta:"1"
},
{
id:46,
pregunta:"47.- En caso los jurados requieran mayor plazo para realizar la evaluación de ofertas, ¿Qué procedimiento deben seguir?",
op0:"Presentar una solicitud formal a la OSCE indicando las razones.",
op1:"Informar verbalmente a la autoridad administrativa que los designó.",
op2:"Comunicar a la DEC para que esta gestione la autorización correspondiente.",
op3:"Comunicarlo a la DEC, quien registra la prórroga en el Pladicop.",
correcta:"3"
},
{
id:47,
pregunta:"48.- La suspensión del contrato de obras puede producirse por:",
op0:"Eventos no atribuibles a las partes que afecten los intereses del contratista",
op1:"Causas no atribuibles al contratista que original el retraso o ritmo lento en el avance de la obra",
op2:"Casusas atribuibles a la entidad que original la interrupción de ejecución de prestaciones",
op3:"Casusa imputable a la entidad siempre que sea autorizada por la AGA",
correcta:"3"
},
{
id:48,
pregunta:"49.- Indique la afirmación incorrecta:",
op0:"Para adicionales mayores al 30 % en obras, se requiere autorización de la Contraloría.",
op1:"El área usuaria puede autorizar directamente adicionales de hasta 15 % en consultorías.",
op2:"En contratos estandarizados de uso internacional, el límite de modificación es del 50 %.",
op3:"La autoridad de gestión administrativa puede autorizar hasta 25 % en bienes y servicios.",
correcta:"1"
},
{
id:49,
pregunta:"50.- Marque la afirmación correcta:",
op0:"Las modificaciones contractuales por contrato estandarizado se limitan por el valor en la guía técnica.",
op1:"La autorización de la Contraloría debe emitirse antes del pago cuando el adicional tiene carácter de emergencia.",
op2:"En todos los casos, la aprobación de adicionales requiere informe del MEF.",
op3:"El Tribunal de Contrataciones aprueba directamente adicionales cuando superan el 25 %.",
correcta:"1"
},
{
id:50,
pregunta:"51.- En el caso de bienes, servicios y consultorías de obras, la autoridad de la gestión administrativa puede autorizar y pagar directamente prestaciones adicionales hasta por el ___ del contrato original, si son indispensables.",
op0:"0.2",
op1:"0.25",
op2:"0.15",
op3:"0.1",
correcta:"1"
},
{
id:51,
pregunta:"52.- En obras con sistema de entrega de solo construcción, el límite general de adicionales es del ___ del contrato original, deducidos los presupuestos vinculados.",
op0:"0.1",
op1:"0.25",
op2:"0.15",
op3:"0.3",
correcta:"2"
},
{
id:52,
pregunta:"53.- ¿Cuál es la consecuencia de no presentar el nuevo programa dentro del plazo indicado?",
op0:"Solo se aplican penalidades económicas.",
op1:"El contrato se resuelve automáticamente.",
op2:"Puede dar lugar a la intervención económica o resolución del contrato.",
op3:"La obra se suspende hasta la presentación del nuevo cronograma.",
correcta:"2"
},
{
id:53,
pregunta:"54.- ¿Para qué puede usarse el nuevo programa de ejecución presentado por el contratista?",
op0:"Para el cálculo del reajuste de precios y control de plazos contractuales.",
op1:"Para el análisis de impacto en la ruta crítica con fines de ampliación de plazo.",
op2:"Solo para el control de avances físicos reprogramados de la obra.",
op3:"Para sustituir el calendario vigente sin limitación.",
correcta:"2"
},
{
id:54,
pregunta:"55.- ¿Qué ocurre si el nuevo calendario presenta nuevamente un avance menor al 80% del acumulado programado?",
op0:"Se considera automáticamente causal de resolución contractual.",
op1:"La entidad debe emitir un nuevo informe técnico antes de resolver.",
op2:"El supervisor lo anota en el cuaderno de incidencias e informa a la entidad.",
op3:"Se inicia un procedimiento administrativo sancionador contra el contratista.",
correcta:"2"
},
{
id:55,
pregunta:"56.- ¿Cuál es el objetivo principal de la intervención económica en la ejecución de obras públicas?",
op0:"Garantizar la culminación de los trabajos sin resolver el contrato.",
op1:"Suspender temporalmente la obra hasta que se evalúe su viabilidad.",
op2:"culminar la ejecución de los trabajos, previa resolución del contrato",
op3:"Sancionar al contratista por su incumplimiento.",
correcta:"0"
},
{
id:56,
pregunta:"57.- ¿Puede el contratista quedar eximido de sus obligaciones contractuales tras la intervención económica?",
op0:"Sí, si se demuestra que el incumplimiento fue involuntario.",
op1:"No, continúa siendo responsable por la ejecución de los trabajos.",
op2:"Solo si la entidad reconoce una fuerza mayor con resolución expresa.",
op3:"Sí, pero únicamente respecto a las obligaciones económicas futuras.",
correcta:"1"
},
{
id:57,
pregunta:"58.- Respecto a los supuestos en los que, por mutuo acuerdo, las partes pueden diferir la fecha de inicio del plazo de ejecución del componente correspondiente a la obra, señale cuál de los siguientes NO constituye uno de dichos supuestos:",
op0:"Cuando lo requiere el contratista justificadamente por imposibilidad de contar con el residente de obra al inicio de la ejecución de la obra por razones ajenas a éste.",
op1:"Cuando la estación climática impide el inicio de ejecución de obra, hasta culminación de dicho evento.",
op2:"Cuando la entidad esté imposibilitada de cumplir con la condición de designar al supervisor de obra o supervisor de diseño.",
op3:"Cuando en el sistema de entrega “solo construcción” el contratista detecta errores u omisiones en el expediente que deben corregirse previo al inicio de ejecución.",
correcta:"0"
},
{
id:58,
pregunta:"59.- ¿Qué documento formaliza el acuerdo para diferir el inicio de ejecución?",
op0:"Informe de la supervisión con cronograma de corrección.",
op1:"Acta suscrita por ambas partes publicada en Pladicop.",
op2:"Resolución directoral de la entidad.",
op3:"Carta notarial de suspensión del plazo contractual.",
correcta:"1"
},
{
id:59,
pregunta:"60.- ¿Cuál es el límite máximo del resarcimiento que puede solicitar el contratista si la entidad incumple condiciones de inicio?",
op0:"0.05% del monto del contrato por día, sin tope.",
op1:"0.1% del monto contractual hasta 10%.",
op2:"0.05% diario hasta un máximo del 3%.",
op3:"1% mensual durante el periodo de incumplimiento.",
correcta:"2"
},
{
id:60,
pregunta:"61.- El Gobierno Regional de Amazonas requiere adquirir servicios de análisis de suelos, y ha determinado que lo más eficiente es contratarlos con el Instituto Geológico Minero Metalúrgico – INGEMMET. Se ha decidido aplicar el procedimiento no competitivo por contratación entre entidades. ¿Quién aprueba este procedimiento?",
op0:"Gobernador regional / delegable",
op1:"Gerente general regional / indelegable",
op2:"Director regional de agricultura / delegable",
op3:"Gerente de logística / indelegable",
correcta:"1"
},
{
id:61,
pregunta:"62.- La buena pro no queda administrativamente firme cuando:",
op0:"Se ha declarado la nulidad del acto.",
op1:"Se ha declarado la improcedencia de la oferta ganadora.",
op2:"La buena pro ha quedado consentida.",
op3:"La buena pro ha sido confirmada.",
correcta:"3"
},
{
id:62,
pregunta:"63.- Para la aplicación de contratos estandarizados de ingeniería y construcción, la entidad contratante debe contar con la asignación de un:",
op0:"Administrador del proyecto",
op1:"Coordinador del proyecto",
op2:"Gerente del proyecto",
op3:"Residente de obra",
correcta:"2"
},
{
id:63,
pregunta:"64.- En el caso de una obra bajo el sistema de entrega de “solo construcción”, ¿cuál de los siguientes documentos debe estar obligatoriamente incluido en el expediente de contratación?",
op0:"El sustento de la solución innovadora que incluye el análisis de eficiencia",
op1:"El requerimiento que precise quién es el responsable del expediente técnico del adicional de obra",
op2:"El documento de recolección de análisis de desempeño del proyecto de inversión",
op3:"La posibilidad de aplicar ejecución rápida o fast track",
correcta:"1"
},
{
id:64,
pregunta:"65.- ¿En qué supuesto es necesario aprobar un nuevo expediente de contratación en una segunda convocatoria?",
op0:"Cuando es necesario reemplazar evaluadores por cese del servicio",
op1:"Cuando no se presentaron ofertas en la convocatoria anterior",
op2:"Cuando se han alterado los documentos que conforman el expediente",
op3:"Cuando únicamente se modifica la cuantía del proceso",
correcta:"2"
},
{
id:65,
pregunta:"66.- Cuando una contratación tiene un monto igual o inferior a 8 UIT, dicha contratación:",
op0:"Está regulada por la Ley en todos sus casos",
op1:"Está regulada",
op2:"Está excluida",
op3:"Está excluida del ámbito de aplicación",
correcta:"1"
},
{
id:66,
pregunta:"67.- Ante la resolución del contrato de supervisión de obra por causas atribuibles a la entidad, el contratista solicita una solución inmediata advirtiendo que, de lo contrario, resolverá el contrato. ¿Qué corresponde hacer?",
op0:"Resolver el contrato con el ejecutor",
op1:"Suspender el plazo de ejecución hasta que se perfeccione el nuevo contrato de supervisión",
op2:"Contratar directamente a otro ejecutor",
op3:"Ordenar la paralización de la obra hasta designar un nuevo supervisor",
correcta:"1"
},
{
id:67,
pregunta:"68.- ¿Cuándo procede la intervención económica de una obra?",
op0:"Solo a solicitud del contratista",
op1:"Solo a solicitud del supervisor",
op2:"De ocio o a solicitud de parte",
op3:"Solo de ocio",
correcta:"2"
},
{
id:68,
pregunta:"69.- ¿A qué modalidad de pago se refiere cuando el servicio se remunera en función a las horas efectivamente trabajadas, previa aprobación de la entidad antes de ejecutar cada actividad?",
op0:"Tarifas",
op1:"Suma alzada",
op2:"Precios unitarios",
op3:"Pago por consumo",
correcta:"3"
},
{
id:69,
pregunta:"70.- ¿Qué modalidad de pago corresponde cuando no es posible conocer con precisión el tiempo exacto que tomará la prestación del servicio y el postor propone tarifas por cada unidad de tiempo?",
op0:"Precios unitarios",
op1:"Tarifas",
op2:"Pago por consumo",
op3:"Suma alzada",
correcta:"0"
},
{
id:70,
pregunta:"71.- La Municipalidad Distrital de San Bartolo contrató a la empresa Servicios Integrales SAC para el mantenimiento de áreas verdes. Las bases del procedimiento de selección no contemplaron la posibilidad de subcontratar prestaciones. Sin embargo, durante la ejecución del contrato, el gerente de la empresa contratista, Sr. Javier Gómez, solicita autorización a la entidad para subcontratar parte del servicio con otra empresa especializada. Ante esta solicitud, ¿por qué la entidad puede negarse válidamente a autorizar la subcontratación?",
op0:"Porque es potestativo de la entidad determinar si aprueba o no la subcontratación",
op1:"Porque las bases del procedimiento no establecieron las obligaciones que podrían ser subcontratadas",
op2:"Porque la posibilidad de subcontratación no fue prevista en las bases del procedimiento",
op3:"Porque la solicitud de subcontratación no precisa las actividades que se desean delegar",
correcta:"2"
},
{
id:71,
pregunta:"72.- Es un requisito para el perfeccionamiento del contrato ",
op0:"la entrega del terreno",
op1:"el contrato de consorcio",
op2:"la promesa de consorcio",
op3:"la garantía por adelanto",
correcta:"1"
},
]


//Cargo una pregunta del JSON

// Función para mezclar array (Fisher-Yates)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let respuestas = [];
let cantiCorrectas = 0;
let numPregunta = 0;

function cargarPreguntas(){
    const preguntaOriginal = bd_juego[numPregunta];
    
    // Convertir opciones en array y mezclar
    let opciones = [
        { texto: preguntaOriginal.op0, correcta: preguntaOriginal.correcta === "0" },
        { texto: preguntaOriginal.op1, correcta: preguntaOriginal.correcta === "1" },
        { texto: preguntaOriginal.op2, correcta: preguntaOriginal.correcta === "2" },
        { texto: preguntaOriginal.op3, correcta: preguntaOriginal.correcta === "3" }
    ];
    opciones = mezclarArray(opciones);
    
    // Actualizar la respuesta correcta según el nuevo orden
    let nuevaCorrecta = opciones.findIndex(op => op.correcta);
    bd_juego[numPregunta].correcta = String(nuevaCorrecta);
    bd_juego[numPregunta].opcionesMezcladas = opciones.map(o => o.texto);
    
    const pregunta = bd_juego[numPregunta];
    
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    
    const h2 = document.createElement("h2");
    h2.textContent = (pregunta.id + 1) + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    
    const opcionesDiv = document.createElement("div");
    
    // Crear labels usando las opciones ya mezcladas
    for (let i = 0; i < pregunta.opcionesMezcladas.length; i++) {
        const label = crearLabel(i, pregunta.opcionesMezcladas[i]);
        opcionesDiv.appendChild(label);
    }
    
    contenedor.appendChild(opcionesDiv);
    document.getElementById("juego").appendChild(contenedor);
}

function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta + "," + num + ")");
    
    const span = document.createElement("span");
    span.textContent = txtOpcion;
    
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);
    
    return label;
}

// Cargar todas las preguntas
for(let i = 0; i < bd_juego.length; i++){
    cargarPreguntas();
    numPregunta++;
}

function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}

// Botón corregir (ajustado para mostrar el total correcto)
let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    cantiCorrectas = 0; // reiniciar contador
    for(let i = 0; i < bd_juego.length; i++){
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas[i]){
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = " ✓";
            document.getElementById(idCorreccion).className = "acierto";
        } else {
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            if (respuestas[i] !== undefined) {
                document.getElementById(id).innerHTML = " ✗";
                document.getElementById(id).className = "no-acierto";
            }
            document.getElementById(idCorreccion).innerHTML = " ✓";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }
    window.scrollTo(0, 0);
    
    // Mostrar resultado con total dinámico
    const resultado = document.getElementById("resultado");
    if (resultado) resultado.remove();
    const h2 = document.createElement("h2");
    h2.id = "resultado";
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (bd_juego.length - cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}

// Botón mostrar respuestas
let mostrar = document.getElementById("mostrarRespuestas");
mostrar.onclick = function(){
    for(let i = 0; i < bd_juego.length; i++){
        const pregunta = bd_juego[i];
        let radios = document.getElementsByName("p" + i);
        radios[pregunta.correcta].checked = true;
        
        let idCorreccion = "p" + i + pregunta.correcta;
        document.getElementById(i).className = "contenedor-pregunta correcta";
        document.getElementById(idCorreccion).innerHTML = " ✓";
        document.getElementById(idCorreccion).className = "acierto";
    }
    window.scrollTo(0, 0);
}
//base de datos local de preguntas

const bd_juego = [
	{
	id:0,
	pregunta:"1.- En un procedimiento de resolución contractual, si la entidad contratante es la parte perjudicada, ¿cuáles son las acciones que puede ejecutar?",
	op0:"Ejecutar garantías únicamente si el daño supera el 10% del valor contractual.",
	op1:"Ejecutar las garantías y exigir indemnización solo si el tribunal arbitral lo determine",
	op2:"Ejecutar las garantías otorgadas por el contratista, sin perjuicio de reclamar daños y perjuicios debidamente demostrados.",
	op3:"Suspender temporalmente el contrato y solicitar indemnización automática.",
	correcta:"2"
	},
	{
	id:1,
	pregunta:"2.- Una vez culminado el acto de constatación física, ¿Quién asume la responsabilidad de la obra?",
	op0:"El supervisor",
	op1:"La empresa supervisora",
	op2:"La Entidad contratante",
	op3:"El contratista por 30 días más",
	correcta:"2"
	},
	{
	id:2,
	pregunta:"3.- ¿Qué órgano o funcionario es competente para declarar la nulidad de un procedimiento de selección?",
	op0:"Titular de la Entidad/delegable",
	op1:"Titular de la Entidad/indelegable",
	op2:"La Autoridad de Gestión Administrativa/Delegable",
	op3:"La Autoridad de Gestión Administrativa/Indelegable",
	correcta:"2"
	},
	{
	id:3,
	pregunta:"4.- ¿Qué órgano o funcionario es competente para declarar la nulidad de un contrato?",
	op0:"Titular de la Entidad/delegable",
	op1:"Titular de la Entidad/Indelegable",
	op2:"Autoridad de Gestión Administrativa/Delegable",
	op3:"Autoridad de Gestión Administrativa/Indelegable",
	correcta:"2"
	},
	{
	id:4,
	pregunta:"5.- Completar: Reiniciado el plazo de ejecución del contrato, la ................comunica al ...................... la modificación de las fechas del programa de ejecución actualizado y de los calendarios correspondientes, respetando los términos en los que se acordó la suspensión.",
	op0:"Contratista/Entidad contratante",
	op1:"Entidad contratante/Contratista",
	op2:"Supervisor/Residente de Obra",
	op3:"Residente de obra/Supervisor",
	correcta:"1"
	},
	{
	id:5,
	pregunta:"6.- La Municipalidad Distrital de Alto Andino contrató a la empresa Transportes Yáñez S.A.C. para el servicio de traslado de materiales hacia zonas rurales. Sin embargo, un deslizamiento destruyó la única carretera de acceso, sin que exista una fecha definida para su rehabilitación. Paralelamente, la entidad contrató a la empresa Verificaciones Sierra Azul E.I.R.L. para supervisar y registrar la entrega de dichos materiales en cada destino. ¿Qué medida corresponde adoptar respecto al contrato con Verificaciones Sierra Azul, según lo establece la normativa vigente?",
	op0:"Suspender el plazo de ejecución contractual con Verificaciones Sierra Azul una vez concluida la suspensión del contrato con Transportes Yáñez, suscribiendo un acta con la fecha de reinicio.",
	op1:"Suscribir un acta con Verificaciones Sierra Azul para resolver el contrato por causal sobreviniente.",
	op2:"Firmar un acta de acuerdo con Verificaciones Sierra Azul para suspender el plazo de ejecución contractual mientras dure la suspensión del contrato con Transportes Yáñez.",
	op3:"Resolver el contrato con Verificaciones Sierra Azul por causa sobreviniente que imposibilita su ejecución.",
	correcta:"0"
	},
	{
	id:6,
	pregunta:"7.- Completar: La decisión de la entidad contratante de aceptar los bienes y/o servicios ofrecidos por el contratista, debe contar con el sustento técnico emitido por el ................. que justifique dicha decisión y con la opinión favorable de la ........................",
	op0:"área usuaria/DEC",
	op1:"área usuaria/asesoría jurídica",
	op2:"DEC/área usuaria",
	op3:"La AGA/área usuaria",
	correcta:"0"
	},
	{
	id:7,
	pregunta:"8.- La entidad evalúa y selecciona un proveedor que ofrece una solución técnica no existente en el mercado, pero viable para resolver una necesidad ciudadana. ¿Qué principio justifica esta elección?",
	op0:"Innovación",
	op1:"Equidad y colaboración",
	op2:"Valor por dinero",
	op3:"Igualdad de trato",
	correcta:"0"
	},
	{
	id:8,
	pregunta:"9.- La estrategia de contratación de los procesos clasificados como críticos y estratégicos debe orientarse principalmente a..................",
	op0:"reducir los precios ofertados",
	op1:"simplificar los procedimientos",
	op2:"atender la demanda con mayor rapidez",
	op3:"disminuir los riesgos en el proceso de contratación",
	correcta:"3"
	},
	{
	id:9,
	pregunta:"10.- Una de las condiciones normativas para clasificar una contratación como de alto riesgo es que, en los últimos dos años, ________ un procedimiento para contratar el mismo objeto.",
	op0:"se haya modificado sustancialmente el expediente de contratación de forma reiterada",
	op1:"se haya declarado desierto por ausencia total de postores",
	op2:"se haya observado el acto de otorgamiento de buena pro por parte del OECE",
	op3:"se haya tramitado sin requerimiento debidamente aprobado por el área usuaria",
	correcta:"1"
	},
	{
	id:10,
	pregunta:"11.- La unidad orgánica que debe realizar la segmentación de las contrataciones es:",
	op0:"La DEC",
	op1:"La AGA",
	op2:"Oficial de Compra",
	op3:"Área usuaria",
	correcta:"1"
	},
	{
	id:11,
	pregunta:"12.- ¿Qué clasificación corresponde a una contratación de obra cuya inversión involucra alta innovación, complejidad técnica alta, y sin experiencia previa de la entidad contratante?",
	op0:"Rutinaria",
	op1:"Avanzada",
	op2:"Estratégica",
	op3:"Básica",
	correcta:"1"
	},
	{
	id:12,
	pregunta:"13.- En contrataciones por entrega de solo construcción, la interacción con el mercado busca principalmente ________ en el expediente técnico y permitir ________ antes del procedimiento de selección.",
	op0:"identificar criterios subjetivos / su validación por el OECE",
	op1:"detectar errores u omisiones / su corrección oportuna",
	op2:"establecer riesgos ocultos / su mitigación mediante penalidades",
	op3:"eliminar cláusulas ambiguas / su revisión por parte del área usuaria",
	correcta:"1"
	},
	{
	id:13,
	pregunta:"14.- La Municipalidad de San Miguel resolvió un contrato de obra por incumplimiento del contratista y decidió contratar el saldo pendiente mediante un procedimiento no competitivo. Según los criterios establecidos en la segmentación de contrataciones de obras y consultorías de obra, esta contratación debe ser considerada como:",
	op0:"Avanzada",
	op1:"Básica",
	op2:"Compleja",
	op3:"Elemental",
	correcta:"0"
	},
	{
	id:14,
	pregunta:"15.- El Gobierno Regional de Tumbes planifica la contratación del saldo de obra de una institución educativa que quedó inconclusa hace dos años. La inversión es baja, la obra tiene expediente aprobado, y el área usuaria indica que ya se ejecutaron obras similares en el pasado.",
	op0:"Crítica, debido al retraso acumulado",
	op1:"Básica, porque el monto de inversión es reducido",
	op2:"Avanzada, porque se trata de un saldo de obra",
	op3:"Operacional, ya que la entidad cuenta con experiencia en el objeto",
	correcta:"2"
	},
	{
	id:15,
	pregunta:"16.- Indique cuál de las siguientes condiciones no corresponde a una contratación básica según el Reglamento:",
	op0:"El promedio de postores en procesos anteriores fue igual o mayor a tres.",
	op1:"La obra presenta un grado de innovación alto por introducir tecnologías nuevas.",
	op2:"La entidad ha contratado proyectos similares previamente.",
	op3:"Se trata de una obra con complejidad baja o media según SNPMGI.",
	correcta:"1"
	},
	{
	id:16,
	pregunta:"17.- ¿Cuál de las siguientes afirmaciones es correcta?",
	op0:"Una obra que es ejecutada por primera vez por la entidad puede ser considerada básica si es de bajo costo.",
	op1:"El saldo de obra puede calificarse como contratación básica si se mantiene el expediente técnico original.",
	op2:"Para que una contratación sea considerada básica, no debe tratarse de un saldo de obra",
	op3:"Toda obra que no exceda el 10 % del PAC puede calificarse como básica.",
	correcta:"2"
	},
	{
	id:17,
	pregunta:"18.- En la CPI, ¿por qué no se incluyen especificaciones técnicas detalladas en la etapa inicial?",
	op0:"Porque el área usuaria aún no ha realizado estudios previos suficientes.",
	op1:"Porque la DEC debe definirlas en la segunda fase.",
	op2:"Porque la solución técnica se co-diseña con el proveedor ganador del proceso.",
	op3:"Porque se busca fomentar la participación de soluciones diversas e innovadoras aún no definidas.",
	correcta:"3"
	},
	{
	id:18,
	pregunta:"19.- ¿Qué tipo de consulta al mercado debe realizarse de manera obligatoria en la CPI?",
	op0:"Consulta básica si la entidad tiene experiencia previa.",
	op1:"Consulta avanzada, obligatoriamente.",
	op2:"Encuesta técnica sin validación.",
	op3:"Análisis de precios referenciales a través del SEACE.",
	correcta:"1"
	},
	{
	id:19,
	pregunta:"20.- ¿Cuál afirmación es correcta respecto al número de proveedores que pueden ser considerados en la fase de I+D de una CPI?",
	op0:"Solo se permite contratar a un proveedor, como en los procedimientos tradicionales.",
	op1:"Se puede considerar hasta cinco proveedores, asignando a cada uno el mismo monto de contratación.",
	op2:"No hay límite si la necesidad está debidamente justificada.",
	op3:"El número de proveedores dependerá de la clasificación del objeto en el PAC del CMN.",
	correcta:"1"
	},
	{
	id:20,
	pregunta:"21.- En relación con la interacción con el mercado dentro de un proceso de Contratación Pública de Innovación (CPI), identifique la alternativa incorrecta:",
	op0:"Se realiza obligatoriamente mediante consulta avanzada y contempla la difusión formal del requerimiento mediante la herramienta dispuesta para tal fin.",
	op1:"Consiste siempre en una indagación avanzada complementada con un aviso informal en el portal institucional.",
	op2:"La DEC mantiene coordinación activa con el área usuaria durante esta interacción con el mercado ",
	op3:"En la interacción con el mercado se puede recurrir a fuentes de vigilancia tecnológica para determinar la existencia de soluciones innovadoras",
	correcta:"1"
	},
	{
	id:21,
	pregunta:"22.- En el contexto del MDA, ¿Cuál de los siguientes supuestos invalida el requerimiento técnico?",
	op0:"No especificar el plazo de duración del mecanismo.",
	op1:"Considerar un enfoque poblacional para terapias especializadas.",
	op2:"Incluir márgenes de tolerancia para cantidades máximas de adquisición.",
	op3:"Establecer tecnologías sanitarias emergentes sin uso previo en el país.",
	correcta:"0"
	},
	{
	id:22,
	pregunta:"23.- En qué supuesto corresponde realizar la segmentación de las contrataciones ",
	op0:"MDA",
	op1:"Compra centralizada",
	op2:"Procedimiento de selección no competitivo",
	op3:"Contrato menor",
	correcta:"1"
	},
	{
	id:23,
	pregunta:"24.- El MDA es evaluado por un _____________ de _________ miembros determinado por ___________",
	op0:"jurado/5/el MINSA",
	op1:"Jurado/3 o 5/la AGA",
	op2:"Jurado/3/la DEC",
	op3:"Jurado/3/el MINSA",
	correcta:"0"
	},
	{
	id:24,
	pregunta:"25.- ¿Qué condición habilita el otorgamiento del incentivo por cumplimiento anticipado en el sistema de entrega de solo construcción?",
	op0:"La reducción del costo total de ejecución en un mínimo del 5% del monto contractual.",
	op1:"La entrega final de todos los componentes sin ninguna observación del supervisor.",
	op2:"La finalización anticipada de uno o más componentes con conformidad respectiva, siendo obligatorio en dicho sistema.",
	op3:"La ejecución bajo cronograma acelerado con autorización previa del área usuaria.",
	correcta:"2"
	},
	{
	id:25,
	pregunta:"26.- El incentivo por cumplimiento anticipado puede aplicarse incluso si no se otorga conformidad formal al componente concluido.",
	op0:"Correcto, siempre que el componente esté operativo.",
	op1:"Incorrecto, se requiere necesariamente la conformidad respectiva.",
	op2:"Correcto, si el supervisor lo valida verbalmente.",
	op3:"Incorrecto, salvo que la entidad emita un informe favorable posterior.",
	correcta:"1"
	},
	{
	id:26,
	pregunta:"27.- El incentivo por respuesta rápida de la supervisión procede cuando esta atiende la totalidad de consultas y/o modificaciones dentro de un plazo igual o menor al ________ del plazo establecido en el contrato o Reglamento.",
	op0:"0.5",
	op1:"0.4",
	op2:"0.3",
	op3:"0.6",
	correcta:"0"
	},
	{
	id:27,
	pregunta:"28.- Quien es el responsable de registrar en la pladicop la prorroga de la evaluación de una LP de obras con negociación",
	op0:"La DEC",
	op1:"El jurado",
	op2:"El comité",
	op3:"El oficial de compra",
	correcta:"0"
	},
	{
	id:28,
	pregunta:"29.-Quien es el responsable de registrar en la pladicop la prorroga de la evaluación de una Subasta Inversa Electrónica",
	op0:"La DEC",
	op1:"El oficial de compra",
	op2:"El comité",
	op3:"El área usuaria",
	correcta:"1"
	},
	{
	id:29,
	pregunta:"30.- En la comparación de precios, el otorgamiento de la buena pro:",
	op0:"La DEC",
	op1:"El oficial de compra",
	op2:"El área usuaria",
	op3:"El comité",
	correcta:"1"
	},
	{
	id:30,
	pregunta:"31.- Cual de las siguientes alternativas no representa a una modalidad de contrato eficiente",
	op0:"Compra centralizada",
	op1:"Acuerdo Marco",
	op2:"Compra por encargo",
	op3:"Contrato de contingencia",
	correcta:"3"
	},
	{
	id:31,
	pregunta:"32.- Cual de los siguientes procedimientos se realiza de forma progresiva en la PLADICOP",
	op0:"Licitación de obra con precalificación y LP bienes especializados",
	op1:"Concurso de proyectos arquitectónicos y LP bienes especializados",
	op2:"Concurso de proyectos arquitectónicos y Licitación de obra con precalificación",
	op3:"Licitación Pública Abreviada y Subasta Inversa Electrónica",
	correcta:"0"
	},
	{
	id:32,
	pregunta:"33.- Cuál es la secuencia correcta de la Compra pública precomercial",
	op0:"Precalificación con diálogo competitivo/Evaluación de ofertas definitivas",
	op1:"Evaluación de ofertas definitivas/Precalificación con diálogo competitivo",
	op2:"Precalificación con diálogo competitivo/Adjudicación para la innovación",
	op3:"Evaluación de ofertas definitivas/Adjudicación para la innovación",
	correcta:"0"
	},
	{
	id:33,
	pregunta:"34.- Cuál es la secuencia correcta de una Licitación pública de obras con negociación",
	op0:"evaluación de ofertas definitivas/precalificación con negociación",
	op1:"precalificación con negociación/evaluación de ofertas definitivas",
	op2:"precalificación con dialogo competitivo/negociación",
	op3:"precalificación con dialogo competitivo/evaluación de ofertas definitivas",
	correcta:"1"
	},
	{
	id:34,
	pregunta:"35.- Cuál es la secuencia correcta de un Concurso público con diálogo competitivo",
	op0:"Evaluación de ofertas definitivas/negociación",
	op1:"precalificación con dialogo competitivo/negociación",
	op2:"Evaluación de ofertas/precalificación con dialogo competitivo",
	op3:"precalificación con dialogo competitivo/evaluación de ofertas definitivas",
	correcta:"3"
	},
	{
	id:35,
	pregunta:"36.- Marque lo incorrecto:",
	op0:"No cabe subcontratación en la contratación de evaluadores expertos o especialistas técnicos de los contratos estandarizados.",
	op1:"La contratación del servicio de supervisión para el aseguramiento de la calidad y de la seguridad, salud ocupacional y medio ambiente en la ejecución del proyecto se encuentra a cargo de la entidad contratante y se efectúa mediante el modelo de contratos estandarizados",
	op2:"Para el caso de compras centralizadas de obras, solo pueden encargarse la ejecución de obras que se ejecuten bajo el sistema de entrega de diseño y construcción o en el caso de sistemas de entrega de obras en los que se utilice contratos estandarizados de ingeniería y construcción de uso internacional.",
	op3:"La implementación de la utilización de los contratos estandarizados de ingeniería y construcción de uso internacional por parte de las entidades contratantes es de forma inmediata",
	correcta:"3"
	},
	{
	id:36,
	pregunta:"37.- ¿Qué ocurre si el contrato estandarizado elegido no cuenta con guías oficiales?",
	op0:"Debe suspenderse la ejecución hasta que se elaboren guías.",
	op1:"Se aplican únicamente las normas del Código de Ética de la entidad contratante.",
	op2:"No se consideran las buenas prácticas nacionales ni internacionales.",
	op3:"Se aplican las buenas prácticas y lo señalado en la normativa aplicable, sin perjuicio de la ausencia de guía.",
	correcta:"3"
	},
	{
	id:37,
	pregunta:"38.- Indique la afirmación incorrecta:",
	op0:"La fase de ejecución contractual se rige exclusivamente por el Reglamento de la Ley de Contrataciones.",
	op1:"La ejecución del contrato puede apoyarse en buenas prácticas nacionales e internacionales.",
	op2:"En caso de ausencia de guía oficial del contrato estandarizado, no se excluye la aplicación de buenas prácticas.",
	op3:"La confidencialidad puede ser solicitada por el proveedor en cualquier fase del proceso.",
	correcta:"0"
	},
	{
	id:38,
	pregunta:"39.- Identifique la afirmación incorrecta:",
	op0:"La normativa del Código Civil es aplicable supletoriamente durante la ejecución contractual.",
	op1:"Las entidades deben registrar toda adecuación contractual en el SEACE.",
	op2:"Se requiere evaluación integral antes de modificar un contrato estandarizado.",
	op3:"Las cláusulas técnicas deben mantener consistencia y evitar ambigüedades.",
	correcta:"1"
	},
	{
	id:39,
	pregunta:"40.- ¿Cuál es el procedimiento aplicable cuando uno de los miembros titulares del jurado no puede participar?",
	op0:"Se suspende el proceso hasta que la autoridad de la gestión administrativa designe un nuevo titular.",
	op1:"El jurado continúa con el quórum disponible, siempre que haya mayoría.",
	op2:"El suplente designado asume el lugar del titular de manera definitiva desde su incorporación.",
	op3:"Se convoca a un nuevo procedimiento para conformar un jurado alterno.",
	correcta:"2"
	},
	{
	id:40,
	pregunta:"41.- En el caso de procedimientos de selección con subetapas de negociación, ¿Cuál es la forma de tomar decisiones por parte del jurado?",
	op0:"Las decisiones deben ser adoptadas por consenso unánime de todos sus miembros.",
	op1:"Cada miembro emite voto secreto, y la decisión se adopta por mayoría absoluta.",
	op2:"Las decisiones se adoptan colegiadamente por mayoría, con participación de un representante del área usuaria.",
	op3:"Se requiere la firma previa del titular de la entidad para validar cualquier decisión del jurado.",
	correcta:"2"
	},
	{
	id:41,
	pregunta:"42.- ¿Qué rol cumple el funcionario del área usuaria cuando integra el jurado en procedimientos con negociación o diálogo competitivo?",
	op0:"Supervisa las rondas sin capacidad de voto en el jurado.",
	op1:"Representa al área usuaria y puede emitir la no objeción a las modificaciones del requerimiento.",
	op2:"Es designado como asesor técnico sin intervención directa en la toma de decisiones.",
	op3:"Actúa solo como observador para verificar el cumplimiento del requerimiento técnico.",
	correcta:"1"
	},
	{
	id:42,
	pregunta:"43.- En contratos de obras bajo el sistema de entrega de “solo construcción”, ¿Cuál es el tope que puede autorizar la autoridad de la gestión administrativa para prestaciones adicionales, sin intervención del titular ni de la Contraloría?",
	op0:"Hasta 30 %, restando los presupuestos deductivos vinculados.",
	op1:"Hasta 50 %, restando los presupuestos deductivos vinculados.",
	op2:"Hasta 15 %, restando los presupuestos deductivos vinculados.",
	op3:"Hasta 25 %, restando los presupuestos deductivos vinculados.",
	correcta:"2"
	},
	{
	id:43,
	pregunta:"44.- ¿Qué requisito adicional se exige para autorizar prestaciones mayores al 30 % del contrato en obras bajo “solo construcción”?",
	op0:"Dictamen técnico del proyectista.",
	op1:"Aprobación del OECE",
	op2:"Informe favorable del área usuaria y del supervisor.",
	op3:"Autorización previa de la Contraloría General de la República.",
	correcta:"3"
	},
	{
	id:44,
	pregunta:"45.- En caso de aprobar adicionales por deficiencias del expediente técnico, ¿qué entidades deben ser notificadas obligatoriamente?",
	op0:"OECE y MEF.",
	op1:"Contraloría y la Autoridad Nacional de Infraestructura.",
	op2:"Tribunal de Contrataciones del Estado y Contraloría General de la República.",
	op3:"Contraloría General de la República.",
	correcta:"2"
	},
	{
	id:45,
	pregunta:"46.- ¿Qué límite máximo aplicable existe para modificaciones en contratos estandarizados de ingeniería y construcción de uso internacional?",
	op0:"No deben exceder el 25 % del valor del contrato aprobado.",
	op1:"No deben superar el 50 % del valor consignado en el expediente técnico o del contrato.",
	op2:"Solo pueden modificarse mediante adendas visadas por la DGA.",
	op3:"Pueden modificarse sin límite si están sustentadas técnicamente.",
	correcta:"1"
	},
	{
	id:46,
	pregunta:"47.- ¿Qué plazo tiene el supervisor para pronunciarse sobre el nuevo programa presentado por el contratista?",
	op0:"5 días calendario.",
	op1:"3 días hábiles.",
	op2:"5 días hábiles.",
	op3:"7 días hábiles.",
	correcta:"2"
	},
	{
	id:47,
	pregunta:"48.- ¿Qué sucede si la entidad no observa el nuevo programa de ejecución dentro del plazo establecido?",
	op0:"Se entiende que el programa fue rechazado automáticamente.",
	op1:"El programa se considera aprobado tácitamente.",
	op2:"El supervisor debe emitir una nueva evaluación técnica.",
	op3:"El contratista debe reformularlo con el área usuaria.",
	correcta:"1"
	},
	{
	id:48,
	pregunta:"49.- ¿Qué uso queda expresamente excluido para el nuevo programa de ejecución?",
	op0:"Evaluación de desempeño del contratista.",
	op1:"Sustento para ampliación de plazo o reajustes contractuales.",
	op2:"Estimación del avance financiero del proyecto.",
	op3:"Base para modificar el contrato de obra.",
	correcta:"1"
	},
	{
	id:49,
	pregunta:"50.- Cuando la intervención económica es por causa atribuible al incumplimiento del contratista, qué sucede ",
	op0:"este no pierde el derecho de incremento del valor de contrato por perdida de equilibro económico",
	op1:"el pago por una indemnización por resolución",
	op2:"el pago por reajuste en las valorizaciones",
	op3:"el reconocimiento de mayores gastos generales",
	correcta:"2"
	},
	{
	id:50,
	pregunta:"51.- ¿Qué sucede con el derecho del contratista a reclamar indemnización si la intervención económica se debe a su incumplimiento?",
	op0:"Puede demandarla ante el Tribunal de Contrataciones del Estado.",
	op1:"Solo tiene derecho a reclamar indemnización si supera el 80% de avance.",
	op2:"Pierde todo derecho a indemnización o compensación por parte de la entidad.",
	op3:"Puede exigirla si acredita los daños conforme al expediente técnico.",
	correcta:"2"
	},
	{
	id:51,
	pregunta:"52.- En la municipalidad LOS GENIOS. necesita adquirir un equipo especializado para calibración industrial. En la estrategia de contratación se ha determinado llevar a cabo un procedimiento no competitivo por proveedor único. El responsable de aprobar este procedimiento es:",
	op0:"Alcalde/indelegable",
	op1:"Alcalde/delegable",
	op2:"Gerencia Municipal/delegable",
	op3:"Gerencia Municipal/indelegable",
	correcta:"3"
	},
	{
	id:52,
	pregunta:"53.- ¿Qué característica define a la autoridad de la gestión administrativa en una empresa del Estado?",
	op0:"Es el directorio en pleno, con funciones operativas.",
	op1:"Es la gerencia general y puede delegar sus funciones con acuerdo del directorio.",
	op2:"Es la gerencia general, y su facultad de aprobar procedimientos no competitivos es indelegable.",
	op3:"Es el directorio en pleno, y su facultad de aprobar procedimientos no competitivos es indelegable.",
	correcta:"2"
	},
	{
	id:53,
	pregunta:"54.- En el caso de contratación directa por servicios personalísimos, ¿quién debe aprobar el procedimiento según el Reglamento?",
	op0:"El titular de la entidad, con autorización del área usuaria.",
	op1:"La autoridad de la gestión administrativa, de forma delegable.",
	op2:"El comité de selección con informe favorable de la DGA.",
	op3:"La autoridad de la gestión administrativa, de forma indelegable.",
	correcta:"3"
	},
	{
	id:54,
	pregunta:"55.- La Universidad Nacional de Moquegua requiere contratar directamente a un experto internacional para dictar un curso de posgrado en nanotecnología. El servicio es considerado personalísimo. ¿Quién aprueba esta contratación?",
	op0:"Rector / indelegable",
	op1:"Vicerrector académico / delegable",
	op2:"Rector / delegable",
	op3:"Decano de facultad / delegable",
	correcta:"0"
	},
	{
	id:55,
	pregunta:"56.- Un ministerio convocó una LP obras, luego decidió declarar la nulidad el procedimiento por errores en la evaluación de ofertas. Quien es el responsable de declarar la nulidad",
	op0:"El ministro",
	op1:"El secretario general",
	op2:"El jefe de la OGA",
	op3:"El viceministro",
	correcta:"1"
	},
	{
	id:56,
	pregunta:"57.- Un contratista no renovó la Garantía de Fiel Cumplimiento (GFC) antes de su vencimiento, pero presenta una nueva carta fianza tres días después de expirado su plazo. ¿Cuál debe ser la actuación de la entidad ante esta situación?",
	op0:"Ejecutar la carta fianza vencida debido a la falta de renovación oportuna.",
	op1:"Aceptar la nueva carta fianza presentada fuera de plazo y, si el contratista lo solicita, devolver la anterior.",
	op2:"Rechazar la nueva carta fianza por haber sido presentada fuera del plazo establecido.",
	op3:"Ejecutar la carta fianza vencida y mantener retenido el monto hasta la finalización del contrato.",
	correcta:"0"
	},
	{
	id:57,
	pregunta:"58.- Respecto a la ejecución del Plan Anual de Contrataciones (PAC), marque la alternativa correcta:",
	op0:"El PAC puede ser modificado para incorporar nuevos procedimientos de selección.",
	op1:"Si una necesidad desaparece, el procedimiento previsto se ejecuta igualmente.",
	op2:"Si el procedimiento no está contemplado en el PAC, puede convocarse con autorización del área usuaria.",
	op3:"El PAC solo puede modificarse al cierre del año fiscal.",
	correcta:"2"
	},
	{
	id:58,
	pregunta:"59.- Se requiere realizar una contratación de gerentes de proyectos para los contratos estandarizados. En ese contexto, debe convocarse un:",
	op0:"Concurso público con diálogo competitivo / jurado",
	op1:"Concurso público abreviado para la contratación de expertos y gerentes de proyectos/comité",
	op2:"Concurso público abreviado para la contratación de expertos y gerentes de proyectos/jurado",
	op3:"Concurso público con precalificación / comité",
	correcta:"1"
	},
	{
	id:59,
	pregunta:"60.- ¿En cuál de las siguientes contrataciones no aplica la bonificación del 10% del puntaje total?",
	op0:"Consultorías",
	op1:"Bienes",
	op2:"Servicio en general",
	op3:"Obras",
	correcta:"1"
	},
	{
	id:60,
	pregunta:"61.- ¿Cómo debe proceder la entidad si los bienes o servicios entregados no cumplen manifiestamente con las condiciones y características ofertadas?",
	op0:"La entidad debe recibirlos y posteriormente solicitar la subsanación",
	op1:"La entidad debe realizar un acta anotando la ocurrencia",
	op2:"La entidad debe recibirlos y aplicar directamente la penalidad",
	op3:"La entidad no debe aceptar la recepción; por tanto, se considera la prestación no efectuada",
	correcta:"3"
	},
	{
	id:61,
	pregunta:"62.- ¿Cuál de las siguientes no es una función de la Junta de Resolución de Disputas?",
	op0:"Asistir a las partes en la prevención de desacuerdos",
	op1:"Las que se establecen en el contrato tripartito",
	op2:"Emitir decisiones vinculantes respecto a las controversias",
	op3:"Opinión consultiva vinculante de algún aspecto contractual",
	correcta:"3"
	},
	{
	id:62,
	pregunta:"63.- En caso el postor ganador pierda la buena pro en un Concurso Público, ¿cuánto tiempo debe esperar la entidad para invitar al postor que quedó en segundo lugar?",
	op0:"5 días hábiles",
	op1:"8 días hábiles",
	op2:"5 días",
	op3:"8 días",
	correcta:"1"
	},
	{
	id:63,
	pregunta:"64.- En relación con la aprobación y publicación del Plan Anual de Contrataciones (PAC), señale la afirmación correcta:",
	op0:"El PAC se publica en el SEACE en un plazo de 10 días hábiles",
	op1:"El PAC se aprueba a los 15 días de aprobado el PIA",
	op2:"El PAC se publica en el SEACE en un plazo de 20 días hábiles",
	op3:"El PAC se aprueba a los 10 días de aprobado el PIA",
	correcta:"1"
	},
	{
	id:64,
	pregunta:"65.- Respecto al pago de valorizaciones en los contratos de obra bajo !diseño y construcción!, MARQUE lo incorrecto:",
	op0:"La entidad evalúa las valorizaciones hasta el último mes en que se presenten",
	op1:"Las valorizaciones son presentadas directamente por el contratista para su pago",
	op2:"Las bases pueden establecer plazos distintos de valorización, siempre que se contemple el procedimiento de pago",
	op3:"Las valorizaciones se efectúan mensualmente y se consideran pagos a cuenta",
	correcta:"1"
	},
	{
	id:65,
	pregunta:"66.- En la Compra Pública de Innovación, ¿qué procedimientos pueden ser empleados?",
	op0:"Asociación para la innovación / Licitación Pública de bienes especializados",
	op1:"Compra pública precomercial / Licitación Pública de bienes especializados",
	op2:"Asociación para la innovación / Compra pública precomercial",
	op3:"Licitación Pública con diálogo competitivo / Compra pública precomercial",
	correcta:"2"
	},
	{
	id:66,
	pregunta:"67.- Si se convoca una ___________, puede realizarse diálogo competitivo; pero si se convoca una ________, no es posible realizar diálogo competitivo:",
	op0:"Asociación para la innovación / Licitación Pública de bienes especializados",
	op1:"Licitación Pública de bienes especializados / Asociación para la innovación",
	op2:"Licitación Pública de obras con negociación / Asociación para la innovación",
	op3:"Licitación Pública de bienes especializados / Licitación Pública de obras con negociación",
	correcta:"0"
	},
	{
	id:67,
	pregunta:"68.- Una Entidad desea convocar un Concurso de Proyectos Arquitectónicos y Urbanísticos; sin embargo, este no se utiliza este procedimiento para contratar:",
	op0:"Obras bajo diseño y construcción",
	op1:"Consultoría de obra bajo el sistema de formulación y diseño",
	op2:"Obra con diseño, construcción, operación y mantenimiento",
	op3:"Consultoría de obra bajo el sistema de entrega de solo diseño o de formulación y diseño",
	correcta:"2"
	},
	{
	id:68,
	pregunta:"69.- Las contrataciones estratégicas se caracterizan por tener:",
	op0:"Alta cuantía / alto riesgo",
	op1:"Baja cuantía / bajo riesgo",
	op2:"Baja cuantía / alto riesgo",
	op3:"Alta cuantía / bajo riesgo",
	correcta:"1"
	},
	{
	id:69,
	pregunta:"70.- Un proceso con alta cuantía y bajo nivel de riesgo se clasifica como:",
	op0:"Crítico",
	op1:"Rutinario",
	op2:"Estratégico",
	op3:"Operacional",
	correcta:"3"
	},
	{
	id:70,
	pregunta:"71.- Quien es competente para aprobar las ampliaciones de plazo de bienes y servicios",
	op0:"El funcionario o servidor que suscribió el contrato",
	op1:"La AGA",
	op2:"Titular de la Entidad",
	op3:"La DEC",
	correcta:"1"
	},
	{
	id:71,
	pregunta:"72.- Cuando se adquiere un bien y se requiere que el proveedor lo instale y lo deje operativo, ¿qué sistema de entrega corresponde aplicar?",
	op0:"Gestión de instalaciones",
	op1:"Llave en mano",
	op2:"Llave en mano con mantenimiento",
	op3:"Suministro con comodato",
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
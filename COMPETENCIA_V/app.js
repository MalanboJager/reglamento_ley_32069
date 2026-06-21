//base de datos local de preguntas

const bd_juego = [
	{
	id:0,
	pregunta:"1.- En un escenario en el que no existe acuerdo entre las partes para la fecha de reinicio del contrato suspendido. ¿Qué se debe realizar?",
	op0:"El contrato se considera resuelto por imposibilidad de ejecución.",
	op1:"El contratista tiene derecho a definir unilateralmente la fecha de reinicio.",
	op2:"La entidad contratante está facultada para determinar la fecha de reinicio de la ejecución contractual.",
	op3:"Se debe convocar a una junta de resolución de disputas para determinar el reinicio.",
	correcta:"2"
	},
	{
	id:1,
	pregunta:"2.- Durante la suspensión del plazo contractual, ¿Qué tipo de actividades están permitidas entre las partes?",
	op0:"Solo actividades técnicas relacionadas con el reinicio de obra.",
	op1:"Cualquier actividad prevista en el contrato, siempre que se pacte por adenda.",
	op2:"Actividades propias de la gestión del contrato, como valorizaciones pendientes o trámites de adicionales, siempre que ello resulte posible y no contravengan el Reglamento",
	op3:"Ninguna actividad contractual está permitida hasta que se reactive formalmente la ejecución.",
	correcta:"2"
	},
	{
	id:2,
	pregunta:"3.- En caso se detecten omisiones o errores en el expediente técnico que impactan el Programa de Ejecución, ¿Qué procedimiento habilita la normativa para resguardar la correcta ejecución contractual?",
	op0:"La resolución unilateral del contrato por parte del contratista.",
	op1:"La modificación inmediata del expediente técnico, sin suspensión del contrato.",
	op2:"El acuerdo entre las partes para suspender el plazo de ejecución hasta que la entidad realice las adecuaciones necesarias.",
	op3:"La contratación de un supervisor externo para validar el expediente original.",
	correcta:"2"
	},
	{
	id:3,
	pregunta:"4.- Si un contratista no recibe el pago de dos valorizaciones consecutivas, ¿Qué medida puede adoptar conforme a la normativa vigente?",
	op0:"Puede resolver el contrato de manera automática por incumplimiento de la entidad.",
	op1:"Debe solicitar un adelanto para cubrir los pagos pendientes y continuar con la ejecución.",
	op2:"Puede requerir a la entidad el pago de al menos una valorización, y si no se cumple, proceder a suspender el plazo de ejecución anotándolo en el cuaderno de incidencias.",
	op3:"Debe continuar la obra hasta que se cumpla con la totalidad del pago, sin suspender la ejecución.",
	correcta:"2"
	},
	{
	id:4,
	pregunta:"5.- Ante la falta de pago de dos valorizaciones consecutivas, si el contratista activa la suspensión, ¿desde qué momento se considera iniciada dicha suspensión según la norma?",
	op0:"Desde la fecha en que se emitió la valorización impaga.",
	op1:"Desde la notificación formal de suspensión remitida a la entidad.",
	op2:"Desde el día siguiente a la anotación efectuada por el residente en el cuaderno de obra.",
	op3:"Desde que la Contraloría toma conocimiento del incumplimiento.",
	correcta:"2"
	},
	{
	id:5,
	pregunta:"6.- Si durante la evaluación de ofertas se detecta que un postor ha incluido un documento falso como parte de su propuesta, ¿Qué principio fundamental del procedimiento de contratación ha sido transgredido?",
	op0:"Principio de veracidad",
	op1:"Principio de causalidad",
	op2:"Principio de transparencia",
	op3:"Principio de legalidad",
	correcta:"0"
	},
	{
	id:6,
	pregunta:"7.- Durante una contratación pública, un funcionario exige requisitos no esenciales que limitan la participación de proveedores. ¿Qué principio se vulnera principalmente?",
	op0:"Legalidad",
	op1:"Igualdad de trato",
	op2:"Libertad de concurrencia",
	op3:"Competencia",
	correcta:"2"
	},
	{
	id:7,
	pregunta:"8.- La entidad contratante publica las bases de un proceso con criterios claros, accesibles y comprensibles para todos los postores. ¿Qué principio se está respetando?",
	op0:"Transparencia y facilidad de uso",
	op1:"Presunción de veracidad",
	op2:"Causalidad",
	op3:"Eficacia y eficiencia",
	correcta:"0"
	},
	{
	id:8,
	pregunta:"9.- En un concurso público abreviado, ¿Cuál es el plazo para presentar apelación contra los actos dictados con anterioridad al otorgamiento de la buena pro?",
	op0:"Ocho días hábiles",
	op1:"Cinco días hábiles",
	op2:"Cinco días calendario",
	op3:"Tres días hábiles",
	correcta:"1"
	},
	{
	id:9,
	pregunta:"10.- Las contrataciones clasificadas como de baja cuantía y alto riesgo se denominan ______, mientras que aquellas de alta cuantía y bajo riesgo se denominan ______.",
	op0:"rutinarias / estratégicas",
	op1:"críticas / operacionales",
	op2:"operacionales / rutinarias",
	op3:"estratégicas / críticas",
	correcta:"1"
	},
	{
	id:10,
	pregunta:"11.- ¿Cuál de las siguientes situaciones NO justica clasificar una contratación como de alto riesgo?",
	op0:"Un procedimiento similar fue declarado desierto hace dos años.",
	op1:"Se presentan frecuentemente solo dos postores en bienes.",
	op2:"El bien tiene disponibilidad limitada en el mercado.",
	op3:"Existe baja competencia recurrente en servicios.",
	correcta:"1"
	},
	{
	id:11,
	pregunta:"12.- Una entidad planea contratar un servicio especializado en monitoreo satelital en zonas rurales. En los últimos dos años, procesos similares contaron con un promedio de tres postores. ¿Esta contratación puede ser considerada de alto riesgo?",
	op0:"No, porque el promedio supera los límites establecidos.",
	op1:"Sí, porque se trata de un servicio y el límite es de tres postores.",
	op2:"No, porque se trata de un servicio y el límite es de dos postores",
	op3:"Sí, por tratarse de una tecnología especializada.",
	correcta:"2"
	},
	{
	id:12,
	pregunta:"13.- Si una contratación es para un bien con distribución exclusiva en el país, ¿Qué tipo de criterio permite clasificarla como de alto riesgo?",
	op0:"El criterio de necesidad funcional",
	op1:"El criterio de riesgo técnico",
	op2:"El criterio de limitada disponibilidad en el mercado",
	op3:"El criterio de financiamiento internacional",
	correcta:"2"
	},
	{
	id:13,
	pregunta:"14.- La estrategia de contratación de las contrataciones .......................... se orienta principalmente en la atención oportuna y la reducción de costos, mientras que la de los ........................... se orienta principalmente a disminuir los riesgos en el proceso de contratación.",
	op0:"rutinarias y operacionales/estratégicos y críticos",
	op1:"estratégicos y críticos/rutinarias y operacionales",
	op2:"rutinarias y críticos/estratégicos y operacionales",
	op3:"operacionales y críticos/rutinarias y estratégicos",
	correcta:"0"
	},
	{
	id:14,
	pregunta:"15.- Cuando el promedio de postores en procesos de selección anteriores para obras similares ha sido inferior a tres, ¿Cómo debe clasificarse la nueva contratación?",
	op0:"Como básica, si la inversión es de bajo riesgo.",
	op1:"Como avanzada, por insuficiente evidencia de competencia previa.",
	op2:"Como rutinaria, siempre que no supere el 10% del PAC.",
	op3:"Como crítica, si se trata de obra pública con financiamiento internacional.",
	correcta:"1"
	},
	{
	id:15,
	pregunta:"16.- Una IOARR se clasifica automáticamente como contratación ________, independientemente de su localización, complejidad o especialidad.",
	op0:"avanzada",
	op1:"básica",
	op2:"crítica",
	op3:"estratégica",
	correcta:"1"
	},
	{
	id:16,
	pregunta:"17.- La Dirección Regional de Educación de Loreto contratará la construcción de una institución educativa modular. El diseño es estándar y ya ejecutó proyectos similares. En años previos tuvo más de 3 postores en procesos similares. No es saldo de obra.",
	op0:"Básica, por cumplir los requisitos de experiencia y participación de postores.",
	op1:"Avanzada, porque se ubica en zona de difícil acceso.",
	op2:"Rutinaria, por tratarse de infraestructura básica.",
	op3:"Crítica, dado el impacto educativo del proyecto.",
	correcta:"0"
	},
	{
	id:17,
	pregunta:"18.- ¿Cuál es la finalidad de la vigilancia tecnológica en el marco de la CPI?",
	op0:"Evaluar si el proveedor tiene antecedentes penales.",
	op1:"Verificar si la tecnología propuesta cumple con ISO 9001.",
	op2:"Determinar si la solución innovadora ya ha sido desarrollada o se encuentra en fase de prueba en otros contextos.",
	op3:"Establecer si la entidad puede replicar la solución sin contratar.",
	correcta:"2"
	},
	{
	id:18,
	pregunta:"19.- La consulta al mercado en la CPI es de carácter ________ y debe incorporar la ________ del requerimiento como parte del proceso.",
	op0:"orientativo / aprobación técnica",
	op1:"básico / informe de precios",
	op2:"obligatorio / herramienta de difusión",
	op3:"exploratorio / ficha de evaluación",
	correcta:"2"
	},
	{
	id:19,
	pregunta:"20.- ¿Cuál es la afirmación correcta sobre la estructura de la cuantía en una contratación CPI?",
	op0:"Solo debe contemplarse el costo estimado de la solución innovadora final.",
	op1:"Se compone de un rubro fijo por proveedor para la fase de I+D y de un costo estimado de la solución resultante.",
	op2:"Se determina con base únicamente en las tarifas vigentes del mercado.",
	op3:"Debe incluir los costos de vigilancia tecnológica y homologación documental.",
	correcta:"1"
	},
	{
	id:20,
	pregunta:"21.- ¿Cuál es la afirmación incorrecta sobre el rol de la vigilancia tecnológica en la CPI?",
	op0:"Es obligatoria para identificar desarrollos similares en otros mercados.",
	op1:"Se utiliza para determinar si una solución ya existe o está en etapa de desarrollo.",
	op2:"Solo aplica si se trata de contrataciones superiores a 50 UIT.",
	op3:"Permite reducir el riesgo de contratar soluciones obsoletas.",
	correcta:"2"
	},
	{
	id:21,
	pregunta:"22.- ¿Cuál de las siguientes condiciones justica técnicamente que una necesidad pública sea abordada mediante una Contratación Pública de Innovación (CPI)?",
	op0:"Cuando la solución requerida no puede ser adquirida mediante catálogos electrónicos o Acuerdos Marco vigentes.",
	op1:"Cuando la solución solicitada requiere una combinación de tecnologías probadas bajo normas internacionales.",
	op2:"Cuando no existe una solución disponible en el mercado o esta necesita ajustes que impliquen innovación funcional o técnica.",
	op3:"Cuando los proveedores actuales presentan propuestas con valores agregados pero sin innovación certificada.",
	correcta:"2"
	},
	{
	id:22,
	pregunta:"23.- ¿Cuál de las siguientes entidades está habilitada para contratar bajo la modalidad de CPI, de acuerdo con el marco normativo vigente?",
	op0:"Gobiernos regionales con certificación de innovación reconocida por CONCYTEC.",
	op1:"Empresas del Estado bajo el ámbito de FONAFE.",
	op2:"Universidades públicas y ministerios, incluidos sus programas y proyectos adscritos.",
	op3:"Organismos autónomos con capacidad presupuestal certificada por el MEF.",
	correcta:"2"
	},
	{
	id:23,
	pregunta:"24.- La Municipalidad de Huarmey contrató a la empresa Planifica Perú SAC exclusivamente para realizar la evaluación y formulación del proyecto de construcción de puentes en zona rural. Una vez concluida esta etapa y aprobado el proyecto por Invierte.pe, contrató por separado a Infraestructura Consultores EIRL para desarrollar el expediente técnico.",
	op0:"Diseño y construcción secuencial",
	op1:"Solo formulación o solo diseño",
	op2:"Entrega integrada de proyecto o alianza",
	op3:"Formulación y diseño",
	correcta:"1"
	},
	{
	id:24,
	pregunta:"25.- En qué proceso de contratación no se realiza la segmentación de contrataciones",
	op0:"Licitación Pública Abreviada",
	op1:"Licitación Pública con negociación",
	op2:"Compra Pública de Innovación",
	op3:"Licitación Pública por MDA",
	correcta:"3"
	},
	{
	id:25,
	pregunta:"26.- Si la interacción con el mercado no es obligatoria, estamos frente a:",
	op0:"Una obra bajo la modalidad de costo reembolsable",
	op1:"Contrato menor",
	op2:"Mecanismo diferenciado de adquisición",
	op3:"Una prestación de servicios de pago por consumo",
	correcta:"2"
	},
	{
	id:26,
	pregunta:"27.- ¿Qué distingue al requerimiento bajo MDA frente a los requerimientos convencionales?",
	op0:"Está orientado exclusivamente a equipos médicos de alta complejidad.",
	op1:"Incorpora criterios de gestión sanitaria y enfoque en resultados clínicos.",
	op2:"Permite omitir el contrato estándar de la normativa general.",
	op3:"Exige validación previa de la Dirección General de Medicamentos, Insumos y Drogas (DIGEMID).",
	correcta:"1"
	},
	{
	id:27,
	pregunta:"28.- El análisis del impacto del tipo de MDA sobre la contratación debe realizarse durante la ejecución del contrato",
	op0:"Correcto. El impacto real solo puede medirse con base en resultados operativos.",
	op1:"Incorrecto. Este análisis es un componente obligatorio dentro de la estrategia de contratación",
	op2:"Correcto. Porque el tipo de MDA se define luego de la adjudicación.",
	op3:"Incorrecto. Debe hacerse al momento de registrar el PAC en el CMN, antes de toda actuación preparatoria.",
	correcta:"1"
	},
	{
	id:28,
	pregunta:"29.- Determinar puntos no negociables del requerimiento durante la negociación forma parte de la estrategia de contratación.",
	op0:"Correcto. Se busca preservar condiciones técnicas esenciales en el proceso.",
	op1:"Incorrecto. En la negociación todo aspecto del requerimiento puede modificarse.",
	op2:"Correcto. Pero únicamente si lo aprueba la Oficina General de Asesoría Jurídica.",
	op3:"Incorrecto. Dicha evaluación es propia del jurado evaluador y no de la estrategia.",
	correcta:"0"
	},
	{
	id:29,
	pregunta:"30.- Las garantías y adelantos deben definirse únicamente durante la ejecución contractual, no en la estrategia de contratación.",
	op0:"Correcto. Es parte de la gestión del contrato y no de la planificación previa.",
	op1:"Incorrecto. Las condiciones sobre garantías y adelantos deben establecerse anticipadamente en la estrategia de contratación.",
	op2:"Correcto. A menos que se trate de adquisiciones con financiamiento externo.",
	op3:"Incorrecto. Solo si se trata de tecnología con patente internacional.",
	correcta:"1"
	},
	{
	id:30,
	pregunta:"31.- ¿Cuál es el criterio técnico para calcular el monto del incentivo por culminación anticipada?",
	op0:"El porcentaje ahorrado del gasto general fijo multiplicado por el número de días adelantados.",
	op1:"El valor del gasto general variable diario por los días de diferencia entre el plazo contractual vigente y el plazo real de ejecución.",
	op2:"Un monto fijo equivalente al 2% del contrato por cada componente anticipado.",
	op3:"El valor del gasto general variable diario por los días de diferencia entre el plazo contractual original y el plazo real de ejecución.",
	correcta:"1"
	},
	{
	id:31,
	pregunta:"32.- ¿Cuál es el límite máximo permitido para el incentivo por excelencia ambiental y de seguridad?",
	op0:"Hasta el 2% del monto contractual vigente al momento de cierre financiero.",
	op1:"Hasta el 1% del valor contractual total, incluyendo adicionales aprobados.",
	op2:"Hasta el 1% del monto del contrato original, independientemente de modificaciones posteriores.",
	op3:"Hasta el 3% si se cumple con la totalidad de estándares internacionales.",
	correcta:"2"
	},
	{
	id:32,
	pregunta:"33.- ¿Cuándo procede el incentivo por respuesta rápida de la supervisión?",
	op0:"Cuando se responden las consultas del contratista dentro del plazo establecido por la ley.",
	op1:"Cuando se resuelven todas las consultas y modificaciones contractuales en un plazo igual o menor al 50% del legalmente previsto.",
	op2:"Cuando se atienden las observaciones del área usuaria dentro de los primeros 10 días calendario.",
	op3:"Cuando el supervisor actúa bajo la aprobación directa del titular de la entidad.",
	correcta:"1"
	},
	{
	id:33,
	pregunta:"34.- La estrategia de contratación:",
	op0:"Analiza la posibilidad de modificar la fuente de financiamiento",
	op1:"La elección del tipo de evaluador",
	op2:"Los perfiles y requisitos para ser experto",
	op3:"Verificar que el proveedor es el único con habilitación legal o con capacidad de brindar el servicio o con capacidad para proveer bienes en el momento de la contratación. En caso de inaplicación temporal de los impedimentos.",
	correcta:"3"
	},
	{
	id:34,
	pregunta:"35.- Qué se registra en el PAC. Señale lo incorrecto",
	op0:"Las contrataciones de gobierno a gobierno; así como sus contratos derivados",
	op1:"Los procedimiento desiertos siempre y cuando persista la necesidad y presupuesto",
	op2:"Las modalidades de compra pública eficiente: Contratos menores, compras por encargo, compras corporativas, centralizadas",
	op3:"Los procedimiento competitivo y no competitivos, detallando el ítem, modalidad, descripción, cuantía y mes estimado",
	correcta:"2"
	},
	{
	id:35,
	pregunta:"36.- La Municipalidad Distrital de San Agustín requiere contratar un servicio estandarizado que ya se ofrece ampliamente en el mercado. El requerimiento no exige condiciones técnicas particulares, se ejecutará en un plazo de seis (6) días calendario y su valor estimado es de S/ 90,000. En atención a estas características, ¿qué tipo de procedimiento corresponde aplicar?",
	op0:"Comparación de precios",
	op1:"Contrato menor",
	op2:"Concurso Público Abreviado",
	op3:"Subasta Inversa Electrónica",
	correcta:"0"
	},
	{
	id:36,
	pregunta:"37.- ¿Cuál de las siguientes afirmaciones es falsa respecto al procedimiento de comparación de precios?",
	op0:"Las bases utilizadas deben ajustarse al formato aprobado por la DGA.",
	op1:"El oficial de compra debe realizar la publicación en la Pladicop.",
	op2:"La entidad contratante debe formar un comité de evaluación antes de invitar a proveedores.",
	op3:"Se requiere como mínimo dos ofertas válidas para evaluar económicamente.",
	correcta:"2"
	},
	{
	id:37,
	pregunta:"38.- ¿Cuál de los siguientes procedimientos de selección se implementa de manera progresiva en la Pladicop y requiere comunicado del OECE para su aplicación?",
	op0:"Licitación pública con negociación y concurso público con precalificación",
	op1:"Compra corporativa y compra por encargo",
	op2:"Concurso público y subasta inversa electrónica",
	op3:"Comparación de precios y licitación pública",
	correcta:"0"
	},
	{
	id:38,
	pregunta:"39.- ¿Qué procedimientos debe contar con habilitación previa en la Pladicop para poder ser utilizados por las entidades contratantes?",
	op0:"Licitación pública y concurso público",
	op1:"Licitación de obras con negociación y compra pública precomercial",
	op2:"Licitación pública para mecanismos diferenciados de adquisición (MDA) y Concurso público abreviado para la contratación de expertos y gerentes de proyecto",
	op3:"Licitación pública para mecanismos diferenciados de adquisición (MDA) y Concurso de proyectos arquitectónicos y urbanísticos",
	correcta:"1"
	},
	{
	id:39,
	pregunta:"40.- Cuál es la secuencia correcta de un Concurso de proyectos arquitectónicos y urbanísticos",
	op0:"Evaluación de ofertas técnicas y económicas/Otorgamiento de la buena pro",
	op1:"precalificación con dialogo competitivo/evaluación de ofertas definitivas",
	op2:"Precalificación con dialogo competitivo/negociación",
	op3:"Evaluación de ofertas definitivas/negociación",
	correcta:"0"
	},
	{
	id:40,
	pregunta:"41.- Cuál es la secuencia correcta de una SIE",
	op0:"revisión de los requisitos de calificación/ evaluación económica.",
	op1:"evaluación económica/revisión de los requisitos de calificación",
	op2:"evaluación técnica/ evaluación económica.",
	op3:"evaluación económica/evaluación técnica",
	correcta:"1"
	},
	{
	id:41,
	pregunta:"42.- Cuál es la secuencia correcta de la Licitación pública para mecanismos diferenciados de adquisición (MDA)",
	op0:"Negociación/Evaluación de ofertas definitivas",
	op1:"Evaluación de ofertas definitivas/Negociación",
	op2:"Precalificación con dialogo competitivo/negociación",
	op3:"Evaluación de ofertas/precalificación con dialogo competitivo",
	correcta:"0"
	},
	{
	id:42,
	pregunta:"43.- ¿Cuál es el rol de la Dirección General de Abastecimiento (DGA) en relación con los contratos estandarizados de uso internacional?",
	op0:"Emitir informes técnicos para cada contratación que involucre estos contratos.",
	op1:"Aprobar directamente cada modificación contractual durante la ejecución.",
	op2:"Establecer, mediante resolución directoral, los tipos de contratos estandarizados que pueden usarse.",
	op3:"Emitir directivas internas obligatorias para cada entidad que los aplique.",
	correcta:"2"
	},
	{
	id:43,
	pregunta:"44.- Señale la afirmación correcta:",
	op0:"Las entidades pueden redactar libremente cláusulas nuevas si el contrato estandarizado no las prevé.",
	op1:"Las cláusulas de subcontratación deben ser definidas expresamente dentro del contrato estandarizado.",
	op2:"La adecuación del contrato no requiere evaluación técnica si solo se cambia el idioma.",
	op3:"Las entidades están autorizadas a ignorar las guías oficiales si afectan sus políticas internas.",
	correcta:"1"
	},
	{
	id:44,
	pregunta:"45.- La DGA, mediante ______, establece los tipos de contratos estandarizados aplicables a obras, consultorías, servicios de mantenimiento vial y gestión de instalaciones, en función del ______ de entrega.",
	op0:"decreto supremo – presupuesto",
	op1:"resolución directoral – sistema",
	op2:"informe técnico – cronograma",
	op3:"resolución ministerial – modelo",
	correcta:"1"
	},
	{
	id:45,
	pregunta:"46.- Durante la ejecución contractual, se deben considerar las buenas prácticas nacionales e internacionales, así como lo señalado en las ______ de los contratos estandarizados, salvo que estas no ______.",
	op0:"guías – se hayan publicado",
	op1:"recomendaciones – sean obligatorias",
	op2:"directivas – estén vigentes",
	op3:"guías – existan",
	correcta:"3"
	},
	{
	id:46,
	pregunta:"47.- Cual es el objetivo del nuevo programa de ejecución acelerado",
	op0:"Analizar la afectación de la ruta critica",
	op1:"Determinar el tramite de la solicitudes de ampliación de plazo",
	op2:"solo se toma en cuenta para el control de los avances físicos reprogramados de la obra",
	op3:"Mantener actualizado el calendario de ejecución de obra",
	correcta:"2"
	},
	{
	id:47,
	pregunta:"48.- ¿Qué situación debe verificarse para que el supervisor ordene la presentación de un nuevo programa de ejecución de obra?",
	op0:"Que el avance real sea menor al 90% del acumulado programado o exista retraso en la ruta crítica.",
	op1:"Que el avance físico de obra supere el 80% pero existan demoras administrativas.",
	op2:"Que la valorización ejecutada sea menor al 80% de la programada o haya atraso en la ruta crítica.",
	op3:"Que el contratista no haya presentado informes semanales de avance.",
	correcta:"2"
	},
	{
	id:48,
	pregunta:"49.- ¿Qué entidad establece directivas para la aplicación de la intervención económica?",
	op0:"La Contraloría General de la República.",
	op1:"El OECE",
	op2:"La DGA",
	op3:"El MEF",
	correcta:"2"
	},
	{
	id:49,
	pregunta:"50.- ¿Cuál de las siguientes condiciones no es obligatoria para el inicio del plazo de ejecución en obras bajo el sistema de solo construcción?",
	op0:"Entrega del expediente técnico actualizado.",
	op1:"Designación del supervisor de obra.",
	op2:"Entrega del adelanto directo, incluso si no fue solicitado.",
	op3:"Entrega total o parcial del terreno.",
	correcta:"2"
	},
	{
	id:50,
	pregunta:"51.- ¿Qué ocurre si la entidad no cumple con las condiciones de inicio dentro de los 10 días de requerimiento por parte del contratista?",
	op0:"El contratista puede suspender unilateralmente el contrato.",
	op1:"El contratista puede solicitar la resolución del contrato o el resarcimiento de daños.",
	op2:"La entidad tiene 30 días más para cumplir, según establece el reglamento.",
	op3:"La ejecución se diere automáticamente con aprobación del supervisor.",
	correcta:"1"
	},
	{
	id:51,
	pregunta:"52.- ¿Cuál es el efecto del diferimiento del inicio del plazo de ejecución sobre el adelanto directo si aún no ha sido entregado?",
	op0:"Se entrega con normalidad, sin importar la nueva fecha.",
	op1:"Se cancela automáticamente, sin derecho a reclamo.",
	op2:"Se suspende su solicitud y entrega, reanudándose 15 días antes del nuevo inicio.",
	op3:"Se sustituye por un adelanto adicional condicionado.",
	correcta:"2"
	},
	{
	id:52,
	pregunta:"53.- ¿Qué opción constituye un supuesto para diferir el inicio en el sistema “solo construcción”?",
	op0:"Falta de disponibilidad presupuestal de la entidad.",
	op1:"Omisiones detectadas en el expediente técnico por parte del contratista.",
	op2:"Cambios en el comité de recepción de obra.",
	op3:"No presentación de la carta fianza por el contratista.",
	correcta:"1"
	},
	{
	id:53,
	pregunta:"54.- La Municipalidad Distrital de San Gregorio llevó a cabo un procedimiento de selección para adquirir 50 sillas ergonómicas para su nuevo centro administrativo. Luego de otorgar la buena pro a la empresa Mobiliaria Lima SAC, la entidad advirtió que por un error en el levantamiento de necesidades solo se requerían 35 sillas. Ante ello, decidió consignar en el contrato que la cantidad a adquirir sería 35 en lugar de 50, comunicando esta decisión al proveedor por llamada telefónica, quien manifestó estar de acuerdo. Señale la alternativa correcta:",
	op0:"La entidad puede realizar cambios en la redacción del contrato a fines de satisfacer sus necesidades.",
	op1:"La entidad actuó correctamente y llegó a comunicar el cambio al contratista.",
	op2:"La entidad está impedida de realizar dicho cambio.",
	op3:"El contratista está obligado a suscribir el contrato con el cambio.",
	correcta:"2"
	},
	{
	id:54,
	pregunta:"55.- El Gobierno Regional de Ayahuanco realizó un procedimiento de selección para adquirir 10 impresoras multifuncionales de alta gama para sus unidades de gestión educativa. Tras la adjudicación a la empresa Tecnosoluciones EIRL, la entidad detectó que su presupuesto solo alcanzaba para comprar 6 impresoras. Decidió reducir la cantidad en el contrato y comunicó este cambio mediante correo electrónico sin modificar el requerimiento original en el SEACE. El proveedor no respondió. Señale la alternativa correcta:",
	op0:"La entidad puede ajustar la cantidad contratada según su disponibilidad presupuestal.",
	op1:"La modificación vía correo electrónico constituye un medio válido de notificación contractual.",
	op2:"La entidad no puede modificar unilateralmente el requerimiento adjudicado.",
	op3:"El proveedor está obligado a aceptar la cantidad ajustada por tratarse de una contratación menor.",
	correcta:"2"
	},
	{
	id:55,
	pregunta:"56.- El Programa Nacional de Biotecnología necesita adquirir reactivos especializados para investigación en genética, con certificación de Concytec. Se aplica la causal de investigación, desarrollo e innovación para procedimiento no competitivo. ¿Quién aprueba esta contratación?",
	op0:"Director ejecutivo / indelegable",
	op1:"Gerente de operaciones / delegable",
	op2:"Director del proyecto / delegable",
	op3:"Gerente de operaciones / indelegable",
	correcta:"0"
	},
	{
	id:56,
	pregunta:"57.- Un gobernador regional convocó un CP para el servicio de mantenimiento, pero luego decidió cancelarlo por caso fortuito o fuerza mayor. El responsable de efectuar la cancelación es:",
	op0:"Gobernador regional/delegable",
	op1:"Gerente regional/delegable",
	op2:"Gobernador regional/indelegable",
	op3:"Gerente regional/indelegable",
	correcta:"1"
	},
	{
	id:57,
	pregunta:"58.- Señale cuál de los siguientes supuestos no permite considerar que la buena pro ha quedado administrativamente firme:",
	op0:"Se publica en la Pladicop la resolución que otorga o confirma la buena pro.",
	op1:"Se presenta un recurso de apelación que no es publicado en la Pladicop.",
	op2:"El recurso de apelación es declarado como no presentado y se publica en la Pladicop.",
	op3:"Ha operado la denegatoria ficta del recurso de apelación.",
	correcta:"1"
	},
	{
	id:58,
	pregunta:"59.- En los contratos de bienes y servicios, ¿cuándo procede la constitución de un fideicomiso como garantía de el cumplimiento?",
	op0:"Cuando el plazo de ejecución contractual sea mayor a 90 días calendario.",
	op1:"Cuando el plazo contractual exceda los 120 días calendario.",
	op2:"Si el contrato supera los 80 días de vigencia.",
	op3:"Solo si el plazo contractual es mayor a 150 días calendario.",
	correcta:"0"
	},
	{
	id:59,
	pregunta:"60.- Quién es responsable técnico de la elaboración del expediente técnico de obra (ETO)?",
	op0:"Un ingeniero civil colegiado, habilitado y especializado, designado por la entidad.",
	op1:"El gerente del proyecto.",
	op2:"El jefe de la oficina de elaboración del expediente técnico.",
	op3:"El contratista que ejecutará la obra.",
	correcta:"2"
	},
	{
	id:60,
	pregunta:"61.- Tiene la competencia original para aprobar el expediente de contratación:",
	op0:"El área usuaria",
	op1:"La AGA",
	op2:"El titular",
	op3:"El consejo directivo",
	correcta:"1"
	},
	{
	id:61,
	pregunta:"62.- Se requiere contratar una consultoría de obra bajo el sistema de entrega formulación y diseño. En ese contexto, debe convocarse un:",
	op0:"Concurso público con diálogo competitivo / jurado",
	op1:"Concurso público con precalificación / comité",
	op2:"Concurso público con diálogo competitivo / comité",
	op3:"Concurso público con precalificación / jurado",
	correcta:"0"
	},
	{
	id:62,
	pregunta:"63.- Se trate de la contratación de evaluadores expertos por un monto de S/.85,000. En ese contexto, debe convocarse un:",
	op0:"Concurso público abreviado para la contratación de expertos y gerentes de proyectos/comité",
	op1:"Concurso público abreviado para la contratación de expertos y gerentes de proyectos/jurado",
	op2:"Concurso público con diálogo competitivo / jurado",
	op3:"Concurso público con diálogo competitivo / comité",
	correcta:"0"
	},
	{
	id:63,
	pregunta:"64.- La empresa A comunica a la entidad que cederá su posición contractual a la empresa B respecto al servicio de limpieza contratado, argumentando que se encuentra en proceso de liquidación inscrito en SUNARP. Ante ello ¿Qué se debería realizar?",
	op0:"Que se rechace la cesión propuesta porque no está permitida en la norma",
	op1:"Que se acepte ya que la empresa A no puede ejecutar la prestación",
	op2:"Que se exija la formalización de la cesión y que la empresa B sustituya la garantía de el cumplimiento",
	op3:"Que se continúe con el cumplimiento de la prestación bajo apercibimiento de resolución de contrato",
	correcta:"3"
	},
	{
	id:64,
	pregunta:"65.- ¿En cuál de los siguientes supuestos no corresponde convocar una LPA para bienes?",
	op0:"Cuando se declara desierta una LP por MDA",
	op1:"Cuando se trata de bienes especializados",
	op2:"Cuando se declara desierta una LP con diálogo competitivo",
	op3:"Cuando la cuantía es igual o menor a S/ 485,000",
	correcta:"0"
	},
	{
	id:65,
	pregunta:"66.- El plazo mínimo para la presentación de ofertas en una Comparación de Precios es de ________, contados desde la convocatoria.",
	op0:"6d/h",
	op1:"5d/h",
	op2:"4d/h",
	op3:"3d/h",
	correcta:"3"
	},
	{
	id:66,
	pregunta:"67.- ¿En qué plazo debe pronunciarse la entidad sobre el pedido de sustitución de personal clave?",
	op0:"5D/H",
	op1:"5 días",
	op2:"10d/h",
	op3:"10 días",
	correcta:"0"
	},
	{
	id:67,
	pregunta:"68.- Los requisitos que debe cumplir el participante para elevar el pliego de absolución de consultas y observaciones, se encuentran en:",
	op0:"Directiva de la DGA",
	op1:"Directiva del OECE",
	op2:"Directiva PERU COMPRAS",
	op3:"Directiva MEF",
	correcta:"1"
	},
	{
	id:68,
	pregunta:"69.- La AGA de la Entidad declara la nulidad de un contrato por el hecho de que el contratista ha presentado documentos falsos durante la ejecución del contrato. Es correcto la actuación de la Entidad, por que.",
	op0:"No, porque en todo caso debió declarar la resolución de contrato",
	op1:"No, porque la declaración de la nulidad lo debe realizar el titular de la Entidad",
	op2:"Sí, porque la presentación de documentos falsos es causal de nulidad de contrato",
	op3:"Sí, en la medida que haya efectuado el análisis de costo beneficio de declarar la nulidad",
	correcta:"0"
	},
	{
	id:69,
	pregunta:"70.- No es una causal de nulidad de contrato",
	op0:"suscribir con un proveedor impedido de contratar con el Estado",
	op1:"encontrarse en trámite un recurso de apelación",
	op2:"Prescindiendo del procedimiento de selección no competitivo respectivo",
	op3:"No verificar el cumplimiento de los requisitos de calificación",
	correcta:"3"
	},
	{
	id:70,
	pregunta:"71.- La Municipalidad Provincial de Santa Clara contrató a la empresa TecnoSoluciones SAC para el suministro de repuestos por un monto de S/ 300,000. Durante la ejecución contractual, la entidad aprobó una reducción de prestaciones equivalente al 10% del monto del contrato. Frente a esta modificación contractual, ¿cuál de las siguientes acciones es procedente?",
	op0:"La entidad puede disponer la reducción del plazo de entrega",
	op1:"El contratista debe suscribir la adenda correspondiente",
	op2:"La entidad debe exigir la modificación de la garantía de el cumplimiento para el pago",
	op3:"El contratista puede solicitar la reducción de la garantía de el cumplimiento",
	correcta:"3"
	},
	{
	id:71,
	pregunta:"72.- La Municipalidad Distrital de Villa Unión está próxima a iniciar la construcción de una biblioteca pública, cuya ejecución tiene un presupuesto superior a los S/ 5 millones. La entidad ya ha suscrito el contrato con la empresa Constructora El Progreso SAC como ejecutora de la obra. En este contexto, ¿a quién debe contratar obligatoriamente la entidad antes de iniciar la ejecución de la obra?",
	op0:"Al proyectista que elaboró el expediente técnico",
	op1:"Al residente de obra designado por el contratista",
	op2:"Al supervisor",
	op3:"Al plantel técnico de la empresa ejecutora",
	correcta:"2"
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
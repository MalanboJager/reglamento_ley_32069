//base de datos local de preguntas

const bd_juego = [
	{
	id:0,
	pregunta:"1.- ¿Cuál de las siguientes afirmaciones describe correctamente el carácter de la disposición sobre el orden de aplicación del derecho en la solución de controversias arbitrales según la Ley N.º 32069?",
	op0:"Es una recomendación de carácter general para los árbitros.",
	op1:"Es una disposición sujeta a la voluntad de las partes del arbitraje.",
	op2:"Es una norma de carácter facultativo para los tribunales arbitrales.",
	op3:"Es una disposición de orden público, obligatoria para los tribunales arbitrales.",
	correcta:"3"
	},
	{
	id:1,
	pregunta:"2.- En un arbitraje en contrataciones públicas, si existe conflicto entre una norma de derecho privado y una disposición contenida en el Reglamento de la Ley de Contrataciones del Estado, ¿cuál debe prevalecer?",
	op0:"La norma de derecho privado, por tratarse de una relación contractual.",
	op1:"La norma del Reglamento de la Ley de Contrataciones, por ser parte del ordenamiento especial.",
	op2:"La que resulte más favorable para la entidad contratante.",
	op3:"La que acuerden las partes en el contrato.",
	correcta:"1"
	},
	{
	id:2,
	pregunta:"3.- ¿Qué órgano o funcionario es competente para declarar la nulidad de un contrato?",
	op0:"Administrador del Contrato",
	op1:"Titular de la Entidad",
	op2:"La AGA",
	op3:"La DEC",
	correcta:"2"
	},
	{
	id:3,
	pregunta:"4.- Si un contrato se suspende por causa imputable a la entidad contratante, ¿cuál es el procedimiento habilitante para formalizar dicha suspensión conforme a la normativa vigente?",
	op0:"Basta con el acuerdo entre las partes mediante acta de suspensión.",
	op1:"Se requiere la autorización previa de la autoridad de la gestión administrativa.",
	op2:"Debe emitirse una resolución del titular de la entidad.",
	op3:"No se puede suspender en ningún caso si la causa es atribuible a la entidad.",
	correcta:"1"
	},
	{
	id:4,
	pregunta:"5.- ¿En qué casos puede procederse con la suspensión del plazo de ejecución de un contrato de obra?",
	op0:"Cuando se presenten causas no atribuibles al contratista que generen retrasos o un ritmo lento en el avance de la obra.",
	op1:"Cuando ocurran eventos no atribuibles a las partes que interrumpan la ejecución de las prestaciones contractuales.",
	op2:"Cuando existan causas atribuibles a la entidad que generen dificultades administrativas o técnicas en la supervisión.",
	op3:"Cuando la suspensión sea solicitada por el contratista para salvaguardar sus intereses económicos.",
	correcta:"1"
	},
	{
	id:5,
	pregunta:"6.- En el contrato para la ejecución de la obra “Mejoramiento del Sistema de Agua Potable y Alcantarillado del distrito de Santa Rosa”, suscrito con la empresa Consorcio Integral del Norte, reiniciado el plazo de ejecución, la ………. comunica ………. la modificación de las fechas del programa de ejecución actualizado y de los calendarios correspondientes, respetando los términos de la suspensión.",
	op0:"Supervisora Santa Lucía / al residente de obra",
	op1:"Entidad contratante / Consorcio Integral del Norte",
	op2:"Consorcio Integral del Norte / a la entidad contratante",
	op3:"Residente de obra / al supervisor de la entidad",
	correcta:"1"
	},
	{
	id:6,
	pregunta:"7.- Una entidad contratante acepta la sustitución de un servicio por otro de características superiores, sustentado por el área usuaria y con opinión favorable de la DEC. ¿En qué momento se entiende aprobada dicha modificación, según la normativa?",
	op0:"Con la emisión del informe técnico del área usuaria.",
	op1:"Con la aprobación del expediente por parte del titular de la entidad.",
	op2:"Con la suscripción de la adenda al contrato",
	op3:"Con la notificación del contratista al supervisor del contrato.",
	correcta:"2"
	},
	{
	id:7,
	pregunta:"8.- En una Municipalidad se convoca una Concurso Público Abreviado para el servicio de pintado, cuya cuantía es de S/ 180,000. Si un postor impugna, quién resuelve el recurso de apelación",
	op0:"Tribunal de Contrataciones Públicas",
	op1:"El titular de la Entidad",
	op2:"La Autoridad de Gestión Administrativa, delegable",
	op3:"La Autoridad de Gestión Administrativa, indelegable",
	correcta:"3"
	},
	{
	id:8,
	pregunta:"9.- En un ministerio, se declaró la nulidad de la Licitación Pública Abreviada para la adquisición de termómetros, cuya cuantía asciende a S/. 350,000. Si un postor impugna, quién es el responsable de resolver dicho recurso",
	op0:"El titular de la Entidad, facultad indelegable",
	op1:"El tribunal de Contrataciones Públicas",
	op2:"La Autoridad de Gestión Administrativa, facultad delegable",
	op3:"La Autoridad de Gestión Administrativa, facultad indelegable",
	correcta:"1"
	},
	{
	id:9,
	pregunta:"10.- ¿Cuál es el plazo para apelar los resultados de la implementación o extensión de un catálogo electrónico de acuerdo marco?",
	op0:"Ocho días calendarios desde la publicación de resultados",
	op1:"Cinco días hábiles desde la publicación en SEACE",
	op2:"Ocho días hábiles desde la publicación de resultados",
	op3:"No existe un plazo",
	correcta:"2"
	},
	{
	id:10,
	pregunta:"11.- Complete el enunciado: Una contratación que involucra bienes de fácil disponibilidad, bajo valor y sin antecedentes de procesos desiertos debe clasificarse como:",
	op0:"Estratégica",
	op1:"Operacional",
	op2:"Crítica",
	op3:"Rutinaria",
	correcta:"3"
	},
	{
	id:11,
	pregunta:"12.- ¿Cuál de las siguientes situaciones justificaría correctamente la clasificación de una contratación como de alto riesgo en bienes?",
	op0:"El procedimiento es para bienes recurrentes con proveedores habituales en el mercado.",
	op1:"El procedimiento anterior fue declarado desierto y el promedio de postores en los últimos dos años fue igual a tres",
	op2:"No se presentó ningún postor en la convocatoria anterior, pero la nueva convocatoria es para un bien distinto.",
	op3:"Se postularon más de cuatro empresas, pero solo una cumplió requisitos técnicos.",
	correcta:"1"
	},
	{
	id:12,
	pregunta:"13.- En la evaluación de contrataciones similares, se encuentra que para un determinado bien, el promedio de postores fue 2.8 en los dos años anteriores. ¿Este dato es suficiente para considerar el nuevo procedimiento como de alto riesgo?",
	op0:"No, porque el promedio debe ser menor a 2.",
	op1:"Sí, si se trata de servicios especializados.",
	op2:"Sí, si se trata de bienes, ya que el promedio es menor o igual a tres.",
	op3:"No, porque la diferencia decimal no es significativa.",
	correcta:"2"
	},
	{
	id:13,
	pregunta:"14.- En el marco de la segmentación, ¿Qué elemento descalifica automáticamente una contratación para ser considerada básica?",
	op0:"Que sea una IOARR con expedientes simplificados.",
	op1:"Que la ejecución esté prevista para zonas de difícil acceso.",
	op2:"Que la contratación corresponda al saldo de obra de un contrato anterior.",
	op3:"La inversión involucrada sea de bajo grado de innovación y de una complejidad baja o media",
	correcta:"2"
	},
	{
	id:14,
	pregunta:"15.- En el contexto de obras por solo construcción, una consulta al mercado avanzada permite principalmente:",
	op0:"Evitar responsabilidad administrativa de los funcionarios",
	op1:"Corregir a tiempo deficiencias del expediente técnico",
	op2:"priorizar el sinceramiento y actualización de la cuantía del rubro de ejecución de obra",
	op3:"Actualizar la cuantía de la contratación",
	correcta:"1"
	},
	{
	id:15,
	pregunta:"16.- La diferencia clave entre la consulta al mercado para solo construcción y aquella con diseño es:",
	op0:"El enfoque: detección de errores técnicos versus sinceramiento del presupuesto",
	op1:"El enfoque: sinceramiento del presupuesto versus detección de errores técnicos",
	op2:"La modalidad de ejecución y el monto contractual",
	op3:"Ambos buscan corregir y/o actualizar la cuantía de la contratación",
	correcta:"0"
	},
	{
	id:16,
	pregunta:"17.- La DEC coordina con el área usuaria durante la ________, y también se debe acudir a fuentes de ________ para validar la solución.",
	op0:"evaluación económica / financiamiento externo",
	op1:"verificación documental / contratación internacional",
	op2:"interacción con el mercado / vigilancia tecnológica",
	op3:"conformidad del requerimiento / licenciamiento especializado",
	correcta:"2"
	},
	{
	id:17,
	pregunta:"18.- ¿Cuál es incorrecta respecto a la consulta al mercado en CPI?",
	op0:"Se realiza siempre como consulta avanzada.",
	op1:"Puede realizarse como consulta básica si la entidad tiene experiencia previa.",
	op2:"Incluye la difusión obligatoria del requerimiento.",
	op3:"Tiene por objeto identificar soluciones innovadoras para la necesidad pública.",
	correcta:"1"
	},
	{
	id:18,
	pregunta:"19.- Con quién debe coordinar el área usuaria o la ATE para determinar el requerimiento",
	op0:"Con los compradores públicos",
	op1:"Con la AGA",
	op2:"Con la DEC",
	op3:"Con la OGA",
	correcta:"2"
	},
	{
	id:19,
	pregunta:"20.- El Gobierno Regional de Moquegua requiere elaborar un expediente técnico para un nuevo hospital. Convoca un procedimiento para contratar a una sola firma que formule el proyecto desde la idea hasta la evaluación, y que, una vez obtenido el código SNIP, continúe con la elaboración del expediente técnico. En caso no obtenga la viabilidad, el contrato se terminará anticipadamente",
	op0:"Gestión del diseño y construcción de agencia",
	op1:"Ejecución integral de obras",
	op2:"Diseño-construcción bajo alianza estratégica",
	op3:"Formulación y diseño",
	correcta:"3"
	},
	{
	id:20,
	pregunta:"21.- En el marco del MDA, los servicios asociados al uso de la tecnología sanitaria deben:",
	op0:"Referirse únicamente al mantenimiento preventivo y correctivo de equipos biomédicos.",
	op1:"Considerar el enfoque clínico integral tanto a nivel individual como poblacional.",
	op2:"Basarse en los protocolos médicos definidos por el MINSA, sin posibilidad de adaptación.",
	op3:"Excluirse del requerimiento si son brindados por terceros distintos al proveedor.",
	correcta:"1"
	},
	{
	id:21,
	pregunta:"22.- En el caso de que exista más de una tecnología sanitaria para tratar una misma patología ¿Qué principio rige la decisión final de adjudicación?",
	op0:"Principio de valor por dinero, considerando el análisis costo-efectividad para la población de pacientes.",
	op1:"Principio de libre concurrencia, priorizando al postor que cumpla los mínimos técnicos",
	op2:"Principio de proporcionalidad, considerando el balance entre complejidad clínica y logros sanitarios.",
	op3:"Principio de eficiencia clínica, con evaluación de impacto epidemiológico.",
	correcta:"0"
	},
	{
	id:22,
	pregunta:"23.- Durante la estrategia de contratación para un MDA, la entidad debe identificar al titular del Registro Sanitario de la tecnología sanitaria",
	op0:"Correcto. Esta identificación permite definir adecuadamente los requisitos de calificación para la fase de selección.",
	op1:"Incorrecto. El Registro Sanitario solo se requiere en la ejecución contractual.",
	op2:"Incorrecto. Esta identificación se realiza exclusivamente durante la negociación.",
	op3:"Correcto. Pero solo si se trata de dispositivos médicos y no de medicamentos.",
	correcta:"0"
	},
	{
	id:23,
	pregunta:"24.- ¿Cuál de los siguientes incentivos requiere obligatoriamente el establecimiento de indicadores iniciales en el contrato?",
	op0:"Cumplimiento anticipado",
	op1:"Excelencia en estándares ambientales y de seguridad",
	op2:"Respuesta rápida de la supervisión",
	op3:"Todos los incentivos mencionados",
	correcta:"1"
	},
	{
	id:24,
	pregunta:"25.- Si un postor interpone un recurso de apelación sin adjuntar las pruebas instrumentales exigidas, ¿Qué corresponde realizar?",
	op0:"Se considera no presentado",
	op1:"Se rechaza el recurso",
	op2:"Se otorga 2 días",
	op3:"Se declara inadmisible",
	correcta:"2"
	},
	{
	id:25,
	pregunta:"26.- Si la mesa de partes detecta que el recurso de apelación fue presentado antes del otorgamiento de la buena pro, debe:",
	op0:"Otorgar dos días hábiles al postor para reingresar su recurso.",
	op1:"Admitir el recurso si este fue presentado con garantía.",
	op2:"Rechazar el recurso con la sola verificación de la fecha en Pladicop.",
	op3:"Publicar la nulidad del procedimiento en Pladicop sin necesidad de pronunciamiento.",
	correcta:"2"
	},
	{
	id:26,
	pregunta:"27.- ¿Cuál es la consecuencia de que un recurso de apelación sea interpuesto contra un acto no impugnable?",
	op0:"Es declarado inadmisible.",
	op1:"Se remite al TCE para pronunciamiento excepcional.",
	op2:"Es declarado improcedente de manera directa.",
	op3:"Se devuelve al impugnante para reformulación del petitorio.",
	correcta:"2"
	},
	{
	id:27,
	pregunta:"28.- Quien es el responsable de registrar en la padicop la prorroga de la evaluación de un Concurso público abreviado para la contratación de expertos y gerentes de proyecto",
	op0:"El jurado",
	op1:"La DEC",
	op2:"El oficial de compra",
	op3:"El comité",
	correcta:"3"
	},
	{
	id:28,
	pregunta:"29.- Quien es el responsable de registrar en la padicop la prorroga de la evaluación de una Compra Pública Precomercial",
	op0:"El jurado",
	op1:"La DEC",
	op2:"El comité",
	op3:"El oficial de Compra",
	correcta:"1"
	},
	{
	id:29,
	pregunta:"30.- Respecto a las contrataciones incluidas en el PAC, ¿cuál de las siguientes afirmaciones es correcta?",
	op0:"Solo deben incluirse los procedimientos de selección competitivos",
	op1:"El PAC debe contemplar todas las modalidades de compra pública eficiente",
	op2:"Se deben registrar todos los procedimientos competitivos y no competitivos a convocarse durante el ejercicio fiscal, incluyendo ítems, modalidad y cuantía.",
	op3:"El PAC únicamente contempla las contrataciones bajo el régimen general de la Ley de Contrataciones.",
	correcta:"2"
	},
	{
	id:30,
	pregunta:"31.- En relación con las contrataciones declaradas desiertas o nulas, indique lo correcto:",
	op0:"No pueden incluirse nuevamente en el PAC en ningún supuesto.",
	op1:"Solo se incluyen si el ítem fue adjudicado parcialmente y no requiere nuevo procedimiento.",
	op2:"Pueden incluirse nuevamente si persiste la necesidad y se cuenta con el presupuesto correspondiente.",
	op3:"La inclusión de dichos procedimientos es automática tras la declaratoria de nulidad.",
	correcta:"2"
	},
	{
	id:31,
	pregunta:"32.- La Entidad requiere adquirir 400 sillas metálicas para ambientes de espera. Estas sillas están disponibles en el mercado, no requieren diseño especial, serán entregadas en tres días hábiles y el monto estimado asciende a S/ 96,000. ¿Qué procedimiento corresponde aplicar, según el marco normativo?",
	op0:"Licitación pública abreviada, por tratarse de bienes estandarizados sin personalización técnica.",
	op1:"Subasta inversa electrónica, al tratarse de bienes de entrega inmediata.",
	op2:"Comparación de precios, al cumplirse simultáneamente las condiciones de estandarización, plazo y cuantía.",
	op3:"Contratación directa, considerando la inmediatez de la entrega.",
	correcta:"2"
	},
	{
	id:32,
	pregunta:"33.- En relación con la convocatoria en comparación de precios, ¿Cuál es el número mínimo de proveedores a invitar?",
	op0:"4",
	op1:"2",
	op2:"3",
	op3:"5",
	correcta:"2"
	},
	{
	id:33,
	pregunta:"34.- Quienes pueden contratar bajo la modalidad de compra pública de innovación",
	op0:"Los ministerios y las universidades públicas",
	op1:"Los gobiernos regionales y empresas del estado",
	op2:"Los ministerios y gobiernos regionales",
	op3:"Las universidades y gobiernos regionales",
	correcta:"0"
	},
	{
	id:34,
	pregunta:"35.- Cual es la secuencia correcta en una SIE",
	op0:"habilitación/Evaluación económica",
	op1:"Evaluación económica/habilitación",
	op2:"Evaluación económica/Requisitos de calificación",
	op3:"Requisitos de calificación/evaluación económica",
	correcta:"2"
	},
	{
	id:35,
	pregunta:"36.- ¿Qué debe incluir la estrategia de contratación respecto al uso de contratos estandarizados?",
	op0:"La validación del contrato por parte de la OSCE previa a su uso.",
	op1:"Un análisis de costos comparado con otros modelos de contrato.",
	op2:"La evaluación de la capacidad técnica de la entidad para gestionar el contrato.",
	op3:"La contratación de un consultor externo para adaptar el contrato.",
	correcta:"2"
	},
	{
	id:36,
	pregunta:"37.- Según el Reglamento, ¿Qué normativa rige prioritariamente la fase de ejecución contractual de los contratos estandarizados?",
	op0:"Solo el Código Civil en su integridad.",
	op1:"El contrato suscrito, la Ley en lo que corresponda y el capítulo correspondiente del Reglamento y supletoriamente por el Código Civil.",
	op2:"El contrato suscrito, la Ley en lo que corresponda, y el Reglamento.",
	op3:"La ley General de Contrataciones Públicas y su Reglamento",
	correcta:"1"
	},
	{
	id:37,
	pregunta:"38.- Según el Reglamento, ¿Qué normativa rige prioritariamente la fase de selección en los contratos estandarizados?",
	op0:"Ley General de Contrataciones Públicas y los capítulos correspondientes del Reglamento.",
	op1:"Ley General de Contrataciones Públicas y los capítulos correspondientes del Reglamento, y supletoriamente el código civil",
	op2:"El contratos suscrito, Ley General de Contrataciones Públicas y los capítulos correspondientes del Reglamento, y supletoriamente el código civil",
	op3:"El contrato internacional suscrito",
	correcta:"0"
	},
	{
	id:38,
	pregunta:"39.- Para modificar un contrato estandarizado de ingeniería y construcción de uso internacional, debe realizarse una ______ que asegure la consistencia con las cláusulas predefinidas y evite la ______ de redacción.",
	op0:"evaluación legal – duplicidad",
	op1:"evaluación comparativa – vaguedad",
	op2:"evaluación integral – ambigüedad",
	op3:"revisión técnica – redundancia",
	correcta:"2"
	},
	{
	id:39,
	pregunta:"40.- ¿Cuál es la participación que puede tener el jurado durante la elaboración de bases?",
	op0:"El jurado está obligado a aprobar las bases antes de su publicación.",
	op1:"Solo participa si forma parte del área usuaria.",
	op2:"Puede emitir opinión y sugerencias si la DEC así lo solicita.",
	op3:"Participa de forma obligatoria cuando el valor estimado supera las 500 UIT.",
	correcta:"2"
	},
	{
	id:40,
	pregunta:"41.- ¿Qué responsabilidad específica tiene la DEC durante la etapa de presentación y evaluación de ofertas?",
	op0:"Elaborar el acta de evaluación final y publicarla en el SEACE.",
	op1:"Realizar la evaluación económica bajo supervisión del jurado.",
	op2:"Recepcionar y remitir las ofertas a los jurados, y otorgar la buena pro.",
	op3:"Consolidar los puntajes asignados por cada miembro del jurado.",
	correcta:"2"
	},
	{
	id:41,
	pregunta:"42.- Reiniciado el plazo de ejecución del contrato, la ……. comunica …… la modificación de las fechas del del programa de ejecución actualizado y de los calendarios correspondientes que respeten los términos de la suspensión.",
	op0:"Entidad contratante/contratista",
	op1:"Supervisor/residente",
	op2:"Contratista/entidad contratante",
	op3:"Residente/supervisor",
	correcta:"0"
	},
	{
	id:42,
	pregunta:"43.- En obras bajo los sistemas de diseño y construcción, El Titular de la Entidad, puede autorizar prestaciones adicionales hasta un ……. con el debido sustento técnico y legal. Excepcionalmente, puede autorizar la ejecución de prestaciones adicionales hasta un …… previa autorización de la CGR:",
	op0:"30%/50%",
	op1:"25%/40%",
	op2:"40%/50%",
	op3:"15%/50%",
	correcta:"2"
	},
	{
	id:43,
	pregunta:"44.- ¿Qué sucede si se presenta un recurso de apelación contra una decisión de la Contraloría sobre un adicional de obra?",
	op0:"La propia Contraloría resuelve en un plazo máximo de treinta días hábiles.",
	op1:"La propia Contraloría resuelve en un plazo máximo de quince días hábiles.",
	op2:"La apelación es resuelta por la DGA.",
	op3:"El Tribunal de Contrataciones lo resuelve en 15 días.",
	correcta:"0"
	},
	{
	id:44,
	pregunta:"45.- ¿Qué ocurre si una entidad se niega a corregir errores u omisiones en el expediente técnico?",
	op0:"Se solicita la intervención del supervisor de obra.",
	op1:"Se informa al Tribunal de Contrataciones",
	op2:"Se informa al Tribunal de Contrataciones y a la Contraloría",
	op3:"Se autoriza la resolución del contrato de forma inmediata.",
	correcta:"2"
	},
	{
	id:45,
	pregunta:"46.- ¿Qué tipo de contrataciones están exceptuadas de los límites porcentuales establecidos para adicionales?",
	op0:"Contratos de asociaciones público-privadas.",
	op1:"Adquisiciones con financiamiento externo.",
	op2:"Contratos vinculados a tecnologías sanitarias para enfermedades raras y de alto costo.",
	op3:"Contratos celebrados con organismos internacionales.",
	correcta:"2"
	},
	{
	id:46,
	pregunta:"47.- Señale la afirmación correcta:",
	op0:"En obras bajo “solo construcción”, pueden autorizarse adicionales de hasta 25 % sin autorización del titular.",
	op1:"El titular puede aprobar hasta el 50 % de adicionales sin participación de la Contraloría.",
	op2:"En bienes y servicios, las reducciones también pueden alcanzar hasta el 25 % del contrato.",
	op3:"Solo el proyectista puede solicitar prestaciones adicionales.",
	correcta:"2"
	},
	{
	id:47,
	pregunta:"48.- ¿Qué efecto tiene la intervención económica sobre los derechos del contratista en relación con los mayores gastos generales?",
	op0:"Puede reclamarlos siempre que los acredite con facturas.",
	op1:"Se reconocen únicamente si son aprobados por la DGA.",
	op2:"No tiene derecho a mayores gastos generales si la intervención fue por su incumplimiento.",
	op3:"Se dieren hasta la liquidación final de la obra.",
	correcta:"2"
	},
	{
	id:48,
	pregunta:"49.- ¿Cuál de los siguientes supuestos permite el diferimiento de la fecha de inicio del plazo de ejecución por acuerdo entre las partes?",
	op0:"Falta de disponibilidad de maquinaria por parte del contratista.",
	op1:"Designación tardía del residente por razones ajenas al contratista.",
	op2:"Estacionalidad climática que impida el inicio.",
	op3:"Incumplimiento en la suscripción del contrato tripartito por el contratista.",
	correcta:"2"
	},
	{
	id:49,
	pregunta:"50.- ¿Qué ocurre si el adelanto directo se garantiza mediante fideicomiso?",
	op0:"La entidad debe entregar el adelanto al finalizar el primer mes.",
	op1:"No es condición para el inicio del plazo de ejecución.",
	op2:"Se entrega únicamente luego del inicio del plazo de ejecución.",
	op3:"Se reemplaza por un adelanto en materiales.",
	correcta:"1"
	},
	{
	id:50,
	pregunta:"51.- Señale la afirmación correcta:",
	op0:"El contratista puede solicitar compensación del 10% por incumplimiento de condiciones de inicio.",
	op1:"En fast track, el inicio de obra se produce con la aprobación de entregables parciales.",
	op2:"El acta de reinicio se firma unilateralmente por la entidad.",
	op3:"El supervisor puede reemplazar al contratista en caso de incumplimiento.",
	correcta:"1"
	},
	{
	id:51,
	pregunta:"52.- La empresa estatal Servicios Logísticos del Sur S.A.C. necesita adquirir un equipo especializado para calibración industrial. En la estrategia de contratación se ha determinado llevar a cabo un procedimiento no competitivo por proveedor único. El responsable de aprobar este procedimiento es:",
	op0:"Gerente general / delegable",
	op1:"Directorio / delegable",
	op2:"Directorio / indelegable",
	op3:"Gerente general / indelegable",
	correcta:"3"
	},
	{
	id:52,
	pregunta:"53.- El Ministerio de Educación debe adquirir con urgencia materiales escolares ante una situación de desabastecimiento que impide la distribución a las UGEL. Se opta por contratación directa por de desabastecimiento. ¿Quién aprueba este procedimiento?",
	op0:"Ministro / indelegable",
	op1:"Secretario general / delegable",
	op2:"Secretario general / indelegable",
	op3:"Ministro / delegable",
	correcta:"3"
	},
	{
	id:53,
	pregunta:"54.- En las bases integradas incluyen todas las modificaciones adoptadas durante el transcurso de las:",
	op0:"LP MDA / LPA",
	op1:"Rondas de diálogo competitivo/LP MDA",
	op2:"Rondas de negociación/rondas de dialogo competitivo",
	op3:"Rondas de negociación/LP MDA",
	correcta:"2"
	},
	{
	id:54,
	pregunta:"55.- ¿Cuál de las siguientes situaciones genera que la buena pro adquiera la condición de administrativamente firme en un procedimiento de selección pública?",
	op0:"Cuando transcurre el plazo para interponer recurso de apelación sin que se haya presentado ninguno.",
	op1:"Cuando se comunica al contratista que su oferta ha sido seleccionada, aunque el recurso aún esté pendiente.",
	op2:"Cuando se publica en la Pladicop que el recurso de apelación ha sido declarado improcedente.",
	op3:"Cuando el comité de selección confirma la buena pro mediante acta interna no publicada.",
	correcta:"2"
	},
	{
	id:55,
	pregunta:"56.- ¿En cuál de los siguientes procedimientos de selección no puede perfeccionarse el contrato mediante la emisión de una orden de compra o de servicio?",
	op0:"SIE",
	op1:"LPA",
	op2:"Comparación de Precios",
	op3:"Adjudicación Simplificada",
	correcta:"3"
	},
	{
	id:56,
	pregunta:"57.- El comité de selección, antes de la convocatoria, detecta que el expediente de contratación no contiene el documento que acredite la disponibilidad presupuestal. ¿Ante esta situación, a qué unidad debe solicitar formalmente dicha previsión?",
	op0:"DEC",
	op1:"Oficina de administración",
	op2:"Oficina de presupuesto o la que haga sus veces",
	op3:"Comprador público",
	correcta:"2"
	},
	{
	id:57,
	pregunta:"58.- En una contratación por encargo para la ejecución de una obra, los convenios que establecen obligaciones, responsabilidades y compromisos de las partes deben estar suscritos por:",
	op0:"Titular de la entidad encargante / AGA de la encargada",
	op1:"AGA de ambas partes",
	op2:"AGA de la entidad encargante / Titular de la encargada",
	op3:"Titulares de ambas partes",
	correcta:"1"
	},
	{
	id:58,
	pregunta:"59.- Se requiere un servicio especializado de gestión de instalaciones, con una cuantía mayor a S/ 2 000 000,00 (dos millones y 00/100 soles)",
	op0:"Concurso público con precalificación /comité",
	op1:"Concurso público con diálogo competitivo / comité",
	op2:"Concurso público con precalificación /comité o jurado",
	op3:"Concurso público con diálogo competitivo / jurado",
	correcta:"2"
	},
	{
	id:59,
	pregunta:"60.- Cuando una municipalidad requiere adquirir un bien especializado y la estrategia de contratación determina el uso de una compra por encargo a un organismo internacional, el responsable de su aprobación es:",
	op0:"El consejo municipal, indelegable",
	op1:"El alcalde, delegable",
	op2:"El alcalde, indelegable",
	op3:"El consejo municipal, delegable",
	correcta:"0"
	},
	{
	id:60,
	pregunta:"61.- Salvo las excepciones indicadas en la Ley ¿desde cuándo se computa el inicio del arbitraje?",
	op0:"Desde la presentación del entregable final en el caso de servicios y consultorías",
	op1:"Desde la conformidad de los servicios, en los contratos de servicios",
	op2:"Desde la entrega de obra, en el caso de contratos de obra",
	op3:"Desde el entregable de bienes, en el caso de bienes",
	correcta:"2"
	},
	{
	id:61,
	pregunta:"62.- ¿Cómo debe estar conformado el jurado que evalúa las propuestas en un procedimiento de selección?",
	op0:"Por 3 o 5 expertos en el objeto de la convocatoria",
	op1:"1 miembro de la DEC y 2 expertos",
	op2:"Por 5 expertos en el objeto de la convocatoria",
	op3:"Un comprador público, un representante del área usuaria y un experto",
	correcta:"0"
	},
	{
	id:62,
	pregunta:"63.- Las contrataciones rutinarias presentan:",
	op0:"Alta cuantía / bajo riesgo",
	op1:"Baja cuantía / alto riesgo",
	op2:"Baja cuantía / bajo riesgo",
	op3:"Alta cuantía / alto riesgo",
	correcta:"2"
	},
	{
	id:63,
	pregunta:"64.- Una contratación clasificada como operacional se define por tener:",
	op0:"Baja cuantía / bajo riesgo",
	op1:"Alta cuantía / bajo riesgo",
	op2:"Alta cuantía / alto riesgo",
	op3:"Baja cuantía / alto riesgo",
	correcta:"1"
	},
	{
	id:64,
	pregunta:"65.- Un GORE convoca una LP para bienes especializados, si un postor impugna el puntaje obtenido de la evaluación de su oferta técnica. Quién resuelve el recurso de apelación",
	op0:"Gerente regional",
	op1:"Gobernador",
	op2:"TCP",
	op3:"Presidencia OECE",
	correcta:"2"
	},
	{
	id:65,
	pregunta:"66.- ¿En qué modalidad de pago el contratista presenta una oferta integral con un monto fijo, al estar completamente definido el objeto contractual en cuanto a cantidad y calidad?",
	op0:"Tarifas",
	op1:"Suma alzada",
	op2:"Precios unitarios",
	op3:"Pago por consumo",
	correcta:"1"
	},
	{
	id:66,
	pregunta:"67.- ¿Cuál es la modalidad de pago que aplica cuando la entidad ja un tiempo referencial para la ejecución del servicio y el postor propone un valor por ese tiempo, sin conocer su duración exacta?",
	op0:"Tarifas",
	op1:"Suma alzada",
	op2:"Pago por consumo",
	op3:"Precios unitarios",
	correcta:"0"
	},
	{
	id:67,
	pregunta:"68.- La segmentación se realiza sobre .......",
	op0:"PAC",
	op1:"PEI",
	op2:"POI",
	op3:"PIA",
	correcta:"0"
	},
	{
	id:68,
	pregunta:"69.- Si la adquisición de un bien incluye además su instalación, puesta en funcionamiento y mantenimiento posterior, ¿qué sistema de entrega se debe utilizar?",
	op0:"Llave en mano",
	op1:"Gestión de instalaciones",
	op2:"Llave en mano con mantenimiento",
	op3:"Diseño de operación y mantenimiento",
	correcta:"2"
	},
	{
	id:69,
	pregunta:"70.- Si la entidad solo desea contratar la elaboración del plan que determine cómo debe ser operada y mantenida una infraestructura, sin ejecutar aún la operación ni el mantenimiento, ¿qué sistema de entrega aplica?",
	op0:"Gestión de instalaciones",
	op1:"Llave en mano",
	op2:"Diseño de operación y mantenimiento",
	op3:"Llave en mano con mantenimiento",
	correcta:"2"
	},
	{
	id:70,
	pregunta:"71.- La AGA de la Entidad resuelve el contrato por el hecho de que el contratista ha presentado documentos falsos durante el procedimiento de selección. Es correcto la actuación de la Entidad, por que",
	op0:"No, porque en todo caso debió declarar la nulidad de contrato",
	op1:"No, porque la resolución lo debe realizar el titular de la Entidad",
	op2:"Sí, porque la presentación de documentos falsos es causal de resolución de contrato",
	op3:"Sí, en la medida que haya efectuado el análisis de costo beneficio de resolver el contrato",
	correcta:"0"
	},
	{
	id:71,
	pregunta:"72.- La Municipalidad Provincial de San Isidro adjudicó la buena pro de una Licitación Pública de obra con negociación a la empresa Consorcio Vial Andino. Consentida la buena pro, debe iniciarse la verificación posterior de los documentos presentados en la oferta del postor ganador dentro de los 10 días hábiles siguientes. ¿Quién es el responsable de iniciar dicha verificación?",
	op0:"La DEC",
	op1:"Asesoría Legal",
	op2:"Titular de la Entidad",
	op3:"El jurado",
	correcta:"0"
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
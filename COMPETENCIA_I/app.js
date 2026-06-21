//base de datos local de preguntas

const bd_juego = [
    {
    id:0,
    pregunta:"1.- Cuando la resolución de un contrato sea atribuible a la Entidad contratante, ¿qué derecho le asiste al contratista?",
    op0:"El reconocimiento del 50% de la utilidad prevista en el contrato, sin necesidad de cálculo adicional, incluido automáticamente en la liquidación.",
    op1:"El reconocimiento del 50% de la utilidad prevista, calculada únicamente sobre el monto total del contrato pendiente de ejecución.",
    op2:"El reconocimiento del 50% de la utilidad prevista, calculada sobre el saldo de obra que se deja de ejecutar, actualizado mediante las fórmulas de reajuste hasta la fecha en que se efectúe la resolución del contrato.",
    op3:"El reconocimiento total de la utilidad pactada contractualmente, como indemnización por resolución anticipada.",
    correcta:"2"
    },
    {
    id:1,
    pregunta:"2.- ¿En qué casos puede acordarse la suspensión del plazo de ejecución en un contrato de obra?",
    op0:"Causas no atribuibles al contratista que original el retraso o ritmo lento en el avance de la obra",
    op1:"Eventos no atribuibles a las partes que afecten los intereses del contratista",
    op2:"Causas atribuibles a la entidad que origina la interrupción de ejecución de prestaciones",
    op3:"Casusa imputable a la entidad siempre que sea autorizada por la AGA",
    correcta:"3"
    },
    {
    id:2,
    pregunta:"3.- ¿Qué concepto(s) debe reconocer la entidad contratante al contratista en caso de suspensión del contrato por falta de pago de valorizaciones, según lo dispuesto en la normativa vigente?",
    op0:"No existe reconocimiento de mayores gastos generales y/o costos directos",
    op1:"Costos directos y/o mayores gastos generales que se encuentren debidamente vinculados y acreditados.",
    op2:"Gastos generales fijos en su totalidad, sin necesidad de justificación.",
    op3:"Una indemnización equivalente al monto de las valorizaciones no pagadas.",
    correcta:"1"
    },
    {
    id:3,
    pregunta:"4.- Para que la entidad acepte contractualmente un bien diferente al ofrecido por el proveedor, sin afectar las condiciones que sirvieron de base para el procedimiento de selección, ¿Qué documentación debe sustentar esta modificación?",
    op0:"Un informe técnico del área usuaria que justifique la decisión y acredite que no se modifican las condiciones de selección.",
    op1:"Un informe técnico del área usuaria y la opinión favorable de la DEC",
    op2:"Un sustento técnico emitido por la DEC y validado por el área usuaria.",
    op3:"Una opinión técnica favorable de la DEC y el visto bueno del área usuaria.",
    correcta:"1"
    },
    {
    id:4,
    pregunta:"5.- Una entidad desea aceptar un bien distinto al ofertado por el proveedor en un contrato vigente. ¿Qué órgano técnico de la propia entidad debe emitir opinión previa a la aprobación de esta modificación?",
    op0:"El área usuaria",
    op1:"El comité",
    op2:"La DEC",
    op3:"La área técnica estratégica",
    correcta:"2"
    },
    {
    id:5,
    pregunta:"6.- En una contratación centralizada conducida por PERÚ COMPRAS, ¿Quién resuelve un recurso de apelación si la cuantía es menor a 50 UIT?",
    op0:"La entidad encargante",
    op1:"La autoridad de la gestión administrativa de PERÚ COMPRAS",
    op2:"El titular de PERU COMPRAS",
    op3:"El Tribunal de Contrataciones del Estado",
    correcta:"1"
    },
    {
    id:6,
    pregunta:"7.- En una subasta inversa electrónica cuya cuantía es de 680,000, ¿cuál es el plazo para apelar el otorgamiento de la buena pro?",
    op0:"Cinco días hábiles",
    op1:"Ocho días hábiles",
    op2:"Ocho días calendarios",
    op3:"Cinco días calendarios",
    correcta:"1"
    },
    {
    id:7,
    pregunta:"8.- La empresa Consorcio Andino S.A.C., contratada por la Municipalidad Provincial de Cañaris para la construcción de un reservorio, solicita una ampliación de plazo dentro del plazo legal de 10 días hábiles desde que se ordenó una prestación adicional. En su solicitud, justica técnicamente el impacto del adicional y señala la cantidad de días requeridos, pero no especifica las fechas exactas del nuevo calendario de ejecución. ¿Corresponde otorgar la ampliación en estas condiciones?",
    op0:"Sí, pero solo se considera los días que demoró la entidad en aprobar el adicional",
    op1:"No, concederle un plazo para que consigne las fechas",
    op2:"No, por no haberse considerado las fechas de la ampliación",
    op3:"Sí, en tanto el sustento técnico permita determinar cómo operará la ampliación con las condiciones que solicite",
    correcta:"3"
    },
    {
    id:8,
    pregunta:"9.- Una contratación se considera de alta cuantía cuando su valor, según el _________, supera el ______ del monto total destinado a bienes o servicios.",
    op0:"PAC del CMN vigente/5%",
    op1:"PAC del CMN vigente/10%",
    op2:"PAC del CMN /5%",
    op3:"PAC del CMN /10%",
    correcta:"1"
    },
    {
    id:9,
    pregunta:"10.- Complete el enunciado: La estrategia de contratación para procesos clasificados como críticos o estratégicos debe orientarse a:",
    op0:"Disminuir los riesgos en el proceso de contratación",
    op1:"Mejorar la participación de proveedores",
    op2:"Atención oportuna y la reducción de costos",
    op3:"Simplificar los procedimientos técnicos",
    correcta:"0"
    },
    {
    id:10,
    pregunta:"11.- En contrataciones clasificadas como “rutinarias”, la estrategia de contratación debe orientarse principalmente a:",
    op0:"Disminuir la exposición a riesgos financieros.",
    op1:"Maximizar la competencia técnica.",
    op2:"Disminuir riesgos técnicos y jurídicos.",
    op3:"Atender oportunamente y reducir costos.",
    correcta:"3"
    },
    {
    id:11,
    pregunta:"12.- Si una entidad observa que durante dos años consecutivos se presentaron menos de tres postores en procesos similares para bienes, ¿Cómo debe clasificar la contratación actual?",
    op0:"Como alta cuantía",
    op1:"Como de alto riesgo",
    op2:"Como de bajo riesgo",
    op3:"Como baja cuantía",
    correcta:"1"
    },
    {
    id:12,
    pregunta:"13.- La estrategia de contratación de las contrataciones ___________ se orienta principalmente en la atención oportuna y la reducción de costos",
    op0:"Estratégicos y críticos",
    op1:"Críticos y operacionales",
    op2:"Rutinarias y operacionales",
    op3:"Rutinarias y estratégicos",
    correcta:"2"
    },
    {
    id:13,
    pregunta:"14.- La estrategia de contratación de las contrataciones _____________se orienta principalmente a disminuir los riesgos en el proceso de contratación.",
    op0:"Rutinarias y operacionales",
    op1:"Estratégicos y críticos",
    op2:"Operacionales y rutinarias",
    op3:"Estratégicos y operacionales",
    correcta:"1"
    },
    {
    id:14,
    pregunta:"15.- La interacción con el mercado en contrataciones por solo construcción tiene como objetivo principal:",
    op0:"Confirmar la participación de al menos tres postores habilitados",
    op1:"Ajustar la cuantía de la contratación del presupuesto de obra mediante revisión del expediente técnico",
    op2:"Detectar tempranamente errores técnicos o inconsistencias en el expediente de obra",
    op3:"Incorporar nuevas partidas que incrementen la eficiencia del diseño",
    correcta:"2"
    },
    {
    id:15,
    pregunta:"16.- Según el Reglamento, cuando una obra se entrega con diseño incluido, la consulta al mercado debe centrarse prioritariamente en:",
    op0:"la detección temprana de errores u omisiones en el expediente técnico",
    op1:"La validación legal del objeto contractual",
    op2:"El sinceramiento y actualización de la cuantía del rubro de ejecución",
    op3:"El sinceramiento y actualización de la cuantía del rubro de diseño",
    correcta:"2"
    },
    {
    id:16,
    pregunta:"17.- ¿Cuál de las siguientes afirmaciones es correcta respecto a los criterios para que una contratación se considere básica?",
    op0:"El grado de innovación de la inversión puede ser alto si la entidad ya ejecutó obras similares.",
    op1:"La participación de al menos dos postores en procesos similares basta para calificarla como básica.",
    op2:"Una contratación no puede ser básica si se trata de un saldo de obra",
    op3:"Las contrataciones IOARR solo se consideran básicas si son de bajo impacto social.",
    correcta:"2"
    },
    {
    id:17,
    pregunta:"18.- ¿Cuál de las siguientes afirmaciones describe correctamente la fase inicial del requerimiento en una CPI?",
    op0:"El requerimiento debe contener términos de referencia detallados que definan la solución esperada.",
    op1:"El requerimiento se formula con base en la necesidad, incluyendo las funcionalidades concretas, sin exigir una solución definida.",
    op2:"El requerimiento técnico debe limitar el tipo de soluciones a lo ya existente en el mercado.",
    op3:"La CPI exige que el requerimiento esté acompañado de una cotización referencial de mercado.",
    correcta:"1"
    },
    {
    id:18,
    pregunta:"19.- ¿Cuál es el rol fundamental de la herramienta de difusión del requerimiento en una CPI?",
    op0:"Servir como medio para convocar postores directamente.",
    op1:"Recoger sugerencias de actores públicos sobre el expediente técnico.",
    op2:"Promover la transparencia del proceso de selección mediante publicación en el SEACE.",
    op3:"Facilitar la interacción con el mercado para investigar qué soluciones innovadoras existen.",
    correcta:"3"
    },
    {
    id:19,
    pregunta:"20.- En una CPI, ¿Cuál es el principal insumo que se obtiene tras la interacción con el mercado?",
    op0:"Investigar qué tipo de soluciones innovadoras a la necesidad de la entidad contratante puede ofrecer el mercado",
    op1:"Las especificaciones técnicas ajustadas a precios de mercado",
    op2:"Pluralidad de proveedores que cumplan con el requerimiento",
    op3:"La cuantía de la contratación de la prestación",
    correcta:"0"
    },
    {
    id:20,
    pregunta:"21.- Respecto al requerimiento en una CPI, señale la opción incorrecta:",
    op0:"Se basa en la necesidad identificada, describiendo únicamente objetivos y funcionalidades.",
    op1:"Debe incluir especificaciones detalladas que permitan comparar propuestas técnicas.",
    op2:"No requiere términos de referencia completos para ser válido.",
    op3:"Está diseñado para abrir la posibilidad de soluciones no existentes aún en el mercado.",
    correcta:"1"
    },
    {
    id:21,
    pregunta:"22.- Cual de las siguientes corresponde a un tipo de interacción con el mercado",
    op0:"Estudio de mercado",
    op1:"Indagación de mercado",
    op2:"Exploración de mercado",
    op3:"Investigación de mercado",
    correcta:"1"
    },
    {
    id:22,
    pregunta:"23.- En cuál de los siguientes casos la elaboración de la estrategia de contratación no es obligatorio:",
    op0:"Compra por encargo",
    op1:"Compra por innovación",
    op2:"Contrato complementario",
    op3:"Mecanismo diferenciado de adquisición",
    correcta:"2"
    },
    {
    id:23,
    pregunta:"24.- En una contratación bajo MDA, ¿Cuál de las siguientes actuaciones preparatorias no resulta exigible?",
    op0:"La elaboración del requerimiento por parte del área usuaria.",
    op1:"La segmentación de contrataciones",
    op2:"La inclusión de especificaciones técnicas sanitarias.",
    op3:"La asignación presupuestal",
    correcta:"1"
    },
    {
    id:24,
    pregunta:"25.- ¿Cuál de las siguientes afirmaciones es incorrecta respecto al requerimiento bajo MDA?",
    op0:"Debe incluir especificaciones técnicas específicas para la tecnología sanitaria a contratar.",
    op1:"Puede omitir la interacción con el mercado como etapa obligatoria.",
    op2:"Está exento de incorporar criterios sobre cantidades mínimas y máximas de adquisición.",
    op3:"Contempla los servicios asociados al uso de la tecnología, considerando el enfoque individual o poblacional.",
    correcta:"2"
    },
    {
    id:25,
    pregunta:"26.- Qué documento no integra el expediente de contratación para un MDA",
    op0:"El documento de designación de los miembros del jurado",
    op1:"El documento donde conste las tecnologías sanitarias candidatas",
    op2:"El documento que acredita la interacción con el mercado",
    op3:"El documento donde figure los criterios de elegibilidad y priorización de tecnologías sanitarias",
    correcta:"2"
    },
    {
    id:26,
    pregunta:"27.- El plan de distribución de la tecnología sanitaria y el cronograma de ejecución no se consideran en la estrategia de contratación, sino al momento de adjudicar el contrato.",
    op0:"Correcto. Son aspectos que dependen del proveedor adjudicado.",
    op1:"Incorrecto. Ambos aspectos deben estar predefinidos en la estrategia para garantizar previsión logística.",
    op2:"Correcto. Pero se pueden incluir si la Entidad lo considera pertinente.",
    op3:"Incorrecto. Aunque solo aplica para medicamentos de uso restringido.",
    correcta:"1"
    },
    {
    id:27,
    pregunta:"28.- Conforme con la normativa, la consulta al mercado puede ser:",
    op0:"Estratégica",
    op1:"Avanzada",
    op2:"Especializada",
    op3:"Compleja",
    correcta:"1"
    },
    {
    id:28,
    pregunta:"29.- Respecto al incentivo vinculado a estándares de excelencia ambiental y de seguridad, identifique la alternativa incorrecta:",
    op0:"Se aplica a componentes del proyecto de obra vinculados a las fases de formulación, elaboración del expediente técnico, operación y mantenimiento.",
    op1:"El pago correspondiente a este incentivo no puede exceder el 1% del monto contractual original.",
    op2:"El contratista debe demostrar el cumplimiento de estándares ambientales y de seguridad superiores a los exigidos por la normativa vigente.",
    op3:"Para aplicar el incentivo se debe establecer indicadores iniciales en el contrato",
    correcta:"0"
    },
    {
    id:29,
    pregunta:"30.- ¿Qué implicancia normativa tiene establecer el incentivo por estándares ambientales en la estrategia de contratación?",
    op0:"La exoneración del análisis de riesgos ambientales en la estrategia.",
    op1:"La exclusión de dicho criterio como factor de evaluación en el procedimiento de selección",
    op2:"La reducción automática de los requisitos técnicos en la etapa de ejecución.",
    op3:"La obligación de implementar un sistema de gestión ISO 14001.",
    correcta:"1"
    },
    {
    id:30,
    pregunta:"31.- ¿Qué sistema de entrega obliga a establecer el incentivo por cumplimiento anticipado?",
    op0:"Diseño y construcción",
    op1:"Solo formulación",
    op2:"Solo construcción",
    op3:"Alianza público-privada",
    correcta:"2"
    },
    {
    id:31,
    pregunta:"32.- El incentivo por estándares ambientales puede aplicarse incluso si los estándares coinciden con los mínimos normativos.",
    op0:"Correcto, si el contratista demuestra cumplimiento sostenido.",
    op1:"Incorrecto, deben ser estándares superiores a los exigidos por la normativa.",
    op2:"Correcto, si la entidad ha previsto dicho escenario en la estrategia.",
    op3:"Incorrecto, salvo que el proveedor tenga certificaciones internacionales.",
    correcta:"1"
    },
    {
    id:32,
    pregunta:"33.- El incentivo por cumplimiento anticipado se calcula multiplicando el gasto general variable _______ por el número de días de diferencia entre el plazo de ejecución vigente y el _______ de ejecución.",
    op0:"mensual / promedio",
    op1:"diario / plazo real",
    op2:"proporcional / cronograma propuesto",
    op3:"acumulado / total contractual",
    correcta:"1"
    },
    {
    id:33,
    pregunta:"34.- Uno de los elementos obligatorios que debe contener el requerimiento es:",
    op0:"La propuesta de modalidad de pago",
    op1:"La propuesta de factores de evaluación",
    op2:"La evaluación de posibilidad de agrupar prestaciones",
    op3:"El tipo de perfil del evaluador",
    correcta:"0"
    },
    {
    id:34,
    pregunta:"35.- Uno de los elementos obligatorios que debe contener el requerimiento es:",
    op0:"Equipamiento, permisos, entre otros recursos que el contratista necesite para ejecutar la contratación.",
    op1:"El tipo de perfil del evaluador",
    op2:"La evaluación de posibilidad de agrupar prestaciones",
    op3:"La propuesta de factores de evaluación",
    correcta:"0"
    },
    {
    id:35,
    pregunta:"36.- Respecto al contenido de la estrategia de contratación aplicada a contratos de obras consideradas técnicamente complejas, identifique la afirmación incorrecta:",
    op0:"Comprende un análisis comparativo que sustente la selección del sistema de entrega más adecuado para la ejecución de la obra.",
    op1:"Contempla la evaluación de modelos contractuales estandarizados de ingeniería y construcción utilizados a nivel internacional.",
    op2:"Incorpora la valoración sobre la conveniencia de aplicar incentivos contractuales al proveedor.",
    op3:"Incluye el sustento técnico para aplicar la modalidad de pago por consumo como mecanismo preferente",
    correcta:"3"
    },
    {
    id:36,
    pregunta:"37.- Cuando el impugnante presenta el recurso sin adjuntar la garantía de interposición del recurso, la entidad contratante debe:",
    op0:"Otorgar un plazo adicional razonable para su presentación, previa notificación.",
    op1:"Considerar el recurso como inadmisible y rechazarlo de plano.",
    op2:"Conceder un plazo máximo de dos días hábiles para subsanar, suspendiendo el procedimiento",
    op3:"Declarar improcedente el recurso",
    correcta:"2"
    },
    {
    id:37,
    pregunta:"38.- El recurso de apelación será declarado improcedente si:",
    op0:"El impugnante no acredita experiencia en contrataciones con el Estado.",
    op1:"El recurso se presenta en formato físico y no virtual.",
    op2:"Se interpone fuera del plazo previsto en la norma.",
    op3:"Se omite la firma del funcionario que evaluó la oferta.",
    correcta:"2"
    },
    {
    id:38,
    pregunta:"39.- Si el impugnante está sancionado con impedimento para contratar con el Estado y presenta un recurso, ¿cuál es el tratamiento normativo?",
    op0:"Se considera no presentado el recurso",
    op1:"Se declara improcedente el recurso",
    op2:"Se declara inadmisible",
    op3:"Se declara infundado",
    correcta:"1"
    },
    {
    id:39,
    pregunta:"40.- La resolución que aprueba el procedimiento no competitivo por situación de desabastecimiento se publica en la pladicop dentro de los…… siguientes a su emisión",
    op0:"20 d/h",
    op1:"20 días",
    op2:"10 días",
    op3:"10 d/h",
    correcta:"3"
    },
    {
    id:40,
    pregunta:"41.- Quien es el responsable de registrar en la pladicop la prorroga de la evaluación de la Asociación para la innovación",
    op0:"La DEC",
    op1:"El oficial de compra",
    op2:"El jurado",
    op3:"El comité",
    correcta:"0"
    },
    {
    id:41,
    pregunta:"42.- A los cuántos días se aprueba el PAC",
    op0:"quince (15) días hábiles siguientes a la aprobación del PIA",
    op1:"quince (15) días siguientes a la aprobación del PIA",
    op2:"diez (10) días hábiles siguientes a la aprobación del PIA",
    op3:"cinco (5) días hábiles siguientes a la aprobación del PIA",
    correcta:"0"
    },
    {
    id:42,
    pregunta:"43.- Cual de las siguientes alternativas no representa a una modalidad de contrato eficiente",
    op0:"Contratos menores",
    op1:"Compra corporativa",
    op2:"Subasta Inversa electrónica",
    op3:"Compra centralizada",
    correcta:"2"
    },
    {
    id:43,
    pregunta:"44.- Cuál es la secuencia correcta en una Licitación pública de obras con precalificación",
    op0:"Precalificación con dialogo competitivo/negociación",
    op1:"Evaluación de ofertas técnicas y económicas/Precalificación",
    op2:"Precalificación/Evaluación de ofertas técnicas y económicas.",
    op3:"Evaluación de ofertas definitivas/negociación",
    correcta:"2"
    },
    {
    id:44,
    pregunta:"45.- En qué procedimiento de selección no se integran las Bases",
    op0:"Concurso público con precalificación",
    op1:"Concurso público para consultorías y servicios de mantenimiento vial",
    op2:"Licitación pública de obras con precalificación",
    op3:"Concurso público abreviado para la contratación de expertos y gerentes de proyectos",
    correcta:"3"
    },
    {
    id:45,
    pregunta:"46.- ¿Cuál es el criterio principal para tomar decisiones durante la ejecución de un contrato estandarizado internacional?",
    op0:"Las directivas emitidas por el MEF",
    op1:"Las buenas prácticas nacionales e internacionales.",
    op2:"Las buenas prácticas nacionales e internacionales y lo señalado en las guías del contrato estandarizado",
    op3:"El criterio del supervisor de obra, siempre que tenga certificación FIDIC.",
    correcta:"2"
    },
    {
    id:46,
    pregunta:"47.- Se aplican las buenas prácticas y lo señalado en la normativa aplicable, sin perjuicio de la ausencia de guía.",
    op0:"Repetir el mismo contenido técnico en cláusulas diferentes sin ajustes de redacción.",
    op1:"Utilizar términos legales ampliamente definidos por el Código Civil.",
    op2:"Reemplazar una cláusula por otra de contenido equivalente.",
    op3:"Agregar notas marginales explicativas a cada cláusula técnica.",
    correcta:"0"
    },
    {
    id:47,
    pregunta:"48.- ¿Qué sucede si la entidad no cuenta con capacidad técnica suficiente para utilizar un contrato estandarizado de uso internacional?",
    op0:"El proceso debe ser revisado por la Contraloría antes de su inicio.",
    op1:"Debe priorizarse el uso de un contrato marco nacional emitido por OECE.",
    op2:"No debe utilizarse el contrato estandarizado y debe evaluarse otro mecanismo de contratación.",
    op3:"La ejecución del contrato se encarga a un comité de expertos externos.",
    correcta:"2"
    },
    {
    id:48,
    pregunta:"49.- Señale la afirmación correcta:",
    op0:"La DGA puede establecer contratos estandarizados únicamente para obras y consultorías de obras",
    op1:"Los contratos estandarizados pueden adaptarse ampliamente si se cuenta con informe de supervisión técnica.",
    op2:"La evaluación de la capacidad técnica de la entidad es obligatoria para decidir el uso de un contrato estandarizado.",
    op3:"El uso de contratos estandarizados es obligatorio en todos los procesos mayores a S/ 20 millones.",
    correcta:"2"
    },
    {
    id:49,
    pregunta:"50.- La fase de ejecución contractual de un contrato estandarizado de uso internacional se rige por el contrato suscrito, la Ley en lo que corresponda, el Reglamento y, supletoriamente, por el ______.",
    op0:"Código Procesal Administrativo",
    op1:"Código de Ética Pública",
    op2:"Código Civil",
    op3:"Código de Buenas Prácticas Contractuales",
    correcta:"2"
    },
    {
    id:50,
    pregunta:"51.- En los contratos estandarizados se deben establecer expresamente los ______, límites, requisitos y otros aspectos relacionados con la contratación de ______.",
    op0:"mecanismos – entidades cooperantes",
    op1:"umbrales – proveedores",
    op2:"procedimientos – subcontratistas",
    op3:"criterios – socios estratégicos",
    correcta:"2"
    },
    {
    id:51,
    pregunta:"52.- ¿Cuál de las siguientes afirmaciones refleja correctamente el rol del jurado en la evaluación técnica y económica?",
    op0:"El jurado evalúa en conjunto cada oferta y elabora un acta única de evaluación.",
    op1:"Cada miembro realiza su evaluación de manera independiente y comunica sus puntajes a la DEC.",
    op2:"Los jurados remiten un informe consolidado con la firma de todos los integrantes.",
    op3:"La DEC consolida los puntajes según directivas propias, sin necesidad de información individual.",
    correcta:"1"
    },
    {
    id:52,
    pregunta:"53.- ¿Cuál es el límite máximo permitido para prestaciones adicionales en contratos de bienes y servicios, sin requerir intervención del titular de la entidad ni de la Contraloría?",
    op0:"30 % del contrato original.",
    op1:"25 % del monto del contrato original.",
    op2:"25 % del monto del contrato vigente",
    op3:"15 % del monto del contrato original.",
    correcta:"1"
    },
    {
    id:53,
    pregunta:"54.- ¿Cuál es el plazo que tiene la Contraloría para pronunciarse en primera instancia sobre adicionales mayores al 30 %?",
    op0:"Quince días calendario.",
    op1:"Veinte días hábiles.",
    op2:"Quince días hábiles.",
    op3:"Treinta días hábiles.",
    correcta:"2"
    },
    {
    id:54,
    pregunta:"55.- Marque la afirmación correcta:",
    op0:"La Contraloría debe pronunciarse en un plazo de 20 días calendario.",
    op1:"En el caso de adicionales de emergencia, la autorización se emite luego del pago.",
    op2:"La responsabilidad del adicional puede recaer en el proyectista si el error proviene del expediente técnico.",
    op3:"El Reglamento permite adicionales en obras hasta el 100 % en caso de emergencia.",
    correcta:"2"
    },
    {
    id:55,
    pregunta:"56.- Identifique la afirmación incorrecta:",
    op0:"Las reducciones en bienes y servicios pueden autorizarse hasta por el mismo porcentaje que los adicionales.",
    op1:"Las modificaciones en contratos de tecnologías sanitarias están sujetas a los mismos límites que el resto.",
    op2:"La DEC no interviene directamente en la aprobación de adicionales.",
    op3:"Las entidades deben informar a la Contraloría sobre errores no corregidos en el expediente técnico.",
    correcta:"1"
    },
    {
    id:56,
    pregunta:"57.- ¿Cuál es el plazo que tiene el contratista para presentar el nuevo programa de ejecución desde que se le ordena?",
    op0:"5 días hábiles desde la recepción de la orden.",
    op1:"7 días hábiles contados desde la fecha de valorización.",
    op2:"10 días calendario desde la comunicación del supervisor.",
    op3:"7 días calendario desde la anotación en el cuaderno de incidencias.",
    correcta:"3"
    },
    {
    id:57,
    pregunta:"58.- ¿En qué casos puede la entidad contratante disponer la intervención económica de una obra?",
    op0:"Solo cuando exista un informe del supervisor que recomiende la medida.",
    op1:"Ante incumplimiento que impida la culminación del contrato.",
    op2:"En caso fortuito, fuerza mayor o incumplimiento que impida la culminación del contrato.",
    op3:"Siempre que el contratista lo solicite y la obra tenga más del 80% de avance.",
    correcta:"2"
    },
    {
    id:58,
    pregunta:"59.- ¿Qué ocurre si el contratista rechaza la intervención económica dispuesta por la entidad?",
    op0:"Se inicia un arbitraje para resolver el conflicto.",
    op1:"La obra queda en suspenso hasta la evaluación de la Contraloría.",
    op2:"La entidad debe reformular el expediente técnico.",
    op3:"El contrato se resuelve por incumplimiento del contratista.",
    correcta:"3"
    },
    {
    id:59,
    pregunta:"60.- ¿Qué características definen a la intervención económica de una obra pública?",
    op0:"Es una medida jurídica que transfiere la ejecución al supervisor.",
    op1:"Es una medida excepcional de tipo presupuestal que suspende el contrato.",
    op2:"Es una medida técnico-económica para continuar los trabajos sin resolver el contrato.",
    op3:"Es una acción correctiva administrativa con efecto retroactivo sobre las valorizaciones.",
    correcta:"2"
    },
    {
    id:60,
    pregunta:"61.- Indique la afirmación incorrecta:",
    op0:"El adelanto directo puede ser entregado antes de suscribirse el acta de inicio de obra.",
    op1:"El diferimiento del inicio debe formalizarse en acta y publicarse en Pladicop.",
    op2:"El contratista puede solicitar resolución si no se cumplen condiciones de inicio.",
    op3:"La estacionalidad climática es causa válida para diferir el inicio de obra.",
    correcta:"0"
    },
    {
    id:61,
    pregunta:"62.- Identifique la afirmación incorrecta:",
    op0:"El contrato tripartito es obligatorio en todas las obras públicas.",
    op1:"Se puede adelantar ejecución de partidas de obra mientras se aprueba el expediente técnico.",
    op2:"La falta de cumplimiento de condiciones puede generar resarcimiento hasta 3%.",
    op3:"El reinicio de ejecución tras diferimiento se formaliza mediante acta.",
    correcta:"0"
    },
    {
    id:62,
    pregunta:"63.- En la municipalidad LOS GENIOS. necesita el servicio de limpieza. En la estrategia de contratación se ha determinado llevar a cabo un procedimiento no competitivo por desabastecimiento. El responsable de aprobar este procedimiento es:",
    op0:"Alcalde/delegable",
    op1:"Alcalde/indelegable",
    op2:"Consejo Municipal",
    op3:"El gerente municipal/indelegable",
    correcta:"0"
    },
    {
    id:63,
    pregunta:"64.- ¿Cuál de las siguientes causales de contratación directa debe ser aprobada por el titular de la entidad y no por la autoridad de la gestión administrativa?",
    op0:"Cuando el bien o servicio solo puede ser proporcionado por un proveedor con derechos exclusivos.",
    op1:"Cuando se produce una situación de desabastecimiento que impide el funcionamiento de la entidad.",
    op2:"Para contratar servicios de asesoría legal previa a procesos judiciales.",
    op3:"Para adquirir inmuebles de propiedad privada.",
    correcta:"1"
    },
    {
    id:64,
    pregunta:"65.- ¿Quién aprueba la contratación directa por la causal de emergencia?",
    op0:"El gerente general, como autoridad administrativa, de forma indelegable.",
    op1:"El titular de la entidad, de forma indelegable.",
    op2:"El gerente general, como autoridad administrativa, de forma delegable.",
    op3:"El titular de la entidad, de forma delegable.",
    correcta:"3"
    },
    {
    id:65,
    pregunta:"66.- La Municipalidad Provincial de Ayacucho necesita contratar maquinaria pesada ante la ocurrencia de lluvias intensas que han destruido vías rurales. Se aplica un procedimiento no competitivo por situación de emergencia. ¿Quién debe aprobar este procedimiento?",
    op0:"Alcalde / indelegable",
    op1:"Gerente municipal / delegable",
    op2:"Concejo municipal / indelegable",
    op3:"Gerente de infraestructura / delegable",
    correcta:"0"
    },
    {
    id:66,
    pregunta:"67.- El Hospital Nacional Santa Teresa necesita adquirir un tomógrafo de alta resolución de marca exclusiva. La estrategia de contratación indica proveedor único. ¿Quién aprueba este procedimiento?",
    op0:"Director general del hospital / indelegable",
    op1:"Gerente administrativo / delegable",
    op2:"Dirección regional de salud / indelegable",
    op3:"Jefe de logística / delegable",
    correcta:"0"
    },
    {
    id:67,
    pregunta:"68.- ¿Cuál es el requisito esencial para otorgar la conformidad de bienes en el marco de una contratación pública?",
    op0:"La suscripción de un documento por ambas partes, en el que se deje constancia de la entrega de los bienes.",
    op1:"La sola recepción física de los bienes o su envío al destino final establecido en las Bases.",
    op2:"La comunicación formal del contratista informando sobre la entrega, acompañada de la constancia de ingreso al almacén.",
    op3:"La verificación de que los bienes cumplen con las Especificaciones Técnicas (EETT) o Términos de Referencia (TDR).",
    correcta:"3"
    },
    {
    id:68,
    pregunta:"69.- ¿Cómo se realiza la amortización del adelanto directo en un contrato de obra o suministro?",
    op0:"Se descuenta íntegramente en el primer pago parcial.",
    op1:"Comienza a descontarse desde el segundo pago parcial.",
    op2:"Se retiene en su totalidad hasta la liquidación final.",
    op3:"Se amortiza proporcionalmente en cada pago parcial.",
    correcta:"3"
    },
    {
    id:69,
    pregunta:"70.- ¿Qué efecto tiene la denegatoria ficta respecto al recurso de apelación en el marco del procedimiento de contratación pública?",
    op0:"Suspende la buena pro hasta que se emita pronunciamiento expreso.",
    op1:"Revierte automáticamente la adjudicación realizada.",
    op2:"Determina que la buena pro queda sin efecto por silencio administrativo negativo.",
    op3:"Genera la firmeza administrativa de la buena pro por falta de pronunciamiento dentro del plazo.",
    correcta:"3"
    },
    {
    id:70,
    pregunta:"71.- Se solicita la aprobación del expediente de contratación para una licitación pública sin modalidad. Al revisar la documentación, se advierte que el bien a contratar tiene ficha de homologación, pero el área usuaria modificó las especificaciones. ¿Qué corresponde hacer?",
    op0:"Verificar si las condiciones definidas en la ficha son opcionales según la entidad que la aprobó",
    op1:"Verificar si la documentación del expediente justica que las condiciones estandarizadas generan un riesgo objetivo de ausencia de postores",
    op2:"Devolver el expediente de contratación y disponer que el área usuaria se adecúe a las disposiciones de la ficha de homologación",
    op3:"Verificar si existe autorización de PERÚ COMPRAS para no aplicar la ficha de homologación",
    correcta:"2"
    },
    {
    id:71,
    pregunta:"72.- Se requiere contratar un servicio de ASISTE para la ejecución de un proyecto. En ese contexto, debe convocarse un:",
    op0:"Concurso público con diálogo competitivo / jurado",
    op1:"Concurso público con precalificación / comité",
    op2:"Concurso público con diálogo competitivo / comité",
    op3:"Concurso público con precalificación / jurado",
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
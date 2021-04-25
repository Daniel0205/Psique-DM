cube(`EvaluacionesDeQuirofano`, {
  sql: `SELECT * FROM chirurgical_assessment NATURAL JOIN date`,
  
  joins: {
    Medicacion: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_medication = ${Medicacion}.id_medication`
    },
    Antecedentes: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_background = ${Antecedentes}.id_background  AND ${EvaluacionesDeQuirofano}.id_background_date = ${Antecedentes}.update_date`
    },
    DatosDemograficos: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_demographic = ${DatosDemograficos}.id_demographic AND ${DatosDemograficos}.id_demographic_date = ${Demographic}.update_date`
    },
    Afasias: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_aphasia = ${Afasias}.id_aphasia`
    },
    EvaluacionesDeQuirofano: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_stage = ${EvaluacionesDeQuirofano}.id_stage`
    },
    DeficitMotor: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_deficit = ${DeficitMotor}.id_deficit`
    },
    EnfermedadCognitiva:{
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_disease = ${EnfermedadCognitiva}.id_disease`
    }
  },
  
  measures: {
    count: {
      sql: `count(*)`,
      title: `Numero de evaluaciones de quirofano realizadas`,
      type: `number`,
      meta: {
        bool: 'true'
      }
    },
    average_counting: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY counting)`,
      type: `number`,
      title: `Mediana de resultados de la subprueba de conteo`,
      description: `Realiza un Mediana de todos los resultados de la subprueba de conteo`
    },
    average_denomination: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY denomination)`,
      type: `number`,
      title: `Mediana de resultados de la subprueba de denominacion`,
      description: `Realiza un Mediana de todos los resultados de la subprueba de denominacion`
    },
    average_verbal_instructions: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY verbal_instructions)`,
      type: `number`,
      title: `Mediana de resultados de la subprueba instrucciones verbales`,
      description: `Realiza un Mediana de todos los resultados de la subprueba instrucciones verbales`
    },
    average_repetition: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY repetition)`,
      type: `number`,
      title: `Mediana de resultados de la subprueba repeticion`,
      description: `Realiza un Mediana de todos los resultados de la subprueba repeticion`
    },
    average_processing_speed: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY processing_speed)`,
      type: `number`,
      title: `Mediana de resultados de la subprueba velocidad de procesamiento`,
      description: `Realiza un Mediana de todos los resultados de la subprueba velocidad de procesamiento`
    },
    average_lecture: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY lecture)`,
      type: `number`,
      title: `Mediana de resultados de la subprueba lectura`,
      description: `Realiza un Mediana de todos los resultados de la subprueba lectura`
    },
    average_follow_instructions: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY follow_instructions)`,
      type: `number`,
      title: `Mediana de resultados de la subprueba seguimiento de instrucciones`,
      description: `Realiza un Mediana de todos los resultados de la subprueba seguimiento de instrucciones`
    },
  },
  
  dimensions: {
    id: {
      sql: `id_assessment`,
      type: `number`,
      primaryKey: true
    },
    FechaDeEvaluacion: {
      sql: `make_date(${CUBE}.year,${CUBE}.month,${CUBE}.day) `,
      type: `time`,
    },
    DiaDePresentacion: {
      sql: `day`,
      type: `number`,
    },
    MesDePresentacion: {
      sql: `to_char(TO_DATE (month::text, 'MM'), 'Month') `,
      type: `string`,
    },
    AnoDePresentacion: {
      sql: `year`,
      type: `number`,
    },
    
  },
  
  dataSource: `default`
});

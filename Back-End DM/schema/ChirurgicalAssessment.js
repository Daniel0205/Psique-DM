cube(`ChirurgicalAssessment`, {
  sql: `SELECT * FROM public.chirurgical_assessment`,
  
  joins: {
    Medication: {
      relationship: `hasOne`,
      sql: `${ChirurgicalAssessment}.id_medication = ${Medication}.id_medication`
    },
    Background: {
      relationship: `hasOne`,
      sql: `${ChirurgicalAssessment}.id_background = ${Background}.id_background  AND ${ChirurgicalAssessment}.id_background_date = ${Background}.update_date`
    },
    Date: {
      relationship: `hasOne`,
      sql: `${ChirurgicalAssessment}.id_date = ${Date}.id_date`
    },
    Demographic: {
      relationship: `hasOne`,
      sql: `${ChirurgicalAssessment}.id_demographic = ${Demographic}.id_demographic AND ${ChirurgicalAssessment}.id_demographic_date = ${Demographic}.update_date`
    },
    Aphasia: {
      relationship: `hasOne`,
      sql: `${ChirurgicalAssessment}.id_aphasia = ${Aphasia}.id_aphasia`
    },
    Stage: {
      relationship: `hasOne`,
      sql: `${ChirurgicalAssessment}.id_stage = ${Stage}.id_stage`
    },
    MotorDeficit: {
      relationship: `hasOne`,
      sql: `${ChirurgicalAssessment}.id_deficit = ${MotorDeficit}.id_deficit`
    },
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
    }
    
  },
  
  dataSource: `default`
});

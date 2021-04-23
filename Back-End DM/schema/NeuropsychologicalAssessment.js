
cube(`NeuropsychologicalAssessment`, {
  sql: `SELECT * FROM neuropsychological_assessment`,
    
  joins: {
    Medication: {
      relationship: `hasOne`,
      sql: `${NeuropsychologicalAssessment}.id_medication = ${Medication}.id_medication`
    },
    Background: {
      relationship: `hasOne`,
      sql: `${NeuropsychologicalAssessment}.id_background = ${Background}.id_background  AND ${NeuropsychologicalAssessment}.id_background_date = ${Background}.update_date`
    },
    Date: {
      relationship: `hasOne`,
      sql: `${NeuropsychologicalAssessment}.id_date = ${Date}.id_date`
    },
    Demographic: {
      relationship: `hasOne`,
      sql: `${NeuropsychologicalAssessment}.id_demographic = ${Demographic}.id_demographic AND ${NeuropsychologicalAssessment}.id_demographic_date = ${Demographic}.update_date`
    },
    
  },

  measures: {
    count: {
      sql: `count(*)`,
      title: `Numero de evaluaciones de consultorio realizadas`,
      type: `number`,
      meta: {
        bool: 'true'
      }
    },
    countIQ: {
      sql: `iq`,
      type: `count`,
      title: `Numero de iq registrados`,
      filters: [
        { sql: `NOT (${CUBE}.iq IS NULL)` }
      ]
    },
    medianIQ: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY iq)`,
      type: `number`,
      title: `Mediana de resultados IQ`,
    },
    median_verbal_comprehension: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY verbal_comprehension)`,
      type: `number`,
      title: `Mediana del indice de comprension verbal`,
    },
    median_fluid_reasoning: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY fluid_reasoning)`,
      type: `number`,
      title: `Mediana del indice de razonamiento fluido`,
    },
    median_working_memory: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY working_memory)`,
      type: `number`,
      title: `Mediana del indice de memoria de trabajo`,
    },
    median_processing_speed: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY processing_speed)`,
      type: `number`,
      title: `Mediana del indice de velocidad de procesamiento`,
    },
    //stroop
    median_StroopWord: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY stroop_word)`,
      type: `number`,
      title: `Mediana de Stroop - Palabras `,
    },    
    median_StroopColour: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY stroop_colour)`,
      type: `number`,
      title: `Mediana de Stroop - Colores `,
    },
    median_stroop_word_colour: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY stroop_word_colour)`,
      type: `number`,
      title: `Mediana de Stroop con interferencia - (Palabras y Colores) `,
    },
    //Rey
    median_rey_result: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY rey_result)`,
      type: `number`,
      title: `Mediana de resultados del test de rey`,
    },
    median_rey_percentil: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY rey_percentil)`,
      type: `number`,
      title: `Mediana de los perceptiles obtenidos del test de rey`,
    },
  },
  
  dimensions: {
    id: {
      sql: `id_assessment`,
      type: `number`,
      primaryKey: true
    },
  },

  segments: {
    Iq_Deficiente: {
      sql: `${CUBE}.iq <= 69`
    },
    Iq_Inferior: {
      sql: `${CUBE}.iq >= 70 AND ${CUBE}.iq <= 79`
    },
    Iq_Abajo_del_Promedio: {
      sql: `${CUBE}.iq >= 80 AND ${CUBE}.iq <= 89`
    },
    Iq_Promedio: {
      sql: `${CUBE}.iq >= 90 AND ${CUBE}.iq <= 109`
    },
    Iq_Arriba_del_Promedio: {
      sql: `${CUBE}.iq >= 100 AND ${CUBE}.iq <= 119`
    },
    Iq_Superior: {
      sql: `${CUBE}.iq >= 120 AND ${CUBE}.iq <= 129`
    },
    Iq_Muy_Superior: {
      sql: `${CUBE}.iq >= 130`
    }
  },
  
  dataSource: `default`
});
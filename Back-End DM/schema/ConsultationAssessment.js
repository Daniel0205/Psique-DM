
cube(`EvaluacionesDeConsultorio`, {
  sql: `SELECT * FROM consultation_neuropsychological_assessment NATURAL JOIN date`,

  joins: {
    Medicacion: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeConsultorio}.id_medication = ${Medicacion}.id_medication`
    },
    Antecedentes: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeConsultorio}.id_background = ${Antecedentes}.id_background  AND ${EvaluacionesDeConsultorio}.id_background_date = ${Antecedentes}.update_date`
    },
    DatosDemograficos: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeConsultorio}.id_demographic = ${DatosDemograficos}.id_demographic AND ${EvaluacionesDeConsultorio}.id_demographic_date = ${DatosDemograficos}.update_date`
    },
    EnfermedadBase: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeConsultorio}.id_disease = ${EnfermedadBase}.id_disease`
    }

  },

  measures: {
    count: {
      sql: `count(*)`,
      title: `Cantidad de evaluaciones de consultorio realizadas`,
      type: `number`,
      meta: {
        bool: 'true'
      }
    },
    countIQ: {
      sql: `iq`,
      type: `count`,
      title: `Cantidad de IQ registrados`,
      filters: [
        { sql: `NOT (${CUBE}.iq IS NULL)` }
      ]
    },
    mediaIQ: {
      sql: `iq`,
      type: `avg`,
      title: `Media de resultados IQ`,
    },
    media_verbal_comprehension: {
      sql: `verbal_comprehension`,
      type: `avg`,
      title: `Media del indice de comprension verbal`,
    },
    media_fluid_reasoning: {
      sql: `fluid_reasoning`,
      type: `avg`,
      title: `Media del indice de razonamiento fluido`,
    },
    media_working_memory: {
      sql: `working_memory`,
      type: `avg`,
      title: `Media del indice de memoria de trabajo`,
    },
    media_processing_speed: {
      sql: `processing_speed`,
      type: `avg`,
      title: `Media del indice de velocidad de procesamiento`,
    },
    //stroop
    countStroop: {
      sql: `stroop`,
      type: `count`,
      title: `Numero de Pruebas de stroop registradas`,
      filters: [
        { sql: `NOT (${CUBE}.iq IS NULL)` }
      ]
    },
    media_StroopWord: {
      sql: `stroop_word`,
      type: `avg`,
      title: `Media de Stroop - Palabras `,
    },
    media_StroopColour: {
      sql: `stroop_colour`,
      type: `avg`,
      title: `Media de Stroop - Colores `,
    },
    media_stroop_word_colour: {
      sql: `stroop_word_colour`,
      type: `avg`,
      title: `Media de Stroop con interferencia - (Palabras y Colores) `,
    },
    //Rey
    countRey: {
      sql: `rey_result`,
      type: `count`,
      title: `Numero de Prueba de Rey registrados`,
      filters: [
        { sql: `NOT (${CUBE}.iq IS NULL)` }
      ]
    },
    media_rey_result: {
      sql: `rey_result`,
      type: `avg`,
      title: `Media de resultados del test de Rey`,
    }
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
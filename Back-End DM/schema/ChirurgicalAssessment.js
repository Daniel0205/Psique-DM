cube(`EvaluacionesDeQuirofano`, {
  sql: `SELECT * FROM surgery_neuropsychological_assessment NATURAL JOIN date`,

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
      sql: `${EvaluacionesDeQuirofano}.id_demographic = ${DatosDemograficos}.id_demographic AND ${EvaluacionesDeQuirofano}.id_demographic_date = ${DatosDemograficos}.update_date`
    },
    EtapaDeEvaluacion: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_stage = ${EtapaDeEvaluacion}.id_stage`
    },
    Afasias: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_aphasia = ${Afasias}.id_aphasia`
    },
    DeficitMotor: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_deficit = ${DeficitMotor}.id_deficit`
    },
    EnfermedadBase: {
      relationship: `hasOne`,
      sql: `${EvaluacionesDeQuirofano}.id_disease = ${EnfermedadBase}.id_disease`
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
    average_wada: {
      sql: `wada_result`,
      type: `avg`,
      title: `Media de resultados de los resultados del test de WADA`,
      description: `Encuentra la media de todos los resultados de la subprueba de conteo`
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

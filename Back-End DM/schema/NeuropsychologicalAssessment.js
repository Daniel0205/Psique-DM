
cube(`NeuropsychologicalAssessment`, {
  sql: `SELECT * FROM neuropsychological_assessment NATURAL JOIN medication NATURAL JOIN demographic NATURAL JOIN date NATURAL JOIN cognitive_disease NATURAL JOIN background`,
    
  measures: {
    count: {
      sql: `count(*)`,
      title: `Numero de evaluaciones realizadas`,
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
    medianStroopWord: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY stroop_word)`,
      type: `number`,
      title: `Mediana de Stroop - Palabras `,
    },    
    
    medianStroopColour: {
      sql: `PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY stroop_colour)`,
      type: `number`,
      title: `Mediana de Stroop - Colores `,
    },    
  },
  
  dimensions: {
    id: {
      sql: `id_assessment`,
      type: `number`,
      primaryKey: true
    },
    //medication
    medicine: {
      sql: `medicine`,
      type: `string`,
    },
    //cognitive disease
    type: {
      sql: `type`,
      type: `string`
    },
    //background
    rhinitis: {
      sql: `rhinitis`,
      type: `string`
    },
    
    earache: {
      sql: `earache`,
      type: `string`
    },
    
    headTrauma: {
      sql: `head_trauma`,
      type: `string`
    },
    
    prenatalTrauma: {
      sql: `prenatal_trauma`,
      type: `string`
    },
    
    meningitis: {
      sql: `meningitis`,
      type: `string`
    },
    
    prematureBirth: {
      sql: `premature_birth`,
      type: `string`
    },
    
    narcotics: {
      sql: `narcotics`,
      type: `string`
    },
    
    asthma: {
      sql: `asthma`,
      type: `string`
    },
    
    sinusitis: {
      sql: `sinusitis`,
      type: `string`
    },
    
    pneumothorax: {
      sql: `pneumothorax`,
      type: `string`
    },
    
    tuberculosis: {
      sql: `tuberculosis`,
      type: `string`
    },
    
    heartProblems: {
      sql: `heart_problems`,
      type: `string`
    },
    
    renalProblems: {
      sql: `renal_problems`,
      type: `string`
    },
    boneProblems: {
      sql: `bone_problems`,
      type: `string`
    },
    
    epidermalProblems: {
      sql: `epidermal_problems`,
      type: `string`
    },
    
    highBloodPressure: {
      sql: `high_blood_pressure`,
      type: `string`
    },
    
    smoking: {
      sql: `smoking`,
      type: `string`
    },
    
    alcoholism: {
      sql: `alcoholism`,
      type: `string`
    },

//demographic
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    bornCity: {
      sql: `born_city`,
      type: `string`
    },
    
    actualCity: {
      sql: `actual_city`,
      type: `string`
    },
    
    civilState: {
      sql: `civil_state`,
      type: `string`
    },
    
    handedness: {
      sql: `handedness`,
      type: `string`
    },
    
    scholarship: {
      sql: `scholarship`,
      type: `string`
    },

    //date
    time: {
      sql: `make_date(${CUBE}.year,${CUBE}.month,${CUBE}.day)`,
      type: `time`,
    }
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
cube(`CognitiveDisease`, {
  sql: `SELECT * FROM public.cognitive_disease`,
  
  joins: {
    
  },
  
  measures: {
    /*count: {
      type: `count`,
      drillMembers: []
    }*/
  },
  
  dimensions: {
    id_measure:{
      sql: `id_measure`,
      type: `number`,
      primaryKey:true
    },
    Enfermedad_Cognitiva: {
      sql: `type`,
      type: `string`
    }
  },
  
  dataSource: `default`
});

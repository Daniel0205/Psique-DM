cube(`EnfermedadCognitiva`, {
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
    id_disease:{
      sql: `id_disease`,
      type: `number`,
      primaryKey:true
    },
    tipo: {
      sql: `type`,
      type: `string`
    }
  },
  
  dataSource: `default`
});

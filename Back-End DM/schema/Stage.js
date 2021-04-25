cube(`EvaluacionDeQuirofano`, {
  sql: `SELECT * FROM public.stage`,
  
  measures: {

  },
  
  dimensions: {
    id_stage: {
      sql: `stage`,
      type: `number`,
      primaryKey: true
    },
    MomentoEnQueSeEvaluo: {
      sql: `stage`,
      type: `string`
    }
  },
  
  dataSource: `default`
});

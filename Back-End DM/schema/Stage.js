cube(`Stage`, {
  sql: `SELECT * FROM public.stage`,
  
  measures: {

  },
  
  dimensions: {
    id_stage: {
      sql: `stage`,
      type: `number`,
      primaryKey: true
    },
    Etapa_de_Evaluacion: {
      sql: `stage`,
      type: `string`
    }
  },
  
  dataSource: `default`
});

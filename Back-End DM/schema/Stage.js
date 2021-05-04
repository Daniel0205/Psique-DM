cube(`EtapaDeEvaluacion`, {
  sql: `SELECT * FROM public.stage`,

  measures: {

  },

  dimensions: {
    id_stage: {
      sql: `stage`,
      type: `number`,
      primaryKey: true
    },
    etapa: {
      sql: `stage`,
      type: `string`
    }
  },

  dataSource: `default`
});

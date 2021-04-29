cube(`EnfermedadBase`, {
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
    id_disease: {
      sql: `id_disease`,
      type: `number`,
      primaryKey: true
    },
    enfermedad: {
      sql: `type`,
      type: `string`
    }
  },

  dataSource: `default`
});

cube(`Medication`, {
  sql: `SELECT * FROM public.medication`,
  
  
  measures: {
  },
  
  dimensions: {
    id_medication: {
      sql: `medicine`,
      type: `string`,
      primaryKey: true
    },
    Medicina: {
      sql: `medicine`,
      type: `string`
    }
  },
  
  dataSource: `default`
});

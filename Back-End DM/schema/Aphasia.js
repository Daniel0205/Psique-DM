cube(`Aphasia`, {
  sql: `SELECT * FROM public.aphasia`,
  
  measures: {
  },
  
  dimensions: {
    id_aphasia: {
      sql: `id_aphasia`,
      type: `number`,
      primaryKey: true
    },    
    Afasia: {
      sql: `aphasia`,
      type: `string`
    },
    tiempo_de_Afasia: {
      sql: `time`,
      type: `number`
    }
  },
  
  dataSource: `default`
});

cube(`Afasias`, {
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
    SegundosPasadosAlPresentarse: {
      sql: `time`,
      type: `number`
    }
  },
  
  dataSource: `default`
});

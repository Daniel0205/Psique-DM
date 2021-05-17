cube(`DeficitMotor`, {
  sql: `SELECT * FROM public.motor_deficit`,
  
  measures: {
  },
  
  dimensions: {
    id_deficit: {
      sql: `id_deficit`,
      type: `number`,
      primaryKey: true
    },
    Deficit_motor: {
      sql: `deficit`,
      type: `string`
    }
  },
  
  dataSource: `default`
});

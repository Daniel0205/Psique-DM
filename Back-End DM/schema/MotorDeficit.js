cube(`MotorDeficit`, {
  sql: `SELECT * FROM public.motor_deficit`,
  
  measures: {
  },
  
  dimensions: {
    id_motor_deficit: {
      sql: `deficit`,
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

cube(`Date`, {
  sql: `SELECT * FROM public.date`,
  
  joins: {
    
  },
  
  measures: {
  },
  
  dimensions: {
    //date
    tiempo: {
      sql: `make_date(${CUBE}.year,${CUBE}.month,${CUBE}.day) `,
      type: `time`,
    }
    
  },
  
  dataSource: `default`
});

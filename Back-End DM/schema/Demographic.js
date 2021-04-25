cube(`DatosDemograficos`, {
  sql: `SELECT * FROM public.demographic`,
  
  joins: {
    
  },
  
  measures: {
    /*count: {
      type: `count`,
      drillMembers: [bornCity, actualCity]
    }*/
  },
  
  dimensions: {
      id_demographic:{
        sql: `id_demographic`,
        type: `number`,
        primaryKey:true
      },
      update_date:{
        sql: `update_date`,
        type: `number`,
        primaryKey:true
      },
   //demographic
      Genero: {
        sql: `gender`,
        type: `string`
      },
      
      Ciudad_de_nacimiento: {
        sql: `born_city`,
        type: `string`
      },
      
      Ciudad_de_vivienda: {
        sql: `actual_city`,
        type: `string`
      },
      
      Estado_civil: {
        sql: `civil_state`,
        type: `string`
      },
      
      Dominio_manual: {
        sql: `handedness`,
        type: `string`
      },
      
      Nivel_de_escolaridad: {
        sql: `scholarship`,
        type: `string`
      }

  },
  
  dataSource: `default`
});

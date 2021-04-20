cube(`Background`, {
  sql: `SELECT * FROM public.background`,
  
  joins: {
    
  },
  
  measures: {

  },
  
  dimensions: {
    id_background: {
      sql: `id_background`,
      type: `number`,
      primaryKey:true
    },
 //background
    Sufre_de_rinitis: {
      sql: `Case When rhinitis Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Sufre_de_migrana: {
      sql: `Case When earache Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Sufrio_trauma_craneal: {
      sql: `Case When head_trauma Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Sufrio_trauma_prenatal: {
      sql: `Case When prenatal_trauma Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Tiene_meningitis: {
      sql: `Case When meningitis Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Nacimiento_prematuro: {
      sql: `Case When premature_birth Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Uso_de_Narcoticos: {
      sql: `Case When narcotics Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Sufre_de_asma: {
      sql: `Case When asthma Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Sufrio_de_sinusitis: {
      sql: `Case When sinusitis Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Ha_sufrido_neumotorax: {
      sql: `Case When pneumothorax Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    presento_tuberculosis: {
      sql: `Case When tuberculosis Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Problemas_cardicos: {
      sql: `Case When heart_problems Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Problemas_renales: {
      sql: `Case When renal_problems Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    Problemas_en_Huesos: {
      sql: `Case When bone_problems Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Problemas_epidermicos: {
      sql: `Case When epidermal_problems Then 'Si' ELSE 'No' END`,
      type: `string`
    },    
    Fumador: {
      sql: `Case When smoking Then 'Si' ELSE 'No' END`,
      type: `string`
    },
    
    Alcoholismo: {
      sql: `Case When alcoholism Then 'Si' ELSE 'No' END`,
      type: `string`
    },
  },
  
  dataSource: `default`
});

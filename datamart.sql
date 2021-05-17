/***********************************************************************************
------------------------------------------------------------------------------------
-------------------------------DEFINICION DE TABLAS---------------------------------
------------------------------------------------------------------------------------
***********************************************************************************/
DROP TABLE IF EXISTS demographic CASCADE;
CREATE TABLE demographic(
	id_demographic BIGINT UNIQUE NOT NULL,
	update_date BIGINT NOT NULL,
    gender TEXT NOT NULL,
    born_city  TEXT NOT NULL,
	actual_city  TEXT NOT NULL,
	civil_state TEXT NOT NULL,
	socioeconomic_status INT NOT NULL,
    age INT NOT NULL,
	handedness TEXT NOT NULL,
	scholarship TEXT NOT NULL,
	PRIMARY KEY(id_demographic, update_date)
);

INSERT INTO demographic values(1111,20190520,'M','Cali','Medellin','S',2,19,'L','T');
INSERT INTO demographic values(2222,20190520,'F','Bogota','Bogota','C',3,23,'R','U');
INSERT INTO demographic values(3333,20190520,'N','Medellin','Pasto','D',4,22,'L','B');



DROP TABLE IF EXISTS background CASCADE;
CREATE TABLE background(
	id_background BIGINT UNIQUE NOT NULL,
	update_date BIGINT NOT NULL,
	head_trauma BOOLEAN NOT NULL,
	prenatal_trauma BOOLEAN NOT NULL,
	meningitis BOOLEAN NOT NULL,
	premature_birth BOOLEAN NOT NULL,
	narcotics BOOLEAN NOT NULL,
	asthma BOOLEAN NOT NULL,
	earache BOOLEAN NOT NULL,
	sinusitis BOOLEAN NOT NULL,
	rhinitis BOOLEAN NOT NULL,
	pneumothorax BOOLEAN NOT NULL,
	tuberculosis BOOLEAN NOT NULL,
	heart_problems BOOLEAN NOT NULL,
	renal_problems BOOLEAN NOT NULL,
	bone_problems BOOLEAN NOT NULL,
	epidermal_problems BOOLEAN NOT NULL,
	smoking BOOLEAN NOT NULL,
	alcoholism BOOLEAN NOT NULL,
	primary key (id_background, update_date)
);


INSERT INTO background values(3333,20190520,false,false,false,false,false,false,false,false,false,
										 false,false,false,false,false,false,false,false);

INSERT INTO background values(1111,20190520,true,true,true,true,true,true,true,true,true,
										 true,true,true,true,true,true,true,true);


INSERT INTO background values(2222,20190520,true,true,true,true,true,true,true,true,true,
									false,false,false,false,false,false,false,false);


DROP TABLE IF EXISTS cognitive_disease CASCADE;
CREATE TABLE cognitive_disease(
	id_disease SERIAL PRIMARY KEY,
	type TEXT NOT NULL
);

INSERT INTO cognitive_disease values(1111,'alzheimer');
INSERT INTO cognitive_disease values(2222,'epilepsia');
INSERT INTO cognitive_disease values(3333,'aasdasdas');

DROP TABLE IF EXISTS medication CASCADE;
CREATE TABLE medication(
	id_medication SERIAL PRIMARY KEY,
	medicine TEXT NOT NULL
);

INSERT INTO medication values(1111,'acetaminofen');
INSERT INTO medication values(2222,'loratadina');
INSERT INTO medication values(3333,'asdad');

DROP TABLE IF EXISTS date CASCADE;
CREATE TABLE date(
	id_date SERIAL PRIMARY KEY,
	day INT NOT NULL,
	month INT NOT NULL,
	year INT NOT NULL
);

INSERT INTO date values(1111,15,09,2019);
INSERT INTO date values(2222,15,10,2018);
INSERT INTO date values(3333,30,12,2012);

DROP TABLE IF EXISTS consultation_neuropsychological_assessment CASCADE;
CREATE TABLE consultation_neuropsychological_assessment(
	id_assessment SERIAL PRIMARY KEY,
	id_background INT NOT NULL,
	id_background_date INT NOT NULL,
	id_demographic INT NOT NULL,
	id_demographic_date INT NOT NULL,
	id_disease INT NOT NULL,
	id_medication INT NOT NULL,
	id_date INT NOT NULL,
	iq INT ,
	verbal_comprehension INT,
	fluid_reasoning INT,
	working_memory INT,
	processing_speed INT,
	rey_result INT,
	rey_percentil INT,
	stroop_word_colour INT,
	stroop_word INT,
	stroop_colour INT,
	FOREIGN KEY(id_background,id_background_date) REFERENCES background(id_background,update_date),
	FOREIGN KEY(id_demographic,id_demographic_date) REFERENCES demographic(id_demographic,update_date),
	FOREIGN KEY(id_disease) REFERENCES cognitive_disease(id_disease),
	FOREIGN KEY(id_medication) REFERENCES medication(id_medication)
);


INSERT INTO consultation_neuropsychological_assessment values(1111,1111,20190520,1111,20190520,1111,1111,1111,1,1,1,1,1,1,1,1,1);
INSERT INTO consultation_neuropsychological_assessment values(2222,2222,20190520,2222,20190520,2222,2222,1111,2,2,2,2,2,2,2,2,2);
INSERT INTO consultation_neuropsychological_assessment values(3333,3333,20190520,3333,20190520,3333,3333,1111,3,3,3,3,null,3,3,3,3);
INSERT INTO consultation_neuropsychological_assessment values(4444,1111,20190520,1111,20190520,3333,3333,2222,3,3,3,3,3,3,3,3,3);
INSERT INTO consultation_neuropsychological_assessment values(5555,1111,20190520,1111,20190520,2222,3333,2222,3,3,null,null,null,null,3,3,3);
INSERT INTO consultation_neuropsychological_assessment values(6666,2222,20190520,2222,20190520,2222,3333,3333,3,3,3,3,3,3,3,3,3);
INSERT INTO consultation_neuropsychological_assessment values(7777,3333,20190520,2222,20190520,2222,3333,3333,3,3,3,3,3,null,3,null,3);


/* WADAAAAAAAAAAAAAAAAAAAAAAAAAA */


DROP TABLE IF EXISTS stage CASCADE;
CREATE TABLE stage(
	id_stage INT PRIMARY KEY,
	stage TEXT NOT NULL
);

INSERT INTO stage values(1111,'hemisferio derecho cedado');
INSERT INTO stage values(2222,'hemisferio Izquierdo cedado');
INSERT INTO stage values(3333,'Ningun hemisferio cedado');


DROP TABLE IF EXISTS aphasia CASCADE;
CREATE TABLE aphasia(
	id_aphasia INT PRIMARY KEY,
	aphasia TEXT NOT NULL
);

INSERT INTO aphasia values(1111,'Aphasia 1');
INSERT INTO aphasia values(2222,'Apahsia 2');
INSERT INTO aphasia values(3333,'Aphasia 3');


DROP TABLE IF EXISTS motor_deficit CASCADE;
CREATE TABLE motor_deficit(
	id_deficit INT PRIMARY KEY,
	deficit TEXT NOT NULL
);


INSERT INTO motor_deficit values(1111,'Deficit 1');
INSERT INTO motor_deficit values(2222,'Deficit 2');
INSERT INTO motor_deficit values(3333,'Deficit 3');

DROP TABLE IF EXISTS surgery_neuropsychological_assessment CASCADE;
CREATE TABLE surgery_neuropsychological_assessment(
	id_assessment SERIAL PRIMARY KEY,
	id_background INT NOT NULL,
	id_background_date INT NOT NULL,
	id_demographic INT NOT NULL,
	id_demographic_date INT NOT NULL,
	id_disease INT NOT NULL,
	id_medication INT NOT NULL,
	id_date INT NOT NULL,

	id_stage INT NOT NULL,
	id_aphasia INT NOT NULL,
	id_deficit INT NOT NULL,
	
	wada_result DECIMAL NOT NULL,

	FOREIGN KEY(id_background,id_background_date) REFERENCES background(id_background,update_date),
	FOREIGN KEY(id_demographic,id_demographic_date) REFERENCES demographic(id_demographic,update_date),
	FOREIGN KEY(id_disease) REFERENCES cognitive_disease(id_disease),
	FOREIGN KEY(id_medication) REFERENCES medication(id_medication),
	FOREIGN KEY(id_stage) REFERENCES stage(id_stage),
	FOREIGN KEY(id_aphasia) REFERENCES aphasia(id_aphasia),
	FOREIGN KEY(id_deficit) REFERENCES motor_deficit(id_deficit)
);


INSERT INTO surgery_neuropsychological_assessment values(11111,1111,20190520,1111,20190520,1111,1111,1111,1111,1111,1111,0.8);
INSERT INTO surgery_neuropsychological_assessment values(22222,2222,20190520,2222,20190520,2222,2222,1111,1111,1111,1111,0.5);
INSERT INTO surgery_neuropsychological_assessment values(333333,3333,20190520,3333,20190520,3333,3333,1111,1111,1111,1111,0.5);
INSERT INTO surgery_neuropsychological_assessment values(444444,1111,20190520,1111,20190520,3333,3333,2222,1111,1111,1111,0.5);
INSERT INTO surgery_neuropsychological_assessment values(55555,1111,20190520,1111,20190520,2222,3333,2222,1111,1111,1111,0.7);
INSERT INTO surgery_neuropsychological_assessment values(66666,2222,20190520,2222,20190520,2222,3333,3333,1111,1111,1111,0.5);
INSERT INTO surgery_neuropsychological_assessment values(777777,3333,20190520,2222,20190520,2222,3333,3333,1111,1111,1111,0.5);
-- Load extension to generate uuid
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DO $$
DECLARE
 tank_uuid uuid := uuid_generate_v4();
 clownfish_uuid uuid := uuid_generate_v4();
 moorish_idol_uuid uuid := uuid_generate_v4();
 yellow_tang_uuid uuid := uuid_generate_v4();
 pacific_leaner_shrimp_uuid uuid := uuid_generate_v4();
 porcupine_pufferfish_uuid uuid := uuid_generate_v4();
 black_white_damselfish_uuid uuid := uuid_generate_v4();
 seastar_uuid uuid := uuid_generate_v4();
 royal_gramma_uuid uuid := uuid_generate_v4();
BEGIN

-- Insert Dentist Tank
insert into tank_entity (id, created, created_by, modified, modified_by, clean, height, last_cleaned, length, name, width) values (tank_uuid, now(), null, now(), null, null, 300, now(), 200, 'Dentist Tank', 200);
-- Insert Species
insert into species_entity (id, created, created_by, modified, modified_by, name) values (clownfish_uuid, now(), null, now(), null, 'Clownfish');
insert into species_entity (id, created, created_by, modified, modified_by, name) values (moorish_idol_uuid, now(), null, now(), null, 'Moorish Idol');
insert into species_entity (id, created, created_by, modified, modified_by, name) values (yellow_tang_uuid, now(), null, now(), null, 'Yellow Tang');
insert into species_entity (id, created, created_by, modified, modified_by, name) values (pacific_leaner_shrimp_uuid, now(), null, now(), null, 'Pacific Cleaner Shrimp');
insert into species_entity (id, created, created_by, modified, modified_by, name) values (porcupine_pufferfish_uuid, now(), null, now(), null, 'Porcupine Pufferfish');
insert into species_entity (id, created, created_by, modified, modified_by, name) values (black_white_damselfish_uuid, now(), null, now(), null, 'Black & White Damselfish');
insert into species_entity (id, created, created_by, modified, modified_by, name) values (seastar_uuid, now(), null, now(), null, 'Seastar');
insert into species_entity (id, created, created_by, modified, modified_by, name) values (royal_gramma_uuid, now(), null, now(), null, 'Royal Gramma');
-- Insert Fishes
insert into fish_entity (id, created, created_by, modified, modified_by, alive, date_of_birth, born, name, species_id, tank_id) values (uuid_generate_v4(), now(), null, now(), null, true, now(), 1, 'Nemo', clownfish_uuid, tank_uuid);
insert into fish_entity (id, created, created_by, modified, modified_by, alive, date_of_birth, born, name, species_id, tank_id) values (uuid_generate_v4(), now(), null, now(), null, true, now(), 1, 'Gill', moorish_idol_uuid, tank_uuid);
insert into fish_entity (id, created, created_by, modified, modified_by, alive, date_of_birth, born, name, species_id, tank_id) values (uuid_generate_v4(), now(), null, now(), null, true, now(), 1, 'Bubbles', yellow_tang_uuid, tank_uuid);
insert into fish_entity (id, created, created_by, modified, modified_by, alive, date_of_birth, born, name, species_id, tank_id) values (uuid_generate_v4(), now(), null, now(), null, true, now(), 1, 'Jacques', pacific_leaner_shrimp_uuid, tank_uuid);
insert into fish_entity (id, created, created_by, modified, modified_by, alive, date_of_birth, born, name, species_id, tank_id) values (uuid_generate_v4(), now(), null, now(), null, true, now(), 1, 'Bloat', porcupine_pufferfish_uuid, tank_uuid);
insert into fish_entity (id, created, created_by, modified, modified_by, alive, date_of_birth, born, name, species_id, tank_id) values (uuid_generate_v4(), now(), null, now(), null, true, now(), 1, 'Deb', black_white_damselfish_uuid, tank_uuid);
insert into fish_entity (id, created, created_by, modified, modified_by, alive, date_of_birth, born, name, species_id, tank_id) values (uuid_generate_v4(), now(), null, now(), null, true, now(), 1, 'Peach', seastar_uuid, tank_uuid);
insert into fish_entity (id, created, created_by, modified, modified_by, alive, date_of_birth, born, name, species_id, tank_id) values (uuid_generate_v4(), now(), null, now(), null, true, now(), 1, 'Gurgle', royal_gramma_uuid, tank_uuid);
END$$
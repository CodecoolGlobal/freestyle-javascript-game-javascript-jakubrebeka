ALTER TABLE answer
ADD COLUMN IF NOT EXISTS accepted boolean;

UPDATE answer SET accepted = false;

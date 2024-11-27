import dotenv from 'dotenv';

dotenv.config({ path: `${process.cwd()}/.env` });

export default {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
};

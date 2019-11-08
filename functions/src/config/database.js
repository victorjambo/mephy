import env from './environment';

const dbConfig = {
  databaseUrl: env.DATABASE_URL || 'postgres://localhost/babel',
  dialect: 'postgres'
};

export default {
  development: { ...dbConfig },
  test: { ...dbConfig },
  production: { ...dbConfig },
};

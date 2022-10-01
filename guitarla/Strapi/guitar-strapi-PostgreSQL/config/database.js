module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccphvuqrrk03db6bn0og-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_7bv0'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'dkbPrFis8sRfxB7T09CmOApJg59MA7o8'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

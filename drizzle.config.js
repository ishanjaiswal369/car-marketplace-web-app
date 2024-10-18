/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://CarDB_owner:7lxig9JIBSya@ep-shrill-forest-a56ymqbj.us-east-2.aws.neon.tech/CarDB?sslmode=require',
    }
  };
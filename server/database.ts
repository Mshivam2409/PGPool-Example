import { Sequelize } from "sequelize";

const pgpoolClient = new Sequelize({
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
    },
    host: 'pgpool',
    port: 5432,
    username: 'postgres',
    password: 'adminpassword',
})


export default pgpoolClient
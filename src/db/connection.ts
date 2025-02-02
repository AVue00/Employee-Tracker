import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new pg.Pool({
    user: 'postgres',
    password: process.env.PASSWORD,
    host: 'localhost',
    database: process.env.DATABASE,
    port: 5432
})

const connectivity = async () => {
    try {
        await pool.connect();
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Database connection failed');
    }
}

export { pool, connectivity };
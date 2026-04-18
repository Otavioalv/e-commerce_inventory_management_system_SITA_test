import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});


pool.connect()
    .then(client => {
        console.log("Connected to the database");
        client.release();
    })
    .catch(err => {
        console.error("Failed to connect to the database", err);
    });

    
export default pool;


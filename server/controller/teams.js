import { pool } from '../config/database.js';

const getTeams = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM teams ORDER BY id ASC');
        // console.log("Here is result");
        // console.log(results);
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
    
} 

export default {
    getTeams
}
// Arquivo apenas de exemplo
import connection from '../database/mySqlConnection';

async function getAll() {
  const [result] = await connection.execute(
    'SELECT * FROM table_example'
  );

  return result;
}

export default {
  getAll
};
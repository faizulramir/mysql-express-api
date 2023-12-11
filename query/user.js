const db = require('../services/db');
const helper = require('../services/helper');

async function get(){
    const rows = await db.query(
      `SELECT * FROM users`
    );
  
    const data = helper.emptyOrRows(rows, false);

    return {
        data
    }
}

async function login(user){
    const rows = await db.query(
      `SELECT * FROM users WHERE id = ${user.id}`
    );
  
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

async function register(user){
    const rows = await db.query(
      `SELECT * FROM users WHERE id = ${user.id}`
    );
  
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

async function update(user){
    const rows = await db.query(
      `SELECT * FROM users WHERE id = ${user.id}`
    );
  
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

async function destroy(user){
    const rows = await db.query(
      `SELECT * FROM users WHERE id = ${user.id}`
    );
  
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

module.exports = {
    login,
    get,
    register,
    update,
    destroy,
    get
}
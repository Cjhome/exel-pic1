const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS users(
	user_id SMALLINT(30) PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR(255) NOT NULL,
	user_password VARCHAR(255) NOT NULL,
	user_phone VARCHAR(255) NOT NULL
)`.replace(/[\r\n]/g, '');

const QUERY_TABLE = (tablename) => `SELECT * FROM ${tablename}`;

const INSERT_TABLE = (tablename, {key, val}) => `INSERT INTO ${tablename}(${key}) VALUES(${val})`;

const UPDATE_TABLE = (tablename, {primaryKey, primaryVal}, valStr) => `UPDATE ${tablename} SET ${valStr} WHERE(${primaryKey}=${primaryVal})`;

const DELETE_TABLE = (tablename, {primaryKey, primaryVal}) => `DELETE FROM users WHERE(${primaryKey}=${primaryVal})`;

const FIND_USER = (tablename, {primaryKey, primaryVal}) => `SELECT * FROM ${tablename} WHERE ${primaryKey}='${primaryVal}'`;

module.exports = {
	QUERY_TABLE,
	INSERT_TABLE,
	UPDATE_TABLE,
	DELETE_TABLE,
	CREATE_TABLE,
	FIND_USER
};
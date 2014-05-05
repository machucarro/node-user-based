/**
 * MongoDB config management
 */

exports.url = process.env.DB_URL || "localhost";
exports.port = process.env.DB_PORT || 27017;
exports.user = process.env.DB_USER || "user";
exports.password = process.env.DB_PASS || "";
exports.database = process.env.DB_NAME || "node_app";
/**
 * MongoDB config management
 */

exports.url = process.env.DB_URL || process.env.MONGOHQ_URL || "dburl";
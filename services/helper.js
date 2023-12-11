function emptyOrRows(rows, obj = true) {
    if (!rows) {
        if (obj) return null
        return []
    }

    if (obj) return rows[0];
    return rows;
}
  
module.exports = {
    emptyOrRows
}
// { "users": [...]}

export class Database {
    database = {}

    select(table) {
        const data = this.database[table] ?? []
    }

    insert(table, data) {}
}
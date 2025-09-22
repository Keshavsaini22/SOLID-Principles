class Database {
    connect() {
        throw new Error("Method 'connect()' must be implemented.");
    }
}

// Low-level module
class MySQLDatabase extends Database {
    connect() {
        console.log('Connecting to MySQL');
    }
}

class MongoDBDatabase extends Database {
    connect() {
        console.log('Connecting to MongoDB');
    }
}

// High-level module
class UserService {
    constructor(database) {
        this.database = database; // Dependency injected
    }

    getUser() {
        this.database.connect();
        console.log('Fetching user');
    }
}

// Usage
const mysqlDatabase = new MySQLDatabase();
const userServiceWithMySQL = new UserService(mysqlDatabase);
userServiceWithMySQL.getUser();

const mongoDatabase = new MongoDBDatabase();
const userServiceWithMongo = new UserService(mongoDatabase);
userServiceWithMongo.getUser();
class UserRepository {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
        return user;
    }

    fetchUser(userId) {
        return this.users.find(u => u.id === userId);
    }
}

class ActivityLogger {
    logActivity(userId, action) {
        const timestamp = new Date().toISOString();
        console.log(`User with ID: ${userId} performed action: ${action} at ${timestamp}`);
    }
}

class UserService{
    constructor(userRepository, activityLogger) {
        this.userRepository = userRepository;
        this.activityLogger = activityLogger;
    }

    addUser(user) {
        return this.userRepository.addUser(user);
    }
    
    fetchUser(userId) {
        const user = this.userRepository.fetchUser(userId);
        this.activityLogger.logActivity(userId, 'fetchUser');
        return user;
    }
}

const userRepository = new UserRepository();
const activityLogger = new ActivityLogger();
const userService = new UserService(userRepository, activityLogger);

userService.addUser({ id: 1, name: 'Alice' });
userService.fetchUser(1);
class Room {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(): void {
    console.log(`This is the ${this.name}`);
  }
}

class House {
  private rooms: Room[];

  constructor() {
    this.rooms = [];
    this.rooms.push(new Room("Living Room"));
    this.rooms.push(new Room("Kitchen"));
    this.rooms.push(new Room("Bedroom"));
  }

  showHouseLayout(): void {
    for (const room of this.rooms) {
      room.describe();
    }
  }
}


// House ◆────→ Room
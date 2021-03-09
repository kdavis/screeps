var roomManager = require('manager.room');

module.exports.loop = function () {
    let roomCount = 0;
    for (const room in Game.rooms){
        roomCount++;
        
        roomManager.handle(room);
    }
}

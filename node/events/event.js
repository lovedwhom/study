var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(11);

function shat(who){
    console.log(who + ' emit shat' )
}
life.on('hah',shat);
life.on('hah',function (who) {
    console.log(who + ' emit hah' )
});
life.on('hah',function (who) {
    console.log(who + ' emit hah' )
});
life.on('hah',function (who) {
    console.log(who + ' emit hah' )
});
life.on('hah',function (who) {
    console.log(who + ' emit hah' )
});
life.on('hah',function (who) {
    console.log(who + ' emit hah' )
});
life.on('hah',function (who) {
    console.log(who + ' emit hah' )
});
life.on('hah',function (who) {
    console.log(who + ' emit hah' )
});
life.on('hah',function (who) {
    console.log(who + ' emit hah' )
});
life.on('hah',function (who) {
    console.log(who + ' emit hah' )
});
life.on('hah',function (who) {
    console.log(who + ' emit hah' )
});

// life.removeListener('hah',shat);

var hasListener = life.emit('hah','wang');
var hasListener1 = life.emit('ssss','wang');
console.log(EventEmitter.listenerCount(life,'hah'));
console.log(hasListener,hasListener1);
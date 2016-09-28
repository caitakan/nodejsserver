

var _ = require('ramda');

var notifiction_new_friend_to_a_socket = function(socket, receiver, friend, relation){
	var NEW_FRIEND = 'new_relation';
	var data = {
		receiver: receiver,
		friend: friend,
		relation: relation
	};
	socket.emit(NEW_FRIEND, data);
};

var socket = require('socket.io-client')('http://localhost:2333');

socket.on('connect', function(){
	console.log('connect server');
});

var notifiction_new_friend_to_server = _.curry(notifiction_new_friend_to_a_socket)(socket);

module.exports = {
	notification: notifiction_new_friend_to_server,
};

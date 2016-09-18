import Server from 'socket.io'
var clients = {}
var _io
var _store

export function sendMessage(type, data) {
  console.log("Sending Message")
  _io.emit(type, data)
}

export default function startServer(store) {
  _store = store
  _io = new Server().attach(8090);

  // store.subscribe(
  // )

  _io.on('connection', (socket) => {
    console.log("Client Connected", socket.id)
    clients[socket.id] = {socket: socket}
    socket.emit('state', JSON.stringify(_store.getState()))
    socket.on('action', (action) => {
      _store.dispatch(action)
    })
  })

}
import Server from 'socket.io'

export default function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', store.getState())
  )

  io.on('connection', (socket) => {
    console.log("Client Connected", socket.id)
    socket.emit('state', JSON.stringify(store.getState()))
  })
}
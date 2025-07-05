// const socketio = require('socket.io');
const proxy = 'http://localhost:3000'

const connectChatbot = async () => {
  // get session id
  const sessionId = await generateInstanceID()
  console.log(sessionId)

  // connect to chat bot socket using session
  
}

const generateInstanceID = async () => {
  const res = await fetch(`${proxy}/api/chatbot`)

  const data = await res.json();
  return data.id;
}
connectChatbot()
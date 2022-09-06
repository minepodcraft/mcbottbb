const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'mcserver', // minecraft server ip
  port: '25565',
  username: 'testtbb', // minecraft username
  // minecraft password, comment out if you want to log into online-mode=false servers
  // only set if you need a port that isn't 25565

             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})


// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

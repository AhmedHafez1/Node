const { log } = require('console');
const os = require('os');

const user = os.userInfo();
const uptime = os.uptime();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

log(user);
log(currentOS);
log(`system is up from ${Math.floor(uptime / 3600)} hours`);

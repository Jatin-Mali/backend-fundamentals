const os = require('os')
const fs = require('fs')
const path = require('path')

const report = {
    hostname: os.hostname(),
    machine: os.machine(),
    type: os.type(),
    platform: os.platform(),
    architecture: os.arch(),
    version: os.version(),
    release: os.release(),
    userInfo: os.userInfo(),
    uptime: os.uptime() / 3600,
    homedir: os.homedir(),
    tmpdir: os.tmpdir(),
    freemem: (os.freemem() / 1024 / 1024 / 1024).toFixed(),
    totalmem: (os.totalmem() / 1024 / 1024 / 1024).toFixed(),
    loadavg: os.loadavg(),
    cpus: os.cpus().length,
    timestamp: new Date().toISOString()
}
const filepath = path.join(__dirname,"system_report.txt")
if (process.argv.includes("--save")) {
    fs.writeFileSync(filepath, JSON.stringify(report,null,2))

    console.log(`System Report is saved at: ${filepath}`);

}

module.exports = report
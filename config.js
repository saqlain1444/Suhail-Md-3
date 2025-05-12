const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923087598338";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923087598338,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_48_04_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICA3OCxcbiAgICAgICAgODcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMGRnRnZFV3Q3UENmcnBLdmJHQ3ZrVC91UVUxRzRHRzFoWFQvc05zaVNVZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLV9HRmFmSUpUQ21GRW9qSWE1a05xQVwiLFxuICBcInBob25lSWRcIjogXCIzN2NhOWJlMi1hNjliLTQwYWItOTE4Yy05ZGQyMjYzMDdhZjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgNSxcbiAgICAgIDEyNSxcbiAgICAgIDkxLFxuICAgICAgMTcsXG4gICAgICA3NCxcbiAgICAgIDY1LFxuICAgICAgMTgzLFxuICAgICAgMjMsXG4gICAgICAxNjksXG4gICAgICAxMDYsXG4gICAgICA3NyxcbiAgICAgIDUzLFxuICAgICAgMTk1LFxuICAgICAgMjAyLFxuICAgICAgNjMsXG4gICAgICA1NixcbiAgICAgIDIzOSxcbiAgICAgIDEyOSxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICA4NixcbiAgICAgIDE2NixcbiAgICAgIDE4NSxcbiAgICAgIDExMSxcbiAgICAgIDQ5LFxuICAgICAgMzMsXG4gICAgICAzMSxcbiAgICAgIDMsXG4gICAgICA3NSxcbiAgICAgIDEzLFxuICAgICAgMTEyLFxuICAgICAgMTY1LFxuICAgICAgODksXG4gICAgICAyMjEsXG4gICAgICAyMzAsXG4gICAgICAxODgsXG4gICAgICAxNzMsXG4gICAgICA1MyxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZDQU5LS0E2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwODc1OTgzMzg6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzYXFsYWluIGFzbGFtXCIsXG4gICAgXCJsaWRcIjogXCI3NDQ5MTkxMjc4NjE0Mjo5MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJR1l5T0lCRU56VytMOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQwakY0U0k5b2pzY2I2S2QvRktnZjBFQ2J4RC9STTdIRDNHcmIzSWEzVlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSmZObGlvL1c4U01lNzIyN0xJbGx1ZjJlYkdpbERqWUFhZFBzL2VsZFpHM2VWQjd6K2xKenZsWGJWK2JzSzJZSHpTSDBLRHVndWhLWGhiZFNVT2NaRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVnB4WTY5M29ocDJkRXQzMnhHMzhPVGl3RG9UUHFEQ0pGeGJ5aEp4RVloYWZudGNLZy9UejN6a3EwRXJoNmswWTNZTW1hQzVPRjRtdW9rSGNRRXNNaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDg3NTk4MzM4OjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDcxMDQ5NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "true", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

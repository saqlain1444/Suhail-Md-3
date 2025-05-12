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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_34_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICA3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICA1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBd0FCZ212S3BZOXJHVDA3S0lJV0kwbGdaRGtmQmpzZXU1Wnk4a3NkU2RZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvMXFVSEN2dVJLNmdoejhjb1I0OVpBXCIsXG4gIFwicGhvbmVJZFwiOiBcImVkNGQ0NTZmLWY0ODItNGY0OS1iZGZlLTBlMmEzNzc2Mjk5NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICAyMDksXG4gICAgICA1OSxcbiAgICAgIDk0LFxuICAgICAgODMsXG4gICAgICA0MSxcbiAgICAgIDIyMyxcbiAgICAgIDIxNCxcbiAgICAgIDI0LFxuICAgICAgNDYsXG4gICAgICA0OCxcbiAgICAgIDQ1LFxuICAgICAgOTIsXG4gICAgICA3MCxcbiAgICAgIDI0NCxcbiAgICAgIDIxNixcbiAgICAgIDI0MixcbiAgICAgIDM5LFxuICAgICAgNjMsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDEzMCxcbiAgICAgIDIwNixcbiAgICAgIDg1LFxuICAgICAgNjEsXG4gICAgICAxNjUsXG4gICAgICAxMzYsXG4gICAgICA1MSxcbiAgICAgIDEyMSxcbiAgICAgIDEwMixcbiAgICAgIDg3LFxuICAgICAgMjMxLFxuICAgICAgMTE5LFxuICAgICAgMjQ4LFxuICAgICAgMTYwLFxuICAgICAgMTIzLFxuICAgICAgNzIsXG4gICAgICAyMjUsXG4gICAgICA3NixcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSTko3TEdNOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDg3NTk4MzM4OjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2FxbGFpbiBhc2xhbVwiLFxuICAgIFwibGlkXCI6IFwiNzQ0OTE5MTI3ODYxNDI6OTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUtZeU9JQkVJcXFpTUVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkMGpGNFNJOW9qc2NiNktkL0ZLZ2YwRUNieEQvUk03SEQzR3JiM0lhM1ZRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkk3cWtnVU1TbGs2UWJoa0gwUXdoOHAwd002TVZRNDF5SVdORWRJZk5HeFcvazR3VEwrSGI3SGVJaWdBL0E5TkZCYWpKMWJlaHRzSnp3Ym5BZTlIaUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhncGVSaXdEeVNSTHYvUlZkRFJPYXg5K2pkM0JSVkpHZExBOGU2WUpxT0tjZU1QQkZtdWFIL0ExSlpRbldwZG91MTRrdFlPem0rSXlNSjVBYmVRMmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA4NzU5ODMzODo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDcwNjQwNzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLSHJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtIci5qc29uIjogIntcImtleURhdGFcIjpcInN5bm5yMGNjTUlaUkJnbVpyVzJMWnhSVXkreVkrRVpZREdtaTg5L1h5QnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDc1MTM5MDczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ3MDY0MDM3NzM2XCJ9Igp9"  // PUT your SESSION_ID 


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

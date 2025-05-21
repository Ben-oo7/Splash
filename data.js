// data.js
const linkData = [
// ======================
// Homelab Services
// ======================
{ 
  category: "Homelab", 
  id: "hassistant", 
  title: "Home-Assistant", 
  url: "http://10.0.1.1:8123/lovelace/look", 
  icon: "./img/home-assistant.png" 
},
{ 
  category: "Homelab", 
  id: "casaos", 
  title: "CasaOS", 
  url: "http://10.0.1.200/", 
  icon: "./img/fusionpbx.png" 
},
{ 
  category: "Homelab", 
  id: "netserver", 
  title: "Network Server", 
  url: "https://10.0.1.11:8006/", 
  icon: "./img/nzbhydra.png" 
},
{ 
  category: "Homelab", 
  id: "trilium", 
  title: "Trilium", 
  url: "http://10.0.1.200:8088/", 
  icon: "./img/trilium.png" 
},
{ 
  category: "Homelab", 
  id: "dockage", 
  title: "Dockage", 
  url: "http://10.0.1.200:5001/", 
  icon: "./img/centos.png" 
},
{ 
  category: "Homelab", 
  id: "esphome", 
  title: "Esphome", 
  url: "http://10.0.1.1:8123/5c53de3b_esphome/ingress", 
  icon: "./img/esphome.png" 
},

// ======================
// Network Devices
// ======================
{ 
  category: "Network", 
  id: "kingroon", 
  title: "KINGROON-KLP1", 
  url: "http://10.0.0.201:81/", 
  icon: "./img/3dprinter2.png" 
},
{ 
  category: "Network", 
  id: "ender3", 
  title: "Ender3 S1 Pro", 
  url: "http://klipper.local", 
  icon: "./img/3dprinter1.png" 
},
{ 
  category: "Network", 
  id: "silentdragon", 
  title: "Silent-Dragon", 
  url: "http://10.0.0.200/", 
  icon: "./img/3dprinter3.png" 
},
{ 
  category: "Network", 
  id: "asusrouter", 
  title: "ASUS-Router-GT-AC5300", 
  url: "http://10.0.0.1/Main_Login.asp", 
  icon: "./img/asus-router.png" 
},
{ 
  category: "Network", 
  id: "frontdoorcam", 
  title: "FrontDoor-Camera", 
  url: "https://10.0.0.100/", 
  icon: "./img/seccam.png" 
},
{ 
  category: "Network", 
  id: "backdoorcam", 
  title: "BackDoor-Camera", 
  url: "http://10.0.0.101/", 
  icon: "./img/seccam.png" 
},
{ 
  category: "Network", 
  id: "printer", 
  title: "Printer", 
  url: "http://10.0.0.254/", 
  icon: "./img/printer.png" 
},

// ======================
// Web Links
// ======================
{ 
  category: "Weblinks", 
  id: "ebay", 
  title: "Ebay", 
  url: "https://www.ebay.com.au/", 
  icon: "./img/ebay.png" 
},
{ 
  category: "Weblinks", 
  id: "youtube", 
  title: "Youtube", 
  url: "https://www.youtube.com/", 
  icon: "./img/youtube.png" 
},
{ 
  category: "Weblinks", 
  id: "bunnings", 
  title: "Bunnings", 
  url: "https://www.bunnings.com.au/our-range", 
  icon: "./img/bunnings.jpeg" 
},
{ 
  category: "Weblinks", 
  id: "westpac", 
  title: "Westpac", 
  url: "https://banking.westpac.com.au/wbc/banking/handler?TAM_OP=login&segment=personal&logout=false", 
  icon: "./img/westpac.jpg" 
},
{ 
  category: "Weblinks", 
  id: "aliexpress", 
  title: "Aliexpress", 
  url: "https://www.aliexpress.com/", 
  icon: "./img/ebay.png" 
},
{ 
  category: "Weblinks", 
  id: "area01asus", 
  title: "Area01asus", 
  url: "https://area01asus.000webhostapp.com/", 
  icon: "./img/datadog.png" 
},
{ 
  category: "Weblinks", 
  id: "marksjigs", 
  title: "Webpage-Marks-Jigs", 
  url: "https://b012bz.wixsite.com/marks-jigs", 
  icon: "./img/dd-wrt.png" 
},
{ 
  category: "Weblinks", 
  id: "tvcalendar", 
  title: "TV-Calendar", 
  url: "https://www.pogdesign.co.uk/cat/", 
  icon: "./img/tvcal.png" 
},
{ 
  category: "Weblinks", 
  id: "eztv", 
  title: "EZTV-Official", 
  url: "https://eztv.ag/", 
  icon: "./img/eztv.png" 
},
{ 
  category: "Weblinks", 
  id: "genshin", 
  title: "Genshin-Daily", 
  url: "https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&mhy_auth_required=true&mhy_presentation_style=fullscreen&utm_source=email&utm_medium=game&utm_id=2&utm_campaign=3_4_event_0205", 
  icon: "./img/genshin.png" 
},
{ 
  category: "Weblinks", 
  id: "gumtree", 
  title: "Gumtree", 
  url: "https://www.gumtree.com.au/s-sanctuary-point-south-coast-nsw/l3004386r20?sort=rank", 
  icon: "./img/gumtree.png" 
},

// ======================
// 3DModels Resources
// ======================
{ 
  category: "3DModels", 
  id: "3dprintingnerd", 
  title: "3D-Printing-Nerd-YouTube", 
  url: "https://www.youtube.com/c/3DPrintingNerd/videos", 
  icon: "./img/joel.png" 
},
{ 
  category: "3DModels", 
  id: "thomassanladerer", 
  title: "Made-with-Layers-(Thomas-Sanladerer)-YouTube", 
  url: "https://www.youtube.com/user/ThomasSanladerer/videos", 
  icon: "./img/youtube.png" 
},
{ 
  category: "3DModels", 
  id: "makerworld", 
  title: "MakerWorld", 
  url: "https://makerworld.com/en", 
  icon: "./img/makerworld.png" 
},
{ 
  category: "3DModels", 
  id: "yeggi", 
  title: "Yeggi Models", 
  url: "https://www.yeggi.com/", 
  icon: "./img/youtube.png" 
},
{ 
  category: "3DModels", 
  id: "thangs", 
  title: "Thangs", 
  url: "https://thangs.com/?sort=trending", 
  icon: "./img/things.png" 
},
{ 
  category: "3DModels", 
  id: "printables", 
  title: "Printables.com", 
  url: "https://www.printables.com/", 
  icon: "./img/Printables.png" 
},
{ 
  category: "3DModels", 
  id: "thingiverse", 
  title: "Thingiverse", 
  url: "https://www.thingiverse.com/", 
  icon: "./img/monit.png" 
},

// ======================
// 3D Printing YouTube Channels
// ======================
{ 
  category: "3DYoutube", 
  id: "slant3d", 
  title: "Slant-3D-YouTube", 
  url: "https://www.youtube.com/@slant3d/videos", 
  icon: "./img/slant3d.png" 
},
{ 
  category: "3DYoutube", 
  id: "nextlayer", 
  title: "The-Next-Layer-YouTube", 
  url: "https://www.youtube.com/@thenextlayer/videos", 
  icon: "./img/nlayer.png" 
},
{ 
  category: "3DYoutube", 
  id: "diyperspective", 
  title: "DIYPERSPECTIVE", 
  url: "https://www.youtube.com/@DIYPERSPECTIVE/videos", 
  icon: "./img/youtube.png" 
},
{ 
  category: "3DYoutube", 
  id: "cnckitchen", 
  title: "CNC-Kitchen-YouTube", 
  url: "https://www.youtube.com/@CNCKitchen/videos", 
  icon: "./img/youtube.png" 
},
{ 
  category: "3DYoutube", 
  id: "clough42", 
  title: "Clough42-YouTube", 
  url: "https://www.youtube.com/c/Clough42/videos", 
  icon: "./img/clough.png" 
},
{ 
  category: "3DYoutube", 
  id: "chrisriley", 
  title: "Chris-Riley-YouTube", 
  url: "https://www.youtube.com/c/ChrisRiley/videos", 
  icon: "./img/youtube.png" 
},
{ 
  category: "3DYoutube", 
  id: "teachingtech", 
  title: "Teaching-Tech-YouTube", 
  url: "https://www.youtube.com/@TeachingTech/videos", 
  icon: "./img/ttech.png" 
},
{ 
  category: "3DYoutube", 
  id: "chep", 
  title: "CHEP-YouTube", 
  url: "https://www.youtube.com/user/beginnerelectronics/videos", 
  icon: "./img/youtube.png" 
},
{ 
  category: "3DYoutube", 
  id: "makersmuse", 
  title: "Maker's-Muse-YouTube", 
  url: "https://www.youtube.com/user/TheMakersMuse/videos", 
  icon: "./img/makersmuse.png" 
},

// ======================
// Weather Services
// ======================
{ 
  category: "Weather", 
  id: "weatherhome", 
  title: "Weather Home", 
  url: "https://www.wunderground.com/dashboard/pws/ISTGEO82#", 
  icon: "./img/weather.png" 
},
{ 
  category: "Weather", 
  id: "weatherhome2", 
  title: "Weather Home 2", 
  url: "https://www.wunderground.com/dashboard/pws/ISTGEO20#", 
  icon: "./img/weather.png" 
},
{ 
  category: "Weather", 
  id: "weatherjohnsfarm", 
  title: "Weather Johns Farm", 
  url: "https://www.wunderground.com/dashboard/pws/ISHOALHA3#", 
  icon: "./img/weather.png" 
},

// ======================
// Miscellaneous
// ======================
{ 
  category: "Other", 
  id: "mdilib", 
  title: "MDI Lib", 
  url: "https://pictogrammers.com/library/mdi/", 
  icon: "./img/model.png" 
}
 ];

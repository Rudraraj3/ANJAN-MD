const _0x59eccf=_0x4fbe;(function(_0x5307f1,_0x3e5198){const _0x14e3a5=_0x4fbe,_0x50186b=_0x5307f1();while(!![]){try{const _0x18c177=-parseInt(_0x14e3a5(0x23a))/0x1*(parseInt(_0x14e3a5(0x33f))/0x2)+-parseInt(_0x14e3a5(0x115))/0x3*(-parseInt(_0x14e3a5(0x2cc))/0x4)+-parseInt(_0x14e3a5(0x1fc))/0x5+-parseInt(_0x14e3a5(0x1bd))/0x6*(parseInt(_0x14e3a5(0x153))/0x7)+-parseInt(_0x14e3a5(0x30a))/0x8*(parseInt(_0x14e3a5(0x219))/0x9)+-parseInt(_0x14e3a5(0x1c4))/0xa+parseInt(_0x14e3a5(0x28b))/0xb;if(_0x18c177===_0x3e5198)break;else _0x50186b['push'](_0x50186b['shift']());}catch(_0x5ef3bb){_0x50186b['push'](_0x50186b['shift']());}}}(_0x3f7a,0xac41c));const donPm=new Set(),set_of_filters=new Set(),fs=require('fs'),simpleGit=require(_0x59eccf(0x25d)),git=simpleGit(),{default:WASocket,useMultiFileAuthState,makeInMemoryStore,jidNormalizedUser,proto,Browsers,getAggregateVotesInPollMessage,getKeyAuthor,decryptPollVote,normalizeMessageContent}=require(_0x59eccf(0x289)),pino=require(_0x59eccf(0x19a)),axios=require(_0x59eccf(0x20e)),express=require(_0x59eccf(0x2a2)),cron=require(_0x59eccf(0x2d7)),app=express(),path=require('path'),Welcome=require(_0x59eccf(0x1d1)),os=require('os'),ffmpeg=require(_0x59eccf(0x28e));optionalDependencies={'@ffmpeg-installer/darwin-arm64':_0x59eccf(0x127),'@ffmpeg-installer/darwin-x64':_0x59eccf(0x1aa),'@ffmpeg-installer/linux-arm':_0x59eccf(0x23c),'@ffmpeg-installer/linux-arm64':_0x59eccf(0x1ab),'@ffmpeg-installer/linux-ia32':'4.1.0','@ffmpeg-installer/linux-x64':'4.1.0','@ffmpeg-installer/win32-ia32':_0x59eccf(0x1aa),'@ffmpeg-installer/win32-x64':_0x59eccf(0x1aa)};let platform=os[_0x59eccf(0x2e6)]()+'-'+os[_0x59eccf(0x147)](),packageName=_0x59eccf(0x251)+platform;if(optionalDependencies[packageName]){const ffmpegPath=require('@ffmpeg-installer/ffmpeg')[_0x59eccf(0x1ba)];ffmpeg[_0x59eccf(0x171)](ffmpegPath);}const {commands,sleep,serialize,WAConnection,isAdmin,isBotAdmin,badWordDetect,extractUrlsFromString,GenListMessage,config,parsedJid,groupDB,personalDB}=require('./lib/');let ext_plugins=0x0;String[_0x59eccf(0x1b6)][_0x59eccf(0x177)]=function(){let _0x5bf2be=0x0,_0x1c80bc=arguments;return this['replace'](/{}/g,function(){const _0x388695=_0x4fbe;return typeof _0x1c80bc[_0x5bf2be]!=_0x388695(0x28f)?_0x1c80bc[_0x5bf2be++]:'';});};const isPublic=(config['MODE']&&config[_0x59eccf(0x22f)][_0x59eccf(0x154)]()[_0x59eccf(0x1b8)]())==_0x59eccf(0x23e)?_0x59eccf(0x23e):_0x59eccf(0x1b2),PREFIX_FOR_POLL=!config[_0x59eccf(0x175)]||config[_0x59eccf(0x175)]==_0x59eccf(0x259)||config[_0x59eccf(0x175)]=='null'?'':config[_0x59eccf(0x175)][_0x59eccf(0x14e)]('[')&&config[_0x59eccf(0x175)][_0x59eccf(0x14e)](']')?config[_0x59eccf(0x175)][0x2]:config[_0x59eccf(0x175)][_0x59eccf(0x1b8)]();function insertSudo(){const _0x20a1fb=_0x59eccf;if(config[_0x20a1fb(0x24b)]==_0x20a1fb(0x28c)||config[_0x20a1fb(0x24b)]==_0x20a1fb(0x259)||!config[_0x20a1fb(0x24b)])return[];return config[_0x20a1fb(0x24b)]=config['SUDO'][_0x20a1fb(0x1cd)]('\x20',''),config[_0x20a1fb(0x24b)]['split'](/[;,|]/)||[config[_0x20a1fb(0x24b)]];};function toMessage(_0xc9d217){const _0x1adb22=_0x59eccf;return!_0xc9d217?![]:_0xc9d217=='null'?![]:_0xc9d217=='false'?![]:_0xc9d217==_0x1adb22(0x2a6)?![]:_0xc9d217;}function _0x4fbe(_0x29e75c,_0x3a6545){const _0x3f7ad6=_0x3f7a();return _0x4fbe=function(_0x4fbec1,_0x338140){_0x4fbec1=_0x4fbec1-0x106;let _0x5629d0=_0x3f7ad6[_0x4fbec1];return _0x5629d0;},_0x4fbe(_0x29e75c,_0x3a6545);}function removeFile(_0x27351b){const _0x438df1=_0x59eccf,_0x2a2197=fs[_0x438df1(0x347)]('./'+_0x27351b),_0x3a7a74=['.mp4',_0x438df1(0x2fb),_0x438df1(0x1a4),_0x438df1(0x330),'.jpeg',_0x438df1(0x318),'.mp3',_0x438df1(0x27b),_0x438df1(0x341),_0x438df1(0x22e)];return _0x2a2197[_0x438df1(0x1d7)](_0x45b94c=>{const _0x2abf28=_0x438df1;_0x27351b?_0x3a7a74['includes'](path[_0x2abf28(0x1a2)](_0x45b94c)[_0x2abf28(0x154)]())&&fs['unlinkSync']('./'+_0x27351b+'/'+_0x45b94c):_0x3a7a74[_0x2abf28(0x14e)](path[_0x2abf28(0x1a2)](_0x45b94c)[_0x2abf28(0x154)]())&&fs[_0x2abf28(0x26f)]('./'+_0x45b94c);}),!![];};let store=makeInMemoryStore({'logger':pino()[_0x59eccf(0x2eb)]({'level':_0x59eccf(0x2d3),'stream':_0x59eccf(0x2b1)})});store[_0x59eccf(0x297)]={'message':[]};function decrypt(_0x2ecc5c){const _0x330acb=_0x59eccf;let _0x42bb34=_0x2ecc5c[_0x330acb(0x1d2)](''),_0x2ddf7f='',_0x2659ea='',_0x2c6cfd='',_0x1eb84c;return _0x42bb34[_0x330acb(0x1d7)](_0x278aef=>{const _0x5ee650=_0x330acb;_0x2ddf7f[_0x5ee650(0x263)]<0x5?_0x2ddf7f+=_0x278aef:_0x2659ea=_0x2ecc5c[_0x5ee650(0x124)](_0x2ddf7f,'');let _0xef9377=_0x2659ea[_0x5ee650(0x1d2)]('');_0xef9377['map'](_0x34fa66=>{const _0x2fc644=_0x5ee650;_0x2c6cfd[_0x2fc644(0x263)]<0x4&&(_0x2c6cfd+=_0x34fa66);});}),_0x1eb84c=_0x2ddf7f+_0x2ecc5c[_0x330acb(0x124)](_0x2ddf7f,'')['replace'](_0x2c6cfd,''),_0x1eb84c;}let plaintext=config[_0x59eccf(0x1bc)]['replaceAll'](_0x59eccf(0x10b),''),session=decrypt(plaintext);async function connect(_0x1d90f3){const _0x49e92d=_0x59eccf;!_0x1d90f3&&(console[_0x49e92d(0x1a8)](_0x49e92d(0x14b)),await sleep(0x2710),process['exit'](0x1));if(!fs[_0x49e92d(0x300)](_0x49e92d(0x26e)))fs['mkdirSync'](_0x49e92d(0x26e));let _0x147267=_0x49e92d(0x34f)+_0x1d90f3,{data:_0x5b2f9c}=await axios(_0x147267),_0x58d936=_0x5b2f9c[_0x49e92d(0x2b9)][_0x49e92d(0x31e)]['content'];fs['writeFileSync'](_0x49e92d(0x1c0),_0x58d936);}const Abu=async()=>{const _0x3750c7=_0x59eccf;await connect(session);try{await config[_0x3750c7(0x345)][_0x3750c7(0x35a)]();const {state:_0x871d9a,saveCreds:_0x407d30}=await useMultiFileAuthState(_0x3750c7(0x30e)),_0x2cef8f=pino({'level':_0x3750c7(0x2d3)});let _0x5abffb=await WASocket({'logger':_0x2cef8f,'browser':Browsers[_0x3750c7(0x2ba)](_0x3750c7(0x1e3)),'auth':_0x871d9a,'generateHighQualityLinkPreview':!![],'getMessage':async _0x45f5b9=>{const _0x32b866=_0x3750c7;if(store){const _0x33984e=await store['loadMessage'](_0x45f5b9[_0x32b866(0x2e3)],_0x45f5b9['id']);return _0x33984e[_0x32b866(0x12e)]||undefined;}return{'conversation':_0x32b866(0x292)};}});_0x5abffb['ev']['on'](_0x3750c7(0x156),_0x407d30),store[_0x3750c7(0x162)](_0x5abffb['ev']);if(!_0x5abffb[_0x3750c7(0x265)])_0x5abffb[_0x3750c7(0x265)]={};async function _0xde9e7(_0x3a18f7){const _0x13e30a=_0x3750c7;if(store){const _0x54ea8f=await store[_0x13e30a(0x2bb)](_0x3a18f7[_0x13e30a(0x2e3)],_0x3a18f7['id']);return _0x54ea8f?.[_0x13e30a(0x12e)];}return{'conversation':_0x13e30a(0x148)};}_0x5abffb=new WAConnection(_0x5abffb),_0x5abffb['ev']['on'](_0x3750c7(0x2dc),async({connection:_0x1b2958})=>{const _0x313332=_0x3750c7;if(_0x1b2958=='connecting')console['log'](_0x313332(0x2d8));else{if(_0x1b2958==_0x313332(0x197)){const {ban:_0x3684f7,plugins:_0x428ae2,toggle:_0x18aabf,sticker_cmd:_0x2bd484,shutoff:_0x4294b5,login:_0x100f60}=await personalDB(['ban',_0x313332(0x282),_0x313332(0x189),_0x313332(0x1e8),_0x313332(0x1d8),_0x313332(0x14f)],{'content':{}},_0x313332(0x33d)),{version:_0x10c83d}=(await axios(_0x313332(0x139)))[_0x313332(0x305)];let _0x426b93,_0x526444;try{_0x426b93=(await axios(_0x313332(0x32a)))['data'],_0x526444=(await axios('https://apidead-44f81a32b74a.herokuapp.com/api/get_block?key=vedi'))['data'];}catch(_0x5df9d6){_0x426b93=![],_0x526444=![];}const _0x3ab63d=['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍',_0x313332(0x140),'🔥',_0x313332(0x140),'🩹','💯','♨️','💢','💬','👁️‍🗨️',_0x313332(0x34d),_0x313332(0x2af),'💭','💤','🌐','♠️','♥️','♦️','♣️','🃏',_0x313332(0x1f2),'🎴',_0x313332(0x1b3),'🔇',_0x313332(0x253),'🔉','🔊','🔔','🔕','🎼','🎵','🎶','💹','🏧','🚮','🚰','♿️',_0x313332(0x130),_0x313332(0x20d),'🚻','🚼️','🚾','🛂','🛃','🛄','🛅','⚠️','🚸','⛔️','🚫','🚳','🚭️','🚯','🚱','🚷','📵','🔞','☢️','☣️','⬆️','↗️','➡️','↘️','⬇️','↙️','⬅️','↖️','↕️','↔️','↩️','↪️','⤴️','⤵️','🔃','🔄','🔙','🔚','🔛','🔜','🔝','🛐','⚛️',_0x313332(0x121),'✡️','☸️','☯️','✝️','☦️','☪️','☮️','🕎','🔯','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','⛎','🔀','🔁','🔂','▶️','⏩️','⏭️','⏯️','◀️','⏪️','⏮️','🔼','⏫','🔽','⏬','⏸️','⏹️','⏺️','⏏️','🎦','🔅','🔆','📶','📳','📴','♀️','♂️','⚧','✖️','➕','➖','➗','♾️','‼️','⁉️','❓️','❔','❕','❗️','〰️','💱','💲','⚕️','♻️','⚜️','🔱','📛','🔰','⭕️','✅','☑️','✔️','❌','❎','➰','➿','〽️','✳️','✴️','❇️','©️','®️','™️','#️⃣','*️⃣',_0x313332(0x24f),_0x313332(0x1c1),_0x313332(0x29e),_0x313332(0x16a),_0x313332(0x10a),'5️⃣',_0x313332(0x325),_0x313332(0x2e8),_0x313332(0x293),_0x313332(0x1f1),'🔟','🔠','🔡','🔢','🔣','🔤',_0x313332(0x1de),'🆎',_0x313332(0x110),'🆑','🆒','🆓','ℹ️','🆔','Ⓜ️','🆕','🆖','🅾️','🆗',_0x313332(0x15f),'🆘','🆙','🆚','🈁','🈂️',_0x313332(0x256),'🈶',_0x313332(0x21b),'🉐','🈹',_0x313332(0x1c3),'🈲','🉑','🈸','🈴','🈳','㊗️','㊙️','🈺','🈵','🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫️','⚪️','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛️','⬜️','◼️','◻️','◾️','◽️','▪️','▫️','🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','🔳','🔲','🕛️',_0x313332(0x11b),_0x313332(0x1e2),_0x313332(0x27d),_0x313332(0x2f3),_0x313332(0x184),'🕒️',_0x313332(0x1c6),_0x313332(0x2b0),_0x313332(0x2a3),_0x313332(0x2e4),_0x313332(0x250),_0x313332(0x167),_0x313332(0x34e),_0x313332(0x353),_0x313332(0x25b),_0x313332(0x33c),_0x313332(0x11e),_0x313332(0x285),_0x313332(0x247),_0x313332(0x22b),_0x313332(0x2fd),_0x313332(0x29c),'🕦️','*️','#️','0️','1️','2️','3️','4️','5️','6️','7️','8️','9️','🛎️','🧳','⌛️','⏳️','⌚️','⏰','⏱️','⏲️',_0x313332(0x21c),_0x313332(0x112),_0x313332(0x11d),'🧭','🎃','🎄','🧨','🎈','🎉','🎊','🎎','🎏','🎐','🎀','🎁','🎗️',_0x313332(0x15a),'🎫','🔮','🧿','🎮️',_0x313332(0x354),'🎰','🎲','♟️','🧩','🧸',_0x313332(0x2c1),'🎨','🧵','🧶','👓️',_0x313332(0x1c9),'🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩱','🩲','🩳','👙','👚','👛','👜','👝',_0x313332(0x1f6),'🎒','👞','👟','🥾','🥿','👠','👡','🩰','👢','👑','👒','🎩',_0x313332(0x1ee),'🧢','⛑️','📿','💄','💍','💎','📢','📣','📯','🎙️',_0x313332(0x303),_0x313332(0x152),'🎤',_0x313332(0x228),_0x313332(0x28d),'🎷','🎸','🎹','🎺','🎻','🪕','🥁','📱','📲','☎️','📞','📟️','📠','🔋','🔌',_0x313332(0x212),_0x313332(0x233),_0x313332(0x23d),'⌨️','🖱️',_0x313332(0x11f),'💽','💾',_0x313332(0x2f5),'📀','🧮','🎥','🎞️',_0x313332(0x1c5),_0x313332(0x10f),'📺️',_0x313332(0x2f0),'📸','📹️','📼',_0x313332(0x1fb),'🔎','🕯️','💡','🔦','🏮','🪔','📔','📕','📖','📗','📘','📙','📚️','📓','📒','📃','📜','📄','📰',_0x313332(0x191),'📑','🔖',_0x313332(0x2c5),'💰️','💴','💵','💶','💷','💸',_0x313332(0x129),'🧾','✉️','💌','📧','🧧','📨','📩',_0x313332(0x2d2),'📥️',_0x313332(0x306),_0x313332(0x1f4),_0x313332(0x1cb),_0x313332(0x2c6),_0x313332(0x14d),'📮',_0x313332(0x157),'✏️','✒️','🖋️','🖊️','🖌️',_0x313332(0x31d),'📝','💼','📁','📂',_0x313332(0x287),'📅','📆',_0x313332(0x1fd),'🗓️','📇','📈','📉','📊',_0x313332(0x1c7),'📌','📍','📎','🖇️','📏','📐','✂️',_0x313332(0x336),_0x313332(0x173),'🗑️','🔒️',_0x313332(0x248),'🔏','🔐','🔑',_0x313332(0x13e),'🔨','🪓','⛏️','⚒️',_0x313332(0x168),_0x313332(0x26d),'⚔️',_0x313332(0x304),'🏹',_0x313332(0x24c),'🔧','🔩','⚙️',_0x313332(0x307),'⚖️','🦯','🔗','⛓️','🧰','🧲','⚗️','🧪','🧫','🧬','🔬','🔭','📡','💉','🩸','💊','🩹','🩺','🚪',_0x313332(0x119),_0x313332(0x2b8),'🪑','🚽','🚿','🛁','🪒','🧴','🧷','🧹','🧺','🧻','🧼','🧽','🧯','🛒','🚬','⚰️','⚱️','🏺',_0x313332(0x106),_0x313332(0x2fc),'⛰️','🌋','🗻',_0x313332(0x2f1),_0x313332(0x301),_0x313332(0x2d9),_0x313332(0x21e),'🏟️',_0x313332(0x111),_0x313332(0x2e5),'🧱',_0x313332(0x16c),_0x313332(0x332),'🏠️','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬',_0x313332(0x2a4),'🏯','🏰','💒','🗼','🗽','⛪️','🕌','🛕','🕍','⛩️','🕋','⛲️','⛺️','🌁','🌃',_0x313332(0x21f),'🌄','🌅','🌆','🌇','🌉','🗾',_0x313332(0x198),'🎠','🎡','🎢','💈','🎪','🚂','🚃','🚄','🚅','🚆','🚇️','🚈','🚉','🚊','🚝','🚞','🚋','🚌',_0x313332(0x337),'🚎','🚐',_0x313332(0x28a),'🚒','🚓',_0x313332(0x1a7),'🚕','🚖','🚗',_0x313332(0x18c),'🚙','🚚','🚛','🚜',_0x313332(0x241),_0x313332(0x2ad),'🛵','🦽','🦼','🛺','🚲️','🛴','🛹','🚏','🛣️',_0x313332(0x1ad),'🛢️','⛽️','🚨','🚥','🚦','🛑','🚧','⚓️','⛵️','🛶','🚤',_0x313332(0x30b),'⛴️',_0x313332(0x249),'🚢','✈️',_0x313332(0x13a),'🛫','🛬','🪂','💺','🚁','🚟','🚠','🚡',_0x313332(0x20b),'🚀','🛸','🎆','🎇','🎑','🗿','⚽️','⚾️','🥎','🏀','🏐','🏈','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍','🏓','🏸','🥊','🥋','🥅','⛳️','⛸️','🎣','🤿','🎽','🎿','🛷','🥌','🎯','🪀','🪁','🎱',_0x313332(0x160),_0x313332(0x274),'🏅','🥇','🥈','🥉','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥','🥑','🍆','🥔','🥕','🌽',_0x313332(0x18a),'🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🥙','🧆','🥚','🍳','🥘','🍲','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕️','🍵','🍶','🍾','🍷','🍸️','🍹','🍺','🍻','🥂','🥃','🥤','🧃','🧉','🧊','🥢',_0x313332(0x1d6),'🍴','🥄','🔪','🐵','🐒','🦍','🦧','🐶',_0x313332(0x32e),'🦮',_0x313332(0x10d),'🦺','🐩','🐺','🦊','🦝','🐱',_0x313332(0x264),_0x313332(0x343),'🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇',_0x313332(0x352),'🦔','🦇','🐻',_0x313332(0x1cc),'❄️','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥',_0x313332(0x1ea),'🐧',_0x313332(0x193),'🦅','🦆','🦢','🦉','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬',_0x313332(0x2f9),'🐠','🐡','🦈','🐙','🦑','🦀','🦞','🦐','🦪','🐚','🐌','🦋','🐛','🐜','🐝','🐞','🦗',_0x313332(0x16b),_0x313332(0x237),'🦂','🦟','🦠','💐','🌸','💮',_0x313332(0x107),'🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴','🌵','🎋','🎍','🌾','🌿','☘️','🍀','🍁','🍂','🍃',_0x313332(0x143),_0x313332(0x359),_0x313332(0x135),'🌑','🌒','🌓','🌔',_0x313332(0x33e),'🌖','🌗','🌘','🌙','🌚','🌛',_0x313332(0x180),'☀️','🌝','🌞','🪐','💫','⭐️','🌟','✨','🌠','🌌','☁️','⛅️','⛈️','🌤️','🌥️',_0x313332(0x134),'🌧️','🌨️',_0x313332(0x334),_0x313332(0x142),'🌫️',_0x313332(0x1ef),'🌀','🌈','🌂','☂️','☔️','⛱️','⚡️','❄️','☃️','⛄️','☄️','🔥','💧','🌊','💥','💦','💨','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨',_0x313332(0x125),'😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪',_0x313332(0x31c),'💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶',_0x313332(0x295),_0x313332(0x176),'🥴',_0x313332(0x316),'💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻',_0x313332(0x192),'👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚',_0x313332(0x2c8),'✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙',_0x313332(0x269),'👉️',_0x313332(0x1e9),'🖕',_0x313332(0x2ae),'☝️',_0x313332(0x18f),_0x313332(0x1e1),'✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶',_0x313332(0x1eb),'🦻','👃','🧠','🦷','🦴','👀',_0x313332(0x2d4),'👅','👄','💋','👶','🧒','👦','👧','🧑','👨','👩','🧔',_0x313332(0x122),'🧔‍♂️','🧑','👨‍','🦰','👩‍','🦰','🧑',_0x313332(0x1f9),'🦱',_0x313332(0x246),'🦱','🧑',_0x313332(0x1f9),'🦳',_0x313332(0x246),'🦳','🧑',_0x313332(0x1f9),'🦲',_0x313332(0x246),'🦲','👱',_0x313332(0x1dd),_0x313332(0x2b4),'🧓','👴','👵','🙍','🙍‍♂️',_0x313332(0x2a5),'🙎','🙎‍♂️',_0x313332(0x31a),'🙅',_0x313332(0x136),_0x313332(0x270),'🙆',_0x313332(0x342),_0x313332(0x1f8),'💁',_0x313332(0x2ca),'💁‍♀️','🙋',_0x313332(0x161),_0x313332(0x35b),'🧏',_0x313332(0x144),_0x313332(0x215),'🙇',_0x313332(0x245),_0x313332(0x286),'🤦',_0x313332(0x240),_0x313332(0x1b5),'🤷',_0x313332(0x18d),_0x313332(0x10e),'🧑‍⚕️','👨‍⚕️',_0x313332(0x22a),_0x313332(0x11c),_0x313332(0x172),_0x313332(0x203),_0x313332(0x174),_0x313332(0x278),_0x313332(0x24e),_0x313332(0x2b5),_0x313332(0x1d0),'👩‍⚖️',_0x313332(0x216),_0x313332(0x2e7),_0x313332(0x17e),'🧑‍🍳',_0x313332(0x226),_0x313332(0x1be),_0x313332(0x182),_0x313332(0x254),_0x313332(0x224),_0x313332(0x27f),_0x313332(0x19e),'👩‍🏭',_0x313332(0x120),'👨‍💼',_0x313332(0x1cf),_0x313332(0x1a5),'👨‍🔬',_0x313332(0x1a3),_0x313332(0x214),'👨‍💻',_0x313332(0x188),'🧑‍🎤',_0x313332(0x201),_0x313332(0x2bf),_0x313332(0x1f0),_0x313332(0x2ac),_0x313332(0x33b),_0x313332(0x30c),_0x313332(0x15b),_0x313332(0x24a),_0x313332(0x331),_0x313332(0x317),_0x313332(0x29d),_0x313332(0x236),_0x313332(0x34c),'👩‍🚒','👮',_0x313332(0x309),_0x313332(0x2ee),_0x313332(0x1c8),_0x313332(0x19f),_0x313332(0x273),'💂','💂‍♂️','💂‍♀️','👷',_0x313332(0x12a),'👷‍♀️','🤴','👸','👳',_0x313332(0x2bc),_0x313332(0x145),'👲','🧕','🤵',_0x313332(0x1b7),_0x313332(0x1ce),'👰',_0x313332(0x195),_0x313332(0x2aa),'🤰','🤱',_0x313332(0x246),'🍼',_0x313332(0x1f9),'🍼',_0x313332(0x20f),'🍼','👼','🎅','🤶','🧑‍','🎄','🦸',_0x313332(0x31b),'🦸‍♀️','🦹',_0x313332(0x299),'🦹‍♀️','🧙','🧙‍♂️',_0x313332(0x206),'🧚','🧚‍♂️',_0x313332(0x146),'🧛',_0x313332(0x19d),_0x313332(0x118),'🧜',_0x313332(0x1f5),_0x313332(0x1a6),'🧝',_0x313332(0x323),_0x313332(0x12c),'🧞',_0x313332(0x221),'🧞‍♀️','🧟','🧟‍♂️','🧟‍♀️','💆',_0x313332(0x1ae),'💆‍♀️','💇','💇‍♂️',_0x313332(0x17f),'🚶',_0x313332(0x2ce),_0x313332(0x267),'🧍','🧍‍♂️',_0x313332(0x2d6),'🧎','🧎‍♂️',_0x313332(0x1f3),_0x313332(0x20f),'🦯',_0x313332(0x1f9),'🦯',_0x313332(0x246),'🦯','🧑‍','🦼',_0x313332(0x1f9),'🦼','👩‍','🦼',_0x313332(0x20f),'🦽',_0x313332(0x1f9),'🦽',_0x313332(0x246),'🦽','🏃',_0x313332(0x2f6),_0x313332(0x16d),'💃','🕺',_0x313332(0x128),'👯',_0x313332(0x2e2),_0x313332(0x239),'🧖','🧖‍♂️',_0x313332(0x2d5),'🧗',_0x313332(0x258),_0x313332(0x2ed),'🤺','🏇','⛷️',_0x313332(0x2f8),'🏌️',_0x313332(0x1bf),_0x313332(0x2de),'🏄️','🏄‍♂️','🏄‍♀️','🚣',_0x313332(0x279),_0x313332(0x1e6),_0x313332(0x14c),'🏊‍♂️',_0x313332(0x15d),'⛹️',_0x313332(0x2cf),_0x313332(0x2ec),'🏋️','🏋️‍♂️','🏋️‍♀️','🚴','🚴‍♂️',_0x313332(0x312),'🚵','🚵‍♂️','🚵‍♀️','🤸','🤸‍♂️','🤸‍♀️','🤼',_0x313332(0x2b7),_0x313332(0x24d),'🤽','🤽‍♂️',_0x313332(0x202),'🤾','🤾‍♂️',_0x313332(0x1b1),'🤹','🤹‍♂️','🤹‍♀️','🧘',_0x313332(0x1e4),'🧘‍♀️','🛀','🛌',_0x313332(0x20f),_0x313332(0x2c2),'🧑','👭','👫','👬','💏','👩‍❤️‍💋‍👨',_0x313332(0x335),'👩‍❤️‍💋‍👩','💑','👩‍❤️‍👨',_0x313332(0x186),'👩‍❤️‍👩',_0x313332(0x21d),_0x313332(0x252),_0x313332(0x328),_0x313332(0x114),'👨‍👩‍👦‍👦',_0x313332(0x2fa),_0x313332(0x2d1),_0x313332(0x34a),'👨‍👨‍👧‍👦',_0x313332(0x159),_0x313332(0x26c),_0x313332(0x344),_0x313332(0x117),_0x313332(0x1af),_0x313332(0x2f7),_0x313332(0x315),'👨‍👦',_0x313332(0x29a),_0x313332(0x310),_0x313332(0x16f),'👨‍👧‍👧','👩‍👦',_0x313332(0x1d9),_0x313332(0x2df),'👩‍👧‍👦','👩‍👧‍👧','🗣️','👤','👥','👣'];console[_0x313332(0x1a8)](_0x313332(0x1dc));for(const _0xf8fa53 in _0x428ae2){try{const {data:_0x160ed5}=await axios(_0x428ae2[_0xf8fa53]+'/raw');fs[_0x313332(0x227)](_0x313332(0x11a)+_0xf8fa53+_0x313332(0x348),_0x160ed5),ext_plugins+=0x1,require(_0x313332(0x11a)+_0xf8fa53+'.js');}catch(_0x3c6f71){ext_plugins=0x1,await personalDB(['plugins'],{'content':{'id':_0xf8fa53}},_0x313332(0x338)),console[_0x313332(0x1a8)]('there\x20is\x20an\x20error\x20in\x20plugin\x0aplugin\x20name:\x20'+_0xf8fa53),console[_0x313332(0x1a8)](_0x3c6f71);}}fs[_0x313332(0x347)]('./plugins')['forEach'](_0x538277=>{const _0x1847da=_0x313332;if(path['extname'](_0x538277)[_0x1847da(0x154)]()==_0x1847da(0x348))try{require(_0x1847da(0x11a)+_0x538277);}catch(_0x2a16c1){console['log'](_0x2a16c1),fs[_0x1847da(0x26f)]('./plugins/'+_0x538277);}}),console[_0x313332(0x1a8)](_0x313332(0x17c));if(_0x100f60!=_0x313332(0x15c)&&_0x4294b5!=_0x313332(0x15c)){if(_0x426b93&&_0x426b93['status']&&_0x426b93[_0x313332(0x305)])await _0x5abffb[_0x313332(0x1a1)](_0x5abffb[_0x313332(0x2ff)]['id'],{'text':_0x426b93[_0x313332(0x305)]});else{if(_0x4294b5!=_0x313332(0x15c)){await personalDB([_0x313332(0x14f)],{'content':_0x313332(0x15c)},'set');let _0x33674a=_0x313332(0x1e5)+(_0x313332(0x232)+require('./package.json')['version

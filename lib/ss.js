const _0x1cb16a=_0x4f46;function _0x4f46(_0x27639a,_0x406c20){const _0x2f6e12=_0x2f6e();return _0x4f46=function(_0x4f46e0,_0x1818ca){_0x4f46e0=_0x4f46e0-0x88;let _0x2d4348=_0x2f6e12[_0x4f46e0];return _0x2d4348;},_0x4f46(_0x27639a,_0x406c20);}(function(_0x527b3b,_0x4f852d){const _0x125fad=_0x4f46,_0x4500cb=_0x527b3b();while(!![]){try{const _0x28aeea=parseInt(_0x125fad(0x89))/0x1+-parseInt(_0x125fad(0xa0))/0x2*(-parseInt(_0x125fad(0x98))/0x3)+-parseInt(_0x125fad(0xa7))/0x4*(-parseInt(_0x125fad(0x9e))/0x5)+-parseInt(_0x125fad(0xab))/0x6*(-parseInt(_0x125fad(0xa8))/0x7)+-parseInt(_0x125fad(0xa6))/0x8+-parseInt(_0x125fad(0xb1))/0x9+-parseInt(_0x125fad(0xaa))/0xa;if(_0x28aeea===_0x4f852d)break;else _0x4500cb['push'](_0x4500cb['shift']());}catch(_0x104514){_0x4500cb['push'](_0x4500cb['shift']());}}}(_0x2f6e,0x51e6b));const ffmpeg=require(_0x1cb16a(0x9f)),fs=require('fs');async function sendPhoto(_0x2e4bc8){const _0x1c28cc=_0x1cb16a;if(!/webp/[_0x1c28cc(0x99)](_0x2e4bc8[_0x1c28cc(0x93)]))return _0x2e4bc8[_0x1c28cc(0x9c)](_0x1c28cc(0x8b));let _0x48fe96=_0x2e4bc8[_0x1c28cc(0xa3)]['sticker'];if(!_0x48fe96)return;let _0x393c14=await _0x2e4bc8[_0x1c28cc(0x88)][_0x1c28cc(0x97)](_0x48fe96);await ffmpeg(_0x393c14)['fromFormat'](_0x1c28cc(0xad))[_0x1c28cc(0xa9)](_0x1c28cc(0x8a))['on']('end',async()=>{const _0x542921=_0x1c28cc;await _0x2e4bc8[_0x542921(0x88)][_0x542921(0x8c)](_0x2e4bc8['from'],{'image':fs[_0x542921(0x92)](_0x542921(0x8a))});});}async function sendVoice(_0x589b78){const _0x4a72b5=_0x1cb16a;if(!/video/[_0x4a72b5(0x99)](_0x589b78['mime'])&&!/audio/[_0x4a72b5(0x99)](_0x589b78[_0x4a72b5(0x93)]))return;let _0x60d135=_0x589b78[_0x4a72b5(0xa3)][_0x4a72b5(0x9d)];if(!_0x60d135)return;let _0x264d11=await _0x589b78[_0x4a72b5(0x88)][_0x4a72b5(0x97)](_0x60d135);return await _0x589b78['client'][_0x4a72b5(0x8c)](_0x589b78[_0x4a72b5(0xa2)],{'audio':{'url':_0x264d11},'mimetype':_0x4a72b5(0xa5),'ptt':!![]},{'quoted':_0x589b78});}async function sendGif(_0x23f5b3){const _0x5014b3=_0x1cb16a;if(!/webp/[_0x5014b3(0x99)](_0x23f5b3[_0x5014b3(0x93)]))return;let _0x2d2805=_0x23f5b3[_0x5014b3(0xa3)][_0x5014b3(0xb3)];if(!_0x2d2805)return;let _0x619cc5=await _0x23f5b3[_0x5014b3(0x88)][_0x5014b3(0x97)](_0x2d2805),_0x188519=await webp2mp4File(_0x619cc5);return await _0x23f5b3[_0x5014b3(0x88)][_0x5014b3(0x8c)](_0x23f5b3['from'],{'video':{'url':_0x188519[_0x5014b3(0x8f)]},'gifPlayback':!![]},{'quoted':_0x23f5b3});}async function sendBass(_0x268cc5){const _0x3d57a8=_0x1cb16a;let _0x659ee4=_0x268cc5[_0x3d57a8(0xa3)][_0x3d57a8(0x9d)];if(!_0x659ee4)return;let _0x20b8b1=await _0x268cc5[_0x3d57a8(0x88)][_0x3d57a8(0x97)](_0x659ee4);await ffmpeg(_0x20b8b1)[_0x3d57a8(0x9a)]([_0x3d57a8(0x95)])[_0x3d57a8(0xa9)](_0x3d57a8(0xb4))['on'](_0x3d57a8(0x94),async()=>{const _0x107d8d=_0x3d57a8;await _0x268cc5[_0x107d8d(0x88)]['sendMessage'](_0x268cc5[_0x107d8d(0xa2)],{'audio':fs[_0x107d8d(0x92)](_0x107d8d(0xb4)),'mimetype':_0x107d8d(0xa5),'ptt':![]},{'quoted':_0x268cc5});});}async function sendSlow(_0x4697ca){const _0x5f26bf=_0x1cb16a;let _0x2280d7=_0x4697ca[_0x5f26bf(0xa3)]['audio'];if(!_0x2280d7)return;let _0x165c8c=await _0x4697ca[_0x5f26bf(0x88)]['downloadAndSaveMediaMessage'](_0x2280d7);await ffmpeg(_0x165c8c)[_0x5f26bf(0xb5)](_0x5f26bf(0xb0))[_0x5f26bf(0x9a)](['-y',_0x5f26bf(0x90),'asetrate=44100*0.9'])[_0x5f26bf(0xa9)](_0x5f26bf(0xb4))['on'](_0x5f26bf(0x94),async()=>{const _0x30fc26=_0x5f26bf;await _0x4697ca[_0x30fc26(0x88)]['sendMessage'](_0x4697ca[_0x30fc26(0xa2)],{'audio':fs[_0x30fc26(0x92)](_0x30fc26(0xb4)),'mimetype':'audio/mp4','ptt':![]},{'quoted':_0x4697ca});});}async function sendBlown(_0x5a5636){const _0x134e4a=_0x1cb16a;let _0x334c22=_0x5a5636[_0x134e4a(0xa3)][_0x134e4a(0x9d)];if(!_0x334c22)return;let _0x17f18a=await _0x5a5636['client'][_0x134e4a(0x97)](_0x334c22);await ffmpeg(_0x17f18a)[_0x134e4a(0x9a)]([_0x134e4a(0x8d)])[_0x134e4a(0xa9)](_0x134e4a(0xb4))['on']('end',async()=>{const _0x28442a=_0x134e4a;await _0x5a5636[_0x28442a(0x88)][_0x28442a(0x8c)](_0x5a5636[_0x28442a(0xa2)],{'audio':fs[_0x28442a(0x92)](_0x28442a(0xb4)),'mimetype':_0x28442a(0xa5),'ptt':![]},{'quoted':_0x5a5636});});}async function sendDeep(_0x838930){const _0x250c14=_0x1cb16a;let _0xd2a9d=_0x838930[_0x250c14(0xa3)][_0x250c14(0x9d)];if(!_0xd2a9d)return;let _0x7d59df=await _0x838930[_0x250c14(0x88)][_0x250c14(0x97)](_0xd2a9d);await ffmpeg(_0x7d59df)['outputOptions'](['-af\x20atempo=4/4,asetrate=44500*2/3'])[_0x250c14(0xa9)](_0x250c14(0xb4))['on'](_0x250c14(0x94),async()=>{const _0x1e5bb3=_0x250c14;await _0x838930[_0x1e5bb3(0x88)]['sendMessage'](_0x838930[_0x1e5bb3(0xa2)],{'audio':fs[_0x1e5bb3(0x92)](_0x1e5bb3(0xb4)),'mimetype':_0x1e5bb3(0xa5),'ptt':![]},{'quoted':_0x838930});});}async function sendErrape(_0x24fe63){const _0x3179d5=_0x1cb16a;let _0x331959=_0x24fe63[_0x3179d5(0xa3)][_0x3179d5(0x9d)];if(!_0x331959)return;let _0x553d2c=await _0x24fe63[_0x3179d5(0x88)][_0x3179d5(0x97)](_0x331959);await ffmpeg(_0x553d2c)[_0x3179d5(0x9a)]([_0x3179d5(0x96)])['save'](_0x3179d5(0xb4))['on'](_0x3179d5(0x94),async()=>{const _0x3afe71=_0x3179d5;await _0x24fe63[_0x3afe71(0x88)][_0x3afe71(0x8c)](_0x24fe63[_0x3afe71(0xa2)],{'audio':fs[_0x3afe71(0x92)](_0x3afe71(0xb4)),'mimetype':_0x3afe71(0xa5),'ptt':![]},{'quoted':_0x24fe63});});}async function sendFast(_0x23416){const _0xc0aa4b=_0x1cb16a;let _0x3cb242=_0x23416['reply_message'][_0xc0aa4b(0x9d)];if(!_0x3cb242)return;let _0xe3d68f=await _0x23416[_0xc0aa4b(0x88)][_0xc0aa4b(0x97)](_0x3cb242);await ffmpeg(_0xe3d68f)[_0xc0aa4b(0x9a)]([_0xc0aa4b(0xb2)])[_0xc0aa4b(0xa9)](_0xc0aa4b(0xa1))['on'](_0xc0aa4b(0x94),async()=>{const _0x1b7d98=_0xc0aa4b;await _0x23416[_0x1b7d98(0x88)]['sendMessage'](_0x23416['from'],{'audio':fs['readFileSync'](_0x1b7d98(0xa1)),'mimetype':'audio/mp4','ptt':![]},{'quoted':_0x23416});});}async function sendFat(_0x319b65){const _0x5d1a0e=_0x1cb16a;let _0x1ac37d=_0x319b65[_0x5d1a0e(0xa3)]['audio'];if(!_0x1ac37d)return;let _0x53b02f=await _0x319b65[_0x5d1a0e(0x88)][_0x5d1a0e(0x97)](_0x1ac37d);await ffmpeg(_0x53b02f)[_0x5d1a0e(0x9a)](['-filter:a\x20atempo=1.6,asetrate=22100'])['save'](_0x5d1a0e(0x8e))['on'](_0x5d1a0e(0x94),async()=>{const _0x33f3f0=_0x5d1a0e;await _0x319b65[_0x33f3f0(0x88)][_0x33f3f0(0x8c)](_0x319b65[_0x33f3f0(0xa2)],{'audio':fs[_0x33f3f0(0x92)](_0x33f3f0(0x8e)),'mimetype':_0x33f3f0(0xa5),'ptt':![]},{'quoted':_0x319b65});});}async function sendNightcore(_0x300cee){const _0x3c464c=_0x1cb16a;let _0x1f1f5e=_0x300cee[_0x3c464c(0xa3)][_0x3c464c(0x9d)];if(!_0x1f1f5e)return;let _0x3f93ca=await _0x300cee[_0x3c464c(0x88)][_0x3c464c(0x97)](_0x1f1f5e);await ffmpeg(_0x3f93ca)[_0x3c464c(0x9a)]([_0x3c464c(0x9b)])[_0x3c464c(0xa9)]('./temp/bgass.mp3')['on'](_0x3c464c(0x94),async()=>{const _0x493508=_0x3c464c;await _0x300cee[_0x493508(0x88)][_0x493508(0x8c)](_0x300cee['from'],{'audio':fs['readFileSync'](_0x493508(0x8e)),'mimetype':_0x493508(0xa5),'ptt':![]},{'quoted':_0x300cee});});}async function sendReverse(_0x5738b9){const _0x135428=_0x1cb16a;let _0xc38e93=_0x5738b9[_0x135428(0xa3)][_0x135428(0x9d)];if(!_0xc38e93)return;let _0x5c1f42=await _0x5738b9[_0x135428(0x88)]['downloadAndSaveMediaMessage'](_0xc38e93);await ffmpeg(_0x5c1f42)[_0x135428(0x9a)]([_0x135428(0x91)])['save'](_0x135428(0x8e))['on'](_0x135428(0x94),async()=>{const _0x4eed92=_0x135428;await _0x5738b9[_0x4eed92(0x88)][_0x4eed92(0x8c)](_0x5738b9[_0x4eed92(0xa2)],{'audio':fs[_0x4eed92(0x92)](_0x4eed92(0x8e)),'mimetype':_0x4eed92(0xa5),'ptt':![]},{'quoted':_0x5738b9});});}function _0x2f6e(){const _0x319902=['reply_message','./temp/beass.mp3','audio/mp4','1370256KZChNy','85948NPYMXK','4634SmRlIK','save','4982010LzytMf','2166bMYVpb','exports','webp_pipe','video','-filter:a\x20atempo=0.5,asetrate=65100','atempo=0.5','4566465JJYYsE','-filter:a\x20atempo=1.63,asetrate=44100','sticker','./temp/bass.mp3','audioFilter','client','448862LBYnMa','output.png','need\x20a\x20photo!','sendMessage','-af\x20acrusher=.1:1:64:0:log','./temp/bgass.mp3','result','-af','-filter_complex\x20areverse','readFileSync','mime','end','-af\x20equalizer=f=54:width_type=o:width=2:g=20','-af\x20volume=12','downloadAndSaveMediaMessage','414Ylezvz','test','outputOptions','-filter:a\x20atempo=1.06,asetrate=44100*1.25','reply','audio','125ZbxwAK','fluent-ffmpeg','4164XLdwbL','./temp/bhass.mp3','from'];_0x2f6e=function(){return _0x319902;};return _0x2f6e();}async function sendSquirrel(_0x4b6ade){const _0x1910f0=_0x1cb16a;let _0x4e4f4f=_0x4b6ade[_0x1910f0(0xa3)][_0x1910f0(0x9d)];if(!_0x4e4f4f)return;let _0x18b52d=await _0x4b6ade['client'][_0x1910f0(0x97)](_0x4e4f4f);await ffmpeg(_0x18b52d)[_0x1910f0(0x9a)]([_0x1910f0(0xaf)])[_0x1910f0(0xa9)](_0x1910f0(0xa4))['on'](_0x1910f0(0x94),async()=>{const _0x25a901=_0x1910f0;await _0x4b6ade[_0x25a901(0x88)][_0x25a901(0x8c)](_0x4b6ade[_0x25a901(0xa2)],{'audio':fs[_0x25a901(0x92)]('./temp/beass.mp3'),'mimetype':'audio/mp4','ptt':![]},{'quoted':_0x4b6ade});});}async function sendMp4AsMp3(_0x531022){const _0x5bd148=_0x1cb16a;let _0x2c9b39=_0x531022[_0x5bd148(0xa3)]['video']?_0x531022[_0x5bd148(0xa3)][_0x5bd148(0xae)]:_0x531022[_0x5bd148(0xa3)][_0x5bd148(0x9d)];if(!_0x2c9b39)return;let _0x35215d=await _0x531022[_0x5bd148(0x88)][_0x5bd148(0x97)](_0x2c9b39);await ffmpeg(_0x35215d)[_0x5bd148(0xa9)](_0x5bd148(0xb4))['on'](_0x5bd148(0x94),async()=>{const _0x4af615=_0x5bd148;await _0x531022[_0x4af615(0x88)][_0x4af615(0x8c)](_0x531022[_0x4af615(0xa2)],{'audio':fs[_0x4af615(0x92)](_0x4af615(0xb4)),'mimetype':_0x4af615(0xa5),'ptt':![]},{'quoted':_0x531022});});}module[_0x1cb16a(0xac)]={'sendPhoto':sendPhoto,'sendVoice':sendVoice,'sendGif':sendGif,'sendBass':sendBass,'sendSlow':sendSlow,'sendBlown':sendBlown,'sendDeep':sendDeep,'sendErrape':sendErrape,'sendFast':sendFast,'sendFat':sendFat,'sendNightcore':sendNightcore,'sendReverse':sendReverse,'sendSquirrel':sendSquirrel,'sendMp4AsMp3':sendMp4AsMp3};
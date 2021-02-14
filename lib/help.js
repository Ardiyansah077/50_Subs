const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `🔰 -----[ *MENU ${botName}* ]----- 🔰
*Hallo, ${pushname} 👋*
_Semoga harimu Menyenangkan_ User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ UANG : Rp:${uangku}
┃│➸ XP : ${reqXp}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━•❅•*RULES*•❅•━━━━┓
  ➢ No Spam🚫
  ➢ No Toxix🚫
  ➢ No Vc🚫
  ➢ No Call🚫
  ➢ Bot No Respon?👇
  ➢ Sedang Sibuk/Perbaikan
  ➢ No Kirim Video 🔞🚫
┗━━━━•❅•°•❈ - •°•❅•━━━━┛

*[Selamat Mencoba Menu PatrickBot]*🐦



┏━━⊱ *MENU GROUP* ⊰━━┓
┃
┃⊱❥ *${prefix}welcome* ⟪1/0⟫
┃⊱❥ *${prefix}leveling* ⟪1/0⟫
┃⊱❥ *${prefix}event* ⟪1/0⟫
┃⊱❥ *${prefix}simih* ⟪1/0⟫
┃⊱❥ *${prefix}nsfw* ⟪1/0⟫
┃⊱❥ *${prefix}grup* ⟪buka/tutup⟫
┃⊱❥ *${prefix}add*
┃⊱❥ *${prefix}kick*
┃⊱❥ *${prefix}hedsot*
┃⊱❥ *${prefix}linkgrup*
┃⊱❥ *${prefix}promote*
┃⊱❥ *${prefix}demote*
┃⊱❥ *${prefix}setname*
┃⊱❥ *${prefix}setdesc*
┃⊱❥ *${prefix}leave*
┃⊱❥ *${prefix}tagall*
┃⊱❥ *${prefix}admin*
┃⊱❥ *${prefix}level*
┃⊱❥ *${prefix}fitnah*
┃⊱❥ *${prefix}hidetag*
┃⊱❥ *${prefix}hidetag5*
┃
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *MENU DOMPET* ⊰━━┓
┃
┃⊱❥ *${prefix}limit*
┃⊱❥ *${prefix}atm*
┃⊱❥ *${prefix}transfer*
┃⊱❥ *${prefix}buylimit*
┃
┗━━━━━━━━━━━━━━━━━━━

┏━━⊱ *MENU GABUT* ⊰━━┓
┃
┃⊱❥ *${prefix}apakah*
┃⊱❥ *${prefix}bisakah*
┃⊱❥ *${prefix}kapankah*
┃⊱❥ *${prefix}hobby*
┃⊱❥ *${prefix}rate*
┃⊱❥ *${prefix}seberapagay*
┃⊱❥ *${prefix}nangis*
┃⊱❥ *${prefix}cium*
┃⊱❥ *${prefix}peluk*
┃⊱❥ *${prefix}truth*
┃⊱❥ *${prefix}dare*
┃⊱❥ *${prefix}timer*
┃
┗━━━━━━━━━━━━━━━━━━━━
 
┏━⊱ *MENU DOWNLOAD* ⊰━┓
┃
┃⊱❥ *${prefix}play*
┃⊱❥ *${prefix}yutubdl*
┃⊱❥ *${prefix}tiktod*
┃⊱❥ *${prefix}ytmp3
┃⊱❥ *${prefix}ytmp4
┃
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *MENU MAKER* ⊰━━┓
┃
┃⊱❥ *${prefix}harta* <text>
┃⊱❥ *${prefix}pornologo* <1|2>
┃⊱❥ *${prefix}halloween* <text>
┃⊱❥ *${prefix}ninjalogotext*
┃⊱❥ *${prefix}cloudtext* <text>
┃⊱❥ *${prefix}gembok* <text>
┃⊱❥ *${prefix}glitchtext* <text>
┃⊱❥ *${prefix}silktext* <text>
┃
┗━━━━━━━━━━━━━━━━━━
 
┏━━⊱ *OTHER MENU* ⊰━━┓
┃
┃⊱❥ *${prefix}brainly*
┃⊱❥ *${prefix}pinterest*
┃⊱❥ *${prefix}bitly*
┃⊱❥ *${prefix}moddroid*
┃⊱❥ *${prefix}happymod*
┃⊱❥ *${prefix}resepmakanan*
┃⊱❥ *${prefix}beritahoax*
┃⊱❥ *${prefix}mutual*
┃⊱❥ *${prefix}next*
┃⊱❥ *${prefix}virtex*
┃⊱❥ *${prefix}virtex2*
┃⊱❥ *${prefix}timer*
┃⊱❥ *${prefix}nulis1*
┃⊱❥ *${prefix}nulis2*
┃
┗━━━━━━━━━━━━━━━━━━━
   
┏━━⊱ *MENU OWNER* ⊰━━┓
┃
┃⊱❥ *${prefix}bc*
┃⊱❥ *${prefix}bcgc*
┃⊱❥ *${prefix}clearall*
┃⊱❥ *${prefix}block*
┃⊱❥ *${prefix}unblock*
┃⊱❥ *${prefix}clone*
┃⊱❥ *${prefix}setppbot*
┃⊱❥ *${prefix}setreply*
┃⊱❥ *${prefix}setprefix*
┃⊱❥ *${prefix}ban*
┃⊱❥ *${prefix}unban*
┃
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *RANDOM MENU* ⊰━━┓
┃
┃⊱❥ *${prefix}randomhentong*
┃⊱❥ *${prefix}nekonime*
┃⊱❥ *${prefix}wibu*
┃⊱❥ *${prefix}loli*
┃⊱❥ *${prefix}neko*
┃⊱❥ *${prefix}blowjob*
┃⊱❥ *${prefix}husbu*
┃⊱❥ *${prefix}kpop*
┃⊱❥ *${prefix}anjing*
┃⊱❥ *${prefix}pokemon*
┃
┗━━━━━━━━━━━━━━━━━━━

┏━━⊱ *STICKER MENU* ⊰━━┓
┃
┃⊱❥ *${prefix}sticker*
┃⊱❥ *${prefix}ttp*
┃⊱❥ *${prefix}tts*
┃⊱❥ *${prefix}toimg*
┃⊱❥ *${prefix}nulis*
┃⊱❥ *${prefix}stalkig*
┃⊱❥ *${prefix}quotes*
┃⊱❥ *${prefix}bikinquote*
┃
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *MENU SOUND* ⊰━━┓
┃
┃⊱❥ *${prefix}iri*
┃⊱❥ *${prefix}pale*
┃⊱❥ *${prefix}sound*
┃⊱❥ *${prefix}sound1*
┃⊱❥ *${prefix}sound2*
┃⊱❥ *${prefix}sound3*
┃⊱❥ *${prefix}sound4*
┃⊱❥ *${prefix}sound5*
┃⊱❥ *${prefix}sound6*
┃⊱❥ *${prefix}sound7*
┃
┗━━━━━━━━━━━━━━━━━━━━

🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.help = help

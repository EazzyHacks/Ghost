let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.bienvenida = isEnable
      break
  
    case 'document':
    case 'documento':
    isUser = true
    user.useDocument = isEnable
    break

      case 'modoadmin': case 'soloadmin':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
      }}
      chat.modoadmin = isEnable          
      break

      case 'onlygod': case 'solodios':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
      }}
      chat.onlyGod = isEnable          
      break

      case 'antifake':
      case 'antifakes':
      case 'antiarabes':
      case 'antiarab':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
      }
      }
      chat.onlyLatinos = isEnable
      break

      case 'detect': case 'avisos':
      if (!m.isGroup) {
      if (!isOwner) {
      global.dfail('group', m, conn)
      throw false
      }
      } else if (!isAdmin) {
      global.dfail('admin', m, conn)
      throw false
      }
      chat.detect = isEnable
      break
    
      case 'jadibotmd': case 'modojadibot': case 'serbotmd': case 'modoserbot': 
      isAll = true
      if (!isROwner) {
      global.dfail('rowner', m, conn)
      throw false
      }
      bot.jadibotmd = isEnable
      break 

      case 'autobiografia': case 'bio': case 'biografia': case 'status': 
      isAll = true
      if (!isROwner) {
      global.dfail('rowner', m, conn)
      throw false
      }
      bot.autobio = isEnable
      break 

      case 'antiprivado':
      isAll = true
      if (!isROwner) {
      global.dfail('rowner', m, conn)
      throw false
      }
      bot.antiPrivate = isEnable
      break

      case 'autoread':
      isAll = true
      if (!isROwner) {
      global.dfail('rowner', m, conn)
      throw false
      }
      bot.autoread = isEnable
      break

      case 'antispam':
      isAll = true
      if (!isROwner) {
      global.dfail('rowner', m, conn)
      throw false
      }
      bot.antiSpam = isEnable
      break

      case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break

      case 'antidelete': case 'antieliminar': case 'delete':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
      }}
      chat.delete = isEnable
      break

      case 'audios':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
      }}
      chat.audios = isEnable          
      break
      
      case 'nsfw':
      case 'modohorny':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'reaction':
    case 'reacciones':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
      }}
      chat.reaction = isEnable          
      break

    case 'info':
    case 'estado':
    case 'status':
      let configInfo = `*⚙️ ESTADO DE CONFIGURACIONES*\n\n`
      
      configInfo += `*📋 Grupo: ${m.chat}*\n`
      configInfo += `• Baneado: ${chat?.isBanned ? '✅' : '❌'}\n`
      configInfo += `• Modo Solo Admin: ${chat?.modoadmin ? '✅' : '❌'}\n`
      configInfo += `• Modo Solo Dios: ${chat?.onlyGod ? '✅' : '❌'}\n`
      configInfo += `• Solo Latinos: ${chat?.onlyLatinos ? '✅' : '❌'}\n`
      configInfo += `• Antilink: ${chat?.antiLink ? '✅' : '❌'}\n`
      configInfo += `• Antidelete: ${chat?.delete ? '✅' : '❌'}\n`
      configInfo += `• NSFW: ${chat?.nsfw ? '✅' : '❌'}\n`
      configInfo += `• Audios: ${chat?.audios ? '✅' : '❌'}\n`
      configInfo += `• Bienvenida: ${chat?.bienvenida ? '✅' : '❌'}\n`
      configInfo += `• Detect: ${chat?.detect ? '✅' : '❌'}\n\n`
      
      configInfo += `*👤 Usuario: ${m.sender}*\n`
      configInfo += `• Baneado: ${user?.banned ? '✅' : '❌'}\n`
      configInfo += `• Muteado: ${user?.muto ? '✅' : '❌'}\n`
      configInfo += `• Premium: ${user?.premium ? '✅' : '❌'}\n`
      configInfo += `• Registrado: ${user?.registered ? '✅' : '❌'}\n`
      configInfo += `• Spam: ${user?.spam || 0}\n\n`
      
      configInfo += `*🤖 Bot:*\n`
      configInfo += `• JadiBot MD: ${bot?.jadibotmd ? '✅' : '❌'}\n`
      configInfo += `• Auto Bio: ${bot?.autobio ? '✅' : '❌'}\n`
      configInfo += `• Anti Privado: ${bot?.antiPrivate ? '✅' : '❌'}\n`
      configInfo += `• Auto Read: ${bot?.autoread ? '✅' : '❌'}\n`
      configInfo += `• Anti Spam: ${bot?.antiSpam ? '✅' : '❌'}\n\n`
      
      configInfo += `*💡 Comandos de Control:*\n`
      configInfo += `• /debug - Diagnóstico completo\n`
      configInfo += `• /resetconfig all - Resetear todo\n`
      configInfo += `• /config modoadmin off - Desactivar modo admin\n`
      configInfo += `• /config onlygod off - Desactivar modo Dios\n`
      
      m.reply(configInfo)
      break
      
    default:
      if (!/[01]/.test(command)) return m.reply(`
*𝘐𝘯𝘨𝘳𝘦𝘴𝘢 𝘶𝘯𝘢 𝘰𝘱𝘤𝘪𝘰́𝘯 𝘱𝘢𝘳𝘢 𝘈𝘤𝘵𝘪𝘷𝘢𝘳 𝘰 𝘋𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢𝘳*

「 𝘌𝘯𝘢𝘣𝘭𝘦/𝘋𝘪𝘴𝘢𝘣𝘭𝘦 」 ⚠️

𝘖𝘯/𝘖𝘧𝘧 𝘸𝘦𝘭𝘤𝘰𝘮𝘦
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘭𝘢 *𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢* 𝘺 *𝘋𝘦𝘴𝘱𝘦𝘥𝘪𝘥𝘢* 𝘱𝘢𝘳𝘢 𝘎𝘳𝘶𝘱𝘰𝘴.

𝘖𝘯/𝘖𝘧𝘧 𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯 
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘭𝘰𝘴 *𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴* 𝘴𝘰𝘭𝘰 𝘱𝘢𝘳𝘢 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘦𝘴.

𝘖𝘯/𝘖𝘧𝘧 𝘰𝘯𝘭𝘺𝘨𝘰𝘥
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘭𝘰𝘴 *𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴* 𝘴𝘰𝘭𝘰 𝘱𝘢𝘳𝘢 𝘋𝘪𝘰𝘴𝘦𝘴.

𝘖𝘯/𝘖𝘧𝘧 𝘥𝘦𝘵𝘦𝘤𝘵 
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘭𝘰𝘴 *𝘢𝘷𝘪𝘴𝘰𝘴* 𝘥𝘦𝘯𝘵𝘳𝘰 𝘥𝘦𝘭 𝘎𝘳𝘶𝘱𝘰.

𝘖𝘯/𝘖𝘧𝘧 𝘢𝘶𝘥𝘪𝘰𝘴
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘭𝘰𝘴 𝘢𝘶𝘥𝘪𝘰𝘴 𝘱𝘢𝘳𝘢 𝘎𝘳𝘶𝘱𝘰𝘴.

𝘖𝘯/𝘖𝘧𝘧 𝘯𝘴𝘧𝘸 
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘭𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴 *𝘕𝘚𝘍𝘞* 𝘱𝘢𝘳𝘢 𝘎𝘳𝘶𝘱𝘰𝘴.

𝘖𝘯/𝘖𝘧𝘧 𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬 
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘦𝘭 *𝘈𝘯𝘵𝘪𝘓𝘪𝘯𝘬* 𝘱𝘢𝘳𝘢 𝘎𝘳𝘶𝘱𝘰𝘴.

𝘖𝘯/𝘖𝘧𝘧 𝘥𝘰𝘤𝘶𝘮𝘦𝘯𝘵 
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘭𝘢 *𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘌𝘯 𝘋𝘰𝘤𝘶𝘮𝘦𝘯𝘵𝘰𝘴* 𝘱𝘢𝘳𝘢 𝘦𝘭 𝘜𝘴𝘶𝘢𝘳𝘪𝘰.

𝘖𝘯/𝘖𝘧𝘧 𝘢𝘯𝘵𝘪𝘱𝘳𝘪𝘷𝘢𝘥𝘰
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘌𝘭 𝘶𝘴𝘰 𝘥𝘦𝘭 𝘉𝘰𝘵 𝘢𝘭 𝘗𝘳𝘪𝘷𝘢𝘥𝘰/ 𝘱𝘢𝘳𝘢 𝘦𝘭 𝘖𝘸𝘯𝘦𝘳.

𝘖𝘯/𝘖𝘧𝘧 𝘢𝘶𝘵𝘰𝘳𝘦𝘢𝘥
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘭𝘢 𝘭𝘦𝘤𝘵𝘶𝘳𝘢 𝘢𝘶𝘵𝘰𝘮𝘢́𝘵𝘪𝘤𝘢 𝘥𝘦 𝘮𝘦𝘯𝘴𝘢𝘫𝘦𝘴.

𝘖𝘯/𝘖𝘧𝘧 𝘢𝘯𝘵𝘪𝘴𝘱𝘢𝘮
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘦𝘭 𝘢𝘯𝘵𝘪𝘴𝘱𝘢𝘮.

𝘖𝘯/𝘖𝘧𝘧 𝘳𝘦𝘢𝘤𝘱𝘪𝘰𝘯
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘭𝘢𝘴 𝘳𝘦𝘢𝘤𝘤𝘪𝘰𝘯𝘦𝘴 𝘢𝘶𝘵𝘰𝘮𝘢́𝘵𝘪𝘤𝘢𝘴.

𝘖𝘯/𝘖𝘧𝘧 𝘪𝘯𝘧𝘰
*𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 :* 𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘦𝘴𝘵𝘢𝘥𝘰 𝘢𝘤𝘵𝘶𝘢𝘭 𝘥𝘦 𝘵𝘰𝘥𝘢𝘴 𝘭𝘢𝘴 𝘤𝘰𝘯𝘧𝘪𝘨𝘶𝘳𝘢𝘤𝘪𝘰𝘯𝘦𝘴.

*• 𝘌𝘫𝘦𝘮𝘱𝘭𝘰:*
*- ${usedPrefix + command}* welcome
`.trim())
      throw false
  }
  m.reply(`𝘾𝙤𝙢𝙖𝙣𝙙𝙤: *${type}* 𝙁𝙪𝙚: *${isEnable ? '𝘈𝘤𝘵𝘪𝘷𝘢𝘥𝘰' : '𝘋𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢𝘥𝘰'}* ${isAll ? '*𝘌𝘯 𝘦𝘴𝘵𝘦 𝘉𝘰𝘵*' : isUser ? '' : '*𝘌𝘯 𝘦𝘴𝘵𝘦 𝘊𝘩𝘢𝘵*'}`)
}

handler.command = ['enable', 'disable']

export default handler

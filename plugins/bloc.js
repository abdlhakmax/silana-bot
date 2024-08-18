export async function before(m, {conn}) {

  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
    
      const rs = await conn.updateBlockStatus(who, 'block')
  if (rs[0]) return conn.sendMessage(m.sender, {text: غير مسموح استخدام بوت في الخاص تواصل مع صاحب البوت للاضافتك فيمجموعة 
212717842363."}, {quoted: m});
}

import { bot } from "../index.js";

export function onStart(chatId, firstName) {
  bot.sendMessage(
    chatId,
    `Salom, ${firstName}! O‘quv markazimizga xush kelibsiz. Quyidagi bo‘limlardan birini tanlang:`,
    {
      reply_markup: {
        keyboard: [
          ["📚 Kurslar", "ℹ️ Markaz haqida"],
          ["✍️ Ro‘yxatdan o‘tish"]
        ],
        resize_keyboard: true
      }
    }
  );
}

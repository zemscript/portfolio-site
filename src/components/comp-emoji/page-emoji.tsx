import { useState } from "react";
import * as st from "./page-emoji-style";
import Message from "../UI/message/message";

function EmojiGenerator() {
  const [length, setLength] = useState("");

  const handleLengthChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLength(e.target.value);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
  };

  const emojisAfterWords = (text: string, array: string[]) => {
    return text
      .replace(/(\p{L}+)(?=\s|$)/gu, (match) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomEmoji = array[randomIndex];
        return `${match}${randomEmoji}`;
      })
      .replace(/([.,!?])/g, (match) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomEmoji = array[randomIndex];
        return `${match}${randomEmoji}`;
      });
  };

  const generateEmoji = (text: string) => {
    const emojis = {
      baseEmoji: ["😀", "😂", "😍", "😎", "🤔", "😇", "😜", "😱", "😴", "😋", "😡", "😏", "😢", "😭", "😠", "😳", "👀"],
    };
    const allEmoji = Object.values(emojis).flat();
    return emojisAfterWords(text, allEmoji);
  };

  const result = generateEmoji(length);

  return (
    <st.DivCenter>
      <st.Title>Эмодзи после слов</st.Title>
      <st.BlockInput>
        <st.InputTextarea value={length} onChange={handleLengthChange} placeholder="Ваш текст" />
        <st.Label>
          <st.TextEmoji onClick={() => copyToClipboard(result)}>
            {result || <span className="placeholder">Нажми, чтобы скопировать результат</span>}
          </st.TextEmoji>
          <Message></Message>
        </st.Label>
      </st.BlockInput>
    </st.DivCenter>
  );
}

export default EmojiGenerator;

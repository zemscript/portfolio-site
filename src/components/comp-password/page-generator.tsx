import { useState } from "react";
import * as st from "./page-generator-style";
import Message from "../UI/message/message";

function PasswordGenerator() {
  const [passwords, setPasswords] = useState<string[]>([]);
  const [length, setLength] = useState("12");
  const [error, setError] = useState("");
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(e.target.value);
  };

  const handleSubmit = () => {
    const lengthNumber = Number(length);
    if (lengthNumber > 32) {
      setError("Максимальная длина пароля - 32 символа");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const copyToClipboard = async (password: string) => {
    try {
      await navigator.clipboard.writeText(password);
    } catch {
      return;
    }
  };

  const generate = (length: string | number) => {
    const numLength = typeof length === "string" ? parseInt(length, 10) : length;
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "%*()?@#$~";
    let charset = "";
    if (includeLowercase) charset += lowercase;
    if (includeUppercase) charset += uppercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    const generatedPasswords = [];
    for (let j = 0; j < 6; j++) {
      let currentPassword = "";
      for (let i = 0, n = charset.length; i < numLength; i++) {
        currentPassword += charset.charAt(Math.floor(Math.random() * n));
      }
      generatedPasswords.push(currentPassword);
    }
    setPasswords(generatedPasswords);
  };

  const checkboxOptions = [
    { label: "Строчные буквы", checked: includeLowercase, onChange: setIncludeLowercase },
    { label: "Прописные буквы", checked: includeUppercase, onChange: setIncludeUppercase },
    { label: "Цифры", checked: includeNumbers, onChange: setIncludeNumbers },
    { label: "Специальные символы", checked: includeSymbols, onChange: setIncludeSymbols },
  ];

  return (
    <>
      <st.Title>Генератор паролей</st.Title>
      <st.Flex>
        <st.PasswordBlock>
          <st.SubTitle>Настройка пароля</st.SubTitle>
          <label>
            <st.Span>Длина пароля:</st.Span>
            <st.Input type="number" value={length} onChange={handleLengthChange} />
          </label>
          {error && <st.Error>{error}</st.Error>}
          <st.Span>Символы:</st.Span>
          <st.PasswordValue>
            {checkboxOptions.map((option, index) => (
              <st.Label key={index}>
                <input
                  type="checkbox"
                  checked={option.checked}
                  onChange={(e) => option.onChange(e.target.checked)}
                ></input>
                <st.Span>{option.label}</st.Span>
              </st.Label>
            ))}
          </st.PasswordValue>
          <st.Button
            onClick={() => {
              if (handleSubmit()) {
                generate(length);
              }
            }}
          >
            Сгенерировать пароли
          </st.Button>
        </st.PasswordBlock>
        <st.PasswordBlock>
          <st.SubTitle>Сгенерированные пароли</st.SubTitle>
          <st.Span>Нажми, чтобы скопировать</st.Span>
          <label>
            <Message></Message>
            <st.Block>
              {passwords.map((password, index) => (
                <st.TextPassword key={index} onClick={() => copyToClipboard(password)}>
                  {password}
                </st.TextPassword>
              ))}
            </st.Block>
          </label>
        </st.PasswordBlock>
      </st.Flex>
    </>
  );
}

export default PasswordGenerator;

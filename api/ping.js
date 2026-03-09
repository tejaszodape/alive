import https from "https";

export default function handler(req, res) {
  const url = "https://etf-market-realtime-1.onrender.com/";

  https.get(url, (response) => {
    console.log("Status:", response.statusCode);
  }).on("error", (err) => {
    console.log("Error:", err.message);
  });

  res.status(200).json({ message: "Ping sent" });
}
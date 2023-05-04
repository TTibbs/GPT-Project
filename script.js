function callGPTAPI() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 6PAZmHMuWfYLwCUm2R1vT3BlbkFJzBwNVR2zzwSYG59vNVDA"
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 5
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.choices && data.choices.length > 0) {
        result.innerHTML = data.choices[0].text;
      } else {
        result.innerHTML = "Sorry, I couldn't understand your prompt. Please try again.";
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  result.innerHTML = "Type a prompt and click 'Send Message' to get a response from GPT-3!";
});
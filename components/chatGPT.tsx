
async function chatRequest(chatPrompt: string) {
    
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    chatPrompt = "Hello World";
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content:chatPrompt}],
    });
    const chatResponse = completion.data.choices[0].message.content
    console.log(chatResponse);
    const chatMessage = {prompt:chatPrompt, response:chatResponse}
    return(chatMessage);
}
function chatGPT(chatPrompt: string) {
 const message = chatRequest(chatPrompt);
  return (
    message
  );
}

export default chatGPT
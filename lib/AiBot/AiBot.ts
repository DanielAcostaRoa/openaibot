import { Configuration, OpenAIApi } from "openai";
import { IPrompt, JsChatBot } from "./prompt";

export class AiBot {
  private configuration;
  private openai;
  private prompt: IPrompt;
  constructor(prompt_strategy: any = JsChatBot) {
    this.prompt = new prompt_strategy();
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  public async createCompletion(req: string) {
    try {
      const prompt = this.prompt.generatePrompt(req);
      const completion = await this.openai.createCompletion(
        "text-davinci-002",
        {
          prompt,
          temperature: 0,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.5,
          presence_penalty: 0.0,
        }
      );
      return completion.data.choices[0].text;
    } catch (error) {
      return "I do not understand your question";
    }
  }
}

export interface IPrompt {
  generatePrompt: (req: string) => string;
}

export class JsChatBot implements IPrompt {
  constructor() {}

  private custom_req(req: string): string {
    let question_styled = req.trim();
    question_styled =
      question_styled[0].toLocaleUpperCase() +
      question_styled.slice(1).toLocaleLowerCase()
    return question_styled;
  }

  public generatePrompt(req: string): string {

    const prompt = `
    You: How do I combine arrays?
    JavaScript chatbot: You can use the concat() method.
    You: How do you make an alert appear after 10 seconds?
    JavaScript chatbot: You can use setTimeout().
    You: ${this.custom_req(req)}
    JavaScript chatbot:
  `
    return prompt;
  }
}


# JavaScript Chatbot Helper Powered by GPT-3

This is a message-style chatbot that can answer questions about using JavaScript. It uses a few examples to get the conversation started.

The web application is built using React.js and the [Next.js](https://nextjs.org/) framework. The chatbot works with the OpenAI API, check out the tutorial or follow the instructions below to get set up [quickstart tutorial](https://beta.openai.com/docs/quickstart).

**Note:** As a member of the technology community, it is our duty to ensure the responsible and safe use of AI. Before deploying your open application on the web, it has to be reviewed by OpenAI, more information in the [link](https://beta.openai.com/docs/usage-guidelines).

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openaibot
   ```

4. Install the requirements

   ```bash
   $ yarn install
   ```

5. Make a copy of the example environment variables file

   ```bash
   $ cp .env.example .env
   ```

6. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ yarn dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)!
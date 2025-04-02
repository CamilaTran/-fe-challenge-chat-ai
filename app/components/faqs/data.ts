interface FAQ {
  key?: string;
  question: string;
  answers: string[];
}

const questionsList: FAQ[] = [
  {
    question: "API key not working?",
    answers: [
      "Ensure the API key is correctly copied and pasted without any extra spaces.",
      "Check that the API key has not expired or been revoked.",
      "Verify that you have the correct permissions and quota for the API usage.",
      "If issues persist, consult the OpenAI API documentation or contact OpenAI support.",
    ],
  },
  {
    question: "How is the API key handled?",
    answers: [
      "The API key is stored locally in your browser and never sent or stored anywhere else.",
      "It is used solely to authenticate your requests to the OpenAI API, ensuring secure and authorized access.",
    ],
  },
  {
    question: "Do I need ChatGPT Plus to get an API key?",
    answers: [
      "No, you do not need a ChatGPT Plus subscription to use the OpenAI API key.",
      "The API key is available for use with any OpenAI account, regardless of the subscription tier.",
    ],
  },
  {
    question: "Do I need to pay for an API key from Open AI?",
    answers: [
      "Yes, using the OpenAI API typically involves usage-based billing.",
      "You will be billed based on the number of requests and the computational resources used, according to OpenAI's pricing plan.",
    ],
  },
  {
    question: "License key vs. API key",
    answers: [
      "An API key is used to authenticate and authorize access to the OpenAI API, allowing you to make API requests..",
      "A license key generally refers to a product license for software usage, which may or may not include API access.",
      "For OpenAI services, the API key is the primary means of accessing and utilizing their API features."
    ],
  },
];

export { questionsList };

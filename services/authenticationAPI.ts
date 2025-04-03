import { VerifyKeyResponseSucess } from "@/types/openAI";

const authenticationAPI = {
  verifyKey: async (key: string): Promise<VerifyKeyResponseSucess> => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_KEY_OPENAI_URL!, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${key}`,
          'OpenAI-Organization': process.env.NEXT_PUBLIC_API_KEY_OPENAI_ORGANIZE_ID!,
          'OpenAI-Project': process.env.NEXT_PUBLIC_API_KEY_OPENAI_PROJECT_ID!,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to verify key: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error: unknown) {
      console.error('Error verifying API key:', error);
      throw error;
    }
  },
};

export { authenticationAPI };

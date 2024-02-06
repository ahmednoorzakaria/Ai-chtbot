import { Configuration } from "openai";
export const configureOpenai = () => {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANIZATION_ID,
    });
    return config;
};
//# sourceMappingURL=openai-config.js.map
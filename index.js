require("dotenv").config();
const axios = require("axios");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

const tools = [
    {
        type: "function",
        function: {
            name: "get_product_info",
            description: "Busca información de un producto por nombre",
            parameters: {
                type: "object",
                properties: {
                    product_name: { type: "string" }
                },
                required: ["product_name"]
            }
        }
    }
];

const messages = [
    { role: "system", content: "Eres un asistente de ventas." },
    { role: "user", content: "¿Cuánto cuesta la Pulsera Titanio Negra?" }
];

async function main() {
    console.log("Starting main function...");
    console.log("Initial messages:", JSON.stringify(messages, null, 2));
    console.log("Tools:", JSON.stringify(tools, null, 2));

    try {
        console.log("Sending first request to OpenAI API...");
        const res1 = await axios.post(
            OPENAI_URL,
            {
                model: "gpt-4o",
                messages,
                tools,
                tool_choice: "auto"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${OPENAI_API_KEY}`
                }
            }
        );

        console.log("Response from first OpenAI API call:", JSON.stringify(res1.data, null, 2));
        const aiMessage = res1.data.choices[0].message;
        console.log("AI message:", JSON.stringify(aiMessage, null, 2));

        if (aiMessage.tool_calls) {
            console.log("AI requested a tool call...");
            const toolCall = aiMessage.tool_calls[0];
            console.log("Tool call details:", JSON.stringify(toolCall, null, 2));

            const args = JSON.parse(toolCall.function.arguments);
            console.log("Parsed tool call arguments:", args);

            // Simula buscar el producto en tu base de datos
            let productInfo = null;
            if (args.product_name === "Pulsera Titanio Negra") {
                console.log("Product found in database...");
                productInfo = {
                    name: "Pulsera Titanio Negra",
                    precio: "$7.50",
                    img: "https://clubentrepanas.com/cdn/shop/files/21_60ed5df0-b367-4c31-847a-e37e46c2c3e5.webp"
                };
            } else {
                console.log("Product not found in database...");
                productInfo = { error: "Producto no encontrado" };
            }

            console.log("Product info:", JSON.stringify(productInfo, null, 2));

            messages.push(aiMessage);
            console.log("Updated messages after AI message:", JSON.stringify(messages, null, 2));

            messages.push({
                role: "tool",
                tool_call_id: toolCall.id,
                content: JSON.stringify(productInfo)
            });
            console.log("Updated messages after tool response:", JSON.stringify(messages, null, 2));

            console.log("Sending second request to OpenAI API...");
            const res2 = await axios.post(
                OPENAI_URL,
                {
                    model: "gpt-4o",
                    messages,
                    tools
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${OPENAI_API_KEY}`
                    }
                }
            );

            console.log("Response from second OpenAI API call:", JSON.stringify(res2.data, null, 2));
            const finalMessage = res2.data.choices[0].message;
            console.log("Final AI message:", finalMessage.content);
        } else {
            console.log("AI provided a direct response...");
            console.log("Direct AI response:", aiMessage.content);
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
        console.error("Error details:", error.response ? error.response.data : error);
    }
}

main();

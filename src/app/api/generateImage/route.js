
// Import necessary libraries
import { OpenAI } from "openai";
import { NextResponse } from "next/server";

// const util = require('util');

const openai = new OpenAI({
    api_key: process.env.OPENAI_API_KEY
  });

// This function handles POST requests to the /api/speechToText route
export async function POST(request) {

  // Parse the request body
  const req = await request.json();

  const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: req.prompt,
        n: 1,
        size: "1024x1024",
      });

  try {
    // Return the transcribed text in the response
    return NextResponse.json(response, {status:200});
  } catch(error) {
    // Handle any errors that occur during the request
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return NextResponse.json({ error: error.response.data }, {status:500});
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return NextResponse.json({ error: "An error occurred during your request." }, {status:500});
    }
  }
}


from fastapi import FastAPI, HTTPException, UploadFile, File
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from pypdf import PdfReader
import os

# Load environment variables
load_dotenv()

# Initialize the FastAPI app
app = FastAPI()

# Initialize the LLM model
llm = ChatGoogleGenerativeAI(model="gemini-pro")

# Define the endpoint to generate the cover letter
@app.post("/generate-cover-letter/")
async def generate_cover_letter(pdf_file: UploadFile = File(...)):
    try:
        # Read the uploaded PDF file
        reader = PdfReader(pdf_file.file)
        context = ""
        for page in reader.pages:
            text = page.extract_text()
            context += text

        # Create the input prompt
        input_prompt = f"## Create a cover letter using this resume context ### Enter every detail of the user from the resume context CONTEXT {context}"

        # Get the response from the LLM
        result = llm.invoke(input_prompt)

        # Return the generated cover letter
        return {"cover_letter": result.content}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

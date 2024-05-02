from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "This is code for testing"}


@app.post("/createposts")
def create_posts():
    return {"message":"Succesfully create post"}
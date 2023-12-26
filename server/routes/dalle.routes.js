import express from 'express';
import * as dotenv from 'dotenv';
import OpenAi from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY,
});

// const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E routes" })
})

router.route('/').post(async (req, res) => {
    try {
        console.log(req.body);
        const prompt = req.body;
       
        // const response = await openai.createImage({
        //     prompt,
        //     n: 1,
        //     size: '1024x1024',
        //     response_format: 'b64_json'
        // });

        // const image = response.data.data[0].b64_json;

        // res.status(200).json({ photo: image })
        if(prompt) {
            res.status(200).json(prompt);
        }

    } catch (error) {
        console.error(error);
        console.log(req.body);
     
        res.status(500).json({ message: "Something went wrong" })
    }
})

export default router;
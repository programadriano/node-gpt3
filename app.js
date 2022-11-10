
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
require('dotenv').config();

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
var cors = require('cors')

const app = express()
const port = process.env.PORT || 3000;

app.use(cors())


app.get('/:text', async (req, res) => {
    var param = req.params.text;

    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: param,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

    res.send({ message: response.data.choices[0].text });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
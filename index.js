const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require ('body-parser')
const cors = require ('cors')

const configuration = new Configuration({
    organization: "org-QOYGOqtIPcdZoSSZ2yyXPDLT",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);



const app = express()
app.use(bodyParser.json())
app.use(cors())


const port = 3080

app.post('/', async (req, res) => {
    const { message } = req.body;
    // const response = await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: "Say this is a test",
    //     max_tokens: 7,
    //     temperature: 0,
    //   });
    console.log(response.data.choices[0].text)
    res.json({
        // data: response.data
        data: message, 
})
});

app.listen(port, () => {
    // console.log('Example app listening at http://localhost:${port}') this apparently has the wrong "ticks"
    console.log(`Example app listening at http://localhost:${port}`)
});
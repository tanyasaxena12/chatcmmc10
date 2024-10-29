/*const cors = require('cors');
const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001;

// Allow CORS
app.use(cors());

app.get('/getDialogflowResponse', (req, res) => {
  // First, get the access token by running `gcloud auth print-access-token`
  exec('gcloud auth print-access-token', (error, accessToken, stderr) => {
    if (error) {
      console.error(`Token error: ${error}`);
      res.status(500).send({ error: 'Failed to generate access token' });
      return;
    }

    // Now, use the token to call Dialogflow API
    exec(`curl -X POST \
          -H "Authorization: Bearer ${accessToken.trim()}" \
          -H "x-goog-user-project: businessbot-400413" \
          -H "Content-Type: application/json; charset=utf-8" \
          -d @request.json \
          "https://global-dialogflow.googleapis.com/v3/projects/businessbot-400413/locations/global/agents/1ef6dee0-7b84-43a0-a79a-f16620cdcef8/sessions/test-session-129:detectIntent"`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Curl error: ${error}`);
          res.status(500).send({ error: 'Failed to fetch response' });
          return;
        }
        res.send(stdout);
      });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const cors = require('cors');
const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001;

// Allow CORS and handle JSON payloads
app.use(cors());
app.use(express.json());

app.post('/getDialogflowResponse', (req, res) => {
    const userInput = req.body.userInput;

    // Create the JSON payload directly without writing to request.json
    const requestBody = JSON.stringify({
        queryInput: {
            text: {
                text: userInput
            },
            languageCode: 'en'
        },
        queryParams: {
            timeZone: 'America/Los_Angeles'
        }
    });

    // Now, get the access token and call Dialogflow API with dynamic JSON payload
    exec('gcloud auth print-access-token', (error, accessToken, stderr) => {
        if (error) {
            console.error(`Token error: ${error}`);
            return res.status(500).send({ error: 'Failed to generate access token' });
        }

        exec(`curl -X POST \
            -H "Authorization: Bearer ${accessToken.trim()}" \
            -H "x-goog-user-project: businessbot-400413" \
            -H "Content-Type: application/json; charset=utf-8" \
            -d '${requestBody}' \
            "https://global-dialogflow.googleapis.com/v3/projects/businessbot-400413/locations/global/agents/1ef6dee0-7b84-43a0-a79a-f16620cdcef8/sessions/test-session-129:detectIntent"`,
            (error, stdout, stderr) => {
                if (error) {
                    console.error(`Curl error: ${error}`);
                    return res.status(500).send({ error: 'Failed to fetch response' });
                }
                // Parse the string `stdout` as JSON and send it
                res.json(JSON.parse(stdout)); // Ensure valid JSON is sent back
            }
        );
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
*/

const fs = require('fs');
const { GoogleAuth } = require('google-auth-library');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3002;
/*
//LOCAL
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};
*/
const corsOptions = {
    origin: 'https://chatcmmc10-1.onrender.com', // replace with your actual frontend URL
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Allow CORS and handle JSON payloads
app.use(cors());
app.use(express.json());

// Load credentials from secret file (Render secret location)
const credentialsPath = '/etc/secrets/accessToken.json'; // This path is where Render stores your secret file
//const credentialsPath = './src/views/accessToken.json'; 

/*
app.get('/', (req, res) => {
    res.send('Welcome to ChatCMMC! The backend server is up and running.');
});
*/
const path = require('path');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Route all unknown requests to the React app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/getDialogflowResponse', async (req, res) => {
    const userInput = req.body.userInput;

    const requestBody = {
        queryInput: {
            text: {
                text: userInput,
            },
            languageCode: 'en',
        },
        queryParams: {
            timeZone: 'America/Los_Angeles',
        },
    };

    try {
        // Set up GoogleAuth with the credentials file
        const auth = new GoogleAuth({
            keyFile: credentialsPath,
            scopes: 'https://www.googleapis.com/auth/cloud-platform',
        });

        // Get the access token using the GoogleAuth client
        const client = await auth.getClient();
        const projectId = await auth.getProjectId();

        // Make the API request using the client
        const url = `https://global-dialogflow.googleapis.com/v3/projects/businessbot-400413/locations/global/agents/1ef6dee0-7b84-43a0-a79a-f16620cdcef8/sessions/test-session-129:detectIntent`;

        const response = await client.request({
            url: url,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: requestBody,
        });

        // Send the response back to the client
        res.json(response.data);
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).send({ error: 'Failed to fetch response' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

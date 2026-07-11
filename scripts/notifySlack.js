const axios = require("axios");

const webhook = process.env.SLACK_WEBHOOK;

const message = {
    text: `
✅ OrangeHRM Automation Completed

Repository : ${process.env.GITHUB_REPOSITORY}
Branch     : ${process.env.GITHUB_REF_NAME}
Actor      : ${process.env.GITHUB_ACTOR}
Run        : #${process.env.GITHUB_RUN_NUMBER}

View Pipeline:
${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}
`
};

async function sendSlackMessage() {

    try {

        await axios.post(webhook, message);

        console.log("Slack notification sent successfully.");

    } catch (error) {

        console.error(error.response?.data || error.message);

        process.exit(1);

    }

}

sendSlackMessage();
const axios = require("axios");

async function notify() {

    const webhook = process.env.SLACK_WEBHOOK;

    const payload = {

        text:
`✅ OrangeHRM Automation

Repository : ${process.env.GITHUB_REPOSITORY}

Branch : ${process.env.GITHUB_REF_NAME}

Triggered By : ${process.env.GITHUB_ACTOR}

Run Number : ${process.env.GITHUB_RUN_NUMBER}`

    };

    try {

        await axios.post(webhook, payload);

        console.log("Slack Notification Sent.");

    } catch (error) {

        console.error(error.response?.data || error.message);

        process.exit(1);

    }

}

notify();
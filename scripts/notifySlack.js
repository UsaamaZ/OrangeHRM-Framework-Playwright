const axios = require("axios");

async function notify() {

    const webhook = process.env.SLACK_WEBHOOK;
    const workflowUrl =
        `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`;
    const reportUrl =
        `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`;
    const payload = {
        text: `
OrangeHRM Automation

Project : OrangeHRM Automation Framework

Branch : ${process.env.GITHUB_REF_NAME}

Executed By : Test Engineer

Workflow :
${workflowUrl}

Allure Report :
${reportUrl}
`
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
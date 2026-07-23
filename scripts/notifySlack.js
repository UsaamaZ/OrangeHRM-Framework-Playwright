const axios = require("axios");

async function notify() {

    const webhook = process.env.SLACK_WEBHOOK;

    const payload = {
        text:
`*OrangeHRM Automation*

*Application:* OrangeHRM
*Environment:* ${process.env.ENVIRONMENT}
*Status:* ${process.env.STATUS}
*Executed By:* Test Engineer

*Allure Report:*
${process.env.ALLURE_REPORT_URL}`
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
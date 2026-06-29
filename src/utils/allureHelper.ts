import { epic, feature, story, severity, owner, tag, Severity } from "allure-js-commons";

export class AllureHelper {
    static async addMetadata(
        epicName: string,
        featureName: string,
        storyName: string,
        severityLevel: Severity,
        ownerName?: string,
        tags: string[] = []
    ) {
        await epic(epicName);
        await feature(featureName);
        await story(storyName);
        await severity(severityLevel);

        if (ownerName) {
            await owner(ownerName);
        }

        for (const t of tags) {
            await tag(t);
        }
    }
}
export async function pause(ms: number = 5000) {
    console.log(`Pausing for ${ms}ms - check the browser...`);
    await new Promise(resolve => setTimeout(resolve, ms));
}

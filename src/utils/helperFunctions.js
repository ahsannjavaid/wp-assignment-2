export function extractAndConvert(str) {
    return Number(str.replace(/\D/g, "")); // Remove non-digits and convert
}
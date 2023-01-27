export const hexToAscii = (hex: string): string => {
    let result: string = "";
    for (let i = 0; i < hex.length; i += 2)
        result += String.fromCharCode(parseInt(hex.substring(i, i + 2), 16));
    return result;
}
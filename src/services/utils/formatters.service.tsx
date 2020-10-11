export function formatText(values: string[]): string {
    let result = values && values.length > 0 ? values[0] : "";

    for (let index = 1; index < values.length; index++) {
        result = result + ' ' + values[index];
    }
    return result;
}
function extractKeyValuePairs(input: string): string | null {
    const regex = /(\w+)=(\d+)/g;
    const matches = input.match(regex);

    if (!matches) {
        return null;
    }

    let result = '';

    matches.forEach((match, index) => {
        if (index > 0) {
            result += ',';
        }
        const [key, value] = match.split('=');
        result += `"myProject:us-central1:${key}?port=${value}"`;
    });

    return result;
}

const example = "myInstance=3306,myInstance2=1234";
const extracted = extractKeyValuePairs(example);
console.log(extracted);
module.exports = (fileData) => {
    const formattedData = [];

    const lines = fileData.split('\n');

    lines.forEach(line => {
        const segments = line.split(',');

        if(segments.length === 4 && segments[3].length === 32 && !isNaN(Number(segments[2]))){
            const formattedFile = {
                text: segments[1],
                number: segments[2],
                hex: segments[3],
            }

            formattedData.push(formattedFile);
        }
    });

    return formattedData;
}
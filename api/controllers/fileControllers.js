const fileServices = require('../services/fileServices');
const formatFileData = require('../utils/formatter');
const checkJson = require('../utils/checkJson');

module.exports = {
    getFilesData: async (req, res) => {
        res.set('Content-Type', 'application/json');

        try {
            const files = await fileServices.getAllFiles();

            if (files.length === 0) throw { msg: 'There has been an error fetchig the resource' };

            let filesData = await Promise.all(files.map(async (file, i) => {
                try {
                    const fileData = await fileServices.getFileData(file);

                    const jsonValidity = checkJson(fileData)

                    if (jsonValidity.isValid && jsonValidity.json.status !== 200) return null;

                    const formattedData = formatFileData(fileData);

                    const fullFileData = {
                        file,
                        lines: formattedData
                    }

                    return fullFileData;
                } catch (error) {
                    console.log(error);
                }
            }));

            const validFiles = filesData.filter((data) => (data !== null && data.lines.length !== 0));

            res.status(200);
            return res.json(validFiles);
        } catch (error) {
            res.status(500);
            return res.json(error);
        }
    }
}
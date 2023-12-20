const fetch = require('node-fetch');

module.exports = {
    getAllFiles: async () => {
        try {
            const response = await fetch('https://echo-serv.tbxnet.com/v1/secret/files', {
                headers: {
                    'authorization': 'Bearer aSuperSecretKey'
                }
            });

            const data = await response.json();

            return data.files;
        } catch (error) {
            throw new Error(error);
        }
    },

    getFileData: async (fileName) => {
        const baseURI = 'https://echo-serv.tbxnet.com/v1/secret/file/'

        try {
            const response = await fetch(baseURI + fileName, {
                headers: {
                    'authorization': 'Bearer aSuperSecretKey'
                }
            });

            const data = await response.text();

            return data;
        } catch (error) {
            throw new Error(error);
        }
    },
}
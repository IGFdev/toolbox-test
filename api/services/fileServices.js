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
            console.error(error);;
        }
    },

    getFileData: async (fileName) => {
        const endpoint = `https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`

        try {
            const response = await fetch(endpoint, {
                headers: {
                    'authorization': 'Bearer aSuperSecretKey'
                }
            });

            const data = await response.text();

            return data;
        } catch (error) {
            console.error(error);;
        }
    },
}
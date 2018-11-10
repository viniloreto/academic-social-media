
module.exports = [
    {
        method: 'GET',
        path: '/img/{filename}',
        config: {
            handler: (req, h) => {
                const { filename } = req.params
                return h.file('./img/' + filename);
            }
        }
    }]
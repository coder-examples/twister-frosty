class Data {
    constructor(status_code, res_match) {
        this.time = Date.now();
        this.status_code = status_code
        this.res_match = res_match;
    }
}

module.exports = Data;

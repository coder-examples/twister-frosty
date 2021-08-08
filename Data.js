const Status = require('./Status')

class Data {
    constructor(name, desc, hitUrl, exp_res, interval) {
        this.name = name;
        this.desc = desc;
        this.hitUrl = hitUrl;
        this.expectedRes = exp_res;
        this.interval = interval ? interval : 60000;
        this.statusList = []
    }

    addStatus = (status_code, res_match) => {
        this.statusList.push(new Status(status_code, res_match))
    }
}

module.exports = Data;

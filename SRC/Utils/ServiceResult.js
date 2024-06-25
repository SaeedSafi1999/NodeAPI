class ServiceResult {
    constructor() {
        this.IsSuccess = null;
        this.Message = null;
        this.Data = null;
        this.Status = null;
    }

    Ok(Data) {
        const res = new ServiceResult();
        res.Data = Data;
        res.Status = 200;
        res.Message = "Operation success";
        res.IsSuccess = true;
        return res;
    }

    NotFound(Message) {
        const res = new ServiceResult();
        res.Data = null;
        res.Status = 400;
        res.Message = Message;
        res.IsSuccess = false;
        return res;
    }

    Fail(Message) {
        const res = new ServiceResult();
        res.Data = null;
        res.Status = 500;
        res.Message = Message;
        res.IsSuccess = false;
        return res;
    }
}

module.exports = ServiceResult;
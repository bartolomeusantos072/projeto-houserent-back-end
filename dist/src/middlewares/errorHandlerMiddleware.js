"use strict";
exports.__esModule = true;
exports.errorHandlerMiddleware = void 0;
var errorUtils_1 = require("../utils/errorUtils");
function errorHandlerMiddleware(err, req, res, next) {
    console.log(err);
    if ((0, errorUtils_1.isAppError)(err)) {
        return res.status((0, errorUtils_1.errorTypeToStatusCode)(err.type)).send(err.message);
    }
    return res.sendStatus(500);
}
exports.errorHandlerMiddleware = errorHandlerMiddleware;
//# sourceMappingURL=errorHandlerMiddleware.js.map
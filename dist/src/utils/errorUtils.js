"use strict";
exports.__esModule = true;
exports.wrongSchemaError = exports.unauthorizedError = exports.notFoundError = exports.conflictError = exports.badRequestError = exports.errorTypeToStatusCode = exports.isAppError = void 0;
function isAppError(error) {
    return error.type !== undefined;
}
exports.isAppError = isAppError;
function errorTypeToStatusCode(type) {
    if (type === "conflict")
        return 409;
    if (type === "not_found")
        return 404;
    if (type === "unauthorized")
        return 401;
    if (type === "wrong_schema")
        return 422;
    return 400;
}
exports.errorTypeToStatusCode = errorTypeToStatusCode;
function badRequestError(message) {
    return { type: "bad_request", message: message };
}
exports.badRequestError = badRequestError;
function conflictError(message) {
    return { type: "conflict", message: message };
}
exports.conflictError = conflictError;
function notFoundError(message) {
    return { type: "not_found", message: message };
}
exports.notFoundError = notFoundError;
function unauthorizedError(message) {
    return { type: "unauthorized", message: message };
}
exports.unauthorizedError = unauthorizedError;
function wrongSchemaError(message) {
    return { type: "wrong_schema", message: message };
}
exports.wrongSchemaError = wrongSchemaError;
//# sourceMappingURL=errorUtils.js.map
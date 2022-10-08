"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.signIn = exports.signUp = void 0;
var joi_1 = __importDefault(require("joi"));
exports.signUp = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required(),
    confirmPassword: joi_1["default"].ref('password'),
    phone: joi_1["default"].string().min(10).max(11).required(),
    cellphone: joi_1["default"].string().length(11).required(),
    cpf: joi_1["default"].string().length(11).required(),
    address: {
        state: joi_1["default"].string().required(),
        country: joi_1["default"].string().required(),
        district: joi_1["default"].string().allow(""),
        suburb: joi_1["default"].string().required(),
        street: joi_1["default"].string().required(),
        number: joi_1["default"].string().required(),
        complement: joi_1["default"].string().allow(""),
        zipCode: joi_1["default"].string().length(8).required(),
        referencePoint: joi_1["default"].string().required()
    }
});
exports.signIn = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().required()
});
//# sourceMappingURL=userSchema.js.map
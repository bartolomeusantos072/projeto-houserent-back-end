"use strict";
exports.__esModule = true;
exports.validateSchemaMiddleware = void 0;
function validateSchemaMiddleware(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body);
        if (validation.error) {
            return res.status(422).send({ error: validation.error.message });
        }
        next();
    };
}
exports.validateSchemaMiddleware = validateSchemaMiddleware;
//# sourceMappingURL=validateSchemaMiddleware.js.map
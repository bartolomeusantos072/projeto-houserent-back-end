"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var database_1 = require("../src/config/database");
var houseFactory_1 = __importDefault(require("./factories/houseFactory"));
var userFactory_1 = __importDefault(require("./factories/userFactory"));
var driverFactory_1 = __importDefault(require("./factories/driverFactory"));
var serviceFactory_1 = __importDefault(require("./factories/serviceFactory"));
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var createUser, houseRent, addressHouseRent, photosHouse, driver, driverPhotos, service, servicePhotos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userFactory_1["default"].signUp()];
                case 1:
                    createUser = _a.sent();
                    console.log(createUser);
                    return [4 /*yield*/, database_1.prisma.house.create({
                            data: __assign({}, houseFactory_1["default"].createHouse(createUser.id))
                        })];
                case 2:
                    houseRent = _a.sent();
                    return [4 /*yield*/, database_1.prisma.addressHouse.create({
                            data: __assign({}, houseFactory_1["default"].createAddressHouse(houseRent.id))
                        })];
                case 3:
                    addressHouseRent = _a.sent();
                    return [4 /*yield*/, database_1.prisma.photosHouse.createMany({
                            data: [
                                __assign({}, houseFactory_1["default"].createPhotoHouse(houseRent.id)),
                                __assign({}, houseFactory_1["default"].createPhotoHouse(houseRent.id)),
                                __assign({}, houseFactory_1["default"].createPhotoHouse(houseRent.id))
                            ]
                        })];
                case 4:
                    photosHouse = _a.sent();
                    return [4 /*yield*/, driverFactory_1["default"].createDriverChange(createUser.id)];
                case 5:
                    driver = _a.sent();
                    return [4 /*yield*/, driverFactory_1["default"].createPhotosVehicle(driver.id)];
                case 6:
                    driverPhotos = _a.sent();
                    return [4 /*yield*/, serviceFactory_1["default"].createServiceSupplier(createUser.id)];
                case 7:
                    service = _a.sent();
                    return [4 /*yield*/, serviceFactory_1["default"].createPhotosService(service.id)];
                case 8:
                    servicePhotos = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })["catch"](function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, database_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=seed.js.map
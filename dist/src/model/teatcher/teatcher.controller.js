"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeatcherController = void 0;
const common_1 = require("@nestjs/common");
const teatcher_service_1 = require("./teatcher.service");
const update_teatcher_dto_1 = require("./dto/update-teatcher.dto");
let TeatcherController = class TeatcherController {
    teatcherService;
    constructor(teatcherService) {
        this.teatcherService = teatcherService;
    }
    findAll() {
        return this.teatcherService.findAll();
    }
    findOne(id) {
        return this.teatcherService.findOne(+id);
    }
    update(id, updateTeatcherDto) {
        return this.teatcherService.update(+id, updateTeatcherDto);
    }
    remove(id) {
        return this.teatcherService.remove(+id);
    }
};
exports.TeatcherController = TeatcherController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeatcherController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeatcherController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teatcher_dto_1.UpdateTeatcherDto]),
    __metadata("design:returntype", void 0)
], TeatcherController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeatcherController.prototype, "remove", null);
exports.TeatcherController = TeatcherController = __decorate([
    (0, common_1.Controller)('teatcher'),
    __metadata("design:paramtypes", [teatcher_service_1.TeatcherService])
], TeatcherController);
//# sourceMappingURL=teatcher.controller.js.map
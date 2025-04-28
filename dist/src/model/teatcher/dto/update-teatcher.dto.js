"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTeatcherDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_teatcher_dto_1 = require("./create-teatcher.dto");
class UpdateTeatcherDto extends (0, mapped_types_1.PartialType)(create_teatcher_dto_1.CreateTeatcherDto) {
}
exports.UpdateTeatcherDto = UpdateTeatcherDto;
//# sourceMappingURL=update-teatcher.dto.js.map
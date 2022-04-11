"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgeValidator = void 0;
function AgeValidator(control) {
    if (control.value <= 16 && control.value >= 70) {
        return { 'valid': true };
    }
    return null;
}
exports.AgeValidator = AgeValidator;
//# sourceMappingURL=age.validator.js.map
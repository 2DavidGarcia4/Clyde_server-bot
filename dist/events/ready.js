"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readyEvent = void 0;
function readyEvent(client) {
    var _a;
    console.log(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.username}: I'm ready`);
}
exports.readyEvent = readyEvent;

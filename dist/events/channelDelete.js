"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelDeleteEvent = void 0;
const discord_js_1 = require("discord.js");
const functions_1 = require("../utils/functions");
function channelDeleteEvent(channel, client) {
    return __awaiter(this, void 0, void 0, function* () {
        if (channel.type != discord_js_1.ChannelType.GuildText)
            return;
        const { guild } = channel;
        const roomsData = yield (0, functions_1.getRoomsData)(client);
        if (!roomsData)
            return;
        const room = roomsData === null || roomsData === void 0 ? void 0 : roomsData.find(f => f.channelId == channel.id);
        if (room) {
            if (guild.members.cache.has(room.userId)) {
                room.channelId = undefined;
                (0, functions_1.updateRoomsData)(client, roomsData);
            }
            else {
                roomsData === null || roomsData === void 0 ? void 0 : roomsData.splice(roomsData.findIndex(f => f.channelId == room.channelId), 1);
                (0, functions_1.updateRoomsData)(client, roomsData);
            }
        }
    });
}
exports.channelDeleteEvent = channelDeleteEvent;

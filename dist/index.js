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
const discord_js_1 = require("discord.js");
const config_1 = require("./config");
const ready_1 = require("./events/ready");
const interactionCreate_1 = require("./events/interactionCreate");
const memberRemove_1 = require("./events/memberRemove");
const messageCreate_1 = require("./events/messageCreate");
const channelDelete_1 = require("./events/channelDelete");
const memberAdd_1 = require("./events/memberAdd");
const MyBot = new discord_js_1.Client({ intents: 131071 });
MyBot.once('ready', () => {
    (0, ready_1.readyEvent)(MyBot);
});
MyBot.on('interactionCreate', (interaction) => {
    (0, interactionCreate_1.interactionCreateEvent)(interaction, MyBot);
});
MyBot.on('messageCreate', (message) => {
    (0, messageCreate_1.messageCreateEvent)(message, MyBot);
});
MyBot.on('channelDelete', (channel) => {
    (0, channelDelete_1.channelDeleteEvent)(channel, MyBot);
});
MyBot.on('guildMemberAdd', (member) => {
    (0, memberAdd_1.memberAddEvent)(member);
});
MyBot.on('guildMemberRemove', (member) => {
    (0, memberRemove_1.memberRemoveEvent)(member, MyBot);
});
//! Errors events
MyBot.on("shardError", (err) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(err);
}));
process.on("unhandledRejection", (err) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(err);
}));
MyBot.login(config_1.secret);

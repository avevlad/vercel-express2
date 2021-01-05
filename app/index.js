'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
function build() {
    const app = fastify_1.default({
        logger: true
    });
    app.get('/', async (req, res) => {
        const { name = 'World' } = req.query;
        // req.log.info({ name }, 'hello world!');
        return `Hello ${name}!`;
    });
    app.get('/another/kek', async (req, res) => {
        const { name = 'World' } = req.query;
        // req.log.info({ name }, 'hello world!');
        return `Hello ${name}!`;
    });
    return app;
}
module.exports = build;

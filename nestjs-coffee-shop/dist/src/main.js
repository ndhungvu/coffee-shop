"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const basicAuth = require("express-basic-auth");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    if (process.env.NODE_ENV !== 'production') {
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Coffee Shop management')
            .setDescription('Coffee Shop management APIs description')
            .setVersion('1.0')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        app.use('/doc', basicAuth({
            challenge: true,
            users: { [process.env.SWAGGER_USERNAME]: process.env.SWAGGER_PASSWORD },
        }));
        swagger_1.SwaggerModule.setup('doc', app, document);
        const dirPath = path.resolve(__dirname, '../docs');
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
        fs.writeFileSync(`${dirPath}/apidoc.json`, JSON.stringify(document), 'UTF-8');
    }
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
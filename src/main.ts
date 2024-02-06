import { NestFactory } from '@nestjs/core';
import serverless, { Handler } from 'serverless-http';
import { AppModule } from './app.module';
import { LogLevel } from '@nestjs/common';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const isDev: boolean = Boolean(process.env.IS_OFFLINE);
  const logLevels: LogLevel[] = isDev
    ? ['error', 'warn', 'log', 'verbose', 'debug']
    : ['error', 'warn', 'log'];

  const app = await NestFactory.create(AppModule, {
    logger: logLevels,
  });
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverless(expressApp);
}

export const handler: any = async (event: any, context: any) => {
  server = server ?? (await bootstrap());
  return server(event, context);
};

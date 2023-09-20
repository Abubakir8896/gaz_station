import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


const start = async() => {
  try {
    const app = await NestFactory.create(AppModule);

    const PORT = process.env.PORT || 3000

    await app.listen(PORT, () => {
      console.log(`Server Listen on ${PORT} port`);
    })
  } catch (error) {
    console.log(error);
  }
}

start()

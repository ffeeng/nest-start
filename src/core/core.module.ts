import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { TimeoutInterceptor } from "../common/interceptors/timeout.interceptor";


// 全局的Interceptor
// 同理全局的 Guard
// 同理全局的 Filter
// 同理全局的 Pipe
// export declare const APP_INTERCEPTOR = "APP_INTERCEPTOR";
// export declare const APP_PIPE = "APP_PIPE";
// export declare const APP_GUARD = "APP_GUARD";
// export declare const APP_FILTER = "APP_FILTER";
@Module({
  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    // { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },
  ],
})

export class CoreModule {}

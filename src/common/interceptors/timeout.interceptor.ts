import {
  CallHandler,
  ExecutionContext, HttpException, HttpStatus,
  Injectable,
  NestInterceptor
} from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { catchError, map, timeout } from "rxjs/operators";

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // return next.handle()
    return next.handle().pipe(timeout(3000))
  }
}

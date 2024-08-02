import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

    private readonly apiKey = environment.apiKey;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clonar la solicitud para agregar el parámetro apiKey
        const modifiedReq = req.clone({
            setParams: {
                apiKey: this.apiKey
            }
        });

        // Pasar la solicitud modificada al siguiente manejador
        return next.handle(modifiedReq);
    }
}
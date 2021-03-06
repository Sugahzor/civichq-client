import { Http, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

declare var SERVER_ADDRESS: string;

/**
 export * BaseService
 */
export class BaseService {
    rootAddress: string = SERVER_ADDRESS;//"http://localhost:8080/api/";
    
    sentinelToken: string;
    sentinelLoggedIn: boolean;
    readonly sentinelTokenName = 'sentinel_token';
    readonly authHeaderName = 'x-access-token';
    headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private _http: Http) {

    }

    handleError(error:any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}

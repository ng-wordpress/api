import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WpRequestOptions } from '../types/WpRequestOptions';

declare var Window: {
    [key: string]: any; // missing index defintion
    prototype: Window;
    new(): Window;
};

@Injectable()
export class WpNetworkService {
    private baseUrl = 'http://localhost:8001/';
    private nonce = '';

    constructor(private http: HttpClient) {
        if (typeof window !== 'undefined' && (<any> window)['wpApiSettings']) {
            this.nonce = (<any> window)['wpApiSettings']['nonce'];
        }
    }

    public get(url: string, params?: any, options?: WpRequestOptions): Observable<any> {
        if (options && options.withCredentials) {
            if (!params) {
                params = {};
            }
            params['_wpnonce'] = this.nonce;
        }
        return this.http.get(this.resolveUrl(url), {
            withCredentials: options && options.withCredentials,
            params: params
        });
    }

    public post(url: string, body: any, options?: WpRequestOptions): Observable<any> {
        const params = {
            '_wpnonce': ''
        };
        if (options && options.withCredentials) {
            params['_wpnonce'] = this.nonce;
        }
        return this.http.post(this.resolveUrl(url), body, {
            withCredentials: options && options.withCredentials,
            params: params
        });
    }

    public delete(url: string, params?: any, options?: WpRequestOptions): Observable<any> {
        if (options && options.withCredentials) {
            params['_wpnonce'] = this.nonce;
        }
        return this.http.delete(this.resolveUrl(url), {
            withCredentials: options && options.withCredentials,
            params: params
        });
    }

    public resolveUrl(url: string): string {
        return this.baseUrl + 'wp-json/wp/v2/' + url;
    }

    public filter(object: any, filter: string[]) {
        return Object.keys(object)
            .filter(key => filter.indexOf(key) === -1)
            .reduce((obj, key) => {
                (obj as any)[key] = object[key];
                return obj;
            }, {});
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WpRequestOptions } from '../types/WpRequestOptions';

@Injectable()
export class WpNetworkService {
    private baseUrl = 'http://localhost:8001/';
    private nonce: string;

    constructor(private http: HttpClient) {
        if (typeof window !== 'undefined' && window['wpApiSettings']) {
            this.nonce = window['wpApiSettings']['nonce'];
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
        const params = {};
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
            .filter(key => !filter.includes(key))
            .reduce((obj, key) => {
                obj[key] = object[key];
                return obj;
            }, {});
    }
}

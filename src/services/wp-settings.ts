import { Injectable } from '@angular/core';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpNetwork } from './wp-network';
import { Observable } from 'rxjs/Observable';
import { WpSetting } from '../types/WpSetting';

@Injectable()
export class WpSettings {

    constructor(private network: WpNetwork) {}

    public get(options?: WpRequestOptions): Observable<WpSetting> {
        return this.network.get('settings', {}, { withCredentials: true, ...options});
    }

    public update(args: WpSetting, options?: WpRequestOptions): Observable<WpSetting> {
        return this.network.post('settings', args, { withCredentials: true, ...options});
    }

}

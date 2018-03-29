import { Injectable } from '@angular/core';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpNetworkService } from './wp-network.service';
import { Observable } from 'rxjs/Observable';
import { WpSetting } from '../types/WpSetting';

@Injectable()
export class WpSettingsService {

    constructor(private network: WpNetworkService) {}

    public get(options?: WpRequestOptions): Observable<WpSetting> {
        return this.network.get('settings', {}, { withCredentials: true, ...options});
    }

    public update(args: WpSetting, options?: WpRequestOptions): Observable<WpSetting> {
        return this.network.post('settings', args, { withCredentials: true, ...options});
    }

}

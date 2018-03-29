import { Injectable } from '@angular/core';
import { WpNetworkService } from './wp-network.service';
import { Observable } from 'rxjs/Observable';
import { WpPage } from '../types/WpPage';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';

@Injectable()
export class WpPagesService {
    constructor(private network: WpNetworkService) {}

    public getList(options?: WpRequestOptions): Observable<WpPage[]> {
        return this.network.get('pages', {}, options);
    }

    public get(
        args: { id: number; context?: WpContext; password?: string },
        options?: WpRequestOptions
    ): Observable<WpPage> {
        const httpArgs = this.network.filter(args, ['id']);
        return this.network.get('pages/' + args.id, httpArgs, options);
    }
}

import { Injectable } from '@angular/core';
import { WpNetwork } from './wp-network';
import { Observable } from 'rxjs/Observable';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpPostType } from '../types/WpPostType';

@Injectable()
export class WpPostTypes {
  constructor(private network: WpNetwork) {}

  public getList(
    args: { context?: WpContext },
    options?: WpRequestOptions
  ): Observable<WpPostType[]> {
    return this.network.get('types', args, options);
  }

  public get(
    args: { type: string; context?: WpContext },
    options?: WpRequestOptions
  ): Observable<WpPostType> {
    const httpArgs = this.network.filter(args, ['type']);
    return this.network.get('types/' + args.type, httpArgs, options);
  }

}

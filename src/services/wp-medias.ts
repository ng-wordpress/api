import { Injectable } from '@angular/core';
import { WpNetworkService } from './wp-network.service';
import { Observable } from 'rxjs/Observable';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpMedia } from '../types/WpMedia';

@Injectable()
export class WpMedias {
  constructor(private network: WpNetworkService) {}

  public getList(
    args?: any,
    options?: WpRequestOptions
  ): Observable<WpMedia[]> {
    return this.network.get('media', args, options);
  }

  public get(
    args: { id: number; context?: WpContext },
    options?: WpRequestOptions
  ): Observable<WpMedia> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get('media/' + args.id, httpArgs, options);
  }

  public create(
    args: WpMedia,
    options?: WpRequestOptions
  ): Observable<WpMedia> {
    return this.network.post('media', args, {
      withCredentials: true,
      ...options
    });
  }

  public update(
    args: WpMedia,
    options?: WpRequestOptions
  ): Observable<WpMedia> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post('media/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  public delete(
    args: { id: number; },
    options?: WpRequestOptions
  ): Observable<WpMedia> {
    return this.network.delete('media/' + args.id, {
      force: true
    }, {
      withCredentials: true,
      ...options
    });
  }

}

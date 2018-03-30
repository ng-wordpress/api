import { Injectable } from '@angular/core';
import { WpNetworkService } from './wp-network.service';
import { Observable } from 'rxjs/Observable';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpTag } from '../types/WpTag';

@Injectable()
export class WpTags {
  constructor(private network: WpNetworkService) {}

  public getList(
    args?: any,
    options?: WpRequestOptions
  ): Observable<WpTag[]> {
    return this.network.get('tags', args, options);
  }

  public get(
    args: { id: number; context?: WpContext },
    options?: WpRequestOptions
  ): Observable<WpTag> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get('tags/' + args.id, httpArgs, options);
  }

  public create(
    args: WpTag,
    options?: WpRequestOptions
  ): Observable<WpTag> {
    return this.network.post('tags', args, {
      withCredentials: true,
      ...options
    });
  }

  public update(
    args: WpTag,
    options?: WpRequestOptions
  ): Observable<WpTag> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post('tags/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  public delete(
    args: { id: number; },
    options?: WpRequestOptions
  ): Observable<WpTag> {
    return this.network.delete('tags/' + args.id, {
      force: true
    }, {
      withCredentials: true,
      ...options
    });
  }

}

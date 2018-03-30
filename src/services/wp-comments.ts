import { Injectable } from '@angular/core';
import { WpNetwork } from './wp-network';
import { Observable } from 'rxjs/Observable';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpComment } from '../types/WpComment';

@Injectable()
export class WpComments {
  constructor(private network: WpNetwork) {}

  public getList(
    args?: any,
    options?: WpRequestOptions
  ): Observable<WpComment[]> {
    return this.network.get('comments', args, options);
  }

  public get(
    args: { id: number; context?: WpContext; password?: string; },
    options?: WpRequestOptions
  ): Observable<WpComment> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get('comments/' + args.id, httpArgs, options);
  }

  public create(
    args: WpComment,
    options?: WpRequestOptions
  ): Observable<WpComment> {
    return this.network.post('comments', args, {
      withCredentials: true,
      ...options
    });
  }

  public update(
    args: WpComment,
    options?: WpRequestOptions
  ): Observable<WpComment> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post('comments/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  public delete(
    args: { id: number; password?: string; },
    options?: WpRequestOptions
  ): Observable<WpComment> {
    return this.network.delete('categories/' + args.id, {
      force: true
    }, {
      withCredentials: true,
      ...options
    });
  }

}

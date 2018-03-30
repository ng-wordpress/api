import { Injectable } from '@angular/core';
import { WpNetwork } from './wp-network';
import { Observable } from 'rxjs/Observable';
import { WpPage } from '../types/WpPage';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';

@Injectable()
export class WpPages {
  constructor(private network: WpNetwork) {}

  public getList(args?: any, options?: WpRequestOptions): Observable<WpPage[]> {
    return this.network.get('pages', args, options);
  }

  public get(
    args: { id: number; context?: WpContext; password?: string },
    options?: WpRequestOptions
  ): Observable<WpPage> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get('pages/' + args.id, httpArgs, options);
  }

  public create(
    args: WpPage,
    options?: WpRequestOptions
  ): Observable<WpPage> {
    return this.network.post('pages', args, {
      withCredentials: true,
      ...options
    });
  }

  public update(
    args: WpPage,
    options?: WpRequestOptions
  ): Observable<WpPage> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post('pages/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  public delete(
    args: { id: number },
    options?: WpRequestOptions
  ): Observable<WpPage> {
    return this.network.delete(
      'pages/' + args.id,
      {
        force: true
      },
      {
        withCredentials: true,
        ...options
      }
    );
  }
}

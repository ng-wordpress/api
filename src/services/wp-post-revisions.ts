import { Injectable } from '@angular/core';
import { WpNetwork } from './wp-network';
import { Observable } from 'rxjs/Observable';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpPostRevision } from '../types/WpPostRevision';

@Injectable()
export class WpPostRevisions {
  constructor(private network: WpNetwork) {}

  public getList(
    args: { parent: number; context?: WpContext },
    options?: WpRequestOptions
  ): Observable<WpPostRevision[]> {
    const httpArgs = this.network.filter(args, ['parent']);
    return this.network.get('posts/' + args.parent + '/revisions', httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  public get(
    args: { parent: number; id: number; context?: WpContext },
    options?: WpRequestOptions
  ): Observable<WpPostRevision> {
    const httpArgs = this.network.filter(args, ['parent', 'id']);
    return this.network.get('posts/' + args.parent + '/revisions/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  public delete(
    args: { parent: number; id: number; },
    options?: WpRequestOptions
  ): Observable<WpPostRevision> {
    return this.network.delete('posts/' + args.parent + '/revisions/' + args.id, {
      force: true
    }, {
      withCredentials: true,
      ...options
    });
  }

}

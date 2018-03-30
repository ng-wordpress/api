import { Injectable } from '@angular/core';
import { WpNetworkService } from './wp-network.service';
import { Observable } from 'rxjs/Observable';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpPost } from '../types/WpPost';

@Injectable()
export class WpPosts {
  constructor(private network: WpNetworkService) {}

  public getList(args?: any, options?: WpRequestOptions): Observable<WpPost[]> {
    return this.network.get('posts', args, options);
  }

  public get(
    args: { id: number; context?: WpContext; password?: string },
    options?: WpRequestOptions
  ): Observable<WpPost> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get('posts/' + args.id, httpArgs, options);
  }

  public create(args: WpPost, options?: WpRequestOptions): Observable<WpPost> {
    return this.network.post('posts', args, {
      withCredentials: true,
      ...options
    });
  }

  public update(args: WpPost, options?: WpRequestOptions): Observable<WpPost> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post('posts/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  public delete(
    args: { id: number },
    options?: WpRequestOptions
  ): Observable<WpPost> {
    return this.network.delete(
      'posts/' + args.id,
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

import { Injectable } from '@angular/core';
import { WpNetworkService } from './wp-network.service';
import { Observable } from 'rxjs/Observable';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpCategory } from '../types/WpCategory';

@Injectable()
export class WpCategories {
  constructor(private network: WpNetworkService) {}

  public getList(
    args?: any,
    options?: WpRequestOptions
  ): Observable<WpCategory[]> {
    return this.network.get('categories', args, options);
  }

  public get(
    args: { id: number; context?: WpContext },
    options?: WpRequestOptions
  ): Observable<WpCategory> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get('categories/' + args.id, httpArgs, options);
  }

  public create(
    args: WpCategory,
    options?: WpRequestOptions
  ): Observable<WpCategory> {
    return this.network.post('categories', args, {
      withCredentials: true,
      ...options
    });
  }

  public update(
    args: WpCategory,
    options?: WpRequestOptions
  ): Observable<WpCategory> {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post('categories/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  public delete(
    args: { id: number; },
    options?: WpRequestOptions
  ): Observable<WpCategory> {
    return this.network.delete('categories/' + args.id, {
      force: true
    }, {
      withCredentials: true,
      ...options
    });
  }

}

import { Injectable } from '@angular/core';
import { WpNetwork } from './wp-network';
import { Observable } from 'rxjs/Observable';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpTaxonomy } from '../types/WpTaxonomy';

@Injectable()
export class WpTaxonomies {
  constructor(private network: WpNetwork) {}

  public getList(
    args?: { type?: string; context?: WpContext; },
    options?: WpRequestOptions
  ): Observable<WpTaxonomy[]> {
    return this.network.get('taxonomies', args, options);
  }

  public get(
    args: { taxanomy: string; context?: WpContext; },
    options?: WpRequestOptions
  ): Observable<WpTaxonomy> {
    const httpArgs = this.network.filter(args, ['taxanomy']);
    return this.network.get('taxonomies/' + args.taxanomy, httpArgs, options);
  }

}

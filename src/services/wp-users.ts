import { Injectable } from '@angular/core';
import { WpNetwork } from './wp-network';
import { Observable } from 'rxjs/Observable';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpUser } from '../types/WpUser';
import { WpBaseUser } from '../types/WpBaseUser';
import { WpContext } from '../types/shared/WpContext';

@Injectable()
export class WpUsers {

    constructor(private network: WpNetwork) {}

    public getList(args?: any, options?: WpRequestOptions): Observable<WpUser[]> {
        return this.network.get('users', args, { withCredentials: true, ...options});
    }

    public get(
        args: { id: number; context?: WpContext; },
        options?: WpRequestOptions
    ): Observable<WpUser> {
        const httpArgs = this.network.filter(args, ['id']);
        return this.network.get('users/' + args.id, httpArgs, { withCredentials: true, ...options});
    }

    public getMe(
        args: { context?: WpContext; },
        options?: WpRequestOptions
    ): Observable<WpUser> {
        const httpArgs = this.network.filter(args, ['id']);
        return this.network.get('users/me', httpArgs, { withCredentials: true, ...options});
    }

    public create(args: WpBaseUser, options?: WpRequestOptions): Observable<WpUser> {
        return this.network.post('users', args, { withCredentials: true, ...options});
    }

    public update(args: WpBaseUser, options?: WpRequestOptions): Observable<WpUser> {
        const id = args.id;
        const httpArgs = this.network.filter(args, ['id']);
        return this.network.post('users/' + args.id, httpArgs, { withCredentials: true, ...options});
    }

    public updateMe(args: WpBaseUser, options?: WpRequestOptions): Observable<WpUser> {
        return this.network.post('users/me', args, { withCredentials: true, ...options});
    }

    public delete(args: { id: number, reassign: number }, options?: WpRequestOptions): Observable<WpUser> {
        const id = args.id;
        const httpArgs = this.network.filter(args, ['id']);
        return this.network.delete('users/' + args.id, { force: true, ...httpArgs }, { withCredentials: true, ...options});
    }

    public deleteMe(args: { reassign: number }, options?: WpRequestOptions): Observable<WpUser> {
        return this.network.delete('users/me', { force: true, ...args }, { withCredentials: true, ...options});
    }

}

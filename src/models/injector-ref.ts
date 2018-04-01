import { Injectable, Injector } from '@angular/core';

export interface Type<T> extends Function {
    new (...args: any[]): T;
}

/**
 * Allows to get the dependencies at the module level or component.
 */
@Injectable() export class InjectorRef {

    private static injector: any = null;

    public static get<T>(token: Type<T>): T {
        return InjectorRef.injector.get(token);
    }

    constructor(private injector: Injector) {
        InjectorRef.injector = this.injector;
    }

}

import { Injectable } from '@angular/core';

@Injectable()
export class WpPostsService {

    /**
     * Stores the last sum.
     */
    public sum = 0;

    /**
     * Calculates the sum.
     * @param addends Numbers to be added
     */
    public calculate(...addends: number[]): void {
        this.sum = 0;
        for (const addend of addends) {
            this.sum += addend;
        }
    }

}

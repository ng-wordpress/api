import { inject, TestBed } from '@angular/core/testing';

import { WpPostsService } from '../../src/ng-wordpress-services';

describe('WpPostsService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WpPostsService
            ]
        });
    });

    it('should be calculate the sum',
        inject([WpPostsService],
            (sumService: WpPostsService) => {
                sumService.calculate(45, 78, 90, 674);
                expect(sumService.sum).toEqual(887);
            })
    );

});

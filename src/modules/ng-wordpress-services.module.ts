import { NgModule, ModuleWithProviders } from '@angular/core';

import { WpPostsService } from '../services/posts.service';

@NgModule({
    declarations: [],
    exports: []
})
export class NgWordpressServicesModule {

    /**
     * Use in AppModule
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgWordpressServicesModule,
            providers: [WpPostsService]
        };
    }

}

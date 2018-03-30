import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  WpCategories,
  WpComments,
  WpMedias,
  WpNetwork,
  WpPages,
  WpPostRevisions,
  WpPosts,
  WpPostStatuses,
  WpPostTypes,
  WpSettings,
  WpTags,
  WpTaxonomies
} from 'public_api';

@NgModule({
  declarations: [],
  exports: []
})
export class NgWordpressModule {
  /**
   * Use in AppModule
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgWordpressModule,
      providers: [
        WpCategories,
        WpComments,
        WpMedias,
        WpNetwork,
        WpPages,
        WpPostRevisions,
        WpPosts,
        WpPostStatuses,
        WpPostTypes,
        WpSettings,
        WpTags,
        WpTaxonomies
      ]
    };
  }
}

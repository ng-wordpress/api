import { NgModule, ModuleWithProviders } from '@angular/core';
import { WpCategories } from '../services/wp-categories';
import { WpComments } from '../services/wp-comments';
import { WpMedias } from '../services/wp-medias';
import { WpNetwork } from '../services/wp-network';
import { WpPages } from '../services/wp-pages';
import { WpPostRevisions } from '../services/wp-post-revisions';
import { WpPostStatuses } from '../services/wp-post-statuses';
import { WpPostTypes } from '../services/wp-post-types';
import { WpPosts } from '../services/wp-posts';
import { WpSettings } from '../services/wp-settings';
import { WpTags } from '../services/wp-tags';
import { WpTaxonomies } from '../services/wp-taxonomies';

@NgModule({
  declarations: [],
  exports: []
})
export class NgWordpressApiModule {
  /**
   * Use in AppModule
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgWordpressApiModule,
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
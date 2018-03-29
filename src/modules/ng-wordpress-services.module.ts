import { NgModule, ModuleWithProviders } from '@angular/core';
import { WpPagesService } from '../services/wp-pages.service';
import { WpSettingsService } from '../services/wp-settings.service';
import { WpUsersService } from '../services/wp-users.service';
import { WpNetworkService } from '../services/wp-network.service';

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
      providers: [
        WpPagesService,
        WpSettingsService,
        WpUsersService,
        WpNetworkService
      ]
    };
  }
}

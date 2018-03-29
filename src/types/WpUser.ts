import { WpBaseUser } from './WpBaseUser';

export interface WpUser extends WpBaseUser {
    link?: string;
    registered_date?: string;
    capabilities?: any;
    extra_capabilities?: any;
    avatar_urls?: any;
}

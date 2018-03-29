export interface WpBaseUser {
    id?: number;
    username: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    email: string;
    url?: string;
    description?: string;
    locale?: string;
    nickname?: string;
    slug?: string;
    roles?: any[];
    password: string;
    meta?: any;
}

export interface WpComment {
    id?: number;
    author?: number;
    author_email?: string;
    author_ip?: string;
    author_url?: string;
    author_user_agent?: string;
    content?: any;
    date?: string;
    date_gmt?: string;
    link?: string;
    parent?: number;
    post?: number;
    status?: string;
    type?: string;
    author_avatar_urls?: any;
    meta?: any;
}

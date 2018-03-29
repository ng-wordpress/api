import { WpPageStatus } from './shared/WpPageStatus';
import { WpCommentStatus } from './shared/WpCommentStatus';

export interface WpPostBase {
    date?: string;
    date_gmt?: string;
    guid?: any;
    id?: number;
    link?: string;
    modified?: string;
    modified_gmt?: string;
    slug?: string;
    status?: WpPageStatus | string;
    type?: string;
    password?: string;
    title?: any;
    content?: any;
    author?: number;
    excerpt?: any;
    featured_media?: number;
    comment_status?: WpCommentStatus | string;
    ping_status?: WpCommentStatus | string;
    meta?: any;
    template?: string;
}

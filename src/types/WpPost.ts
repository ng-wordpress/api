import { WpPageStatus } from './shared/WpPageStatus';
import { WpCommentStatus } from './shared/WpCommentStatus';
import { WpPostBase } from './wpPostBase';

export interface WpPost extends WpPostBase {
    sticky?: boolean;
    categories?: any[];
    tags?: any[];
}

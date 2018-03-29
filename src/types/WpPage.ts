import { WpPageStatus } from './shared/WpPageStatus';
import { WpCommentStatus } from './shared/WpCommentStatus';
import { WpPostBase } from './wpPostBase';

export interface WpPage extends WpPostBase {
    parent?: number;
    menu_order?: number;
}

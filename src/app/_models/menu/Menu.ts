import { BadgeItem } from './BadgeItem';
import { ChildrenItem } from './ChildrenItem';

export interface Menu {
    state?: string;
    name?: string;
    type: string;
    icon?: string;
    badge?: BadgeItem[];
    children?: ChildrenItem[];
}

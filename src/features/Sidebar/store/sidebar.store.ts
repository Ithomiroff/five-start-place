import { action, makeAutoObservable } from 'mobx';
import { MenuItem } from '@config/navigation/types';

class SidebarStore {
  private selectedSubMenuItems: MenuItem[] | undefined = undefined;

  get subPanelExpanded(): boolean {
    return Boolean(this.selectedSubMenuItems);
  }

  get subPanelItems(): MenuItem[] {
    return this.selectedSubMenuItems || [];
  }

  constructor() {
    makeAutoObservable(this);
  }

  selectSubMenu = action((item: MenuItem[]) => (this.selectedSubMenuItems = item));

  dropSubMenu = action(() => (this.selectedSubMenuItems = undefined));
}

export default new SidebarStore();

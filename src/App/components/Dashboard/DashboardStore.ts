import { provide } from '../../../IoC';
import { action, computed, observable } from 'mobx';
import { Layout } from 'react-grid-layout';

@provide.transient()
export default class DashboardStore {
  initialLayoutValues = {
    i: '',
    x: 0,
    y: 0,
    w: 3,
    h: 6,
    minW: 2,
    minH: 4,
    type: '',
  };

  @observable
  layout: Array<Layout & { type: WidgetName }> = [];

  @observable
  displayData: any;

  @computed
  get initialLayouts() {
    return {
      lg: this.layout,
      md: this.layout,
      sm: this.layout,
      xs: this.layout,
      xxs: this.layout,
    };
  }

  @computed
  get layoutData() {
    if (!this.displayData || !this.displayData[0]) return 'Empty!';
    return this.displayData?.map((value: any) => {
      return {
        ...value,
        type: this.layout.find(elem => elem.i === value.i)?.type,
      };
    });
  }

  @action
  addWidget = (name: WidgetName) => {
    const tmp = this.layout[this.layout.length - 1];
    this.layout.push({
      ...this.initialLayoutValues,
      i: (tmp ? Number(tmp.i) + 1 : 0).toString(),
      type: name,
    });
    this.displayData = this.layout;
  };
}

export type WidgetName = 'bar' | 'bar2' | 'scatter' | 'line';

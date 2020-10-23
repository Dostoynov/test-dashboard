import { provide } from '../../../../IoC';
import { action, observable } from 'mobx';

@provide.transient()
export class BarChartStore {
  initialData = [
    {
      name: 'food',
      uv: -2000,
      pv: -2013,
      amt: -4500,
      bmk: -4301,
      time: 1,
      uvError: [100, 50],
      pvError: [110, 20],
    },
    {
      name: 'cosmetic',
      uv: 3300,
      pv: 2000,
      amt: 6500,
      bmk: 2000,
      time: 2,
      uvError: 120,
      pvError: 50,
    },
    {
      name: 'storage',
      uv: 3200,
      pv: 1398,
      amt: 5000,
      bmk: 3000,
      time: 3,
      uvError: [120, 80],
      pvError: [200, 100],
    },
    {
      name: 'digital',
      uv: 2800,
      pv: 2800,
      amt: 4000,
      bmk: 1500,
      time: 4,
      uvError: 100,
      pvError: 30,
    },
  ];

  @observable
  params = {
    coefficient: 1,
  };

  @observable
  data: Array<ChartData> = [...this.initialData];

  @action
  multiplyValues = () => {
    this.data = this.data.map(column => {
      const tmp: ChartData = {
        ...column,
        uv: column.uv ? column.uv + 10 * this.params.coefficient : column.uv,
      };
      return tmp;
    });
  };
}

interface ChartData {
  name: string;
  uv: number | null;
  pv: number | null;
  amt: number | null;
  uvError: Array<number> | number | null;
}

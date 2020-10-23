import { provide } from '../../../../IoC';
import { action, observable } from 'mobx';

@provide.transient()
export class LineChartStore {
  initialData = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
    { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
    { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
    { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
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

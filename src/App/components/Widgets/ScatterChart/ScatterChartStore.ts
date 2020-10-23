import { provide } from '../../../../IoC';
import { action, observable } from 'mobx';

@provide.transient()
export class ScatterChartStore {
  initialData = [
    { x: 100, y: 200, z: 200, errorY: [20, 30], errorX: 30 },
    { x: 120, y: 100, z: 260, errorY: 20, errorX: [20, 30] },
    { x: 170, y: 300, z: 400, errorY: [12, 8], errorX: 20 },
    { x: 140, y: 250, z: 280, errorY: 23, errorX: [12, 8] },
    { x: 150, y: 400, z: 500, errorY: [21, 10], errorX: 23 },
    { x: 110, y: 280, z: 200, errorY: 21, errorX: [21, 10] },
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
        x: column.x + this.params.coefficient,
        y: column.y - this.params.coefficient,
        z: column.z * this.params.coefficient,
      };
      return tmp;
    });
  };
}

interface ChartData {
  x: number;
  y: number;
  z: number;
  errorX: Array<number> | number;
  errorY: Array<number> | number;
}

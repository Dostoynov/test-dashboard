import { provide } from '../../../../IoC';
import { action, observable } from 'mobx';

@provide.transient()
export class OtherBarChartStore {
  // region data
  initialData = [
    { name: '201102', uv: -6.11, pv: 0 },
    { name: '201103', uv: 0.39, pv: 0 },
    { name: '201104', uv: -1.37, pv: 0 },
    { name: '201105', uv: 1.16, pv: 0 },
    { name: '201106', uv: 1.29, pv: 0 },
    { name: '201107', uv: 0.09, pv: 0 },
    { name: '201108', uv: 0.53, pv: 0 },
    { name: '201109', uv: 2.52, pv: 0 },
    { name: '201110', uv: 0.79, pv: 0 },
    { name: '201111', uv: 2.94, pv: 0 },
    { name: '201112', uv: 4.3, pv: 0 },
    { name: '201201', uv: 7.41, pv: 14.21 },
    { name: '201202', uv: -7.1, pv: 13.01 },
    { name: '201203', uv: -1.17, pv: 11.26 },
    { name: '201204', uv: -1.86, pv: 10.7 },
    { name: '201205', uv: -0.16, pv: 9.26 },
    { name: '201206', uv: -1.25, pv: 6.53 },
    { name: '201207', uv: 0.22, pv: 6.66 },
    { name: '201208', uv: 0.72, pv: 6.86 },
    { name: '201209', uv: 1.82, pv: 6.12 },
    { name: '201210', uv: 1.64, pv: 7.02 },
    { name: '201211', uv: 3.16, pv: 7.25 },
    { name: '201212', uv: 1.31, pv: 4.17 },
    { name: '201301', uv: 2.91, pv: -0.19 },
    { name: '201302', uv: -0.47, pv: 6.94 },
    { name: '201303', uv: -4.15, pv: 3.71 },
    { name: '201304', uv: -1.82, pv: 3.76 },
    { name: '201305', uv: -0.93, pv: 2.95 },
    { name: '201306', uv: -0.99, pv: 3.22 },
    { name: '201307', uv: -0.52, pv: 2.46 },
    { name: '201308', uv: 1.54, pv: 3.3 },
    { name: '201309', uv: 2.05, pv: 3.54 },
    { name: '201310', uv: 0.7, pv: 2.58 },
    { name: '201311', uv: 2.25, pv: 1.59 },
    { name: '201312', uv: 3.59, pv: 3.92 },
    { name: '201401', uv: 3.63, pv: 4.64 },
    { name: '201402', uv: -4.91, pv: -0.02 },
    { name: '201403', uv: -2.66, pv: 1.54 },
    { name: '201404', uv: -1.5, pv: 1.86 },
    { name: '201405', uv: -0.19, pv: 2.62 },
    { name: '201406', uv: -0.22, pv: 3.42 },
    { name: '201407', uv: -0.58, pv: 3.35 },
    { name: '201408', uv: 0.89, pv: 2.69 },
    { name: '201409', uv: 2.22, pv: 2.86 },
    { name: '201410', uv: 0.61, pv: 2.77 },
    { name: '201411', uv: 2.37, pv: 2.97 },
    { name: '201412', uv: 3.06, pv: 2.41 },
    { name: '201501', uv: 1.07, pv: -0.13 },
    { name: '201502', uv: 4.04, pv: 9.27 },
    { name: '201503', uv: -5.14, pv: 6.48 },
    { name: '201504', uv: -1.69, pv: 6.28 },
    { name: '201505', uv: 0.51, pv: 7.03 },
    { name: '201506', uv: 1.03, pv: 8.37 },
    { name: '201507', uv: -1.14, pv: 7.76 },
    { name: '201508', uv: 0.53, pv: 7.38 },
    { name: '201509', uv: 1.51, pv: 6.63 },
    { name: '201510', uv: -0.16, pv: 5.81 },
    { name: '201511', uv: 3.27, pv: 6.74 },
  ];
  //endregion

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
  uv: number;
  pv: number;
}

import { observer } from 'mobx-react';
import React from 'react';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  Tooltip,
  Cell,
} from 'recharts';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { lazyInject } from '../../../../IoC';
import { BarChartStore } from './BarChartStore';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

interface Props {
  key?: string;
}

@observer
class BarChartWidget extends React.Component<Props, any> {
  @lazyInject(BarChartStore)
  private readonly store!: BarChartStore;
  colors = scaleOrdinal(schemeCategory10).range();

  render() {
    return (
      <>
        <ResponsiveContainer width="99%" height="70%">
          <BarChart data={this.store.data}>
            <XAxis dataKey="name" />
            <YAxis yAxisId="a" />
            <YAxis yAxisId="b" orientation="right" />
            <Legend />
            <Tooltip />
            <CartesianGrid vertical={false} />
            <Bar yAxisId="a" dataKey="uv">
              {this.store.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={this.colors[index % 20]} />
              ))}
            </Bar>
            <Bar yAxisId="b" dataKey="pv" label>
              {this.store.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={this.colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <InputGroup className="mb-3">
          <FormControl
            type="number"
            placeholder="Enter number"
            aria-label="Enter number"
            aria-describedby="basic-addon2"
            onChange={e =>
              (this.store.params.coefficient = Number(e.target.value))
            }
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={this.store.multiplyValues}
            >
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </>
    );
  }
}

export default BarChartWidget;

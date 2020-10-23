import { observer } from 'mobx-react';
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
} from 'recharts';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { lazyInject } from '../../../../IoC';
import { OtherBarChartStore } from './OtherBarChartStore';

interface Props {
  key?: string;
}

@observer
class OtherBarChartWidget extends React.Component<Props, any> {
  @lazyInject(OtherBarChartStore)
  private readonly store!: OtherBarChartStore;

  render() {
    return (
      <>
        <ResponsiveContainer width="99%" height="70%">
          <BarChart
            width={1100}
            height={250}
            barGap={2}
            barSize={6}
            data={this.store.data}
            margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
          >
            <XAxis dataKey="name" />
            <YAxis tickCount={7} />
            <Tooltip />
            <CartesianGrid />
            <Bar dataKey="uv" fill="#ff7300" radius={[5, 5, 5, 5]} />
            <Bar dataKey="pv" fill="#387908" radius={[5, 5, 5, 5]} />
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

export default OtherBarChartWidget;

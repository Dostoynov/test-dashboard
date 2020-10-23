import React from 'react';
import { observer } from 'mobx-react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import LineChartWidget from '../Widgets/LineChart';
import OtherBarChartWidget from '../Widgets/OtherBarChart';
import ScatterChartWidget from '../Widgets/ScatterChart';
import BarChartWidget from '../Widgets/BarChart';
import { lazyInject } from '../../../IoC';
import DashboardStore from './DashboardStore';
import { Button, Row } from 'react-bootstrap';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

@observer
class Dashboard extends React.Component<any, any> {
  @lazyInject(DashboardStore)
  private readonly store!: DashboardStore;

  render() {
    return (
      <>
        <Row>
          <p>{this.props.title}</p>
          <Button
            onClick={(event: any) => this.store.addWidget(event.target.name)}
            name="line"
            variant="secondary"
            className="mr-3 ml-5"
          >
            Add Line Chart
          </Button>
          <Button
            onClick={(event: any) => this.store.addWidget(event.target.name)}
            name="bar"
            variant="secondary"
            className="mr-3"
          >
            Add Bar Chart
          </Button>
          <Button
            onClick={(event: any) => this.store.addWidget(event.target.name)}
            name="scatter"
            variant="secondary"
            className="mr-3"
          >
            Add Scatter Chart
          </Button>
          <Button
            onClick={(event: any) => this.store.addWidget(event.target.name)}
            name="bar2"
            variant="secondary"
            className="mr-3"
          >
            Add another Bar Chart
          </Button>
          <Button
            onClick={() => console.log('Layout data:', this.store.layoutData)}
            name="bar2"
            variant="primary"
            className="float-right"
          >
            Console log Dashboard Data
          </Button>
        </Row>
        <ResponsiveReactGridLayout
          className="layout"
          layouts={this.store.initialLayouts}
          isBounded={true}
          onDragStop={layout => (this.store.displayData = layout)}
          onResizeStop={layout => (this.store.displayData = layout)}
          compactType={null}
          rowHeight={30}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
          {this.store.layout.map(layout => {
            const getWidget = () => {
              switch (layout.type) {
                case 'bar':
                  return <BarChartWidget />;
                case 'bar2':
                  return <OtherBarChartWidget />;
                case 'line':
                  return <LineChartWidget />;
                case 'scatter':
                  return <ScatterChartWidget />;
                default:
                  return null;
              }
            };

            return (
              <div key={layout.i} data-grid={layout}>
                {getWidget()}
              </div>
            );
          })}
        </ResponsiveReactGridLayout>
      </>
    );
  }
}

export default Dashboard;

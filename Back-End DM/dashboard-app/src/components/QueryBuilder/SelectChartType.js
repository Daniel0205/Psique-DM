import React from 'react';
import * as PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Icon } from '@ant-design/compatible';
import ButtonDropdown from './ButtonDropdown';
const ChartTypes = [
  {
    name: 'line',
    title: 'Linea',
    icon: 'line-chart',
  },
  {
    name: 'area',
    title: 'Area',
    icon: 'area-chart',
  },
  {
    name: 'bar',
    title: 'Barras',
    icon: 'bar-chart',
  },
  {
    name: 'pie',
    title: 'Pastel',
    icon: 'pie-chart',
  },
  {
    name: 'table',
    title: 'Tabla',
    icon: 'table',
  },
  {
    name: 'number',
    title: 'Numero',
    icon: 'info-circle',
  },
];

const SelectChartType = ({ chartType, updateChartType }) => {
  const menu = (
    <Menu>
      {ChartTypes.map((m) => (
        <Menu.Item key={m.title} onClick={() => updateChartType(m.name)}>
          <Icon type={m.icon} />
          {m.title}
        </Menu.Item>
      ))}
    </Menu>
  );
  const foundChartType = ChartTypes.find((t) => t.name === chartType);
  return (
    <ButtonDropdown overlay={menu} icon={<Icon type={foundChartType.icon} />}>
      {foundChartType.title}
    </ButtonDropdown>
  );
};

SelectChartType.propTypes = {
  chartType: PropTypes.string.isRequired,
  updateChartType: PropTypes.func.isRequired,
};
export default SelectChartType;

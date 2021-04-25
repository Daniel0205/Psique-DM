import React from 'react';
import * as PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Icon } from '@ant-design/compatible';
import ButtonDropdown from './ButtonDropdown';
import MemberDropdown from './MemberDropdown';
import RemoveButtonGroup from './RemoveButtonGroup';
const DateRanges = [
  {
    title: 'Todo el tiempo',
    value: undefined,
  },
  {
    title: 'Hoy',
    value: 'Today',
  },
  {
    title: 'Ayer',
    value: 'Yesterday',
  },
  {
    title: 'Esta Semana',
    value: 'This week',
  },
  {
    title: 'Este Mes',
    value: 'This month',
  },
  {
    title: 'Este trimestre',
    value: 'This quarter',
  },
  {
    title: 'Este Año',
    value: 'This year',
  },
  {
    title: 'Ultimos 7 dias',
    value: 'Last 7 days',
  },
  {
    title: 'Ultimos 30 dias',
    value: 'Last 30 days',
  },
  {
    title: 'Ultima semana',
    value: 'Last week',
  },
  {
    title: 'Ultimo mes',
    value: 'Last month',
  },
/*  {
    value: 'Last quarter',
  },*/
  {
    value: 'Last year',
  },
];

const granularities = [
  {name: undefined, title: "Sin agrupacion"},
  /*{name: "second", title: "Second"},
  {name: "minute", title: "Minute"},
  {name: "hour", title: "Hour"},*/
  {name: "day", title: "Dia"},
  {name: "week", title: "Semana"},
  {name: "month", title: "Mes"},
  {name: "year", title: "Año"}
]

const TimeGroup = ({
  members,
  availableMembers,
  addMemberName,
  updateMethods,
}) => {
  const granularityMenu = (member, onClick) => {
    member.granularities = granularities
    return (
    <Menu>
      {member.granularities.length ? (
        member.granularities.map((m) => (
          <Menu.Item key={m.title} onClick={() => onClick(m)}>
            {m.title}
          </Menu.Item>
        ))
      ) : (
        <Menu.Item disabled>La busqueda no arrojo resultados</Menu.Item>
      )}
    </Menu>
  )};

  const dateRangeMenu = (onClick) => (
    <Menu>
      {DateRanges.map((m) => (
        <Menu.Item key={m.title || m.value} onClick={() => onClick(m)}>
          {m.title || m.value}
        </Menu.Item>
      ))}
    </Menu>
  );

  console.log(members)

  return (
    <span>
      {members.map((m) => [
        <RemoveButtonGroup
          onRemoveClick={() => updateMethods.remove(m)}
          key={`${m.dimension.name}-member`}
        >
          <MemberDropdown
            onClick={(updateWith) =>
              updateMethods.update(m, { ...m, dimension: updateWith })
            }
            availableMembers={availableMembers}
          >
            {m.dimension.title}
          </MemberDropdown>
        </RemoveButtonGroup>,
        <b key={`${m.dimension.name}-for`}>Para</b>,
        <ButtonDropdown
          overlay={dateRangeMenu((dateRange) =>
            updateMethods.update(m, { ...m, dateRange: dateRange.value })
          )}
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
          key={`${m.dimension.name}-date-range`}
        >
          {m.dateRange || 'Todo el tiempo'}
        </ButtonDropdown>,
        <b key={`${m.dimension.name}-by`}>Agrupados por</b>,
        <ButtonDropdown
          overlay={granularityMenu(m.dimension, (granularity) =>
            updateMethods.update(m, { ...m, granularity: granularity.name })
          )}
          style={{
            marginLeft: 8,
          }}
          key={`${m.dimension.name}-granularity`}
        >
          {m.dimension.granularities.find((g) => g.name === m.granularity) &&
            m.dimension.granularities.find((g) => g.name === m.granularity)
              .title}
        </ButtonDropdown>,
      ])}
      {!members.length && (
        <MemberDropdown
          onClick={(member) =>
            updateMethods.add({
              dimension: member,
              granularity: 'day',
            })
          }
          availableMembers={availableMembers}
          type="dashed"
          icon={<Icon type="plus" />}
        >
          {addMemberName}
        </MemberDropdown>
      )}
    </span>
  );
};

TimeGroup.propTypes = {
  members: PropTypes.array.isRequired,
  availableMembers: PropTypes.array.isRequired,
  addMemberName: PropTypes.string.isRequired,
  updateMethods: PropTypes.object.isRequired,
};
export default TimeGroup;

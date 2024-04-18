import React from 'react';
import { Icon } from '@iconify/react';

import { ReactComponent as Calendar } from '../icons/calendar.svg';
import { ReactComponent as Dashboard } from '../icons/dashboard.svg';
import { ReactComponent as Statistics } from '../icons/statistics.svg';
import { ReactComponent as Maps } from '../icons/map.svg';
import { ReactComponent as Lists } from '../icons/lists.svg';
import { ReactComponent as Messages } from '../icons/messages.svg';


export const links = [
  {
    links: [
      {
        name: 'Dashboard',
        menuNameSpa: 'Inicio',
        icon: <Dashboard className='size-full' />,
      },
      {
        name: 'Statistics',
        menuNameSpa: 'Estadísticas',
        // icon: <Statistics className='size-full' />,
        icon: <Icon className='size-full' icon="fa6-solid:chart-pie" />,
      },
      {
        name: 'Map',
        menuNameSpa: 'Mapas',
        icon: <Maps className='size-full' />,
      },
      {
        name: 'Lists',
        menuNameSpa: 'Listas',
        icon: <Lists className='size-full' />,
      },
      {
        name: 'Calendar',
        menuNameSpa: 'Calendario',
        icon: <Calendar className='size-full' />,
      },
      {
        name: 'Chat',
        menuNameSpa: 'Chat',
        icon: <Messages className='size-full' />,
      },

    ],
  },
];
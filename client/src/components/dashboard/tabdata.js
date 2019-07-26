import React from 'react';
import Social from '../social/Social';
import News from '../news/News';
import { getFriendProfiles } from '../../actions/social';
import { getProfiles } from '../../actions/profile';

export const newstab = {
  icon: 'fas fa-newspaper',
  label: 'News',
  title: 'News and Other Words!',
  subtext: 'Words and stuff like that',
  content: <News />,
  activeTab: 'false',
  selectedItem: 'selected',
  date: Date.now,
  headerSections: [
    {
      key: 0,
      label: 'Pages',
      icon: 'home',
      itemList: [
        {
          icon: 'flag',
          item: 'default',
          title: 'default',
          subtext: 'default',
          date: 'default',
          metaIcon: 'default',
          meta: 'default',
          avatar: 'default'
        },
        {
          icon: 'default',
          item: 'default',
          title: 'default',
          subtext: 'default',
          date: 'default',
          metaIcon: 'default',
          meta: 'default',
          avatar: 'default'
        },
        {
          icon: 'default',
          item: 'default',
          title: 'default',
          subtext: 'default',
          date: 'default',
          metaIcon: 'default',
          meta: 'default',
          avatar: 'default'
        },
        {
          icon: 'default',
          item: 'default',
          title: 'default',
          subtext: 'default',
          date: 'default',
          metaIcon: 'default',
          meta: 'default',
          avatar: 'default'
        },
        {
          icon: 'default',
          item: 'default',
          title: 'default',
          subtext: 'default',
          date: 'default',
          metaIcon: 'default',
          meta: 'default',
          avatar: 'default'
        }
      ]
    },
    {
      key: 1,
      label: 'People',
      icon: 'portrait',
      itemList: []
    },
    { key: 2, label: 'Posts', icon: 'comments', itemlist: [] }
  ],
  onClick: () => {
    console.log('clicked');
  }
};

export const playtab = {
  icon: 'fas fa-portrait',
  label: 'Play',
  title: 'title',
  subtext: 'subtext',
  content: <News />,
  activeTab: 'false',
  selectedItem: 'selected',
  date: Date.now,
  headerSections: [
    {
      key: 0,
      label: 'Pages',
      icon: 'home',
      itemList: []
    },
    {
      key: 1,
      label: 'People',
      icon: 'portrait',
      itemList: []
    },
    { key: 2, label: 'Posts', icon: 'comments', itemlist: {} }
  ],
  onClick: () => {
    console.log('clicked');
  }
};

export const socialtab = {
  icon: 'fas fa-users',
  label: 'Social',
  title: 'title',
  subtext: 'subtext',
  content: <Social />,
  activeTab: 'false',
  selectedItem: 'selected',
  date: Date.now,
  headerSections: [
    {
      key: 0,
      label: 'Pages',
      icon: 'home',
      itemList: []
    },
    {
      key: 1,
      label: 'People',
      icon: 'portrait',
      itemList: []
    },
    { key: 2, label: 'Posts', icon: 'comments', itemlist: [] }
  ],
  onClick: () => {
    console.log('clicked');
  }
};

export const statstab = {
  icon: 'fas fa-chart-line',
  label: 'Stats',
  title: 'title',
  subtext: 'subtext',
  content: <News />,
  activeTab: 'false',
  selectedItem: 'selected',
  date: Date.now,
  headerSections: [
    {
      key: 0,
      label: 'Pages',
      icon: 'home',
      itemList: []
    },
    {
      key: 1,
      label: 'People',
      icon: 'portrait',
      itemList: []
    },
    { key: 2, label: 'Posts', icon: 'comments', itemlist: {} }
  ],
  onClick: () => {
    console.log('clicked');
  }
};

export const settingstab = {
  icon: 'fas fa-wrench',
  label: 'Settings',
  title: 'title',
  subtext: 'subtext',
  content: <News />,
  activeTab: 'false',
  selectedItem: 'selected',
  date: Date.now,
  headerSections: [
    {
      key: 0,
      label: 'Pages',
      icon: 'home',
      itemList: []
    },
    {
      key: 1,
      label: 'People',
      icon: 'portrait',
      itemList: []
    },
    { key: 2, label: 'Posts', icon: 'comments', itemlist: {} }
  ],
  onClick: () => {
    console.log('clicked');
  }
};

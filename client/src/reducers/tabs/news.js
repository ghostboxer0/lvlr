import { GET_SELECTED_ITEM, SET_SELECTED_ITEM } from '../../actions/types';

const initialState = {
  icon: 'fas fa-newspaper',
  label: 'News',
  title: 'News',
  subtext: 'subtext',
  content:
    'Fusce rhoncus ultrices interdum. Duis egestas, diam ut cursus feugiat, arcu velit eleifend dolor, non scelerisque leo nunc quis massa. Mauris eget magna vulputate, euismod mi at, rhoncus felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec non ante in odio ultricies ornare sed eu odio. Cras vulputate dolor sed risus consequat fringilla. Vivamus in sollicitudin nisl.',
  date: Date.now,
  selectedItem: '',
  activeTab: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SELECTED_ITEM:
      return {
        ...state
      };
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: payload
      };
    default:
      return state;
  }
}

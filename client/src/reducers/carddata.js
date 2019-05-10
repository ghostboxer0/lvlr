const initialState = {
  icon: 'image',
  label: 'label',
  title: 'title',
  subtext: 'subtext',
  content:
    'Fusce rhoncus ultrices interdum. Duis egestas, diam ut cursus feugiat, arcu velit eleifend dolor, non scelerisque leo nunc quis massa. Mauris eget magna vulputate, euismod mi at, rhoncus felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec non ante in odio ultricies ornare sed eu odio. Cras vulputate dolor sed risus consequat fringilla. Vivamus in sollicitudin nisl.',
  date: Date.now
};

export default function(state = initialState) {
  return {
    ...state
  };
}

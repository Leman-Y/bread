export default [
  {
    id: 'DEV716627',
    title: 'New transaction has been recieved',
    when: '2 hours ago',
    type: 'order',
    to: '/orders/DEV730658'
  },
  {
    id: 'DEV853890',
    title: 'You have been inactive for a while! Please make sure to regularly update.',
    when: '3 hours ago',
    type: 'user',
    to: '/users/DEV696649'
  },
  {
    id: 'DEV897704',
    title: 'New catagory added to list',
    when: '1 day ago',
    type: 'product',
    to: '/products/DEV654476'
  },
  {
    id: 'DEV604714',
    title: 'You have spent more than 75% of your budget!',
    when: '2 day ago',
    type: 'feature',
    to: '/features'
  }
];

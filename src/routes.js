

let random = [
  { label: 'ZeroSSL', route: '/n/zerossl', source: require('./pages/zerossl.md') },
  { label: 'Commands', route: '/n/cmd', source: require('./pages/random.md') },
]

let routes = [
  { label: 'Notes', route: '/n', children: random },
]

export default routes

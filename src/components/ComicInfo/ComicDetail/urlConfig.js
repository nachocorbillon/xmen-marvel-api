let baseUrl;

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'http://localhost:3001';
  baseUrl = 'http://localhost:8888';
} else {
  baseUrl= 'https://uncanny-xmen.netlify.app';
}

export default baseUrl;
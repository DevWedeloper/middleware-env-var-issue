import { defineEventHandler, getRequestURL } from 'h3';

export default defineEventHandler((event) => {
  console.log('Path:', getRequestURL(event).pathname);
  console.log(
    'Server Only Environment Variable:',
    import.meta.env['SERVER_ONLY_VARIABLE']
  );
  console.log(
    'Public Environment Variable:',
    import.meta.env['VITE_EXAMPLE_VARIABLE']
  );
});

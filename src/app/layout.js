import localFont from 'next/font/local';
import '../styles/all.scss';

const tinyFont = localFont({
  src: '../fonts/tiny5.ttf',
});

export default function html({ children }) {
  return (
    <html>
      <head>
        <link rel='icon' type='image/png' href='/frogie.png' />
        <title>frog</title>
      </head>
      <body className={tinyFont.className}>{children}</body>
    </html>
  );
}

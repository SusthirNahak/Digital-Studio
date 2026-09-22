import './globals.css';

export const metadata = {
  title: 'Digital Studio — Websites, Ecommerce & Web Applications',
  description: 'Digital Studio crafts high-performance websites, Shopify stores, and custom web applications for growing businesses in Odisha, India, and worldwide.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var _orig = window.fetch;
                  var _fn = function() {
                    return (_orig || fetch).apply(this === window || !this ? window : this, arguments);
                  };
                  Object.defineProperty(window, 'fetch', {
                    get: function() { return _fn; },
                    set: function(val) { _orig = val; _fn = val; },
                    configurable: true,
                    enumerable: true
                  });
                } catch (e) {
                  try {
                    var proto = Object.getPrototypeOf(window);
                    if (proto) {
                      Object.defineProperty(proto, 'fetch', {
                        get: function() { return _fn; },
                        set: function(val) { _orig = val; _fn = val; },
                        configurable: true,
                        enumerable: true
                      });
                    }
                  } catch (_) {}
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}

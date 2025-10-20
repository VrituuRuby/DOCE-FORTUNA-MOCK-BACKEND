const fs = require('fs');
const esbuild = require('esbuild');
const { minify } = require('terser');

async function build() {
  // Bundle the JavaScript files into one
  await esbuild.build({
    entryPoints: ['./dist/js/index.js'], // Replace with your entry file
    bundle: true,
    outfile: 'dist/bundle.cjs',
    format: 'cjs',
    platform: 'node',
    sourcemap: false,
  });

  // Read the bundled file
  const code = fs.readFileSync('dist/bundle.cjs', 'utf8');

  // Minify the bundled code
  const minified = await minify(code);

  // Write the minified code to a new file
  fs.writeFileSync('dist/bundle.min.cjs', minified.code);

  console.log('Bundling and minification complete.');
}

build();

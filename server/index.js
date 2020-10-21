const express = require("express");
const { loadNuxt, build } = require('nuxt');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

(async () => {
  try {
    const nuxt = await loadNuxt({
      rootDir: './web',
      for: dev ? 'dev' : 'start'
    });
    
    const app = express();

    app.use(nuxt.render);
    if (dev) build(nuxt);

    app.listen(PORT, err => {
      if (err) throw err;
      console.log(`ready at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

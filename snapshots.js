const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
    await page.goto('https://carlyannrich.github.io/test/');
    // ensure the page has loaded before capturing a snapshot
    await page.waitFor('.header');
    await percySnapshot('homepage');
});



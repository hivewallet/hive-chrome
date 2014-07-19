hive-chrome
=======

Work in progress.

This is a fork of [hive-js](https://github.com/hivewallet/hive-js) adapted as a Chrome extension. Main development happens in the original hive-js repo.

## Development

### Grab the source

    git clone git@github.com:hivewallet/hive-chrome.git
    cd hive-chrome
    npm install

### Running the extension locally with the staging server

    NODE_ENV=production DB_HOST=hive.cloudant.com PROXY_URL=https://hive-proxy.herokuapp.com gulp chrome-watch

On Chrome Extensions page, select "Developer mode" and use "Load unpacked extension" to load the extension from the `build` subdirectory.

### Building a production version for the production server

    NODE_ENV=production HIVE_ENV=production DB_HOST=hivewallet.cloudant.com PROXY_URL=https://hive-proxy.herokuapp.com gulp chrome-build

Then either use the "Extensions" page in Chrome to pack the extension into a `.crx` file, or use the [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) to submit it to the Chrome Web Store. The `.crx` can be installed by manually dragging it to the Extensions page.

## Contributing

### Instructions

0. Make sure you want to make a change that's only relevant to hive-chrome, not to hive-js in general :)
1. Fork the repo
2. Push changes to your fork
3. Create a pull request

Note: please make changes in the least invasive way possible (e.g. add new files/sections instead of modifying existing files/sections), to minimize the amount of potential merge conflicts when pulling upstream changes.

### Working with upstream

Preferred way of working with local and upstream branches:

- the main branch of the chrome version is `master`
- chrome-specific changes go to `master` (or to feature branches which are merged to master later)
- the `upstream` branch tracks the latest stable upstream version
- to pull a new version:

        # only first time
        git remote add upstream git@github.com:hivewallet/hive-js.git
        git branch upstream --track origin/upstream

        git fetch upstream
        git checkout upstream
        git merge <whatever_is_the_latest_stable_tag>
        git push
        git checkout master
        git merge upstream
        # ... work through any merge conflicts, check if it works etc.
        git push

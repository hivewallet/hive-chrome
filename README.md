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


### Running the test suite

    # run both server and client tests
    DB_HOST=127.0.0.1 DB_PORT=5984 DB_USER=admin DB_PASSWORD=password COOKIE_SALT=secret npm test

    # just server
    DB_HOST=127.0.0.1 DB_PORT=5984 DB_USER=admin DB_PASSWORD=password COOKIE_SALT=secret npm run test-server

    # just client
    npm run test-client

### Testing deployment inside Vagrant

1. [Install Vagrant](http://www.vagrantup.com/downloads.html)
2. symlink the playbook file into place: `ln -s path/to/ansible/repo provisioners`
3. `vagrant up` or `vagrant reload --provision`

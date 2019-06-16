# Hedera Addon (Firefox) extension

## This is not an officially supported platform by Hedera Hashgraph. Keep that in mind when using this addon.

![CircleCI](https://img.shields.io/circleci/project/github/hashgraph/hedera-browser-extension/master.svg?label=circleci)

## Dependencies

```bash
# all dependencies in package.json
npm i
# keep prettier-stylelint separate
npm i -g prettier-stylelint
```

## Contributing / Development

tested on node version 9

```bash
npm run dev
```

## Install Firefox Addon

-   Navigate to about:debugging in Firefox
-   Click on 'Load Temporary Addon'
-   Go to folder

hedera-browser-extension/dist (dist folder is generated by webpack after you run npm run dev)

and click 'Select'

## License

Copyright (c) 2018-present, Hedera Hashgraph LLC.

Licensed under Apache-2.0

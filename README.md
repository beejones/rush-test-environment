## Report problem with project linking

This repository contains three projects.

"projects": [

    {
      "packageName": "@beejones/calculator-interface",
      "projectFolder": "libs/calculator-interface"
    },
    {
      "packageName": "@beejones/fancy-calculator",
      "projectFolder": "libs/fancy-calculator"
    },
    {
      "packageName": "@beejones/sample-package",
      "projectFolder": "libs/sample-package"
    }
   ]


PS C:\did1\rush-test-environment> rush update --full


Rush Multi-Project Build Tool 5.13.0 - https://rushjs.io
Node.js version is 12.13.1 (LTS)


Starting "rush update"

Trying to acquire lock for pnpm-2.15.1
Acquired lock for pnpm-2.15.1
Found pnpm version 2.15.1 in C:\Users\ronny\.rush\node-v12.13.1\pnpm-2.15.1

Symlinking "C:\did1\rush-test-environment\common\temp\pnpm-local"
  --> "C:\Users\ronny\.rush\node-v12.13.1\pnpm-2.15.1"

Updating temp projects in C:\did1\rush-test-environment\common\temp\projects
Finished creating temporary modules (0.05 seconds)

Checking node_modules in C:\did1\rush-test-environment\common\temp

Deleting: C:\did1\rush-test-environment\common\temp\rush-link.json

Running "pnpm install" in C:\did1\rush-test-environment\common\temp

Packages: +177
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Resolving: total 174, reused 174, downloaded 0, done
Updating C:\did1\rush-test-environment\common\config\rush\shrinkwrap.yaml

Linking projects together...

# LINKING: @beejones/calculator-interface
Purging C:\did1\rush-test-environment\libs\calculator-interface\node_modules

LINKING: @beejones/fancy-calculator
Purging C:\did1\rush-test-environment\libs\fancy-calculator\node_modules

LINKING: @beejones/sample-package
Purging C:\did1\rush-test-environment\libs\sample-package\node_modules
Writing "C:\did1\rush-test-environment\common\temp\rush-link.json"

Linking finished successfully. (1.24 seconds)

Next you should probably run "rush build" or "rush rebuild"

Rush update finished successfully. (8.71 seconds)
PS C:\did1\rush-test-environment>

# rush build will fail in FancyCalculator because calculator-interface is not found.

# calculator-interface is missing from rush-link.json

{
  "localLinks": {
    "@beejones/fancy-calculator": [
      "@beejones/calculator-interface"
    ],
    "@beejones/sample-package": [
      "@beejones/calculator-interface",
      "@beejones/fancy-calculator"
    ]
  }
}

# Tested environment
Visual code 1.40.2
Rush Multi-Project Build Tool 5.13.0 - https://rushjs.io
Node.js version is 12.13.1 (LTS)

## Install rush

npm install -g @microsoft/rush

rush install

## Build

rush build

## test with visual code

cd  libs\sample-package in terminal

npm run test


## debugging with visual code

open tests\Calculator.spec.ts in VS

Set breakpoint on test

Press F5


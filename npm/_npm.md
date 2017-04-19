# npm


- Install a package globally
```
npm install -g <package>
```
- Install a package locally
```
npm install <package>
```
- Install the most recent version
```
npm install <package>@latest
```
- Install an specific version
```
npm install <package>@1.x (1.xx.xx)
```
- Find a package
```
npm search <package>
```
- Package information
```
npm view <package>
```
- List of packages installed locally
```
npm ls
```
- List of packages installed globally
```
npm ls -g
```
- Outdated packages
```
npm outdated
```
- Updated a package
```
npm update <package>
```
- Uninstall a package
```
npm uninstall <package>
```
- Bugs information
```
npm bugs <package>
```

## package.json
- Create a package.json
```
npm init
```
- Save new dependencies
```
npm install <package> --save
```
- Save new dependencies in dev
```
npm install <package> --save -dev
```
- Save an specific version
```
npm install --save <package>@1.x
```
- Save the latest version
```
npm install --save <package>@latest
```
- Removing dependencies
```
npm uninstall <package> --save
```
- Installing the project dependencies
```
npm install
```
- Installing only in production
```
npm install --production
```
- Installing only in development
```
npm install --dev
```

## npm scripts

```json
"scripts": {
    "test": "npm -v",
    "start": "node -v",
    "hi": "echo 'Hello world!'"
}
```
- Shows all commands
```
npm run
```
- Executes the "test" command
```
npm test
```
- Executes the "start" command
```
npm start
```
- Executes the "hi" command
```
npm run hi 
```
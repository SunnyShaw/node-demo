## Node.js
### nvm
```
nvm ls-remote
```

```
nvm install --lts
```

```
nvm install node
```

### node
1.
```
npm init -y
```
或
```
yarn init -y
```

2.
[https://github.com/creationix/nvm/blob/master/README.md](https://github.com/creationix/nvm/blob/master/README.md)

3.模块
```
npm install request --save
```
```
yarn add request
```
4.nodemon自动重启

（1）安装
```
yarn add nodemon --dev
```

（2）自动重启
```
./node_modules/.bin/nodemon index.js
```

（3）在package.json中添加常用脚本命令，例如
```
"scripts": {
    "start": "./node_modules/.bin/nodemon index.js"
  },
```
然后在命令行工具中输入即可
```
npm start
```

## Mocha
```
npm install mocha --global
```

```
mkdir test
```

```
npm install mocha --save-dev
```

```
npm install chai --save-dev
```

* describle
* context
* it

* before
* after
* beforeEach
* afterEach
* assert

[http://nqdeng.github.io/7-days-nodejs/](http://nqdeng.github.io/7-days-nodejs/)

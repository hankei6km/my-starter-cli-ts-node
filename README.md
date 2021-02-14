# my-starter-cli-ts-node

npm 用パッケージ等を CLI x ts-node で試すためのスターター.

## 利用方法

1. GitHub から import する(GitHubBox からは https://githubbox.com/hankei6km/my-starter-cli-ts-node)
1. fork
1. `sandbox.config.json` を開き node のバージョンを必要とするものへ変更.
1. Server Control Panel を開き Restart Sandbox を実行.
1. 新しい terminal を開き `$ yarn upgrade-interactive` 等でパッケージを更新.

`src/index.ts を変更すると terminal(「yarn start」タブ) 内で実行されているスクリプトが再起動されるので、必要に応じて編集やパッケージの追加を行う.

## 環境

[hankei6km/CSB-IEFBR14](https://github.com/hankei6km/CSB-IEFBR14) に以下の操作を行って作成した.

パッケージ追加

```
$ yarn add --dev typesscipt
$ yarn add --dev ts-node
$ yarn add --dev nodemon
```

- `tsconfig.json` を追加.
- `nodemon.json` を追加.
- `package.json` の start script を変更.
- `package.json` に `"type": "module"` を追加.
- `src/index.ts` を追加
- その他、Sandbox info(`package.json`の`name`) の調整など.

## 既知の問題

- terminal に "ExperimentalWarning: --experimental-loader isan experimental feature. This feature could change at any time" が表示される:

## ライセンス

[CC0 1.0](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

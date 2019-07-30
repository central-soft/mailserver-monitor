# server-monitor

メールサーバの容量をCSVに吐いてるので、  
それを簡単に見れるようにした。

# Setup

### １．リポジトリクローン

```
git clone https://github.com/central-soft/mailserver-monitor.git
```

### ２．CSVファイルが参照できるように、本プロジェクト配下にシンボリックリンクを貼ってください。(開発中は実ファイルでOK)

```
root/
　├ data.csv (←シンボリックリンク)
　├ index.js
```

CSVは以下の形式です

```
date,space
2019-01-01,100
2019-01-02,200
・・・
```

### ３．依存モジュールインストール

```
npm install
```

# Usage

```
npm run start
```
[http://127.0.0.1:9000/](http://127.0.0.1:9000/)

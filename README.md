# Rails-SPA-Template
- RailsでSPAフロントエンドを開発するテンプレート
- `vite`、`React`、`React Router`、`tailwind CSS`、`Jest`を設定済み
- バックエンドとフロントエンドは同じサーバー（バックエンド統合）の構成
- HMR対応

## 導入
1. 作業用ディレクトリ作成、移動  
`mkdir rails-spa`  
`cd rails-spa`

1. テンプレートリソース取得、不要ファイル削除  
※テンプレートリポジトリに紐づく`.git`は不要なので削除する  
`git clone --depth 1 https://github.com/nkwtnb/Rails-SPA-Template . && rm -rf .git`

1. バックエンド側依存パッケージインストール  
`bundle install [--path vendor/bundle]`

1. フロントエンド側依存パッケージインストール  
`npm install`

1. リポジトリ初期化、作業開始👍  
`git init`

## フロントエンド開発
1. viteサーバー起動  
`npm run vite -- dev`  
`frontend/src/` 配下のソースの変更時に、viteのHMRによる開発が可能

1. 本番用ビルド  
`npm run build`  
以下のビルド、コンパイルを行う
   1. viteによるビルドを実行
      - viteのビルド結果は `/app/javascript/frontend/` に出力し、プリコンパイル対象とする
   1. Railsによるアセットプリコンパイルを実行
      - アセットプリコンパイルの結果は `public/assets/frontend` に出力される

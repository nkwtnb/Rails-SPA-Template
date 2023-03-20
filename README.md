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

1. リポジトリ初期化  
`git init`

1. コンテナ作成  
`docker-compose build`

1. コンテナ起動、作業開始👍  
`docker-compose up [-d]`
- バックエンド（Rails）側はファイルを更新すれば、それがそのまま適用される
- フロントエンド（React）側もviteによるHMRが有効になっている為、更新がそのまま適用される

## 本番用ビルド
1. TypeScriptのコンパイル、viteのビルド  
`npm run build`
   1. viteによるビルドを実行
      - viteのビルド結果は `/app/assets/frontend/` に出力し、プリコンパイル対象となる

1. Railsのアセットプリコンパイル  
`bundle exec rails assets:precompile RAILS_ENV=production`
   1. Railsによるアセットプリコンパイルを実行
      - アセットプリコンパイルの結果は `public/assets/frontend` に出力される

FROM ruby:3.1.2

# 必要なパッケージのインストール
RUN apt-get update -qq && apt-get install -y build-essential default-mysql-client nodejs npm
RUN npm install n -g
RUN n 16
# プロジェクトディレクトリを作成
RUN mkdir /myapp
WORKDIR /myapp

# プロジェクトディレクトリをコンテナ内にコピー
COPY . /myapp

# 必要なGemのインストール
#COPY Gemfile Gemfile.lock /myapp/
RUN gem install bundler && bundle install

# npm パッケージをインストールする
RUN npm install
RUN npm run build
## アプリをビルドする
#RUN npm run build

# MySQLのデータベース接続設定を追加
#COPY config/database.yml /myapp/config/database.yml

# entrypoint.shの設定
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# デフォルトで実行されるコマンド
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3000"]
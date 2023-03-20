FROM ruby:3.1.2

# 必要なパッケージのインストール
RUN apt-get update -qq && apt-get install -y build-essential default-mysql-client nodejs
# プロジェクトディレクトリを作成
RUN mkdir /myapp
WORKDIR /myapp

# プロジェクトディレクトリをコンテナ内にコピー
COPY . /myapp

# 必要なGemのインストール
#COPY Gemfile Gemfile.lock /myapp/
RUN gem install bundler && bundle install

# entrypoint.shの設定
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# デフォルトで実行されるコマンド
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3000"]
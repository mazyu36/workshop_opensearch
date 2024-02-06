# Amazon OpenSearch Service Intro Workshop

[Workshopのリンク](https://catalog.us-east-1.prod.workshops.aws/workshops/26c005b2-b387-454a-b201-9b8f37f92f92/ja-JP)

# デプロイ方法
OpenSearchダッシュボードはIPによるアクセス制限を行うため、接続元IPを明示的に許可する必要がある。

* アクセス元のグローバルIPを `http://checkip.amazonaws.com` で確認する。
* `export CLIENT_IP=確認したIP` で環境変数を設定。cdkで実装済みの Policy Statement に設定される。
* `cdk deploy`

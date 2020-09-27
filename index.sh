echo "ようこそ。このCLIを利用するために、以下の手順でbacklogのAPIキーを取得してください。"

echo ""

cat <<__EOT__
[APIキーの取得方法]
1. backlogにログインする
2. 画面の右上にある自分のアイコンをクリックし、「個人設定」を選択する
3. 「API」の設定で「新しいAPIキーを発行」にメモを入力して、「登録」ボタンをクリックする
4. 登録されたAPIキーの下部にAPIキーが追加されるので、それをコピーする
__EOT__

echo "上記が完了したら、取得したAPIキーを入力してください"
touch .env

read str
echo "API_KEY=${str}" >> .env
echo "APIキー ${str} を.envに書き込みました"

echo ""
echo "CLIを使う準備が整いました！"





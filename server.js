const express = require('express');

// expressアプリを生成する
const app = express();

app.use(express.static('view'));

app.post('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    const todoList = [
        { title: 'JavaScriptを勉強する', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIを作る', done: false }
    ];

    // JSONを送信する
    res.json(todoList);
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));
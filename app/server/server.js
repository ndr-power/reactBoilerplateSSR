import path from 'path';
import express from 'express';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);
app.get('/', (req, res) => {
    res.sendFile(indexPath);
});
app.get('/getUsers', (req, res) => {
    res.json({users: 20150});
});
app.listen(3001);
console.log("listening")
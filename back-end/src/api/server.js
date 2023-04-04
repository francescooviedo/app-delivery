require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3001;

console.log(`Api rodando na portaa ${port}`);

app.listen(port, () => console.log('ouvindo porta', port));
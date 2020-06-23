import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    console.log('Listagem de Usuarios');

    response.json([
        'CLaudio',
        'Cleiton',
        'Rodrigo',
        'Roberta'
    ]);
});

app.listen(3000)
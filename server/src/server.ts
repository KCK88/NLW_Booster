import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.listen(3000)

////Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar um ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma info no back-end
//DELETE: Remover uma info do back-end

//POST: http://localhost:3000/users = Criar um usuario
//GET: http://localhost:3000/users = Listar usuarios
//GET: http://localhost:3000/users/5 = Buscar dados do ID 5

//Request Param: Parâmetros que vem na rota que identificam um recurso
//Query Param: Parâmetros que vem na geralmente opicionais
// Request Body: 
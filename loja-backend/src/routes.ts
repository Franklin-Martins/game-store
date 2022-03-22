import { response, Router } from 'express';
import { Recommend } from './Providers/Recommend/implements/Recommend';
import { recommendGameController } from './Services/RecommendGame';

const routes = Router();

routes.get('/', (request, response)=>{
    response.send({VAI:"AMIGO"})
})

routes.get('/recommend', async (request, response)=>{
    return await recommendGameController.handle(request, response);
})

export default routes;
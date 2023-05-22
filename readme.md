## Instalation Steps
- Install Docker
- install docker-compose
- create .env on frontend folder, referrence from .env.example
- run command `./startProd.sh`

## note
- i am trying to make this code to not too overkill, so for data store, because there are no requirement for storing data, i will just using local data that populated from faker, and for backend port it should be always 3001
- for backend port, it will be statically set to 3001
- for frontend integration, you need to put backend url to REACT_APP_BACKEND_URL

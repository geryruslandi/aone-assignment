cat "./frontend/.env" > .env
docker-compose --env-file .env -f ./docker/docker-compose.yml -p "aone" down
docker-compose --env-file .env -f ./docker/docker-compose.yml -p "aone" build app_backend app_frontend
docker-compose --env-file .env -f ./docker/docker-compose.yml -p "aone" up -d app_backend app_frontend

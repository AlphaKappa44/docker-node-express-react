# START PROJECT ( inside the project folder )
## In the terminal:
``` bash 
npm install
``` 
then 
``` bash
npm run dev
```
OR
``` bash
nodemon -L api/app.js
```


# MAIN COMMANDS

***CHECK images***
``` bash
docker images
```
***Check all containers***
``` bash
docker ps -a
```
***Check only running containers***
``` bash
docker ps
```
***START existing container***
``` bash
docker start container_name
```
***STOP existing container***
``` bash
docker stop container_name
```

***DELETE image***
``` bash
docker image rm image_name
```

***DELETE container***
``` bash
docker container rm container_name
```

***!!! DELETE everything !!!***
``` bash
docker system prune -a
```

***Create an IMAGE***
``` Bash
docker build -t imagename:nodemon .
```

***Instanciate a CONTAINER (on port 4000, remove container when finished :with_named_version)***
``` Bash
docker run --name container_name -p 4000:4000 --rm imagename:v1
```

# ***VOLUMES***
``` Bash
docker run --name container_name -p 4000:4000 --rm -v /home/alexandre/Desktop/CODE/COURSES/The_Net_Ninja/docker-node-express/api:/app -v /app/node_modules imagename:v1
```

# ***DOCKER COMPOSE***
( FROM THE ROOT DIRECTORY )
*** START DOCKER COMPOSE ***
``` Bash
docker compose up
```

( BACK FROM THE FOLDER DIRECTORY )
*** STOP DOCKER COMPOSE ***
``` Bash
docker compose down
```

*** DELETE IMAGES CONTAINERS and VOLUMES from DOCKER COMPOSE ***
``` Bash
docker compose down --rmi all -v
```
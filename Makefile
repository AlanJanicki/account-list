containers-tool = docker-compose
dockerfile = -f docker-compose.yml
dev-dockerfile = -f docker-compose.dev.yml

build:
	${containers-tool} ${dockerfile} build

up:
	${containers-tool} ${dockerfile} up -d

up-dev:
	${containers-tool} ${dev-dockerfile} up --remove-orphans
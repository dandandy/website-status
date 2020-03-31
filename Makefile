all: build run

build:
	docker build -t website-status .

run:
	docker run -p 8080:8080 website-status

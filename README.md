# Gratitude Journal

A web-app for recording gratitudes  
![](https://github.com/matt-clarson/gratitude-journal/workflows/CI/badge.svg)

## Running the Application

### Production

To run the app in prodution:

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

This will start a database container, the service container, and the UI container.

### Development

To run the app for development, run one of the following commands, depending on what you want to do:

```bash
# in one terminal, to start the service and see its output
docker-compose run --service-ports service;
# and then in another terminal, to start the ui dev server
docker-compose run --service-ports --no-deps ui;

# or, you can just everything at once (for example to run cypress tests)
docker-compose run --service-ports ui;
```

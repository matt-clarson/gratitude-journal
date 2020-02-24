# Gratitude Journal

A web-app for recording gratitudes  
![](https://github.com/matt-clarson/gratitude-journal/workflows/CI/badge.svg)

## Running the Application

### Production

To run the app in prodution:

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml -e GJ_APP_BUILD=$(./print-build.sh) up
```

This will start a database container, the service container, and the UI container.

#### Volumes and Secrets

The following volumes and secrets will need to be provided:

| Name                         | Description                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| `/secrets/secret-key`        | The Django `SECRET_KEY` variable                                                          |
| `/secrets/postgres-password` | The password for the database                                                             |
| `/etc/letsencrypt`           | [LetsEncrypt!] will need to be installed on the target server to provide SSL certificates |
| `/data/.well-known`          | Required for [Certbot] to generate SSL certificates                                       |
| `/data/db`                   | The location the Postgres db file will be stored                                          |

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

[letsencrypt!]: https://letsencrypt.org/
[certbot]: https://certbot.eff.org/

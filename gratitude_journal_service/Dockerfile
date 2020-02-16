FROM python:3.7.6-alpine3.10 AS base
ENV PYTHONUNBUFFERED 1

WORKDIR /server
COPY ./requirements.txt /server/
RUN apk add --no-cache bash && \
    apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    pip install -r requirements.txt --no-cache-dir && \
    apk --purge del .build-deps

FROM base AS prod_build
WORKDIR /server
COPY . /server
RUN pip install gunicorn --no-cache-dir

FROM prod_build AS service
WORKDIR /server
COPY . /server

EXPOSE 8000

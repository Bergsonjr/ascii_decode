# Ascii Encode/Decode

## Install

    npm install

## Run the app in development mode

    npm run dev

## Run the tests

    npm run tests

# API

## Encode

### Request

`POST /encode`

    curl --location --request POST 'http://localhost:3000/encode' \
    --header 'Content-Type: application/json' \
    --data-raw '{"text": "Monetizze"}'

### Response

    HTTP/1.1 200 OK
    Date: Tue, 05 Apr 2022 23:33:30 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json

    {
        "encoded": "10122122150161110101111177"
    }

## Decode

### Request

`POST /decode`

    curl --location --request POST 'http://localhost:3000/decode' \
    --header 'Content-Type: application/json' \
    --data-raw '{"encoded": "10122122150161110101111177"}'

### Response

    HTTP/1.1 200 OK
    Date: Tue, 05 Apr 2022 23:36:30 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json

    {
        "decoded": "Monetizze"
    }
# microservices

## Running the application

```
  git clone https://github.com/lucasGabrielDeAA/microservices
  cd microservices
  yarn

  // To run the gateway's layer
  cd packages/gateway && yarn dev

  // To run the user's layer
  cd packages/users && yarn dev
```

## Requests

Go to [localhost:3333](http://localhost:3333/users) - To retrieve informations via gateway's request
Go to [localhost:3334](http://localhost:3334/users) - To retrieve informations via user's direct request

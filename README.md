# "MoneyService" gRPC Client Example (Node)

This project contains a simple client in Node that uses the [numbers-protos library](https://github.com/jefferyshivers/numbers-protos) to make calls to the MoneyService gRPC service (implemented in Java [here](https://github.com/jefferyshivers/numbers-service)).

You can read the full tutorial for these examples [here](https://medium.com/@jefferyshivers/create-a-public-api-with-grpc-ade4a8bfd1fc).

## Run the example

You'll need [Node](https://nodejs.org/en/) and [protop](https://protop.io). You'll also need an implementation of the `MoneyService` running at `localhost:8080`.

Install with:
```bash
yarn install
```

and then you can run the script:
```bash
node .
```

You should get a console output similar to the following:
```bash
Original: 7.3406037480265685 USD
Converted: 5.33649466631217 MXN
```

const PROTO_PATH = __dirname + '/.protop/path/awesomelabs/numbers/money.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  { keepCase: true, enums: String });

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const numbers = protoDescriptor.awesomelabs.numbers;
const moneyServiceStub = new numbers.MoneyService(
  "localhost:8080",
  grpc.credentials.createInsecure());

const originalMoney = {
  currency: "USD",
  units: Math.random() * 10
};
const targetCurrency = "MXN";
const convertMoneyRequest = {
  original: originalMoney,
  target_currency: targetCurrency
};

moneyServiceStub.convert(convertMoneyRequest, (err, result) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Original: ${originalMoney.units} ${originalMoney.currency}`)
    console.log(`Converted: ${result.units} ${result.currency}`)
  }
});

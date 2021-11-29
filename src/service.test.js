const Service = require("./service");
const sinon = require("sinon");
const DEFAULT_URL_1 = "https://swapi.dev/api/planets/3/";
const DEFAULT_URL_2 = "https://swapi.dev/api/planets/4/";
const mocks = {
  yavin: require("./mocks/yavin_IV.json"),
  hoth: require("./mocks/hoth.json"),
};
(async () => {
  const service = new Service();
  const stubs = sinon.stub(service, service.makeRequest.name);
  stubs.withArgs(DEFAULT_URL_1).resolves(mocks.yavin);
  stubs.withArgs(DEFAULT_URL_2).resolves(mocks.hoth);

  const result = await service.makeRequest(DEFAULT_URL_1);
  console.log(result);
})();

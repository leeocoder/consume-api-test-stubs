const Service = require("./service");
const assert = require("assert");
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

  {
    const result = await service.getPlanets(DEFAULT_URL_1);
    const expected = { name: "Yavin IV", surfaceWater: "8", appearedIn: 1 };
    assert.deepStrictEqual(result, expected);
  }
  {
    const result = await service.getPlanets(DEFAULT_URL_2);
    const expected = { name: "Hoth", surfaceWater: "100", appearedIn: 1 };
    assert.deepStrictEqual(result, expected);
  }
})();

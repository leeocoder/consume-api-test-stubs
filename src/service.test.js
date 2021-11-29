const Service = require("./service");
const DEFAULT_URL_1 = "https://swapi.dev/api/planets/3/";
const DEFAULT_URL_2 = "https://swapi.dev/api/planets/4/";
(async () => {
  const service = new Service();
  const result = await service.makeRequest(DEFAULT_URL_2);
  console.log(JSON.stringify(result));
})();

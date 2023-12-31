import { generateModuleProtos, protoBuild } from '@appstack-io/proto';

(async () => {
  await protoBuild({
    projectDir: `${__dirname}`,
    protoDir: `src`,
    exclude: ['/tests/', 'combined'],
    combinedName: 'combined',
    clientDir: 'client',
    hostMappings: {},
  });
  generateModuleProtos(`${__dirname}/src/main/components`, []);
})();

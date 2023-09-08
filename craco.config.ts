import path from 'path';

const resolvePath = (p: any) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@entities': resolvePath('./src/entities/index.ts'),
      '@features': resolvePath('./src/features'),
      '@layouts': resolvePath('./src/layouts'),
      '@icons': resolvePath('./src/shared/icons'),
      '@ui': resolvePath('./src/shared/ui'),
      '@models': resolvePath('./src/shared/api/models'),
      '@hooks': resolvePath('./src/shared/hooks'),
      '@services': resolvePath('./src/shared/api/services'),
      '@config': resolvePath('./src/shared/api/config'),
    },
  },
};

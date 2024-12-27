module.exports = {
    apps: [
      {
        name: 'kodenest',
        script: 'npm',
        args: 'start',
        cwd: '/home/kodenest/htdocs/kodenest.com',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
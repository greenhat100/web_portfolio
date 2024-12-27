module.exports = {
    apps: [
      {
        name: 'nextjs-app',
        script: 'node_modules/.bin/next',
        args: 'start',
        cwd: '/', // Specify the root directory as the current working directory
        instances: 'max',
        exec_mode: 'cluster',
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
      },
    ],
  };
module.exports = {
  apps: [
    {
      name: "SYSTEMAR-APP",
      cwd: "/var/www/systemar/client",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};

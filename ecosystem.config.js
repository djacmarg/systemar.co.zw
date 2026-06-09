module.exports = {
  apps: [
    {
      name: "SYSTEMAR-CO-ZW-APP",
      cwd: "/var/www/systemar.co.zw/client",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};

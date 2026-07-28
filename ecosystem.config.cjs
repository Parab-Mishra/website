module.exports = {
  apps: [
    {
      name: "personal-website",
      cwd: "/home/ubuntu/website/current",
      script: "server.js",
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};

# Federted App Shell

This is a simple demo of webpack module federation implemented on a trivial appshell + search + property details + favorites Mono-Repo based on the excellent work of [Zack Jackson](https://github.com/ScriptedAlchemy) and others.

# Run Demo Locally

## Optional: Federated Dashboard (requires Docker)

To run dashboard, run the following commands before starting the apps:

```sh
npm install
npm run docker:demo
```

## Start Apps

```sh
npm install
npm start
```

## View Apps

Open [http://localhost:3000](http://localhost:3000) to view federated dashboard

Open [http://localhost:3001](http://localhost:3001) to view app shell

Open [http://localhost:3002](http://localhost:3002) to view property details wrapped in federated app shell

Open [http://localhost:3003](http://localhost:3003) to view search wrapped in federated app shell

Open [http://localhost:3004](http://localhost:3004) to view favorites wrapped in federated app shell








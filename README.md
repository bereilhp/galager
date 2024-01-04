# Galager's Documentation

Visit Galager at: https://galager.vercel.app/

## What is Galager?

Galager is a free and open-source web app dedicated to learning JavaScript.

## Galager's Mission

Galager's mission is to empower individuals of all abilities to learn to code.

## Galager's Tech Stack

- Next.js 14 with app router
- MongoDB Atlas
- CSS Modules

## Run it locally

### Prerequisites

#### Node.js

Ensure that you have [Node.js](https://nodejs.org/en) version v20.9.0 installed (recommended to use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

After installation, verify the version:

```
node -v
```

#### MongoDB Atlas

To proceed, you need a free M0 cluster from MongoDB Atlas. If you don't have one, register [here](https://www.mongodb.com/cloud/atlas/register).

### Clone the repo

First clone the repo using the following command:

```
git clone https://github.com/bereilhp/galager
```

Navigate to the root directory:

```
cd galager/
```

### Run Galager

Change to my-app directory:

```
cd my-app/
```

### Check Node.js version

Ensure that you are using the correct Node.js version (v20.9.0). If you have nvm, run:

```
nvm use
```

### Create .env.local

Before running we need to create a .env.local file.

> **_NOTE:_** Create the file inside the my-app directory

```
touch .env.local
```

Open the .env.local file with your favorite IDE or text editor and paste the following text:

```
MONGO_URI=mongoAtlasUri
TOKEN_SECRET=jwtSecret
```

> **_NOTE:_** Change the MongoDB URI for your Atlas cluster, and you can add a random phrase or characters for the token secret, which is related to the JWT created for each user.

An example would be:

```
MONGO_URI=mongodb+srv://myuser:mypassword@clusterName.liovobq.mongodb.net/galager
TOKEN_SECRET=fsdjfjsdfjhsjdfshdfjkbwbbfgjgjbfgfgkjnfdgknajnjagnjagnjg
```

### Run Galager

Now you are ready to start galager with the following command:

```
npm run dev
```

It should be running on http://localhost:3000

## License

This project is licensed under the [MIT License](LICENSE)

## Contact

If you have any questions, please contact us at galagerOfficial@proton.me.

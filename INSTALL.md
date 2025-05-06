# Installation Guide

This guide provides instructions for installing and running the RainbowKit wallet connection demo.

## Prerequisites

- Node.js version 20 or higher
- npm or yarn package manager

## Installation

1. Ensure you're using Node.js version 20+:

```bash
# Check your Node.js version
node -v

# If needed, install or switch to Node.js 20+
# Using nvm (Node Version Manager):
nvm install 20
nvm use 20
```

2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

## Troubleshooting Installation Issues

If you encounter dependency conflicts, you can try the following:

### Option 1: Clear npm cache

```bash
npm cache clean --force
npm install
```

### Option 2: Use legacy peer dependencies flag

```bash
npm install --legacy-peer-deps
```

### Option 3: Use force flag

```bash
npm install --force
```

## Running the Application

After successful installation, you can run the application:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000). 
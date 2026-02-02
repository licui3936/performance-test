# Performance Test Suite - Ten Windows

A multi-platform performance testing application for launching and managing multiple windows across different desktop frameworks.

## Overview

This repository contains performance testing applications built for three different desktop platforms:
- **Electron** - Electron API
- **OpenFin** - Openfin workspace platform
- **Container** - OpenFin Core API implementation (without WorkspacePlatform)

Each implementation launches multiple windows and measures performance metrics.

## Prerequisites

- Node.js and npm installed
- Git (for cloning the repository)

## Installation

To install dependencies for all applications:

```bash
npm install
```

This will install dependencies for all three apps: OpenFin, Electron, and Container.

## Running Each Application

### Electron Application

The Electron implementation is a native desktop application.

**Run the application:**
```bash
npm run start-electron
```

The application will launch with a launcher window where you can configure and run performance tests.

### OpenFin Workspace Application

The OpenFin implementation uses the OpenFin Workspace platform.

**Install dependencies:**
```bash
cd OpenFin
npm run build
cd ..
```

**Start the development server:**
```bash
npm run server
```

The server will start on `http://localhost:3001`

**In a new terminal, run the application:**
```bash
npm run start-openfin
```

The application will connect to your local server and launch the OpenFin manifest.

### Container Application

The Container implementation uses OpenFin Core API (without WorkspacePlatform).


**Start the development server:**
```bash
npm run server
```

The server will start on `http://localhost:3001`

**In a new terminal, run the application:**
```bash
npm run start-container
```


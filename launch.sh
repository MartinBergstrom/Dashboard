#!/bin/bash

cd backend
echo "Launching backend..."
docker-compose up --build --detach

cd ..
cd frontend
echo "Launching frontend..."
docker-compose up --build --detach

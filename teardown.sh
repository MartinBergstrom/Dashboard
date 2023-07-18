#!/bin/bash

cd backend
echo "Stopping backend..."
docker-compose down

cd ..
cd frontend
echo "Stopping frontend..."
docker-compose down

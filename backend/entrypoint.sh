#!/bin/bash

# Initialize the migration repository if it doesn't exist
if [ ! -d "migrations" ]; then
  flask db init
  flask db migrate -m "Initial migration"
fi

# Run any pending migrations
flask db upgrade

exec "$@"
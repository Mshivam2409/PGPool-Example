## PGSQL Master/Slave Configuration Example

## Docker Compose

### Steps to Run

1. Docker Compose Up

```
docker-compose -f "docker-compose.yml" up -d --build
```

2. Create User by sending a POST Request to http://localhost:5000/signup

```json
{
  "username": "shivam",
  "password": "shivam"
}
```

3. Login by sending a POST Request to http://localhost:5000/login

```json
{
  "username": "shivam",
  "password": "shivam"
}
```

4. PG-0 Assumes the primary database role. If you stop the PG-0 container manually, then PG-1 will take up the primary role and steps 3 and 4 will still run.

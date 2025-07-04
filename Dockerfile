FROM cypress/included:13.17.0

# Sobrescreve o ENTRYPOINT para permitir shell script
ENTRYPOINT []

WORKDIR /app

COPY . .

RUN npm ci

CMD ["sh", "-c", "npm run cypress:run || true; npm run cypress:report"]

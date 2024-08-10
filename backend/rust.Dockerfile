FROM rust:1.80-alpine AS build

WORKDIR /app

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# REQUIRED: DEPENDENCIES
RUN apk add --no-cache musl-dev gcc

COPY . .

RUN cargo build -r

#Prod stage
FROM gcr.io/distroless/cc-debian10

WORKDIR /user/local/bin

COPY --from=build /app/target/release/backend .

CMD [ "./backend" ]
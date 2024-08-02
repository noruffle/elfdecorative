FROM rust:1.80 as build

RUN USER=root
WORKDIR /noruffle

COPY ./Cargo.lock ./Cargo.lock
COPY ./Cargo.toml ./Cargo.toml

RUN cargo build --release
RUN rm src/*.rs

COPY ./src ./src

RUN rm ./target/release/deps/noruffle*
RUN cargo build --release

FROM debian:buster-slim
COPY --from=build /noruffle/target/release/noruffle .
CMD ["./noruffle"]
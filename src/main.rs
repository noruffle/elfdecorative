use actix_web::*;
use controller::{get_api, home};
mod controller;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  HttpServer::new(
    || App::new()
      .service(home)
      .service(get_api)
  )
  .bind(("127.0.0.1", 8080))?
  .run()
  .await
}

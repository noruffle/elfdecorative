mod service;
mod controller;
mod interface;
mod module;

use module::*;
use service::get_home;

#[tokio::main]
async fn main() {
  let app = Router::new()
    .route("/", get(get_home))
  ;
  let listener = tokio::net::TcpListener::bind("0.0.0.0:9000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
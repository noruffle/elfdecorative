#[get("/api")]
pub async fn get_home() -> impl Responder {
  let response = Text {
    message: "Hello, Ruffle".to_string(),
  };

  HttpResponse::Ok().json(response)
}

use crate::*;
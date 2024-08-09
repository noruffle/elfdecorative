#[get("/api/image")]
pub async fn api_image() -> impl Responder {
  let response = Text {
    message: "Hello, Ruffle".to_string(),
  };

  HttpResponse::Ok().json(response)
}

use crate::*;
use crate::structs::struct_text::Text;
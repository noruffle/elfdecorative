use crate::*;

#[get("/")]
async fn home() -> impl Responder {
  HttpResponse::Ok().body("Hello world!")
}

#[get("/api")]
async fn get_api() -> impl Responder {
  HttpResponse::Ok().body("API")
}
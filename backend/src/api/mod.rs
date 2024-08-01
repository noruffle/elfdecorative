use http::Status;
use rocket::*;


#[get("/")]
pub fn index() -> &'static str {
  "Hello, world!"
}

#[get("/api")]
pub fn get_api() -> (Status, &'static str) {
  (Status::Ok, "API page")
}
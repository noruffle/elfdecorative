#[macro_use] extern crate rocket;

use rocket::serde::json::{serde_json::json, Json, Value};

#[get("/")]
fn index() -> Json<Value> {
  Json(json!({
    "name": "Ruffle"
  }))
}

#[launch]
fn rocket() -> _ {
  rocket::build().mount("/", routes![index])
}
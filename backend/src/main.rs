// External modules
#[macro_use] extern crate rocket;


// Local modules
mod api;

// Use modules
use api::*;

#[launch]
fn rocket() -> _ {
  rocket::build()
    .mount("/", routes![index])
    .mount("/api", routes![get_api])
}
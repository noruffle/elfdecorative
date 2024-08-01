#[macro_use] extern crate rocket;

mod api;

#[launch]
fn rocket() -> _ {
  rocket::build()
    .mount("/", routes![
      // defaults
      api::default::index,
      api::default::get_api,
    ])
}
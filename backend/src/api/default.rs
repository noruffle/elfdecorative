use rocket::http::Status;

#[get("/")]
pub async fn index() -> Status {
  Status::Ok
}

#[get("/api/data")]
pub async fn get_api() -> &'static str{
  "API page"
}
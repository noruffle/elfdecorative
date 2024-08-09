// Обработчик для маршрута /api/image
#[get("/api/image")]
pub async fn get_images() -> impl Responder {
  let image_store = ImageStore::load_from_file("image_array.json");

  match image_store {
      Ok(store) => HttpResponse::Ok().json(store),  // Возвращаем JSON
      Err(_) => HttpResponse::InternalServerError().body("Ошибка при загрузке изображений"),
  }
}

// TODO
#[post("/api/image")]
pub async fn post_image() -> impl Responder {
  let response = Text {
    message: "Hello, Ruffle".to_string(),
  };

  HttpResponse::Ok().json(response)
}

// TODO
#[delete("/api/image")]
pub async fn delete_image() -> impl Responder {
  let response = Text {
    message: "Hello, Ruffle".to_string(),
  };

  HttpResponse::Ok().json(response)
}

use crate::*;
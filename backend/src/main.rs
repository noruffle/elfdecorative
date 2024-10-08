use actix_web::{get, post, delete, App, HttpServer, Responder, HttpResponse};
use actix_cors::Cors;

use serde::{Deserialize, Serialize};

use std::fs::File;
use std::io::{BufReader, Write, Result};

use structs::image::{Image, ImageStore};
use structs::text::Text;

mod api;
mod structs;

#[actix_web::main]
async fn main() -> Result<()>{

  let image = Image {
    name: "carousel".to_string(),
    path: "https://drive.google.com/u/0/drive-viewer/AKGpihbNi8GoXzw46dUt3-500m7uORO6kk6ytq2_4bSseYBPZE1eIDAKHWHLb3jrJufSGp5e4sxr_pFtHE3R9qmxBjyj213ItDbQsMQ=s1600-rw-v1".to_string()
  };

  let mut image_store = ImageStore::new();

  image_store.add_image(image);
  image_store.save_to_file("image_array.json")?;

  // Читаем ImageStore из JSON файла
  let loaded_image_store = ImageStore::load_from_file("image_array.json").unwrap();
  println!("Загруженные изображения: {:?}", loaded_image_store);
  
  // Определение маршрутов и запуск сервера
  HttpServer::new(move || {
    let cors = Cors::default()
      .allow_any_origin()
      .allow_any_method()
      .allow_any_header();
    
    App::new()
      .wrap(cors)

      .service(crate::api::home::get_home)

      .service(crate::api::image::get_images)
      .service(crate::api::image::post_image)
      .service(crate::api::image::delete_image)

  })
  .bind(("0.0.0.0", 8080))?
  .run()
  .await
}
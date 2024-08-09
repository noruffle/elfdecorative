use crate::*;

#[derive(Serialize, Deserialize, Debug)]
pub struct ImageStore {
    pub vector: Vec<Image>,
}

impl ImageStore {
  // Создание новой пустой коллекции изображений
  pub fn new() -> Self {
    ImageStore { vector: Vec::new() }
  }

  // Добавление изображения в коллекцию
  pub fn add_image(&mut self, image: Image) {
    self.vector.push(image);
  }

  // Сохранение коллекции изображений в JSON файл
  pub fn save_to_file(&self, file_path: &str) -> std::io::Result<()> {
    let json_data = serde_json::to_string_pretty(&self).unwrap();
    let mut file = File::create(file_path)?;
    file.write_all(json_data.as_bytes())?;
    
    Ok(println!("Все изображения сохранены в JSON-файл"))
  }

   // Загрузка коллекции изображений из JSON файла
  pub fn load_from_file(file_path: &str) -> Result<ImageStore> {
    let file = File::open(file_path).expect("Не удалось открыть файл");
    let reader = BufReader::new(file);
    let image_store = serde_json::from_reader(reader).expect("Ошибка при чтении JSON");
    
    Ok(image_store)
  }
}
/* ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### */
#[derive(Serialize, Deserialize, Debug)]
pub struct Image {
  pub name: String,
  pub path: String,
}

impl Image {
  pub fn create_image_json() -> std::io::Result<()> {
    let image = Image {
      name: "carousel".to_string(),
      path: "https://drive.google.com/u/0/drive-viewer/AKGpihbNi8GoXzw46dUt3-500m7uORO6kk6ytq2_4bSseYBPZE1eIDAKHWHLb3jrJufSGp5e4sxr_pFtHE3R9qmxBjyj213ItDbQsMQ=s1600-rw-v1".to_string()
    };

    // Serialize structure to json
    let json_data = serde_json::to_string_pretty(&image).unwrap();

    // Write data in JSON
    let mut file = File::create("image.json")?;
    file.write_all(json_data.as_bytes())?;

      Ok(println!("image added to JSON-file"))
  }

  pub fn read_image_json() -> Result<()> {
    // Opens file
    let file = File::open("image.json").expect("Can't open file");

    //
    let reader = BufReader::new(file);

    //
    let image: Image = serde_json::from_reader(reader).expect("Can't read file");

    Ok(println!("{:?}", image))
  }
}
